/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,css}",
    "./node_modules/flowbite/**/*.{js,html,css,jsx}",
  ],

  theme: {
    extend: {
      keyframes: {
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scale: {
          "0%": { scale: "0" },
          "100%": { scale: "1" },
        },
      },
      animation: {
        opacity: "opacity 0.5s ease-in-out",
        scale: "scale 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
