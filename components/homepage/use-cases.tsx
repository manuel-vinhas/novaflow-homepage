"use client"
import { LightbulbIcon, TrendingUpIcon, FileTextIcon, CalendarIcon, UserPlusIcon, BarChartIcon } from 'lucide-react'
import { motion } from "motion/react"
import Link from 'next/link'

// Define color type to restrict possible values
type UseCaseColor = 'blue' | 'purple' | 'indigo' | 'green' | 'teal';

// Define use case type
type UseCase = {
  icon: React.ElementType;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  color: UseCaseColor;
  link: string;
  implemented: boolean;
};

// Define the case studies from the mockup
const useCases: UseCase[] = [
  {
    icon: LightbulbIcon,
    title: "Customer Support",
    challenge: "Managing high volume of repetitive customer inquiries across multiple channels",
    solution: "NovaFlow Chat and Voice AI agents handle unlimited simultaneous conversations",
    result: "85% reduction in response time, 40% cost savings, and 24/7 consistent support",
    color: "blue",
    link: "/case-studies/customer-support",
    implemented: true
  },
  {
    icon: CalendarIcon,
    title: "Meeting Scheduling",
    challenge: "Time lost in back-and-forth emails and calls to find meeting times",
    solution: "NovaFlow AI agent manages calendar invites, schedules meetings, and sends reminders",
    result: "75% reduction in scheduling time and 30% decrease in no-shows for appointments",
    color: "green",
    link: "/case-studies/meeting-scheduling",
    implemented: false
  },
  {
    icon: FileTextIcon,
    title: "Document Processing",
    challenge: "Manual processing of thousands of documents leads to errors, delays, and high labor costs",
    solution: "NovaFlow AI that extracts, classifies and routes information from documents like invoices and contracts",
    result: "97% accuracy in data extraction, 80% reduction in processing time, and 65% decrease in operational costs",
    color: "teal",
    link: "/case-studies/document-processing",
    implemented: false
  },
  {
    icon: TrendingUpIcon,
    title: "Sales Outreach",
    challenge: "Scaling personalized outreach to prospects while maintaining quality",
    solution: "NovaFlow AI that crafts personalized messages, follows up at optimal times, and qualifies interest",
    result: "210% increase in response rates and 45% more meetings booked with qualified prospects",
    color: "purple",
    link: "/case-studies/sales-outreach",
    implemented: false
  },
  {
    icon: UserPlusIcon,
    title: "Recruitment & Screening",
    challenge: "Efficiently reviewing thousands of applications while eliminating bias from hiring process",
    solution: "NovaFlow AI that screens resumes, conducts initial candidate assessments, and schedules interviews",
    result: "70% reduction in time-to-hire, 45% decrease in recruitment costs, and 38% improvement in candidate quality",
    color: "indigo",
    link: "/case-studies/recruitment-screening",
    implemented: false
  },
  {
    icon: BarChartIcon,
    title: "Data Analysis",
    challenge: "Making sense of large, complex datasets quickly",
    solution: "Custom-built machine learning models that process, analyze, and visualize data",
    result: "Analysis that once took weeks now completed in hours with actionable insights",
    color: "blue",
    link: "/case-studies/data-analysis",
    implemented: false
  }
]

export default function UseCases() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white pb-2">
            Real-World Applications
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how our AI agents transform businesses across industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const colorClasses = {
              blue: "bg-blue-50 border-blue-200 dark:bg-blue-900/10 dark:border-blue-800",
              purple: "bg-purple-50 border-purple-200 dark:bg-purple-900/10 dark:border-purple-800",
              indigo: "bg-indigo-50 border-indigo-200 dark:bg-indigo-900/10 dark:border-indigo-800",
              green: "bg-green-50 border-green-200 dark:bg-green-900/10 dark:border-green-800",
              teal: "bg-teal-50 border-teal-200 dark:bg-teal-900/10 dark:border-teal-800"
            };

            const iconColors = {
              blue: "text-blue-600 dark:text-blue-400",
              purple: "text-purple-600 dark:text-purple-400",
              indigo: "text-indigo-600 dark:text-indigo-400",
              green: "text-green-600 dark:text-green-400",
              teal: "text-teal-600 dark:text-teal-400"
            };

            return (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border ${colorClasses[useCase.color]} hover:shadow-lg transition-all duration-300 group flex flex-col h-full`}
              >
              <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg ${colorClasses[useCase.color]} group-hover:scale-110 transition-transform`}>
                      <useCase.icon className={`h-6 w-6 ${iconColors[useCase.color]}`} />
                    </div>
                    <h3 className="text-xl font-semibold ml-3 text-gray-900 dark:text-white">{useCase.title}</h3>
                  </div>
                  {!useCase.implemented && (
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400 font-medium whitespace-nowrap">
                      Coming Soon
                    </span>
                  )}
                </div>

                <div className="space-y-4 flex-grow">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Challenge:</p>
                    <p className="text-gray-600 dark:text-gray-400">{useCase.challenge}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Solution:</p>
                    <p className="text-gray-600 dark:text-gray-400">{useCase.solution}</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Result:</p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{useCase.result}</p>
                  </div>
                </div>

                {/* <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href={useCase.link}
                    className={`text-sm font-medium ${iconColors[useCase.color]} flex items-center`}
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