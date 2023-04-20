/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    screens: {
      sm: "400px",
      md: "820px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
      },
      screens: {
        xs: "300px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
