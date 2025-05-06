// intlayer.config.ts
import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,    // 'en'
      Locales.PORTUGUESE, // 'pt' - Add this for Portuguese
      // Add any other languages you need, e.g., Locales.FRENCH ('fr'), Locales.SPANISH ('es')
    ],
    defaultLocale: Locales.ENGLISH, // Or Locales.PORTUGUESE if that's your primary
  },
  // Optional: Specify where your content files are if not the default
  // content: {
  //   location: "./src/i18n", // Example: if you want to keep all content files in src/i18n
  //   extension: ".content.ts", // Default is .content.{json,ts,tsx,js,jsx,mjs,mjx,cjs,cjx}
  // },
  // Optional: Middleware settings for URL localization, cookie names, etc.
  // middleware: {
  //   prefixDefaultLocale: false, // e.g., /about instead of /en/about for default locale
  //   redirectToDefaultLocale: true,
  //   cookieName: 'intlayer-locale',
  // }
};

export default config;