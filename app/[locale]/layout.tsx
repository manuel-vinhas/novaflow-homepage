// src/app/[locale]/layout.tsx

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Provider from "@/app/provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { NextLayoutIntlayer, getLocaleDirection } from 'next-intlayer';
export { generateStaticParams } from 'next-intlayer';

export const metadata: Metadata = {
  metadataBase: new URL("https://agencynovaflow.com/"),
  title: {
    default: 'Novaflow',
    template: '%s | Novaflow'
  },
  description:
    "The AI Agency that will make you perform insanely great!",
};

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  // Correctly await the params promise before destructuring
  const { locale } = await params;

  return (
    <ClerkProvider>
      <html lang={locale} dir={getLocaleDirection(locale)} suppressHydrationWarning>
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
};

export default LocaleLayout;