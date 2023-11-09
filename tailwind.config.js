/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#ffcb00",
        white: {
          "100": "#FFF",
          "200": "#fff",
        },
        orangered: "#ff6700",
        darkslateblue: "#28348a",
        yellowgreen: "#aec90b",
        gray: {
          "100": "#878787",
          "200": "#777",
        },
        deepskyblue: "#009ee2",
        steelblue: {
          "100": "#005d97",
          "200": "#005693",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        cabin: "Cabin",
      },
      borderRadius: {
        smi: "13px",
      },
    },
    fontSize: {
      "lg-5": "18.5px",
      "7xl-3": "26.3px",
      lg: "18px",
      "8xl": "27px",
      "23xl-1": "42.1px",
      "xl-8": "20.8px",
      "3xl": "22px",
      "23xl": "42px",
      "mini-1": "14.1px",
      xl: "20px",
      "16xl": "35px",
      "4xl-6": "23.6px",
      "3xl-4": "22.4px",
      "4xl": "23px",
      "base-5": "16.5px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
