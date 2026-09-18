import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#201510",
        cream: "#F1E3D6",
        paper: "#FBF5EE",
        sable: "#DEC9B0",
        charcoal: "#17110D",
        red: {
          DEFAULT: "#B9120C",
          deep: "#7A0500",
          50: "#FBEAE7",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        card: "1.25rem",
        "card-inner": "0.75rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(32, 21, 16, 0.04), 0 12px 28px -12px rgba(32, 21, 16, 0.18)",
        lifted: "0 4px 8px rgba(32, 21, 16, 0.06), 0 24px 48px -16px rgba(32, 21, 16, 0.28)",
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
