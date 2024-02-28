import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-beatiful": "#86B4FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        push: {
          "0%": { transform: "scale(1)"},
          "100%": { transform: "scale(1.05)"}
        },

        pop: {
          "0%": { transform: "scale(1.05)"},
          "100%": { transform: "scale(1)"}
        }
      },

      animation: {
        "push": "push 0.5s ease-in-out forwards",
        "pop": "pop 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
