// src/app/[locale]/layout.tsx

// ... other imports ...
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Provider from "@/app/provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import type { NextLayoutIntlayer } from 'next-intlayer';
import { getHTMLTextDir } from 'intlayer';
export { generateStaticParams } from 'next-intlayer';

// ... your metadata ...
export const metadata: Metadata = {
  metadataBase: new URL("https://agencynovaflow.com/"),
  title: {
    default: 'Novaflow',
    template: '%s | Novaflow'
  },
  description:
    "The AI Agency that will make you perform insanelly great! ",
};


const LocaleLayout: NextLayoutIntlayer = async ({
  children,
  params, // params is of type Promise<{ locale: Locales; }>
}) => {
  // Correctly await the params promise before destructuring
  const { locale } = await params; // <--- THE FIX IS HERE

  return (
    <ClerkProvider>
      <html lang={locale} dir={getHTMLTextDir(locale)} suppressHydrationWarning>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}

export default LocaleLayout;