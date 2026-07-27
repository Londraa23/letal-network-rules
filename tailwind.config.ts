import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#160F0B",
          soft: "#1D1510",
          surface: "#241A14",
          border: "#3B2C22",
        },
        ink: {
          DEFAULT: "#F7EEE4",
          muted: "#B7A596",
          faint: "#7C6C60",
        },
        acid: {
          DEFAULT: "#FF4747",
          dim: "#E23434",
          deep: "#B91F1F",
          glow: "#FF7373",
          tint: "#3A1D1B",
        },
        blue: {
          DEFAULT: "#4FBBF5",
          deep: "#1B7FBA",
          tint: "#152B3B",
        },
        green: {
          DEFAULT: "#4FD883",
          deep: "#279B4F",
          tint: "#153A26",
        },
        amber: {
          DEFAULT: "#FFC048",
          deep: "#DB8C00",
          tint: "#3B2C10",
        },
        purple: {
          DEFAULT: "#B08AF7",
          deep: "#7746D6",
          tint: "#2B2140",
        },
        teal: {
          DEFAULT: "#3FDCCF",
          deep: "#1B9990",
          tint: "#123330",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        bouncy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-8deg)" },
          "75%": { transform: "rotate(8deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-3deg)" },
          "50%": { transform: "translateY(-10px) rotate(3deg)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "70%": { opacity: "1", transform: "scale(1.1)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "confetti-burst": {
          "0%": { opacity: "1", transform: "translate(0, 0) scale(1)" },
          "100%": { opacity: "0", transform: "translate(var(--tx), var(--ty)) scale(0.3)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        wiggle: "wiggle 0.5s ease-in-out",
        float: "float 4s ease-in-out infinite",
        "pop-in": "pop-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        confetti: "confetti-burst 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
