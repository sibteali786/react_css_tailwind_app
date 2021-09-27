module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "560px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1260px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1680px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#283044",
        secondary: "#78A1BB",
        fontColor: "#EBF5EE",
        buttonColor: "#BFA89E",
        buttonColorDark: "#8B786D",
      },
      fontFamily: {
        sans: ["Yanone Kaffeesatz"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
