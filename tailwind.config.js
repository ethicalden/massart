/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: "#A9C2C9",
        buttonCustomColor: "#ED2127",
        textColor: "#B9B9B9",
        gradColor: "#50505080",
        circleColor: "#F3F5F6",
        footerColor: "#181E20",
        emailColor: "#2D373A",
        bodyColor: "#212525",
        white60: "rgba(255, 255, 255, 0.6)",
      },

      fontFamily: {
        roboto: ["Roboto"],
        helvetica: ["Helvetica"],
      },
    },
  },

  plugins: [],
};
