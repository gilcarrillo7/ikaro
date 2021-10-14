module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFFFFF",
      pinkbrand: "#eb1a8c",
    },
    container: {
      padding: {
        DEFAULT: "15px",
        sm: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
