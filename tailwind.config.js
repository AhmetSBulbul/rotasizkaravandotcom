module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      display: ["Maven Pro", "sans-serif"],
    },
    screens: {
      landscape: "640px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      wide: "1536px",
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
    container: {
      center: true,
    },
    extend: {
      colors: {
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

      spacing: {
        outer: "8px",
        wrapper: "24px",
        inner: "8px",
        mobile: "16px",
        qtr: "25%",
        half: "50%",
        qtrVW: "25vw",
        halfVW: "50vw",
      },
      boxShadow: {
        card: "0px 10px 50px -1px rgba(0,0,0,0.25)",
        cardSm:
          "0px 10px 50px -1px rgba(0,0,0,0.15)",
        lead: "-9px 16px 22px 8px rgba(0,0,0,0.3)",
      },
    },
  },
  variants: {
    extend: {},
  },
};
