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
      zIndex: {
        "-10": "-10",
        base: "0",
        "base-step-1": "10",
        "base-step-2": "20",
        "mid-air": "30",
        "mid-air-1": "40",
        "mid-air-2": "50",
        sky: "60",
        "sky-1": "70",
        "sky-2": "80",
        everest: "90",
        space: "100",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
