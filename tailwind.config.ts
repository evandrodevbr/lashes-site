import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lash-bg': '#f8e8e4',
        'lash-text': '#5d4037',
        'lash-accent': '#8d6e63',
      },
      fontFamily: {
        'sans': ['var(--font-lato)', 'Lato', 'sans-serif'],
        'script': ['var(--font-allura)', 'Allura', 'cursive'],
        'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
        'great-vibes': ['var(--font-great-vibes)', 'Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;