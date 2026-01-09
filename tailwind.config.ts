import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0f",
        surface: "#121218",
        accent: "#d38b26",
        muted: "#9ca3af",
      },

      // fontFamily: {
      //   sans: ["Inter", "var(--font-inter)", "system-ui", "-apple-system"],
      //   display: ["Oswald", "var(--font-oswald)", "Inter", "sans-serif"],
      // },
      fontFamily: {
        sans: ["var(--font-gilroy)", "system-ui", "sans-serif"],
        display: ["var(--font-gilroy)", "system-ui", "sans-serif"],
      },
      fontSize: {
        base: "30px",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        'grid': "radial-gradient(circle at 1px 1px, rgba(211,139,38,0.15) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
