// src/middleware.ts
import { intlayerMiddleware } from "next-intlayer/middleware";
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { fetchQuery } from 'convex/nextjs';
import { NextResponse, type NextRequest, type NextFetchEvent } from 'next/server';
import { api } from './convex/_generated/api'; // Make sure this path is correct

// Route matcher for pages protected by Clerk authentication AND requiring an active subscription
const isSubscriptionProtectedRoute = createRouteMatcher([
  '/dashboard(.*)', // Example: all dashboard routes require a subscription
]);

// Route matcher for pages protected by Clerk authentication (general login)
const isClerkProtectedRoute = createRouteMatcher([
  '/dashboard(.*)', // All dashboard routes require login
  // Add other routes here that require login but not necessarily a subscription
]);

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  // --- 1. Intlayer Middleware ---
  const intlayerResponse = await intlayerMiddleware(req);
  
  // If intlayer is doing a redirect for localization, return immediately
  if (intlayerResponse) {
    const isRedirect = intlayerResponse.headers.has('location');
    const isRewrite = intlayerResponse.headers.has('x-middleware-rewrite');
    
    if (isRedirect || isRewrite) {
      return intlayerResponse;
    }
  }

  // --- 2. Clerk and Convex Middleware Logic ---
  const clerkAndConvexHandler = async (authScope: any, innerReq: NextRequest) => {
    const auth = authScope;

    // Subscription check for specific protected routes
    if (isSubscriptionProtectedRoute(innerReq)) {
      if (auth().userId) {
        const token = await auth().getToken({ template: "convex" });
        if (token) {
          try {
            const { hasActiveSubscription } = await fetchQuery(
              api.subscriptions.getUserSubscriptionStatus, {}, { token }
            );

            if (!hasActiveSubscription) {
              const pricingUrl = new URL('/pricing', innerReq.nextUrl.origin);
              return NextResponse.redirect(pricingUrl);
            }
          } catch (error) {
            console.error("Middleware: Error fetching Convex subscription status:", error);
          }
        } else {
          console.warn("Middleware: User logged in but no Convex token available for subscription check.");
        }
      }
    }

    // General Clerk authentication protection
    if (isClerkProtectedRoute(innerReq)) {
      auth().protect();
    }

    // If intlayerResponse was a passthrough with modifications, return it
    if (intlayerResponse) {
      return intlayerResponse;
    }

    return NextResponse.next();
  };

  // Wrap the custom handler with clerkMiddleware
  const clerkAuthMiddleware = clerkMiddleware(clerkAndConvexHandler);

  // Execute the composed Clerk middleware
  return clerkAuthMiddleware(req, event);
}

// Configuration for the middleware matcher
export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)', // Ensures Clerk runs on API routes if needed
  ],
};