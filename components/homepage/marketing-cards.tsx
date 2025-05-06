"use client";
import { motion } from "motion/react";
import Image from "next/image";
import NextLink from 'next/link';  // Renamed to avoid naming conflict
import { ArrowUpRight } from "lucide-react";

const ProjectsData = [
  {
    id: 1,
    name: "Process Optimization",
    description:
      "Reduce manual workload with AI automation.",
    svg: `
<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
<circle cx="90" cy="90" r="90" fill="black"/>
</mask>
<g mask="url(#mask0_408_139)">
<circle cx="90" cy="90" r="87" fill="black" stroke="white" stroke-width="6"/>
<path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
<rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
</g>
<defs>
<linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
    `,
    url: "/solutions/process-optimization",
    color: "from-[#000000] to-[#3B3B3B]",
  },
  {
    id: 2,
    name: "Custom AI Solutions",
    description:
      "Tailor-made AI models for unique business needs",
    svg: `
      <svg viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8ZM77.1575 20.9877C77.1436 21.1129 77.0371 21.2066 76.9111 21.2066H63.7746C63.615 21.2066 63.4961 21.3546 63.5377 21.5087C64.1913 23.9314 66.1398 25.3973 68.7994 25.3973C69.6959 25.4161 70.5846 25.2317 71.3968 24.8582C72.1536 24.5102 72.8249 24.0068 73.3659 23.3828C73.4314 23.3073 73.5454 23.2961 73.622 23.3602L76.2631 25.6596C76.3641 25.7476 76.3782 25.8999 76.2915 26.0021C74.697 27.8832 72.1135 29.25 68.5683 29.25C63.1142 29.25 59.0001 25.4731 59.0001 19.7348C59.0001 16.9197 59.9693 14.559 61.5847 12.8921C62.4374 12.0349 63.4597 11.3584 64.5882 10.9043C65.7168 10.4502 66.9281 10.2281 68.1473 10.2517C73.6753 10.2517 77.25 14.1394 77.25 19.5075C77.2431 20.0021 77.2123 20.4961 77.1575 20.9877ZM63.6166 17.5038C63.5702 17.6581 63.6894 17.8084 63.8505 17.8084H72.5852C72.7467 17.8084 72.8659 17.6572 72.8211 17.5021C72.2257 15.4416 70.7153 14.0666 68.3696 14.0666C67.6796 14.0447 66.993 14.1696 66.3565 14.4326C65.7203 14.6957 65.149 15.0908 64.6823 15.5907C64.1914 16.1473 63.8285 16.7998 63.6166 17.5038ZM90.2473 10.2527C90.3864 10.2512 90.5 10.3636 90.5 10.5027V14.7013C90.5 14.8469 90.3762 14.9615 90.2311 14.9508C89.8258 14.9207 89.4427 14.8952 89.1916 14.8952C85.9204 14.8952 84 17.1975 84 20.2195V28.75C84 28.8881 83.8881 29 83.75 29H80C79.862 29 79.75 28.8881 79.75 28.75V10.7623C79.75 10.6242 79.862 10.5123 80 10.5123H83.75C83.8881 10.5123 84 10.6242 84 10.7623V13.287C84 13.3013 84.0116 13.3128 84.0258 13.3128C84.034 13.3128 84.0416 13.3089 84.0465 13.3024C85.5124 11.3448 87.676 10.2559 89.9617 10.2559L90.2473 10.2527Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
</svg>
      `,
    url: "/solutions/custom-ai",
    color: "from-[#007ACC] to-[#2F74C0]",
  },
  {
    id: 3,
    name: "Cost & Time Efficiency",
    description:
      "Save resources while improving output.",
    svg: `
    <svg
  viewBox="0 0 256 154"
  width="256"
  height="154"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid"
  >
  <defs
    ><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
      <stop stop-color="#2298BD" offset="0%"></stop>
      <stop stop-color="#0ED7B5" offset="100%"></stop>
    </linearGradient></defs>
  <path
    d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8ZM90.2473 10.2527C90.3864 10.2512 90.5 10.3636 90.5 10.5027V14.7013C90.5 14.8469 90.3762 14.9615 90.2311 14.9508C89.8258 14.9207 89.4427 14.8952 89.1916 14.8952C85.9204 14.8952 84 17.1975 84 20.2195V28.75C84 28.8881 83.8881 29 83.75 29H80C79.862 29 79.75 28.8881 79.75 28.75V10.7623C79.75 10.6242 79.862 10.5123 80 10.5123H83.75C83.8881 10.5123 84 10.6242 84 10.7623V13.287C84 13.3013 84.0116 13.3128 84.0258 13.3128C84.034 13.3128 84.0416 13.3089 84.0465 13.3024C85.5124 11.3448 87.676 10.2559 89.9617 10.2559L90.2473 10.2527Z" fill="white" style="fill:white;fill:white;fill-opacity:1;"/>
</svg>

    `,
    url: "/solutions/efficiency",
    color: "from-[#38BDF8] to-[#818CF8]",
  },
  {
    id: 4,
    name: "Scalable & Future-Proof",
    description:
      "AI solutions that grow with your business.",
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#fff" stroke-width="25" stroke-linecap="round" d="M208 128l-80 80M192 40L40 192"/></svg>
    `,
    url: "/solutions/scalability",
    color: "from-[#000000] to-[#3B3B3B]",
  },

];

export default function TechStack() {
  return (
    <section className="py-24 px-4">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-300 dark:to-white pb-2">
          Built with Cutting-Edge AI Technology
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Harness the power of advanced AI frameworks and the latest automation tools to drive efficiency, security, and scalability for your business.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {ProjectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              {/* Gradient Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
                <div
                  className={`h-full w-full bg-gradient-to-br ${project.color}`}
                ></div>
              </div>

              <div className="relative z-10">
                {/* Logo and External Link */}
                <div className="flex items-center justify-between mb-4">
                  <div className="relative w-10 h-10 flex items-center justify-center">
                    <div
                      className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full"
                      dangerouslySetInnerHTML={{ __html: project.svg }}
                    />
                  </div>
                  <NextLink
                    href={project.url}
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </NextLink>
                </div>

                {/* Content */}
                <NextLink href={project.url} className="block">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.description}
                    </p>
                  </div>
                </NextLink>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}