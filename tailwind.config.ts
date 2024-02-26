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
        primary: {
          background: "var(--crypto-primary-background)",
          foreground: "var(--crypto-primary-foreground)",
        },
        gray: {
          60: "var(--crypto-gray-60)",
          70: "var(--crypto-gray-70)",
          80: "var(--crypto-gray-80)",
          90: "var(--crypto-gray-90)",
          100: "var(--crypto-gray-100)",
        },
        profit: {
          background: "var(--crypto-profit-background)",
          foreground: "var(--crypto-profit-foreground)",
        },
        loss: {
          background: "var(--crypto-loss-background)",
          foreground: "var(--crypto-loss-foreground)",
        },
        blue: {
          60: "var(--crypto-blue)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
