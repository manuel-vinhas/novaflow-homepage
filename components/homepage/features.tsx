"use client"
import { MessageSquare, Mic, BarChart3, Settings } from 'lucide-react'
import { motion } from "motion/react"
import Link from 'next/link'

// Define the color type to restrict possible values
type FeatureColor = 'blue' | 'indigo' | 'purple' | 'emerald';

// Define the feature type
type Feature = {
  icon: React.ElementType;
  title: string;
  capabilities: string[];
  color: FeatureColor;
  link: string;
};

// Define the features from the mockup with "Custom Solutions" replacing "NovaFlow Platform"
const features: Feature[] = [
  {
    icon: MessageSquare,
    title: "NovaFlow Chat AI",
    capabilities: [
      "Natural language understanding with contextual awareness",
      "Multi-language support",
      "Knowledge base integration",
      "Sentiment analysis and emotional intelligence",
      "Seamless human handoff when needed"
    ],
    color: "blue",
    link: "/solutions/chat-ai"
  },
  /* {
    icon: Mic,
    title: "NovaFlow Voice AI",
    capabilities: [
      "Natural-sounding speech with human-like intonation",
      "Real-time response generation",
      "Accent and language customization",
      "Call summarization and action item extraction",
      "Integration with CRM and sales platforms"
    ],
    color: "indigo",
    link: "/solutions/voice-ai"
  },
  {
    icon: BarChart3,
    title: "Data Intelligence Suite",
    capabilities: [
      "Custom machine learning models for classification and regression",
      "Predictive analytics capabilities",
      "Automated report generation",
      "Anomaly detection",
      "Trend identification and forecasting"
    ],
    color: "purple",
    link: "/solutions/data-intelligence"
  }, */
  {
    icon: Settings,
    title: "Custom Agents Solutions",
    capabilities: [
      "Tailored AI workflows for industry-specific challenges",
      "Specialized agents for unique business processes",
      "Domain-specific knowledge integration",
      "Custom data processing pipelines",
      "Bespoke analytics and reporting dashboards"
    ],
    color: "emerald",
    link: "/solutions/custom"
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white pb-2">
            Our AI Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Powerful technologies custom-built for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const colorClasses = {
              blue: "bg-blue-50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800",
              indigo: "bg-indigo-50 border-indigo-200 dark:bg-indigo-900/10 dark:border-indigo-800",
              purple: "bg-purple-50 border-purple-200 dark:bg-purple-900/10 dark:border-purple-800",
              emerald: "bg-emerald-50 border-emerald-200 dark:bg-emerald-900/10 dark:border-emerald-800"
            };

            const iconColors = {
              blue: "text-blue-600 dark:text-blue-400",
              indigo: "text-indigo-600 dark:text-indigo-400",
              purple: "text-purple-600 dark:text-purple-400",
              emerald: "text-emerald-600 dark:text-emerald-400"
            };

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300`}
              >
                <div className="mb-4 flex items-center">
                  <div className={`p-3 rounded-lg ${colorClasses[feature.color]}`}>
                    <feature.icon className={`h-6 w-6 ${iconColors[feature.color]}`} />
                  </div>
                  <h3 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">{feature.title}</h3>
                </div>

                <ul className="space-y-3 mt-6">
                  {feature.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`inline-flex items-center justify-center rounded-full h-5 w-5 min-w-5 ${iconColors[feature.color]} mr-3 mt-0.5`}>
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">{capability}</span>
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={feature.link}
                    className={`text-sm font-medium ${iconColors[feature.color]} flex items-center`}
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div> */}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}