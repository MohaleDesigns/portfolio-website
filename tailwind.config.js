/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // sm: '480px',
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // 1E293B  0F172A
        primary: "#6366F1",
        // background
        secondary: "#1E293B",
        // button
        accent: "#6366F1",
        // hover
        hover: "#307AF7",
        // paragraph
        paragraph: "#79879B",
        // title
        title: "#ff6700",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Caveat: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
