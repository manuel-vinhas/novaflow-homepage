// src/app/provider.tsx
"use client";

import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";
import { IntlayerProvider } from "react-intlayer";
import intlayerConfig from "../intlayer.config";

export default function Provider({ children }: { children: ReactNode }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  // Get the default locale from config
  const defaultLocale = intlayerConfig.internationalization?.defaultLocale || 'en';

  return (
    <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
      <IntlayerProvider defaultLocale={defaultLocale}>
        {children}
      </IntlayerProvider>
    </ConvexProviderWithClerk>
  );
}