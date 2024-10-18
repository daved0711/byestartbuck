/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#00754A",
        secondary: "#1E3932",
        tertiary: "#D4E9E2",
        hover: "#A9A9A9",
        lightG: "#F1F8F5",
        yello: "#D8B158",
        cash: "#F2F0EB",
        footer: "#6B6B6B",
        question: "#F9F9F9",
      },
      backgroundImage: {
        Dekstop:
          " linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../imgss/xl-hero-desktop_2021.png')",
        Mobile:
          " linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../imgss/hero-mobile_2021.jpg')",
        Dekstop2:
          " linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../imgss/bggreen.png')",
      },
    },
  },
  plugins: [],
};
