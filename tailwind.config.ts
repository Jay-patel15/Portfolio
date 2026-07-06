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
        void: {
          950: "#050506",
          900: "#0a0a0c",
          850: "#0f0f12",
          800: "#151519",
          700: "#1c1c22",
          600: "#28282f",
        },
        signal: {
          DEFAULT: "#ff2b45",
          dim: "#8a1220",
          glow: "#ff5468",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero-sm": ["3.5rem", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "hero-md": ["6rem", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "hero-lg": ["8.5rem", { lineHeight: "0.9", letterSpacing: "-0.045em" }],
      },
      boxShadow: {
        "neu-dark":
          "8px 8px 16px rgba(0,0,0,0.55), -6px -6px 14px rgba(255,255,255,0.02)",
        "neu-dark-inset":
          "inset 4px 4px 10px rgba(0,0,0,0.5), inset -4px -4px 10px rgba(255,255,255,0.02)",
        glass: "0 8px 32px rgba(0,0,0,0.45)",
        signal: "0 0 40px -8px rgba(255,43,69,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(5,5,6,0.9)), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        scanline: "scanline 8s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
