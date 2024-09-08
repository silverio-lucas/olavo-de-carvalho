const daisyThemes = require("daisyui/src/colors/themes");
const defaultTheme = require("tailwindcss/defaultTheme");

// Theme customization --> https://daisyui.com/theme-generator/
const themes = [
  {
    light: {
      ...daisyThemes["[data-theme=light]"],
      caput: "#683a0d",
      primary: "#683a0d",
      secondary: "#825f39",
      accent: "#f6d8b9",
    },
    dark: {
      ...daisyThemes["[data-theme=dark]"],
      caput: "#542f0a",
      primary: "#bd9470",
      secondary: "#67492f",
      accent: "#825f39",
    },
  },
];

module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes,
  },
  theme: {
    extend: {
      fontFamily: {
        display: [
          "Helvetica",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
        body: [
          "Helvetica",
          ...defaultTheme.fontFamily.serif,
          ...defaultTheme.fontFamily.sans, // Add sans-serif as a fallback
        ],
      },
    },
  },
};
