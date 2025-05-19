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
  turbopack: {
    rules: {
      "**/node_modules/@intlayer/config/node_modules/@esbuild/win32-x64/**": {
        loaders: ['empty-loader'], // Ou um loader que os trate como assets
      },
    },
    // Para garantir que o Turbopack não tenta processar estes ficheiros como código:
    resolveExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Garanta que .md e .exe não estão aqui
  },
  // Se o erro persistir ou se aplicar ao build de produção (que usa Webpack por defeito sem --turbo)
  webpack: (config, { isServer, dev }) => {
    // Adicionar uma regra para tratar .md e .exe como assets ou ignorá-los
    // Esta é uma forma mais genérica de ignorar estes tipos de ficheiros
    // dentro do diretório problemático.
    config.module.rules.push({
      test: /\.(md|exe)$/,
      include: /@intlayer\/config\/node_modules\/@esbuild\/win32-x64/,
      loader: 'ignore-loader', // Precisará de instalar `ignore-loader`
      // ou usar `asset/resource` se quiser copiá-los
    });// É importante que as alterações ao config do webpack sejam retornadas
    return config;
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