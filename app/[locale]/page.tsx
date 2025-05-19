// src/app/[locale]/page.tsx

"use client";

import { useEffect } from 'react';
import { IntlayerClientProvider } from "next-intlayer";
import { NextPageIntlayer } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

// Component imports
import { AccordionComponent } from "@/components/homepage/accordion-component";
import HeroSection from "@/components/homepage/hero-section";
import ValueProposition from "@/components/homepage/value-proposition";
import MarketingCards from "@/components/homepage/marketing-cards";
import Pricing from "@/components/homepage/pricing";
import SideBySide from "@/components/homepage/side-by-side";
import PageWrapper from "@/components/wrapper/page-wrapper";
import NoiseOverlay from "@/components/noiseOverlay";
import BotPressChat from "@/components/homepage/botPressChat";
import UseCases from "@/components/homepage/use-cases";
import Features from "@/components/homepage/features";
import Testimonials from "@/components/homepage/testimonials";
import AboutUs from "@/components/homepage/about-us";

// HomePageContent component with client-side functionality
const HomePageContent = () => {
    useEffect(() => {
        // Add BotPress chat script
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = 'https://agencynovaflow.com/chat-assets/my-chat-frontend.css';
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src = 'https://agencynovaflow.com/chat-assets/';
        script.dataset.clientName = "Novaflow";
        script.async = true;
        document.body.appendChild(script);

        // Cleanup function
        return () => {
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <PageWrapper>
            <BotPressChat />
            {/* <NoiseOverlay /> */}
            <div className="flex flex-col justify-center items-center w-full">
                <HeroSection />
            </div>
            <ValueProposition />
            <SideBySide />
            <UseCases />
            <Features />
            {/* <Testimonials /> */}
            {/* <AboutUs /> */}
            {/* <MarketingCards /> */}
            {/* <Pricing /> */}
            <AccordionComponent />
        </PageWrapper>
    );
};

// Main Page component with intlayer integration
const Page: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;

    return (
        <IntlayerServerProvider locale={locale}>
            <IntlayerClientProvider locale={locale}>
                <HomePageContent />
            </IntlayerClientProvider>
        </IntlayerServerProvider>
    );
};

export default Page;