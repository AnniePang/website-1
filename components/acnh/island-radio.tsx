"use client"

/**
 * Island Radio -- a click-to-play speaker in the corner of the page.
 *
 * LICENSING NOTE (important):
 * Animal Crossing's soundtrack is composed by Nintendo and is fully copyrighted.
 * None of it is used, bundled, streamed, or imitated note-for-note here.
 *
 * Instead this synthesises an ORIGINAL, generative ambient loop with the Web
 * Audio API -- soft marimba-ish plucks over a slow four-chord progression, a
 * low sine bass, and a filtered noise wash for surf. Every note is chosen at
 * runtime from the current chord's scale tones, so the output is different on
 * each listen and is not a fixed melody at all. There is no audio file.
 *
 * If you have a track you ARE cleared to use, drop it at the path in
 * CUSTOM_TRACK_SRC and it plays instead of the synth automatically.
 */

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Music, Pause, Volume2, VolumeX } from "lucide-react"

/** Optional user-supplied loop. Left absent by default; the synth is the fallback. */
const CUSTOM_TRACK_SRC = "/audio/island-loop.mp3"

const midiToHz = (midi: number) => 440 * Math.pow(2, (midi - 69) / 12)

/**
 * Four-bar progression in F major (Fmaj7 - Am7 - Dm7 - Bbmaj7). A chord
 * progression is not itself protectable expression, and no melody is fixed:
 * pitches are sampled per beat from the chord below.
 */
const PROGRESSION: { bass: number; scale: number[] }[] = [
  { bass: 41, scale: [65, 69, 72, 76, 77, 81, 84] }, // F  maj7
  { bass: 45, scale: [69, 72, 76, 79, 81, 84, 88] }, // Am 7
  { bass: 38, scale: [62, 65, 69, 72, 74, 77, 81] }, // Dm 7
  { bass: 46, scale: [70, 74, 77, 81, 82, 86, 89] }, // Bb maj7
]

const BEAT = 0.46 // seconds per beat -- unhurried, roughly 130bpm in half time
const BEATS_PER_BAR = 8

class IslandTune {
  private ctx: AudioContext
  private master: GainNode
  private tone: BiquadFilterNode
  private echo: DelayNode
  private surf: AudioBufferSourceNode | null = null
  private timer: number | null = null
  private beat = 0
  private nextBeatTime = 0

  constructor() {
    const Ctor: typeof AudioContext =
      window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    this.ctx = new Ctor()

    this.master = this.ctx.createGain()
    this.master.gain.value = 0
    this.master.connect(this.ctx.destination)

    // Gentle lowpass so the plucks stay soft rather than glassy.
    this.tone = this.ctx.createBiquadFilter()
    this.tone.type = "lowpass"
    this.tone.frequency.value = 2600
    this.tone.Q.value = 0.4
    this.tone.connect(this.master)

    // Cheap ambience: a short feedback delay in place of a reverb impulse.
    this.echo = this.ctx.createDelay(1)
    this.echo.delayTime.value = 0.28
    const echoGain = this.ctx.createGain()
    echoGain.gain.value = 0.26
    this.echo.connect(echoGain)
    echoGain.connect(this.echo)
    echoGain.connect(this.tone)
  }

  /** Soft plucked voice: two detuned triangles with a fast decay. */
  private pluck(midi: number, at: number, velocity: number) {
    const dur = 1.5
    const env = this.ctx.createGain()
    env.gain.setValueAtTime(0, at)
    env.gain.linearRampToValueAtTime(velocity, at + 0.012)
    env.gain.exponentialRampToValueAtTime(0.0001, at + dur)
    env.connect(this.tone)
    env.connect(this.echo)

    for (const detune of [-4, 4]) {
      const osc = this.ctx.createOscillator()
      osc.type = "triangle"
      osc.frequency.value = midiToHz(midi)
      osc.detune.value = detune
      osc.connect(env)
      osc.start(at)
      osc.stop(at + dur)
    }
  }

  /** Rounded sine bass on the bar. */
  private bass(midi: number, at: number) {
    const dur = BEAT * BEATS_PER_BAR * 0.9
    const env = this.ctx.createGain()
    env.gain.setValueAtTime(0, at)
    env.gain.linearRampToValueAtTime(0.14, at + 0.08)
    env.gain.exponentialRampToValueAtTime(0.0001, at + dur)
    env.connect(this.master)

    const osc = this.ctx.createOscillator()
    osc.type = "sine"
    osc.frequency.value = midiToHz(midi)
    osc.connect(env)
    osc.start(at)
    osc.stop(at + dur)
  }

  /** Looping filtered noise -- distant surf under everything. */
  private startSurf() {
    const seconds = 3
    const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * seconds, this.ctx.sampleRate)
    const data = buffer.getChannelData(0)
    let last = 0
    for (let i = 0; i < data.length; i++) {
      // Brown-ish noise: smoother and less hissy than white.
      last = (last + (Math.random() * 2 - 1) * 0.02) * 0.995
      data[i] = last
    }

    const src = this.ctx.createBufferSource()
    src.buffer = buffer
    src.loop = true

    const band = this.ctx.createBiquadFilter()
    band.type = "lowpass"
    band.frequency.value = 700

    const gain = this.ctx.createGain()
    gain.gain.value = 1.1

    // Slow swell so the wash breathes instead of sitting flat.
    const lfo = this.ctx.createOscillator()
    lfo.frequency.value = 0.07
    const lfoGain = this.ctx.createGain()
    lfoGain.gain.value = 0.45
    lfo.connect(lfoGain)
    lfoGain.connect(gain.gain)
    lfo.start()

    src.connect(band)
    band.connect(gain)
    gain.connect(this.master)
    src.start()
    this.surf = src
  }

  private scheduleBeat(beat: number, at: number) {
    const chord = PROGRESSION[Math.floor(beat / BEATS_PER_BAR) % PROGRESSION.length]
    const inBar = beat % BEATS_PER_BAR

    if (inBar === 0) this.bass(chord.bass, at)

    // Sparse, slightly random phrasing -- not every beat sounds.
    const density = inBar % 2 === 0 ? 0.85 : 0.4
    if (Math.random() < density) {
      const midi = chord.scale[Math.floor(Math.random() * chord.scale.length)]
      this.pluck(midi, at, 0.16 + Math.random() * 0.07)
    }

    // Occasional soft octave sparkle.
    if (Math.random() < 0.14) {
      const midi = chord.scale[Math.floor(Math.random() * chord.scale.length)] + 12
      this.pluck(midi, at + BEAT / 2, 0.07)
    }
  }

  private tick = () => {
    // Look ahead ~0.4s so scheduling jitter never causes audible gaps.
    while (this.nextBeatTime < this.ctx.currentTime + 0.4) {
      this.scheduleBeat(this.beat, this.nextBeatTime)
      this.beat++
      this.nextBeatTime += BEAT
    }
  }

  async start(volume: number) {
    if (this.ctx.state === "suspended") await this.ctx.resume()
    if (!this.surf) this.startSurf()
    this.nextBeatTime = this.ctx.currentTime + 0.12
    this.tick()
    this.timer = window.setInterval(this.tick, 90)
    this.master.gain.cancelScheduledValues(this.ctx.currentTime)
    this.master.gain.setValueAtTime(this.master.gain.value, this.ctx.currentTime)
    this.master.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 1.1)
  }

  stop() {
    if (this.timer !== null) {
      window.clearInterval(this.timer)
      this.timer = null
    }
    const now = this.ctx.currentTime
    this.master.gain.cancelScheduledValues(now)
    this.master.gain.setValueAtTime(this.master.gain.value, now)
    this.master.gain.linearRampToValueAtTime(0, now + 0.6)
  }

  setVolume(volume: number) {
    const now = this.ctx.currentTime
    this.master.gain.cancelScheduledValues(now)
    this.master.gain.setValueAtTime(this.master.gain.value, now)
    this.master.gain.linearRampToValueAtTime(volume, now + 0.2)
  }

  async dispose() {
    this.stop()
    this.surf?.stop()
    this.surf = null
    await this.ctx.close().catch(() => {})
  }
}

/** Hand-drawn stereo cabinet. Original artwork -- not a game asset. */
function SpeakerCabinet({ playing }: { playing: boolean }) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true" className="w-11 h-11">
      {/* cabinet */}
      <rect x="2" y="4" width="60" height="40" rx="8" fill="#c89b65" stroke="#966c3f" strokeWidth="2.5" />
      <rect x="6" y="8" width="52" height="32" rx="6" fill="#e0c298" opacity="0.55" />
      {/* cones */}
      {[19, 45].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="24" r="10" fill="#5c4630" stroke="#3f2f1e" strokeWidth="2" />
          <circle cx={cx} cy="24" r="4.5" fill="#8a6c4c" className={playing ? "animate-pulse" : undefined} />
        </g>
      ))}
      {/* power light */}
      <circle cx="32" cy="14" r="2.4" fill={playing ? "#6cc24a" : "#a08e5f"} />
      {/* dial */}
      <rect x="28" y="28" width="8" height="3" rx="1.5" fill="#8a6c4c" />
    </svg>
  )
}

export function IslandRadio() {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [source, setSource] = useState<"synth" | "file">("synth")

  const tuneRef = useRef<IslandTune | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const reduceMotion = useReducedMotion()

  const volume = muted ? 0 : 0.5

  // Nothing autoplays: browsers require a gesture, and unrequested audio is rude.
  const toggle = useCallback(async () => {
    if (playing) {
      tuneRef.current?.stop()
      audioRef.current?.pause()
      setPlaying(false)
      return
    }

    // Prefer a user-supplied track when one exists at CUSTOM_TRACK_SRC.
    if (!tuneRef.current && !audioRef.current) {
      let hasFile = false
      try {
        const res = await fetch(CUSTOM_TRACK_SRC, { method: "HEAD" })
        hasFile = res.ok
      } catch {
        hasFile = false
      }

      if (hasFile) {
        const el = new Audio(CUSTOM_TRACK_SRC)
        el.loop = true
        el.volume = volume
        audioRef.current = el
        setSource("file")
      } else {
        tuneRef.current = new IslandTune()
        setSource("synth")
      }
    }

    try {
      if (audioRef.current) {
        audioRef.current.volume = volume
        await audioRef.current.play()
      } else {
        await tuneRef.current?.start(volume)
      }
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }, [playing, volume])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
    else tuneRef.current?.setVolume(playing ? volume : 0)
  }, [volume, playing])

  useEffect(() => {
    return () => {
      void tuneRef.current?.dispose()
      audioRef.current?.pause()
    }
  }, [])

  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex items-end gap-2"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* Floating notes while it plays */}
      <AnimatePresence>
        {playing && !reduceMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute -top-14 right-8"
            aria-hidden="true"
          >
            {[0, 0.9, 1.8].map((delay) => (
              <motion.span
                key={delay}
                className="absolute text-leaf-600 dark:text-leaf-300"
                initial={{ y: 12, opacity: 0, x: 0 }}
                animate={{ y: -26, opacity: [0, 1, 0], x: [0, 8, -4] }}
                transition={{ duration: 2.7, repeat: Infinity, delay, ease: "easeOut" }}
              >
                <Music className="w-4 h-4" />
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mute toggle, revealed on hover/focus once playing */}
      <AnimatePresence>
        {expanded && playing && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={() => setMuted((m) => !m)}
            aria-pressed={muted}
            aria-label={muted ? "Unmute island radio" : "Mute island radio"}
            className="acnh-focus rounded-full border-2 border-slate-200 dark:border-slate-700 bg-cream dark:bg-slate-900 p-2.5 text-slate-700 dark:text-slate-200 shadow-[0_3px_0_0_rgba(140,115,60,0.3)] hover:bg-leaf-100 dark:hover:bg-slate-800 transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>
        )}
      </AnimatePresence>

      <button
        onClick={toggle}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        aria-pressed={playing}
        aria-label={playing ? "Stop island music" : "Play island music"}
        title={playing ? "Stop island music" : "Play island music"}
        className="acnh-focus group relative flex items-center gap-2 rounded-3xl border-2 border-wood-700 bg-wood-300 dark:bg-wood-500 px-3 py-2 shadow-[0_4px_0_0_#966c3f] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none"
      >
        <SpeakerCabinet playing={playing} />
        <span className="sr-only">
          {playing
            ? `Playing an original generative island loop${source === "file" ? " from a local track" : ""}`
            : "Play an original generative island loop"}
        </span>
        <span
          aria-hidden="true"
          className="grid place-items-center w-7 h-7 rounded-full bg-leaf-500 text-[#1f3d0d] shadow-[0_2px_0_0_#35701f]"
        >
          {playing ? <Pause className="w-3.5 h-3.5" /> : <Music className="w-3.5 h-3.5" />}
        </span>
      </button>
    </div>
  )
}
