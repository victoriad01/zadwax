/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5F2ECF",
          50: "#AF96E7",
          700: "#4B1EA5",
        },
      },
      fontFamily: {
        firma: ["BR Firma", "sans-serif"],
        aeonik: ["Aeonik Pro", "sans-serif"],
        aeoniklight: ["Aeonik Pro Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
