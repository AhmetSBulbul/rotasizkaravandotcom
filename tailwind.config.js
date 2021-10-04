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
    colors: {
      white: "#ffffff",
      transparent: "transparent",
      "gray-lightest": "#faf9f8",
      "gray-lighter": "#e6e5e4",
      "gray-light": "#d3d1d0",
      gray: "#c0bebe",
      "gray-dark": "#989796",
      "gray-darker": "#716f6e",
      "gray-darkest": "#4a4948",
      black: "#222120",

      "brand-light": "#ffdec9",
      brand: "#e97e2e",
      "brand-dark": "#6f3f1d",

      "cta-light": "#d9faf6",
      cta: "#2ee9dc",
      "cta-dark": "#276e68",

      "info-light": "#e4f2f4",
      info: "#8ecbd5",
      "info-dark": "#466065",

      "warning-light": "#fff1cc",
      warning: "#fcca15",
      "warning-dark": "#77601a",

      "success-light": "#e2f7d1",
      success: "#7ddb3f",
      "success-dark": "#406725",

      "danger-light": "#ffd5cc",
      danger: "#fb4940",
      "danger-dark": "#782a23",
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
        secondary: "#E97e2e",
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
        card: "0px 10px 50px -1px rgba(70,96,101,0.25)",
        cardSm:
          "0px 10px 50px -1px rgba(70,96,101,0.15)",
        lead: "-9px 16px 22px 8px rgba(70,96,101,0.25)",
      },
    },
  },
  variants: {
    extend: {},
  },
};
