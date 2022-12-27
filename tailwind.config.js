/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["light","cupcake", "dark", "cmyk"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
