// Provider.tsx
"use client";

import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";
// Try importing IntlayerProviderContent from react-intlayer
import { IntlayerProviderContent } from "react-intlayer";
import intlayerConfig from "../intlayer.config"; // Adjust path if needed

export default function Provider({ children }: { children: ReactNode }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  // Determine initial locale (this is a basic example, Next.js middleware will be more robust)
  const defaultLocaleFromConfig = intlayerConfig.internationalization.defaultLocale;

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <IntlayerProviderContent
        // The locale will typically be managed by Next.js middleware and Intlayer's context
        // You might pass a defaultLocale or let Intlayer determine it.
        // The `useLocale` hook from `next-intlayer` or `react-intlayer` will give the active locale.
        defaultLocale={defaultLocaleFromConfig}
      >
        {children}
      </IntlayerProviderContent>
    </ConvexProviderWithClerk>
  );
}