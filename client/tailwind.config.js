/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#171819",
        slategray: "#6a797e",
        dimgray: "#6e757c",
        darkgray: "#a9a9a9",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e2e2e2",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f5f5f5",
          "300": "#ebebeb",
        },
        black: "#000",
        lavenderblush: "#ffefef",
        darkred: "#a70000",
      },
      spacing: {},
      fontFamily: {
        gilroy: "Gilroy",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        inherit: "inherit",
        "font-awesome-6-pro": "'Font Awesome 6 Pro'",
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
        "lg-2": "18.2px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      xl: "1.25rem",
      base: "1rem",
      xs: "0.75rem",
      smi: "0.813rem",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
