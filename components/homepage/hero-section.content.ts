// src/components/homepage/hero-section.content.ts

import { t, type Dictionary } from "intlayer";

const heroSectionContent = {
  // Define a unique key for this component's content dictionary
  key: "hero-section",

  // The 'content' object holds all translatable strings for this component
  content: {
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
} satisfies Dictionary;

export default heroSectionContent;