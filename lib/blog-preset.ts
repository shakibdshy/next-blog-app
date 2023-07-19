import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme"


export const blogPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "220, 43%, 11%",
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "220, 43%, 11%",
        "--border": "214.3 31.8% 91.4%",
        "--input": "214.3 31.8% 91.4%",
        "--card": "0 0% 100%",
        "--card-foreground": "220, 43%, 11%",
        "--primary": "240 5.9% 10%",
        "--primary-foreground": "0 0% 98%",
        "--primary-50": "180, 39%, 91%",
        "--primary-100": "177, 40%, 78%",
        "--primary-200": "177, 40%, 64%",
        "--primary-300": "177, 41%, 49%",
        "--primary-400": "176, 67%, 38%",
        "--primary-500": "176, 100%, 28%",
        "--primary-600": "176, 100%, 25%",
        "--primary-700": "175, 100%, 23%",
        "--primary-800": "175, 100%, 19%",
        "--primary-900": "172, 100%, 14%",
        "--neutral-50": "210, 20%, 98%",
        "--neutral-100": "220, 16%, 96%",
        "--neutral-200": "220, 17%, 93%",
        "--neutral-300": "217, 16%, 84%",
        "--neutral-400": "218, 15%, 65%",
        "--neutral-500": "221, 13%, 46%",
        "--neutral-600": "216, 18%, 34%",
        "--neutral-700": "217, 24%, 27%",
        "--neutral-800": "214, 33%, 17%",
        "--neutral-900": "220, 43%, 11%",
        "--secondary": "210 40% 96.1%",
        "--secondary-foreground": "220, 43%, 11%",
        "--accent": "210 40% 96.1%",
        "--accent-foreground": "220, 43%, 11%",
        "--destructive": "0 100% 50%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "215 20.2% 65.1%",
        "--radius": "0.5rem"
      },
      ".dark": {
        "--background": "220, 43%, 11%",
        "--foreground": "213 31% 91%",
        "--muted": "223 47% 11%",
        "--muted-foreground": "215.4 16.3% 56.9%",
        "--accent": "216 34% 17%",
        "--accent-foreground": "210 40% 98%",
        "--popover": "220, 43%, 11%",
        "--popover-foreground": "215 20.2% 65.1%",
        "--border": "216 34% 17%",
        "--input": "216 34% 17%",
        "--card": "220, 43%, 11%",
        "--card-foreground": "213 31% 91%",
        "--primary": "210 40% 98%",
        "--primary-foreground": "222.2 47.4% 1.2%",
        "--primary-50": "180, 39%, 91%",
        "--primary-100": "177, 40%, 78%",
        "--primary-200": "177, 40%, 64%",
        "--primary-300": "177, 41%, 49%",
        "--primary-400": "176, 67%, 38%",
        "--primary-500": "176, 100%, 28%",
        "--primary-600": "176, 100%, 25%",
        "--primary-700": "175, 100%, 23%",
        "--primary-800": "175, 100%, 19%",
        "--primary-900": "172, 100%, 14%",
        "--neutral-50": "210, 20%, 98%",
        "--neutral-100": "220, 16%, 96%",
        "--neutral-200": "220, 17%, 93%",
        "--neutral-300": "217, 16%, 84%",
        "--neutral-400": "218, 15%, 65%",
        "--neutral-500": "221, 13%, 46%",
        "--neutral-600": "216, 18%, 34%",
        "--neutral-700": "217, 24%, 27%",
        "--neutral-800": "214, 33%, 17%",
        "--neutral-900": "220, 43%, 11%",
        "--secondary": "222.2 47.4% 11.2%",
        "--secondary-foreground": "210 40% 98%",
        "--destructive": "0 63% 31%",
        "--destructive-foreground": "210 40% 98%",
        "--ring": "216 34% 17%",
        "--radius": "0.5rem"
      }
    })
    addBase({
      '*': {
        '@apply border-border': {}
      },
      'body': {
        '@apply bg-background text-foreground': {},
        'font-feature-settings': '"rlig" 1, "calt" 1',
      }
    })
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          "primary-50": "hsl(var(--primary-50))",
          "primary-100": "hsl(var(--primary-100))",
          "primary-200": "hsl(var(--primary-200))",
          "primary-300": "hsl(var(--primary-300))",
          "primary-400": "hsl(var(--primary-400))",
          "primary-500": "hsl(var(--primary-500))",
          "primary-600": "hsl(var(--primary-600))",
          "primary-700": "hsl(var(--primary-700))",
          "primary-800": "hsl(var(--primary-800))",
          "primary-900": "hsl(var(--primary-900))",
          "neutral-50": "hsl(var(--neutral-50))",
          "neutral-100": "hsl(var(--neutral-100))",
          "neutral-200": "hsl(var(--neutral-200))",
          "neutral-300": "hsl(var(--neutral-300))",
          "neutral-400": "hsl(var(--neutral-400))",
          "neutral-500": "hsl(var(--neutral-500))",
          "neutral-600": "hsl(var(--neutral-600))",
          "neutral-700": "hsl(var(--neutral-700))",
          "neutral-800": "hsl(var(--neutral-800))",
          "neutral-900": "hsl(var(--neutral-900))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
          arabic: ["var(--font-arabic)", ...fontFamily.serif],
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  }
)