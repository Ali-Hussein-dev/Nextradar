/* eslint-disable import/no-anonymous-default-export */
// import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./jobs/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      typography: (theme) => ({
        zinc: {
          css: {
            "--tw-prose-body": theme("colors.zinc[800]"),
            "--tw-prose-headings": theme("colors.zinc[900]"),
            "--tw-prose-lead": theme("colors.zinc[700]"),
            "--tw-prose-links": theme("colors.zinc[900]"),
            "--tw-prose-bold": theme("colors.zinc[900]"),
            "--tw-prose-counters": theme("colors.zinc[600]"),
            "--tw-prose-bullets": theme("colors.zinc[700]"),
            "--tw-prose-hr": theme("colors.zinc[300]"),
            "--tw-prose-quotes": theme("colors.zinc[900]"),
            "--tw-prose-quote-borders": theme("colors.zinc[300]"),
            "--tw-prose-captions": theme("colors.zinc[700]"),
            "--tw-prose-code": theme("colors.zinc[900]"),
            "--tw-prose-pre-code": theme("colors.zinc[100]"),
            "--tw-prose-pre-bg": theme("colors.zinc[900]"),
            "--tw-prose-th-borders": theme("colors.zinc[300]"),
            "--tw-prose-td-borders": theme("colors.zinc[200]"),
            // for dark mode
            "--tw-prose-invert-body": theme("colors.zinc[400]"),
            "--tw-prose-invert-headings": theme("colors.zinc[300]"),
            "--tw-prose-invert-lead": theme("colors.zinc[400]"),
            "--tw-prose-invert-links": theme("colors.zinc[400]"),
            "--tw-prose-invert-bold": theme("colors.zinc[400]"),
            "--tw-prose-invert-counters": theme("colors.zinc[400]"),
            "--tw-prose-invert-bullets": theme("colors.zinc[400]"),
            "--tw-prose-invert-hr": theme("colors.zinc[600]"),

            "--tw-prose-invert-quotes": theme("colors.zinc[400]"),
            "--tw-prose-invert-quote-borders": theme("colors.zinc[700]"),

            "--tw-prose-invert-captions": theme("colors.zinc[400]"),

            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.zinc[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",

            "--tw-prose-invert-th-borders": theme("colors.zinc[600]"),
            "--tw-prose-invert-td-borders": theme("colors.zinc[700]"),
          },
        },
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
      }),
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  //   presets: [createPreset({ preset: "default" })],
  plugins: [
    require("tailwind-custom-utilities"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
}
