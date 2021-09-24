module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      display: ["Maven Pro", "sans-serif"],
      serif: ["PT Serif", "serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#132624",
        secondary: "#FF8A5C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
