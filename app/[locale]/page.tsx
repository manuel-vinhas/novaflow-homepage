// src/app/[locale]/page.tsx

"use client"; // Add this if your Home component directly uses useEffect or other client hooks

import { useEffect } from 'react';
import type { NextPageIntlayer } from "next-intlayer"; // Keep NextPageIntlayer as a type import
import { IntlayerClientProvider } from "next-intlayer"; // Import IntlayerClientProvider as a value
import { IntlayerServerProvider } from "next-intlayer/server";
// ... other imports
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

// Define the Home component's content.
// If Home uses client hooks like useEffect, it should be a Client Component.
// You can keep it as part of this file or move it to a separate client component file.
const HomePageContent = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = 'https://agencyanovaflow.com/chat-assets/my-chat-frontend.css';
        document.head.appendChild(link);

        const script = document.createElement("script");
        script.src = 'https://agencyanovaflow.com/chat-assets/'; // Original src was 'https://agencyanovaflow.com/chat-assets/' check if this is correct for the script itself
        script.dataset.clientName = "Novaflow";
        script.async = true;
        document.body.appendChild(script);

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
        // <PageWrapper> // You can use your PageWrapper here if it's still relevant
        <>
            {/* <BotPressChat /> */}
            {/* <NoiseOverlay /> */}
            <div className="flex flex-col justify-center items-center w-full">
                <HeroSection />
            </div>
            {/* Replace with your actual components */}
            <h2>Welcome to the Homepage!</h2>
            <p>This is where your components like ValueProposition, SideBySide, Usecases, etc., will go.</p>
            {/* <ValueProposition /> */}
            {/* <SideBySide /> */}
            {/* <Usecases /> */}
            {/* <Testimonials /> */}
            {/* <AboutUs /> */}
            {/* <MarketingCards /> */}
            {/* <Pricing /> */}
            {/* <AccordionComponent /> */}

        </>
        // </PageWrapper>
    );
};


// This is the main Page component for the route
const Page: NextPageIntlayer = async ({ params }) => {
    const { locale } = await params;

    return (
        <IntlayerServerProvider locale={locale}>
            <IntlayerClientProvider locale={locale}>
                <HomePageContent /> {/* Your actual page content component */}
            </IntlayerClientProvider>
        </IntlayerServerProvider>
    );
};

export default Page;