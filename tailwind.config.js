const { withNextUIThemes } = require("nextui");

module.exports = withNextUIThemes({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF00",
        dark: {
          50: "#333333",
          100: "#444444",
          200: "#555555",
        },
        light: {
          50: "#FFFFFF",
          100: "#F8F8F8",
          200: "#EDEDED",
        },
      },
    },
  },
  darkMode: "class",
});
