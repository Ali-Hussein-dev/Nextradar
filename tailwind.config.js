import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom breakpoint for extra small screens
      }
    }
  },
  presets: [createPreset({ preset: "default" })],
  plugins: [
    require("tailwind-custom-utilities"),
    require("@tailwindcss/typography"),
  ]
};
