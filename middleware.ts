// src/middleware.ts
import { intlayerMiddleware as intlayerMiddlewareFn } from "next-intlayer/middleware"; // Renamed to avoid naming conflict
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
  // Execute intlayer's middleware. It might rewrite the URL for locale,
  // redirect, or set headers.
  const intlayerResponse = await intlayerMiddlewareFn(req, event);

  // If intlayer returns a "final" response (e.g., a redirect to a localized path,
  // or a rewrite response), we should return it immediately.
  // A common sign of a "final" action is if it's not just a simple "pass-through" (NextResponse.next()).
  // For simplicity, if intlayerResponse is returned, we assume it has handled the request.
  if (intlayerResponse) {
    // Check if it's a redirect or rewrite. If so, intlayer has taken definitive action.
    // NextResponse.next() would mean intlayer processed but wants to continue.
    // If intlayerResponse is a redirect or rewrite, return it.
    // Otherwise, it might be NextResponse.next() with modified headers/req.
    const isRedirect = intlayerResponse.headers.has('location'); // Corrected typo here
    const isRewrite = intlayerResponse.headers.has('x-middleware-rewrite');

    if (isRedirect || isRewrite) {
        return intlayerResponse;
    }
    // If it's NextResponse.next() (or similar passthrough), we'll use this response later
    // after Clerk logic, to ensure any headers set by intlayer are preserved.
  }


  // --- 2. Clerk and Convex Middleware Logic ---
  // Define the handler that clerkMiddleware will wrap.
  // This handler will receive the `auth` object and the `innerReq` (which is the `req` potentially modified by intlayer).
  const clerkAndConvexHandler = async (authScope: any, innerReq: NextRequest) => {
    const auth = authScope; // `authScope` is the auth utility from Clerk

    // Subscription check for specific protected routes
    if (isSubscriptionProtectedRoute(innerReq)) {
      if (auth().userId) { // Check if the user is logged in
        const token = await auth().getToken({ template: "convex" });
        if (token) {
          try {
            const { hasActiveSubscription } = await fetchQuery(
              api.subscriptions.getUserSubscriptionStatus, {}, { token }
            );

            if (!hasActiveSubscription) {
              const pricingUrl = new URL('/pricing', innerReq.nextUrl.origin);
              return NextResponse.redirect(pricingUrl); // User logged in but no active subscription
            }
          } catch (error) {
            console.error("Middleware: Error fetching Convex subscription status:", error);
            // Potentially redirect to an error page or allow access depending on policy
          }
        } else {
          // User is logged in with Clerk, but couldn't get a Convex token.
          // This might indicate an issue or a state where auth().protect() below is sufficient.
          console.warn("Middleware: User logged in but no Convex token available for subscription check.");
        }
      } else if (isClerkProtectedRoute(innerReq)) {
        // If the route requires a subscription, it implicitly requires login.
        // auth().protect() below will handle redirecting to login if not authenticated.
      }
    }

    // General Clerk authentication protection for routes defined in isClerkProtectedRoute
    if (isClerkProtectedRoute(innerReq)) {
      auth().protect(); // This function handles the redirect to sign-in if the user is not authenticated.
                        // It doesn't return a value here; it manages the response internally within clerkMiddleware.
    }

    // If intlayerResponse was NextResponse.next() (passthrough with potential modifications),
    // return it now so that any changes (like headers) are applied.
    if (intlayerResponse) {
      return intlayerResponse;
    }

    // If no other action was taken by intlayer or Clerk/Convex logic, proceed to the requested page.
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
    // This matcher is from your original Clerk setup.
    // It's designed to run on most paths but exclude Next.js internals and static files.
    // It also explicitly includes API routes, which Clerk might need to protect.
    // The intlayerMiddlewareFn should internally ignore paths like /api if it's not meant for them.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)', // Ensures Clerk runs on API routes if needed
  ],
};
