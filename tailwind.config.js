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
        paragraph: "#667085",
        borderRadius: {
          DEFAULT: "#EAECF0",
        },
        gray: {
          950: "#0C111D",
          900: "#101828",
          700: "#344054",
          500: "#667085",
          300: "#D0D5DD",
        },
        logo: "#201E1E",
      },
      fontFamily: {
        firma: ["BR Firma", "sans-serif"],
        aeonik: ["Aeonik Pro", "sans-serif"],
        aeoniklight: ["Aeonik Pro Light", "sans-serif"],
        aeonikBold: ["Aeonik Pro Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
