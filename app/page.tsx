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
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-6">
                Data Scientist | Machine Learning Engineer | Product Manager
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
                UC Berkeley graduate with expertise in machine learning, data analysis, and product management.
                Experienced in developing AI solutions and data-driven insights for companies like Delta Air Lines,
                Amazon, Tesla, and Pfizer.
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

      {/* Experience Section (Moved before Projects) */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Professional Experience" subtitle="My work experience in the industry" />

          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-8"
          >
            {/* Experience 1 */}
            <motion.div variants={fadeIn("up", 0.3)}>
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
                          Developed supervised learning algorithms (logistic regression and support vector machines)
                          with an accuracy score of ~80% to train a Google BERT model that classifies documents based on
                          relevance to a user query.
                        </li>
                        <li>
                          Produced quantitative analysis and data visualizations on Jupyter Notebook in Python (with
                          libraries of NumPy and Pandas).
                        </li>
                        <li>
                          Analyzed and provided e-commerce and Internet entertainment/media space recommendations based
                          on Tableau dashboards.
                        </li>
                        <li>
                          Expected to implement proposed policy changes and increase customer satisfaction score by 20%
                          by Q4 2023.
                        </li>
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Experience 2 */}
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

            {/* Experience 3 */}
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
                          <CardTitle className="text-slate-900 dark:text-white">IT Operations Intern</CardTitle>
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

            {/* Experience 4 */}
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

            {/* Experience 5 */}
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
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Project 1: AI-Driven Cuneiform Translation */}
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
                    Developed a neural machine translation pipeline leveraging transformer models (T5, mT5, NLLB) and
                    custom RNN/Transformer architectures to translate 500k+ low-resource ancient cuneiform texts. and
                    custom RNN/Transformer architectures to translate 500k+ low-resource ancient cuneiform texts.
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
                    <li>Created scalable academic and public engagement interface</li>
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

            {/* Project 2: COPD Analysis */}
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

            {/* Project 3: Music Genre Classification System */}
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

            {/* Project 4: Fuel Logistics Planning Optimization */}
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

            {/* Project 5: Food Bank Distribution Analysis */}
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

            {/* Project 6: Elderly Care Innovation Startup Project */}
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

            {/* Project 7: Consulting Case Competition */}
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
              <TabsList className="grid w-full grid-cols-4 mb-8">
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
                  value="other"
                  className="data-[state=active]:bg-slate-800 data-[state=active]:text-white dark:data-[state=active]:bg-slate-700"
                >
                  Other
                </TabsTrigger>
              </TabsList>
              <TabsContent value="programming" className="mt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {["Python", "R", "SQL", "Java", "C++", "HTML/CSS", "JavaScript"].map((skill) => (
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
                  {["Scikit-Learn", "PyTorch", "TensorFlow", "Pandas", "NumPy", "NLP", "Computer Vision", "Deep Learning"].map(
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
                  {["PostgreSQL", "Amazon Quicksight", "MongoDB", "AWS", "Tableau", "Power BI"].map((skill) => (
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
                  {["Jira", "Confluence", "Git", "Docker", "Agile", "ETL", "Data Visualization"].map((skill) => (
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
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-md">
                      <Mail className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Email</p>
                      <a
                        href="mailto:anniepang@berkeley.edu"
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        anniepang@berkeley.edu
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
                        href="https://drive.google.com/file/d/1wl4t74C0diZKkinpreI0-o1gIVE6LWDB/view?usp=sharing"
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
                <Link href="mailto:anniepang@berkeley.edu" aria-label="Email">
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

