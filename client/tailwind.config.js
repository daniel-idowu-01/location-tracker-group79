/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "blue-400",
      },
    },
  },
  plugins: [],
};
