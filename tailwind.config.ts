import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2ed573",
        secondary: "#7bed9f",
        dark: {
          background: "#333333",
          text: "#ffffff",
        },
        white: {
          background: "#ffffff",
          text: "#000000",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
