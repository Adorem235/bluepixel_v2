/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B70D1",
        secondary: "#EE9A51",
        darkBlue: "#223150",
        darkGray: "#444A5C",
        light: "#FFFFFB",
      },
    },
  },
  plugins: [],
}