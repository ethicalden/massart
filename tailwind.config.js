// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Adjust paths based on your folder structure
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
  plugins: [],
};
