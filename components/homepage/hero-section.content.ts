// src/components/homepage/hero-section.content.ts

import { t, type Dictionary } from "intlayer"; // Import t and the Dictionary type

// Define the content for the hero section using the keyed pattern
const heroSectionContent = {
  // Define a unique key for this component's content dictionary.
  // This key will be used in the component to fetch these translations.
  key: "hero-section",

  // The 'content' object holds all translatable strings for this component.
  content: {
    // Each item within 'content' uses the t() function to define
    // its translations for different languages.
    badge: t({
      en: "Jump to the next level",
      pt: "Passe para o próximo nível",
    }),
    heading: t({
      en: "Transform Your Business with Intelligent AI Agents",
      pt: "Transforme seu negócio com Agentes de IA Inteligentes",
    }),
    subtitle1: t({
      en: "NovaFlow provides specialized AI agent solutions that automate repetitive processes, optimize workflows, and significantly reduce operational costs.",
      pt: "A NovaFlow oferece soluções especializadas em agentes de IA que automatizam processos repetitivos, otimizam fluxos de trabalho e reduzem significativamente os custos operacionais.",
    }),
    subtitle2: t({
      en: "Automate customer support, streamline lead generation, and eliminate manual data analysis with our customized AI agents.",
      pt: "Automatize o suporte ao cliente, simplifique a geração de leads e elimine a análise manual de dados com nossos agentes de IA personalizados.",
    }),
    cta: t({
      en: "Chat with our AI assistant now",
      pt: "Converse agora com nosso assistente de IA",
    }),
  },
  // The 'satisfies Dictionary' part ensures that this object structure
  // conforms to the type expected by intlayer, providing type safety.
} satisfies Dictionary;

// Export the content object as the default export.
// Intlayer will typically discover or register this content based on its location or configuration.
export default heroSectionContent;
