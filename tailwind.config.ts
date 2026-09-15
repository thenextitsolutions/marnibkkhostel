import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C1412",
        paper: "#FFFFFF",
        paperDim: "#F3F4F3",
        teal: {
          DEFAULT: "#00C2A8",
          dark: "#08695C",
          tint: "#D4FFF4",
        },
        marigold: {
          DEFAULT: "#D6FF3D",
          dark: "#B4E000",
        },
        brick: "#FF3B6B",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        pop: "0 18px 40px -18px rgba(255, 59, 107, 0.55)",
        lift: "0 22px 50px -24px rgba(0, 194, 168, 0.35)",
      },
      backgroundImage: {
        grain: "radial-gradient(circle, rgba(12,20,18,0.05) 1px, transparent 1px)",
        mesh: "radial-gradient(ellipse 80% 50% at 110% -10%, rgba(0,194,168,0.22), transparent 55%), radial-gradient(ellipse 55% 40% at -10% 110%, rgba(214,255,61,0.18), transparent 50%)",
      },
      backgroundSize: {
        grain: "4px 4px",
      },
    },
  },
  plugins: [],
};

export default config;
