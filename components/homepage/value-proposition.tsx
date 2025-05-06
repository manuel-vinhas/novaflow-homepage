"use client"
import { Shield, Zap, ArrowUpRight } from 'lucide-react'
import { motion } from "motion/react"
import Link from 'next/link'

const challenges = [
  "Manual workflows that introduce human error and inconsistency",
  "Time-intensive tasks that create bottlenecks and delays",
  "Rising operational costs that impact profit margins",
  "Rigid systems that cannot scale with business growth",
  "Valuable human resources tied up in repetitive, low-value tasks"
]

const solutions = [
  "Automate complex processes with consistent, high-quality execution",
  "Operate 24/7 without fatigue or performance degradation",
  "Process and analyze vast amounts of information in real-time",
  "Adapt intelligently to changing business conditions",
  "Scale instantly to meet demand without proportional cost increases"
]

export default function ValueProposition() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white pb-2">
            Transforming Business Challenges into Opportunities
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Every business faces inefficiencies and bottlenecks that drain resources, time, and competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenge Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-gray-900 dark:bg-gray-900 text-white p-6">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-red-400" />
                <h3 className="text-xl font-semibold">The Challenge</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Traditional operational processes across all business functions are often hampered by:
              </p>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                      <span className="text-red-600 dark:text-red-400 text-sm font-medium">✕</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-600 dark:bg-blue-700 text-white p-6">
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-yellow-300" />
                <h3 className="text-xl font-semibold">The Solution</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With advances in AI and Large Language Models (LLMs), NovaFlow creates intelligent AI agents that:
              </p>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <motion.li
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 text-sm font-medium">✓</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Unique Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Unique Approach</h3>
          <p className="max-w-3xl mx-auto text-white/90">
            At NovaFlow, we don&apos;t offer generic AI solutions. We develop custom-tailored AI agents optimized for your 
            specific industry, business processes, and operational needs. Every solution is built from the ground up to 
            transform your unique challenges into competitive advantages.
          </p>
          <div className="mt-6 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <Link 
                href="/process" 
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium flex items-center gap-2"
              >
                Learn Our Process <ArrowUpRight className="h-4 w-4" />
              </Link> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}