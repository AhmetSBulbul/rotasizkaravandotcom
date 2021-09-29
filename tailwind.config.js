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
        primaryOld: "#132624",
        white: {
          dirty: "#F5f5f5",
          DEFAULT: "#FFFFFF",
          not: "#333333",
        },
        primary: {
          light: "#384C4A",
          DEFAULT: "#132624",
        },
        secondary: "#C8553D",
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
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
      spacing: {
        outer: "40px",
        wrapper: "48px",
        inner: "38px",
        mobile: "24px",
      },
      boxShadow: {
        card: "0px 10px 50px -1px rgba(0,0,0,0.25)",
        lead: "-9px 16px 22px 8px rgba(0,0,0,0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
