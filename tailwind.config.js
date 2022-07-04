/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common_components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "dark-blue": {
          300: "#312E42",
          600: "#262338",
          700: "#27233A",
          900: "#14142B",
        },
        teal: "#0CF8E9",
        success: "#58C38E",
        error: "#E24545",
        grey: "#858E97",
      },
    },
  },
  plugins: [],
};
