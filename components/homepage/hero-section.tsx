// src/components/homepage/hero-section.tsx
"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button"; // Assuming path is e.g., "@/components/ui/button"
import { motion } from "framer-motion"; // Using framer-motion
import heroAnimationScript from "./heroAnimationScript"; // Ensure this file exists and exports a function
import React, { useEffect } from "react";
// Corrected import path for the client-side useIntlayer hook
import { useIntlayer } from "next-intlayer";

export default function HeroSection() {
  // Fetch translations using the unique key "hero-section".
  // `intlayer` will look up this key in its registered content.
  // The `content` object returned should directly contain the translated strings
  // for the current active locale (e.g., content.badge, content.heading).
  const content = useIntlayer("hero-section");

  useEffect(() => {
    // Ensure heroAnimationScript is a function before calling
    if (typeof heroAnimationScript === 'function') {
      heroAnimationScript();
    }
  }, []);

  // Add a loading state or check if content is available.
  // This is important because fetching content by key might be asynchronous
  // or could fail if the key isn't found or content isn't loaded yet.
  if (!content || Object.keys(content).length === 0) {
    // You can return a more sophisticated loading skeleton here
    return (
      <section className="relative w-full flex items-center justify-center py-20 md:py-32">
        <div>Loading Hero Section...</div>
      </section>
    );
  }

  return (
    <section className="relative w-full flex items-center justify-center py-20 md:py-32 overflow-hidden"> {/* Added overflow-hidden */}
      {/* Background gradient element */}
      <div className="gradient-bg absolute inset-0 z-0">
        {/* Your SVG or CSS for gradients would go here. Example: */}
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} aria-hidden="true">
          <defs>
            <radialGradient id="heroGradient" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" /> {/* blue-500 with opacity */}
              <stop offset="100%" stopColor="rgba(17, 24, 39, 0)" /> {/* dark:bg-gray-900 (example) with opacity */}
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGradient)" />
        </svg>
      </div>

      {/* Content container */}
      <div className="relative z-10 space-y-6 sm:space-y-8 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-fit rounded-full border border-blue-300 dark:border-blue-700 bg-blue-100 dark:bg-blue-900/60 px-4 py-1.5 mb-6 shadow-sm"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            <Sparkles className="h-4 w-4" />
            {/* Access translations directly from the content object */}
            <span>{content.badge}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white animate-gradient-x pb-2"
        >
          {content.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl lg:max-w-2xl mx-auto"
        >
          {content.subtitle1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl lg:max-w-2xl mx-auto"
        >
          {content.subtitle2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 sm:pt-8"
        >
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full px-8 py-3 h-auto text-base font-semibold shadow-lg transform hover:scale-105 transition-transform duration-150 ease-in-out w-full sm:w-auto"
            >
              {content.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
