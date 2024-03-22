/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkslategray: {
          "100": "#333",
          "200": "rgba(51, 51, 51, 0.09)",
        },
        gray: {
          "100": "#030303",
          "200": "#020202",
          "300": "rgba(0, 0, 0, 0)",
          "400": "rgba(0, 0, 0, 0.08)",
        },
        blueviolet: "#9747ff",
        darkgray: "#aaa",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      smi: "13px",
      xs: "12px",
      xl: "20px",
      base: "16px",
      lg: "18px",
      "10xl": "29px",
      "4xl": "23px",
      "16xl": "35px",
      "2xl": "21px",
      "9xl": "28px",
      "5xl": "24px",
      lgi: "19px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      sm: "14px",
      "2xs": "11px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
