import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        move: "move 2s ease infinite alternate",
      },
      keyframes: {
        move: {
          from: {
            transform: "translateY(-15px)",
          },
          to: {
            transform: "trnslateY(0px) scale(1.03)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
