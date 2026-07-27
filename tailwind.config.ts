import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-muted": "rgb(var(--surface-muted) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        "ink-muted": "rgb(var(--ink-muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        "line-strong": "rgb(var(--line-strong) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
      },
      fontSize: {
        "hero-sm": ["3.5rem", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "hero-md": ["6rem", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "hero-lg": ["8.5rem", { lineHeight: "0.9", letterSpacing: "-0.045em" }],
      },
      boxShadow: {
        card: "0 1px 2px rgb(0 0 0 / 0.04)",
        "card-hover": "0 4px 16px rgb(0 0 0 / 0.08)",
      },
      animation: {
        "nav-in": "nav-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      keyframes: {
        "nav-in": {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
