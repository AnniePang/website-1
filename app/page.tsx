"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Download, ExternalLink, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { SectionTitle } from "@/components/section-title"
import { fadeIn, staggerContainer } from "@/lib/animation"

export default function Home() {
  // Add smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault()
        const href = this.getAttribute("href")
        if (!href) return

        const targetElement = document.querySelector(href)
        if (!targetElement) return

        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        })
      })
    })
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={fadeIn("right", 0.3)} className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Annie Pang</h1>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-2">
                Business Intelligence Engineer | Data Engineer | Data Scientist | Machine Learning Engineer
              </p>
              <p className="text-base text-slate-500 dark:text-slate-400 mb-6">
                Product-minded analytics &amp; data platform builder · UC Berkeley M.A. in Information and Data Science
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
                Business Intelligence Engineer at Amazon owning end-to-end analytics and data platform work for Devices
                and Leo satellite-internet finance &mdash; defining KPIs, modeling Redshift datasets, operating ETL/ELT
                pipelines over 120M+ records, running experiments and statistical analysis, and shipping production ML
                and GenAI systems. Previously at Delta Air Lines, Tesla, and Pfizer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-slate-800 text-slate-800 hover:bg-slate-100 dark:border-slate-400 dark:text-slate-400 dark:hover:bg-slate-800 transition-all duration-300 transform hover:translate-y-[-2px]"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div variants={fadeIn("left", 0.5)} className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/headshot.jpeg"
                  alt="Annie Pang"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-[60px] dark:fill-slate-950 fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Role Tracks Section */}
      <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Role Tracks"
            subtitle="How my experience maps to Business Intelligence, Data Engineering, Data Science, and Machine Learning Engineering"
          />

          <motion.div
            variants={staggerContainer(0.1, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                abbr: "BIE",
                title: "Business Intelligence Engineer",
                delay: 0.3,
                summary:
                  "Own end-to-end analytics for Amazon Devices and Leo satellite-internet finance — defining and instrumenting KPIs, modeling reporting datasets, and automating Weekly Business Review reporting for senior leadership.",
                chips: [
                  "150+ KPIs across US, EU, and APAC",
                  "5+ self-serve QuickSight dashboards",
                  "70% reduction in ad-hoc data requests",
                  "100+ business stakeholders served",
                  "Dimensional modeling for reporting",
                  "Source-of-truth reconciliation",
                  "Offline model evaluation (Recall@k, Precision@k, F1)",
                  "SOX scoping determinations with audit partners",
                ],
              },
              {
                abbr: "DE",
                title: "Data Engineer",
                delay: 0.35,
                summary:
                  "Build and own production ETL/ELT pipelines and dimensional data models on AWS over 120M+ records — requirements through orchestration, data-quality monitoring, governance, and query performance tuning.",
                chips: [
                  "ETL/ELT on AWS Glue, S3, Redshift, Athena",
                  "Airflow DAG orchestration & idempotent partitioned refresh",
                  "Spark SQL on managed Spark/EMR",
                  "Star schema, fact/dimension, and SCD design",
                  "Redshift OLAP/MPP and Athena/Trino query optimization",
                  "Grain-mismatch reconciliation across upstream feeds",
                  "Reusable Glue job onboarding framework",
                  "SOX-scoped data governance and audit controls",
                  "CI/CD with staged promotion and rollback",
                ],
              },
              {
                abbr: "DS",
                title: "Data Scientist",
                delay: 0.4,
                summary:
                  "Turn 120M+ record datasets into decisions through randomized experiments, causal effect estimation, statistical modeling, and ML feature development — then translate results for non-technical leadership.",
                chips: [
                  "A/B testing and experimental design",
                  "Causal effect estimation from randomized experiments",
                  "Bayesian and frequentist GLMs",
                  "Hypothesis testing, regression, posterior inference",
                  "Offline model evaluation: Recall@k, Precision@k, F1",
                  "Holdout-set validation on a grocery recommender",
                  "30 features for Sponsored Ads ranking models",
                  "$1M+ cumulative campaign revenue impact",
                  "Berkeley M.A. in Information and Data Science",
                ],
              },
              {
                abbr: "MLE",
                title: "Machine Learning Engineer",
                delay: 0.45,
                summary:
                  "Build production ML systems — offline feature pipelines powering ad ranking models, offline model evaluation, transformer fine-tuning and model serving, and a production LLM agent with retrieval grounding.",
                chips: [
                  "Offline feature pipelines over 120M+ events",
                  "Offline model evaluation & holdout validation",
                  "Transformer fine-tuning (T5, mT5, NLLB)",
                  "Custom BPE tokenizer training",
                  "FastAPI and Hugging Face model serving",
                  "Production LLM agent (Claude Code, 14 MCP servers)",
                  "Declarative agent specs & retrieval grounding",
                  "PyTorch, TensorFlow, Scikit-Learn",
                ],
              },
            ].map((track) => (
              <motion.div key={track.abbr} variants={fadeIn("up", track.delay)}>
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-slate-800 dark:bg-slate-700 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{track.abbr}</span>
                      </div>
                      <div>
                        <CardTitle className="text-slate-900 dark:text-white">{track.title}</CardTitle>
                        <CardDescription className="dark:text-slate-400">Qualified across this track</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{track.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {track.chips.map((chip) => (
                        <Badge
                          key={chip}
                          variant="outline"
                          className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300"
                        >
                          {chip}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section (Moved before Projects) */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Professional Experience" subtitle="My work experience in the industry" />

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {/* Experience 1 - Amazon Full-Time */}
            <motion.div variants={fadeIn("up", 0.3)}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-slate-100 dark:bg-slate-800">
                    <div className="relative h-48 md:h-full">
                      <Image src="/amazon new.png" alt="Amazon" fill className="object-contain p-4" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-slate-900 dark:text-white">Business Intelligence Engineer</CardTitle>
                          <CardDescription className="dark:text-slate-400">Amazon, Inc.</CardDescription>
                        </div>
                        <Badge className="w-fit bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                          Jan 2024 - Present
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>
                          Own end-to-end analytics for advertising and device-finance reporting &mdash; defining and
                          instrumenting 150+ KPIs across US, EU, and APAC, delivering 5+ self-serve AWS QuickSight
                          dashboards, and automating Weekly Business Review reporting for 100+ stakeholders including
                          senior leadership, cutting ad-hoc data requests by 70%.
                        </li>
                        <li>
                          Model and own production Redshift datasets for device inventory valuation, gathering
                          requirements from Finance stakeholders &mdash; replacing manual per-geography rate lookups with a
                          uniform cost-per-replacement framework and multi-level pricing fallback logic across 12 global
                          fulfillment centers and 6 geographic regions, cutting 48+ hours of manual calculation to minutes
                          and standardizing inventory cost logic across 120M+ records.
                        </li>
                        <li>
                          Design and operate end-to-end ETL/ELT pipelines on AWS (Glue, S3, Redshift, Athena) with
                          Airflow-based DAG orchestration and Spark SQL transforms on managed Spark/EMR &mdash; partitioned
                          idempotent refresh, joins pushed into Redshift MPP SQL, and staged CI/CD promotion with
                          automated beta/production validation and rollback.
                        </li>
                        <li>
                          Build offline feature pipelines powering Sponsored Ads ranking and targeting models &mdash;
                          engineering 30 features from purchase-history and browsing-behavior signals across 120M+
                          customer behavior events, contributing to a $1M+ cumulative increase in campaign revenue.
                        </li>
                        <li>
                          Own offline model evaluation supporting the data science team on a grocery product-recommendation
                          model built to increase basket size &mdash; Recall@k / Precision@k / F1 dashboards, holdout-set
                          validation, and the data-quality checks that narrowed 13,000 candidate search keywords to ~200
                          validated shopping intents cleared for A/B testing.
                        </li>
                        <li>
                          Reconcile grain mismatches across upstream feeds &mdash; diagnosed component- versus
                          terminal-level counting in delivery and returns data, then specified the upstream schema fix with
                          the source-system team for a join key missing on 74% of rows.
                        </li>
                        <li>
                          Build data-quality and lineage controls for SOX-scoped financial reporting &mdash; assertions
                          that block malformed loads and reconciliation against source-of-truth ledgers &mdash; own
                          production on-call, and drive SOX scoping determinations with audit and process partners.
                        </li>
                        <li>
                          Architect, deploy, and maintain a domain-specific LLM agent (Claude Code) for accounting across
                          Amazon&apos;s Devices and Leo satellite-internet businesses &mdash; authoring declarative agent
                          specs, integrating 14 MCP servers wrapping Redshift, ETL orchestration, and QuickSight, curating
                          an 18-document knowledge base for retrieval grounding across 10+ monthly financial reporting
                          processes, and automating multi-environment AWS credential workflows &mdash; cutting on-call
                          debugging 5 hours/month.
                        </li>
                        <li>
                          Build a reusable entrypoint and handler framework that standardizes how new reporting jobs
                          onboard to the shared Glue platform, and own the team&apos;s month-end pipeline recovery runbook.
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Experience 2 - Delta */}
            <motion.div variants={fadeIn("up", 0.35)}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-slate-100 dark:bg-slate-800">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/delta new.png"
                        alt="Delta Air Lines"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-slate-900 dark:text-white">Applied Research Intern</CardTitle>
                          <CardDescription className="dark:text-slate-400">Delta Air Lines, Inc.</CardDescription>
                        </div>
                        <Badge className="w-fit bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                          Jan 2023 - May 2023
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>
                          Designed and executed A/B tests and statistical analyses of passenger inflight experience data,
                          collaborating with vendors to evaluate product improvements; quantified investment priorities in
                          Python (NumPy, Pandas) and Tableau and presented insights to leadership that influenced UX
                          optimization &mdash; projecting a 20% increase in customer satisfaction and lifting satisfaction
                          scores 30%.
                        </li>
                        <li>
                          Built and evaluated supervised learning models (Logistic Regression and SVM) for BERT-based document
                          classification and Q&amp;A system for internal customer service, enabling natural language search
                          capabilities across 10K+ support documents.
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Experience 3 - Amazon Intern */}
            <motion.div variants={fadeIn("up", 0.4)}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-slate-100 dark:bg-slate-800">
                    
                    <div className="relative h-48 md:h-full">
                      <Image src="/amazon new.png" alt="Amazon" fill className="object-cover" />
                    </div>
                    

                  </div>
                  <div className="md:w-3/4">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-slate-900 dark:text-white">
                            Business Intelligence Engineer Intern
                          </CardTitle>
                          <CardDescription className="dark:text-slate-400">Amazon, Inc.</CardDescription>
                        </div>
                        <Badge className="w-fit bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                          May 2022 - Aug 2022
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>
                          Filtered 120 million data points with 30 attributes of customer behaviors and purchase history
                          from Amazon Go and Fresh &quot;Just Walk Out&quot; technology using SQL.
                        </li>
                        <li>
                          Created an automated ETL pipeline with a weekly schedule to extract and store metrics from the
                          Amazon Grocery API with AWS Redshift, AWS S3, and Athena.
                        </li>
                        <li>
                          Created 2 automated Tableau Dashboards with weekly refreshing schedules; Built a Tableau Data
                          Extract data pipeline in Cloud Server to ensure real-time monitoring.
                        </li>
                        <li>Expected to increase Amazon Grocery customer behavior KPIs by 15%.</li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Experience 4 - Tesla */}
            <motion.div variants={fadeIn("up", 0.5)}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-slate-100 dark:bg-slate-800">
                    <div className="relative h-48 md:h-full">
                      <Image src="/tesla.avif" alt="Tesla" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-slate-900 dark:text-white">
                            IT Operations Intern (Data &amp; Analytics)
                          </CardTitle>
                          <CardDescription className="dark:text-slate-400">Tesla, Inc.</CardDescription>
                        </div>
                        <Badge className="w-fit bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                          Sep 2021 - Apr 2022
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>
                          Provided IT asset inventory data analysis for the IT Asset Management Team; Generated
                          statistical reports and dashboards using SQL, increased team&apos;s reports&apos; efficiency by ~10% &
                          supported renewable energy investment ideas.
                        </li>
                        <li>
                          Built and provided back-end data filtering and analytics for IT finance data
                          pipeline/dashboard/website with Rest API and Python (Django, Jinja 2, Pyecharts).
                        </li>
                        <li>Produced visualizations on a website with animations displaying IT asset inventory.</li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Experience 5 - Pfizer */}
            <motion.div variants={fadeIn("up", 0.6)}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-slate-100 dark:bg-slate-800">
                    <div className="relative h-48 md:h-full">
                      <Image src="/pfizer.avif" alt="Pfizer" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-slate-900 dark:text-white">
                            Serialization Analyst (Data Science) Intern
                          </CardTitle>
                          <CardDescription className="dark:text-slate-400">Pfizer, Inc.</CardDescription>
                        </div>
                        <Badge className="w-fit bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                          May 2021 - Aug 2021
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>
                          Created and analyzed Tableau Dashboards on profit & loss, risk data (e.g. market size,
                          shipping dates, packaging levels).
                        </li>
                        <li>
                          Produced SQL queries on Aginity WorkBench to retrieve supply chain reports from shipping sites
                          across the enterprise.
                        </li>
                        <li>
                          Cleaned and transformed datasets containing over 500,000 data entries and 20 attributes from
                          the Global Supply team.
                        </li>
                        <li>
                          Implemented Splunk Machine Learning Toolkit with machine learning models KNN, Logistic,
                          Linear, Decision Tree, and picked a comprehensive and high accuracy model with an accuracy of
                          90% to update weekly data analysis & predictions.
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Experience 6 - Noble Profit */}
            <motion.div variants={fadeIn("up", 0.7)}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-900 dark:border-slate-800">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-slate-100 dark:bg-slate-800">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/sustainable.jpeg"
                        alt="Noble Profit"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-slate-900 dark:text-white">Software Engineer Intern</CardTitle>
                          <CardDescription className="dark:text-slate-400">
                            Noble Profit (Sustainable Energy Data Company)
                          </CardDescription>
                        </div>
                        <Badge className="w-fit bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                          Jul 2020 - Aug 2020
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                        <li>
                          Designed and delivered a new synonym-detection product based on competitor analysis and market
                          research.
                        </li>
                        <li>
                          Implemented an algorithm to find representative words from a website/Microsoft Word
                          document/PDF with Natural Language Processing (NLP) library Gensim.
                        </li>
                        <li>Built a web scraping and parsing pipeline with library Beautiful Soup.</li>
                        <li>
                          Built a Gradient Boosting Classifier with k-fold cross validation with an accuracy of 85%;
                          Created Dropbox data pipeline.
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Projects" subtitle="Highlighting my key technical work and research" />

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Project 1: Annie's Little Corner */}
            <motion.div variants={fadeIn("up", 0.3)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/little-corner.svg"
                    alt="Annie's Little Corner bilingual learning app"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Annie&apos;s Little Corner</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    My vibe-coded product &mdash; a five-minute nightly ritual for relearning
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    This is my vibe-coded passion project, and the inspiration is personal. After graduating and settling
                    into corporate work, I realized how fast I was losing the common knowledge I used to carry &mdash;
                    history, art, science. It started to make me feel &ldquo;dumb,&rdquo; and that feeling quietly drained
                    my motivation to study anything at all. So I built my own little corner: a calm place to spend five
                    minutes before bed relearning one thing.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    It is an English and Simplified Chinese editorial library of fact-checked cards across Art, Science,
                    and Literature, with focused discovery, search, saved cards, and reviewed progress kept device-local
                    &mdash; no account required. Still a work in progress.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Vibe Coded
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      TypeScript
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Bilingual UX
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Editorial AI
                    </Badge>
                  </div>
                  <p className="text-sm font-medium dark:text-white">Outcomes:</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 mt-1">
                    <li>Designed around a five-minute nightly ritual &mdash; one card, no streaks, no pressure</li>
                    <li>Publishing bilingual cards organized into 9 topic collections</li>
                    <li>Created responsive category, topic, flashcard, search, saved, and reviewed experiences</li>
                    <li>Built an agent-assisted editorial workflow with no runtime AI API or recurring model cost</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://annies-little-corner.vercel.app/"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Visit Little Corner</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 2: AI-Driven Cuneiform Translation */}
            <motion.div variants={fadeIn("up", 0.3)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/cunei new.jpeg"
                    alt="Cuneiform Translation Project"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">AI-Driven Cuneiform Translation</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    Neural machine translation for ancient texts
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Built an end-to-end training and serving pipeline over 500k+ low-resource ancient cuneiform texts
                    &mdash; corpus preprocessing, custom BPE tokenizer training, and transformer fine-tuning (T5, mT5,
                    NLLB) against RNN/Transformer baselines &mdash; then deployed the trained models via Hugging Face and
                    AWS behind a React/FastAPI inference interface.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      AWS
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      FastAPI
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Hugging Face
                    </Badge>
                  </div>
                  <p className="text-sm font-medium dark:text-white">Outcomes:</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 mt-1">
                    <li>Achieved baseline BLEU scores for low-resource language</li>
                    <li>Deployed models via AWS and Hugging Face</li>
                    <li>Created scalable academic and public engagement interface using React and Fast API</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://anniepang.github.io/CuneiformTranslationWebsite/"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 3: COPD Analysis */}
            <motion.div variants={fadeIn("up", 0.4)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/lung new.avif"
                    alt="COPD Analysis Project"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">COPD Analysis</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    Bayesian & Frequentist GLM and Random Forest
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Applied Bayesian and Frequentist GLMs, Random Forest, and causal inference techniques (Outcome
                    Regression, Inverse Propensity Weighting, and Matching) to CDC chronic disease data, demonstrating
                    strong statistical modeling and analytical skills.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Statistical Modeling
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Random Forest
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      GLM
                    </Badge>
                  </div>
                  <p className="text-sm font-medium dark:text-white">Outcomes:</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 mt-1">
                    <li>
                      Conducted comprehensive exploratory data analysis to visualize relationships between COPD
                      mortality rates, smoking prevalence, and demographic factors
                    </li>
                    <li>
                      Achieved prediction accuracy up to 97% using Random Forest regression with optimized feature
                      selection
                    </li>
                    <li>Performed rigorous causal inference analysis on tobacco control policies</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://0333307f-1cf8-4013-84ae-1d7ebfcf82a6.filesusr.com/ugd/a0044e_67cde1ae233e42c1b387f61c9a29ca7a.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 4: Music Genre Classification System */}
            <motion.div variants={fadeIn("up", 0.5)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/music.jpg"
                    alt="Music Genre Classification Project"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Music Genre Classification System</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    Advanced ML models for audio classification
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Engineered and evaluated 10 distinct machine learning models (KNN, Logistic Regression, Random
                    Forest, ANN, CNN, LSTM, CNN-LSTM hybrid, XGBoost, XGBoost-CNN hybrid, Transformer) for automated
                    music genre classification, achieving accuracy up to 62% on Spotify datasets with 10+ genre
                    categories.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Deep Learning
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      CNN
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      LSTM
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      XGBoost
                    </Badge>
                  </div>
                  <p className="text-sm font-medium dark:text-white">Outcomes:</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 mt-1">
                    <li>
                      Implemented comprehensive model optimization techniques including feature selection and
                      hyperparameter tuning
                    </li>
                    <li>
                      Performed in-depth model evaluation using confusion matrices, ROC curves, AUC scores, and
                      F1-scores
                    </li>
                    <li>Addressed challenges of bias and class imbalance in music classification datasets</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://docs.google.com/presentation/d/1VDODF3MUtu3QeF6HtbfnfgTS5IHzxWtmQ7AWqUHtHIQ/edit?usp=sharing"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 5: Fuel Logistics Planning Optimization */}
            <motion.div variants={fadeIn("up", 0.6)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/energy.jpeg"
                    alt="Fuel Logistics Planning Project"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Fuel Logistics Planning Optimization</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    Deep learning for military logistics networks
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Developed a deep learning model using Google&apos;s TensorFlow to optimize military fuel logistics
                    networks, enabling rapid assessment of candidate flow plans against risk factors that traditional
                    optimization methods struggle to accommodate.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      TensorFlow
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Deep Learning
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Monte Carlo
                    </Badge>
                  </div>
                  <p className="text-sm font-medium dark:text-white">Outcomes:</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 mt-1">
                    <li>
                      Implemented a complete data science pipeline including exploratory data analysis on
                      high-dimensional data
                    </li>
                    <li>Generated 72,000 training examples using Monte Carlo simulation</li>
                    <li>
                      Created an AI-powered decision support tool that evaluates logistics plans against uncertainty and
                      risk
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://0333307f-1cf8-4013-84ae-1d7ebfcf82a6.filesusr.com/ugd/a0044e_d1ed0888f49c41f694e076449b7fed56.pdf?index=true"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 6: Food Bank Distribution Analysis */}
            <motion.div variants={fadeIn("up", 0.7)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/food bank 2.jpg"
                    alt="Food Bank Distribution Analysis Project"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Food Bank Distribution Analysis</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    Geospatial analytics for food security
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Engineered comprehensive geospatial analytics with Tableau, integrating multiple datasets (Food Bank
                    distribution data, Census demographics, and web-scraped food resource locations) to identify
                    underserved communities and food swamps across Contra Costa and Solano counties.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Tableau
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Geospatial Analysis
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Web Scraping
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Data Pipeline
                    </Badge>
                  </div>
                  <p className="text-sm font-medium dark:text-white">Outcomes:</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 mt-1">
                    <li>Performed end-to-end data pipeline development including data cleaning and geocoding</li>
                    <li>Conducted spatial analysis to identify 56% of county census tracts as food swamps</li>
                    <li>Provided targeted recommendations for optimizing food bank resource allocation</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://0333307f-1cf8-4013-84ae-1d7ebfcf82a6.filesusr.com/ugd/a0044e_dee366e01d4940c784dac6488d0f3315.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 7: Elderly Care Innovation Startup Project */}
            <motion.div variants={fadeIn("up", 0.8)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/elderly.jpg"
                    alt="LuMate Elderly Care Project"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Elderly Care Innovation: LuMate</CardTitle>
                  <CardDescription className="dark:text-slate-400">AI-enhanced radar sensing solution</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Developed a comprehensive business model for an AI-enhanced radar sensing solution targeting the
                    $50B+ elderly care market, conducting detailed market analysis that identified a critical need among
                    54M elderly Americans with 30% increasing fall death rates.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Business Strategy
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Market Analysis
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Product Development
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      AI Solutions
                    </Badge>
                  </div>
                  <p className="text-sm font-medium dark:text-white">Outcomes:</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 mt-1">
                    <li>Developed a premium subscription service with 83.7% projected gross margin</li>
                    <li>Created a strategic go-to-market roadmap with multi-phased funding approach</li>
                    <li>Designed tiered pricing models ($49.99-$69.99/month) for multiple customer segments</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://0333307f-1cf8-4013-84ae-1d7ebfcf82a6.filesusr.com/ugd/a0044e_a8c0f9da5b094c46814de107f3204747.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 8: Consulting Case Competition */}
            <motion.div variants={fadeIn("up", 0.9)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/market.png"
                    alt="Consulting Case Competition Project"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Consulting Case Competition</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    International market expansion strategy
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Led comprehensive market analysis for international expansion of nutritional products into the
                    Korean market, identifying a target demographic of 20-39 year olds with potential reach of 4+
                    million consumers.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Market Analysis
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Financial Modeling
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      Strategy
                    </Badge>
                    <Badge variant="outline" className="bg-slate-100 dark:bg-slate-700 dark:text-slate-300">
                      International Business
                    </Badge>
                  </div>
                  <p className="text-sm font-medium dark:text-white">Outcomes:</p>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 mt-1">
                    <li>
                      Demonstrated that self-expansion would increase net income to $169M (conservative case) or $227M
                      (optimistic case) by year 5
                    </li>
                    <li>Projected growth rates exceeding 38% despite higher initial costs</li>
                    <li>Developed complete market entry strategy with detailed SWOT analysis and timeline</li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://0333307f-1cf8-4013-84ae-1d7ebfcf82a6.filesusr.com/ugd/a0044e_a63d0f35e260462393124069441aa618.pdf"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Skills" subtitle="Technical skills and tools I specialize in" />

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Tabs defaultValue="programming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto gap-1 mb-8">
                <TabsTrigger
                  value="programming"
                  className="data-[state=active]:bg-slate-800 data-[state=active]:text-white dark:data-[state=active]:bg-slate-700"
                >
                  Programming
                </TabsTrigger>
                <TabsTrigger
                  value="ml"
                  className="data-[state=active]:bg-slate-800 data-[state=active]:text-white dark:data-[state=active]:bg-slate-700"
                >
                  Machine Learning
                </TabsTrigger>
                <TabsTrigger
                  value="data"
                  className="data-[state=active]:bg-slate-800 data-[state=active]:text-white dark:data-[state=active]:bg-slate-700"
                >
                  Data Tools
                </TabsTrigger>
                <TabsTrigger
                  value="statistics"
                  className="data-[state=active]:bg-slate-800 data-[state=active]:text-white dark:data-[state=active]:bg-slate-700"
                >
                  Statistics
                </TabsTrigger>
                <TabsTrigger
                  value="other"
                  className="data-[state=active]:bg-slate-800 data-[state=active]:text-white dark:data-[state=active]:bg-slate-700"
                >
                  Other
                </TabsTrigger>
              </TabsList>
              <TabsContent value="programming" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {["Python", "R", "SQL", "Java", "C++", "HTML/CSS", "JavaScript", "TypeScript"].map((skill) => (
                    <Card
                      key={skill}
                      className="flex flex-col items-center justify-center p-4 h-32 hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform dark:bg-slate-800 dark:border-slate-700"
                    >
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-slate-700 dark:text-slate-300">
                            {skill.charAt(0)}
                          </span>
                        </div>
                        <p className="text-center font-medium text-slate-900 dark:text-white">{skill}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="ml" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {["Scikit-Learn", "PyTorch", "TensorFlow", "Pandas", "NumPy", "NLP", "Computer Vision", "Deep Learning", "LangChain", "Transformers / BERT", "Hugging Face", "Feature Engineering", "Random Forests", "Model Evaluation", "BPE Tokenizer Training", "FastAPI Model Serving", "Logistic Regression", "SVM"].map(
                    (skill) => (
                      <Card
                        key={skill}
                        className="flex flex-col items-center justify-center p-4 h-32 hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform dark:bg-slate-800 dark:border-slate-700"
                      >
                        <CardContent className="flex flex-col items-center justify-center p-0">
                          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-2">
                            <span className="text-xl font-bold text-slate-700 dark:text-slate-300">
                              {skill.charAt(0)}
                            </span>
                          </div>
                          <p className="text-center font-medium text-slate-900 dark:text-white">{skill}</p>
                        </CardContent>
                      </Card>
                    ),
                  )}
                </div>
              </TabsContent>
              <TabsContent value="data" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {["PostgreSQL", "Amazon Quicksight", "MongoDB", "AWS", "Tableau", "Power BI", "Apache Airflow", "AWS Step Functions", "Amazon Redshift", "Amazon Athena", "AWS Glue", "Spark SQL", "Athena / Trino", "Hive Metastore", "S3 Object Storage", "Matplotlib"].map((skill) => (
                    <Card
                      key={skill}
                      className="flex flex-col items-center justify-center p-4 h-32 hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform dark:bg-slate-800 dark:border-slate-700"
                    >
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-slate-700 dark:text-slate-300">
                            {skill.charAt(0)}
                          </span>
                        </div>
                        <p className="text-center font-medium text-slate-900 dark:text-white">{skill}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="statistics" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {["A/B Testing", "Experimental Design", "Causal Inference", "Hypothesis Testing", "Bayesian GLMs", "Regression Analysis", "Cohort Analysis", "Confidence Intervals", "KPI Definition", "Posterior Inference", "Credible Intervals", "Holdout Validation", "Recall@k / Precision@k"].map((skill) => (
                    <Card
                      key={skill}
                      className="flex flex-col items-center justify-center p-4 h-32 hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform dark:bg-slate-800 dark:border-slate-700"
                    >
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-slate-700 dark:text-slate-300">
                            {skill.charAt(0)}
                          </span>
                        </div>
                        <p className="text-center font-medium text-slate-900 dark:text-white">{skill}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="other" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {["Jira", "Confluence", "Git", "Agile", "ETL", "Data Visualization", "React", "Fast API", "CI/CD", "Data Modeling", "Next.js", "Dimensional Modeling", "SOX Data Governance", "MCP Tool Servers", "Production On-Call", "Linux / Shell", "Slowly Changing Dimensions", "Query Optimization", "Backfills", "Claude Code", "Declarative Agent Specs"].map((skill) => (
                    <Card
                      key={skill}
                      className="flex flex-col items-center justify-center p-4 h-32 hover:shadow-md transition-shadow duration-300 hover:-translate-y-1 transform transition-transform dark:bg-slate-800 dark:border-slate-700"
                    >
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-2">
                          <span className="text-xl font-bold text-slate-700 dark:text-slate-300">
                            {skill.charAt(0)}
                          </span>
                        </div>
                        <p className="text-center font-medium text-slate-900 dark:text-white">{skill}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Education" subtitle="My academic background" />

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-8"
          >
            <motion.div variants={fadeIn("up", 0.3)}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-slate-100 dark:bg-slate-700">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/i new.png"
                        alt="UC Berkeley"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-slate-900 dark:text-white">
                            University of California, Berkeley
                          </CardTitle>
                          <CardDescription className="dark:text-slate-400">
                            M.A. in Information and Data Science
                          </CardDescription>
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge className="w-fit bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                            Dec 2024
                          </Badge>
                          <span className="text-sm text-slate-600 dark:text-slate-400 mt-1">GPA: 3.9/4.0</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        Relevant coursework: Advanced Machine Learning, Natural Language Processing, Data Visualization,
                        Statistical Methods
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn("up", 0.4)}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-slate-100 dark:bg-slate-700">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src="/ucb.webp"
                        alt="UC Berkeley"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-slate-900 dark:text-white">
                            University of California, Berkeley
                          </CardTitle>
                          <CardDescription className="dark:text-slate-400">
                            B.A. in Data Science (Business and Industrial Analytics)
                          </CardDescription>
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge className="w-fit bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                            May 2023
                          </Badge>
                          <span className="text-sm text-slate-600 dark:text-slate-400 mt-1">GPA: 3.5/4.0</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        Relevant coursework: Data Structures, Machine Learning, Database Systems, Statistical Inference,
                        Data Analysis
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Blogs" subtitle="My thoughts and insights on data science topics" />

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Blog 1 */}
            <motion.div variants={fadeIn("up", 0.3)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/large language model.webp"
                    alt="LLM Blog"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">
                    How Do You Build a Large Language Model?
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    An in-depth exploration of the process behind building large language models, from data collection
                    to training and deployment.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://truera.com/ai-quality-education/generative-ai-overview/how-do-you-build-a-large-language-model/"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Blog 2 */}
            <motion.div variants={fadeIn("up", 0.4)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/rag.webp"
                    alt="RAG Blog"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">
                    Building and Evaluating RAGs with Query Planning
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    A comprehensive guide to building and evaluating Retrieval-Augmented Generation systems with
                    effective query planning strategies.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://truera.com/ai-quality-education/generative-ai-rags/building-and-evaluating-rags-with-query-planning/"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Blog 3 */}
            <motion.div variants={fadeIn("up", 0.5)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/agent.webp"
                    alt="Autonomous Agents Blog"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">
                    What are LLM-Powered Autonomous Agents?
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    An exploration of autonomous agents powered by large language models, their capabilities,
                    applications, and future potential.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://truera.com/ai-quality-education/generative-ai-agents/what-are-llm-powered-autonomous-agents/"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Blog 4 */}
            <motion.div variants={fadeIn("up", 0.6)}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div className="aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden relative">
                  <Image
                    src="/hall.webp"
                    alt="LLM Hallucination Blog"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">
                    What are the different ways in which LLMs hallucinate?
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    A detailed analysis of the various types of hallucinations in large language models, their causes,
                    and strategies to mitigate them.
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full group" asChild>
                    <Link
                      href="https://truera.com/ai-quality-education/generative-ai-rags/what-are-the-different-ways-in-which-llms-hallucinate/"
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Contact Me" subtitle="Get in touch for opportunities or collaborations" />

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeIn("right", 0.3)}>
              <Card className="h-full dark:bg-slate-800 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Send Me a Message</CardTitle>
                  <CardDescription className="dark:text-slate-400">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium dark:text-white">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400 transition-colors"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium dark:text-white">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium dark:text-white">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400 transition-colors"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium dark:text-white">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400 transition-colors"
                        placeholder="Your message..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300 transform hover:translate-y-[-2px]"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn("left", 0.3)}>
              <Card className="h-full dark:bg-slate-800 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Contact Information</CardTitle>
                  <CardDescription className="dark:text-slate-400">Alternative ways to reach me</CardDescription>
                  <Badge className="w-fit mt-2 bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                    Open to relocation anywhere in the US
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-md">
                      <Mail className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Email</p>
                      <a
                        href="mailto:annytianqipang@gmail.com"
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        annytianqipang@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-md">
                      <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/annie-pang"
                        target="_blank"
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        rel="noreferrer"
                      >
                        linkedin.com/in/annie-pang
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-md">
                      <Github className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">GitHub</p>
                      <a
                        href="https://github.com/AnniePang"
                        target="_blank"
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        rel="noreferrer"
                      >
                        github.com/AnniePang
                      </a>
                    </div>
                  </div>
                  <div className="pt-4 space-y-4">
                    <Button
                      variant="outline"
                      className="w-full flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 transform hover:translate-y-[-2px]"
                      asChild
                    >
                      <a
                        href="https://drive.google.com/file/d/1cEVE7GzTf-ElBc66c11qQ-QRwPH9q7lm/view?usp=sharing"
                        target="_blank"
                        download
                        rel="noreferrer"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download Resume</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 transform hover:translate-y-[-2px]"
                      asChild
                    >
                      <a
                        href="https://drive.google.com/file/d/1Ja8MYsm8xijl-5Tt1IgsvwTZbVwZsKTk/view?usp=sharing"
                        target="_blank"
                        download
                        rel="noreferrer"
                      >
                        <Download className="h-4 w-4" />
                        <span>下载 中文CV</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold">Annie Pang</h3>
              <p className="text-slate-400 mt-1">Data Scientist | Machine Learning Engineer | Product Manager</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/annie-pang" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/AnniePang" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:annytianqipang@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>© {new Date().getFullYear()} Annie Pang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

