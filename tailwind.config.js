/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-white": "#fff",
        "primary-text-color": "#637381",
        "dark-dark": "#111928",
        "primary-color": "#3758f9",
        "secondary-color": "#13c296",
        mediumseagreen: "#00a87d",
        gray: {
          "100": "rgba(255, 255, 255, 0.6)",
          "200": "rgba(255, 255, 255, 0.1)",
          "300": "rgba(255, 255, 255, 0.17)",
        },
        royalblue: {
          "100": "#5e80ff",
          "200": "rgba(48, 86, 211, 0.05)",
          "300": "rgba(87, 125, 250, 0.08)",
          "400": "rgba(48, 86, 211, 0.08)",
        },
      },
      spacing: {},
      fontFamily: {
        "body-small-regular": "Inter",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "3xl": "22px",
      "9xl": "28px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1200: {
        raw: "screen and (max-width: 1200px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
