// src/app/layout.tsx

import "./globals.css"; // Make sure this path correctly points to your global styles
// If globals.css is in src/, and this file is in src/app/, it might be '../globals.css'
// If globals.css is in src/app/, then './globals.css' is correct.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children; // This layout simply passes children through
}