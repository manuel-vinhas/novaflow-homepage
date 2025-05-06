"use client"
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
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // ✅ Create and append the script dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = 'https://agencynovaflow.com/chat-assets/my-chat-frontend.css';
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://agencynovaflow.com/chat-assets/";
    script.dataset.clientName = "Novaflow"; // ✅ Set the custom attribute
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // ✅ Cleanup to avoid duplicate script loading
    };
  }, []);
  return (
    <PageWrapper>
      <BotPressChat/>
      {/* <NoiseOverlay/> */}
      <div className="flex flex-col justify-center items-center w-full">
        <HeroSection />
      </div>
      <ValueProposition />
      <SideBySide />
      <UseCases />
      <Features />
      {/* <Testimonials /> */}
      {/* <AboutUs /> */}
      {/*<MarketingCards />*/}
      {/*<Pricing />*/}
      <AccordionComponent />
      {/* BotPress Webchat Inject Script */}
    </PageWrapper>
  );
}