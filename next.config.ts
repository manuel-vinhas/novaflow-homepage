/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
import { withIntlayer } from 'next-intlayer/server'; // Import withIntlayer

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seo-heist.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dwdwn8b5ye.ufs.sh",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ansubkhan.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    reactCompiler: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  // Add any intlayer specific configurations here if needed
  // For example:
  // intlayer: {
  //   // your intlayer options
  // },
};

const withMDX = createMDX({
  // Add your MDX options here, if any
});

// First, apply MDX HOC to the NextConfig
const configWithMDX = withMDX(nextConfig);

// Then, wrap the MDX-enhanced config with withIntlayer
export default withIntlayer(configWithMDX);