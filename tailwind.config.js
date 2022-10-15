/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(255, 64, 4, 1)",
        dim: "rgba(255, 64, 4, 0.19)",
        textDark: "rgba(26, 20, 17, 1)",
        textWhite: "rgba(255, 255, 255, 1)",
        blured: "rgba(255, 64, 4, 0.8)",
      },
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
