// intlayer.config.ts
import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,    // 'en'
      Locales.PORTUGUESE, // 'pt'
      // Add any other languages you need
    ],
    defaultLocale: Locales.ENGLISH,
  },
  // Ensure middleware settings are defined
  middleware: {
    prefixDefaultLocale: false, // No prefix for default locale URLs
    redirectToDefaultLocale: true, // Redirect to default locale if none specified
    cookieName: 'intlayer-locale',
  },
  // Optional: Specify content location if not using default
  content: {
    location: "./src", // Assuming your content files are in src directory
    extension: ".content.ts", // Using the .content.ts extension pattern
  }
};

export default config;