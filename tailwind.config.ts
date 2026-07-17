import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zali2Bali brand palette
        ink: "#0A0A0A",
        paper: "#FAFAF9",
        "teal-deep": "#0F6E56",
        "teal-mid": "#1A9E7A",
        "teal-light": "#2BC494",
        "teal-ghost": "#E1F5EE",
        "teal-mist": "#F0FAF6",
        sand: "#F5F1EB",
        mist: "#F7F7F6",
        border: "#E5E5E3",
        "border-strong": "#C4C4C0",
        subtle: "#6B7280",
        strong: "#1A1A1A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-xl": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-xl": ["1.25rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6", fontWeight: "400" }],
        "label-lg": ["0.9375rem", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" }],
        "label-md": ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        "label-sm": ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.06em", fontWeight: "600" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "section": "8rem",
      },
      maxWidth: {
        "content": "72rem",  // 1152px
        "prose": "48rem",    // 768px
        "tight": "38rem",    // 608px
      },
      borderRadius: {
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",
        "teal": "0 0 0 3px rgba(15,110,86,0.15)",
        "inset-top": "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "typing": "typing 1.2s steps(3, end) infinite",
        "slide-in": "slideIn 0.35s ease forwards",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
        typing: {
          "0%": { content: '""' },
          "33%": { content: '"."' },
          "66%": { content: '".."' },
          "100%": { content: '"..."' },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-12px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
