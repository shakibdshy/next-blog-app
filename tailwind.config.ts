import type { Config } from "tailwindcss"
import { blogPreset } from "./lib/blog-plugin"

const config = {
  presets: [blogPreset],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
} satisfies Config

export default config