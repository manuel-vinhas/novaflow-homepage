"use client"
import { Sparkles } from 'lucide-react'
import { OrbitingCirclesComponent } from './orbiting-circles'
import { motion } from "motion/react"

// Define the steps from the mockup
const steps = [
  {
    number: 1,
    title: 'Consultation',
    description: 'We analyze your specific business needs and processes'
  },
  {
    number: 2,
    title: 'Development',
    description: 'Our team customizes AI agents for your specific use cases'
  },
  {
    number: 3,
    title: 'Integration',
    description: 'Simple implementation through our user-friendly platform'
  },
  {
    number: 4,
    title: 'Training',
    description: 'Your AI agents learn from your business data and knowledge base'
  },
  {
    number: 5,
    title: 'Deployment',
    description: 'Seamless integration with your existing systems'
  },
  {
    number: 6,
    title: 'Improvement',
    description: 'Ongoing optimization based on performance metrics'
  }
]

export default function SideBySide() {
  return (
    <section className="py-24 overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          {/* Left side content - OrbitingCircles on mobile & tablet, Steps on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-background/5 to-background/0 z-10"></div>
              <OrbitingCirclesComponent />
            </div>
          </motion.div>

          {/* Right side content - Steps on mobile & tablet, OrbitingCircles on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:pl-8 lg:pt-4 order-1 lg:order-2"
          >
            <div className="lg:max-w-lg">
              {/* Pill badge */}
              <div className="mb-6 w-fit rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 px-4 py-1">
                <div className="flex items-center gap-2 text-sm font-medium text-blue-900 dark:text-blue-200">
                  <Sparkles className="h-4 w-4" />
                  <span>Our Process</span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white pb-2">
                How It Works
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                Simple integration through our powerful AI platform
              </p>
              
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    key={step.number}
                    className="relative group hover:bg-white dark:hover:bg-gray-800/50 p-6 rounded-xl transition-colors shadow-sm hover:shadow-md"
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center mb-3">
                        <span className="flex items-center justify-center bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-full h-8 w-8 text-sm">
                          {step.number}
                        </span>
                        <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}