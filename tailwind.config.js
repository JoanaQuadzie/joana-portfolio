import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: { fontFamily: { serif: ["Jost", ...fontFamily.serif], sans: ["Jost", ...fontFamily.sans] } },
  },
  plugins: [require("@tailwindcss/typography")],
}
