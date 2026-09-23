// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  fonts: [{
    provider: fontProviders.local(),
    name: "Poppins",
    cssVariable: "--font-poppins",
    options: {
      variants: [
        {
          src: ['./src/assets/fonts/Poppins-Regular.woff2'],
          weight: 'normal',
          style: 'normal',
        },
        {
          src: ['./src/assets/fonts/Poppins-Medium.woff2'],
          weight: 'medium',
          style: 'normal',
        },
        {
          src: ['./src/assets/fonts/Poppins-Bold.woff2'],
          weight: 'bold',
          style: 'normal',
        },
        {
          src: ['./src/assets/fonts/Poppins-ExtraBold.woff2'],
          weight: 'extra bold',
          style: 'normal',
        },
      ]
    }
  }, {
    provider: fontProviders.local(),
    name: "Inter",
    cssVariable: "--font-inter",
    options: {
      variants: [
        {
          src: ['./src/assets/fonts/Inter-Variable-400-700.woff2'],
          weight: '400 700',
          style: 'normal',
        }
      ]
    }
  }]
});