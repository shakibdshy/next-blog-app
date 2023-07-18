import type { Config } from "tailwindcss";
// @ts-ignore
import animatePlugin from "tailwindcss-animate"
import { blogPlugin } from "./blog-preset";

export const blogPreset = {
  darkMode: ["class"],
  content: [],
  plugins: [animatePlugin, blogPlugin],
} satisfies Config