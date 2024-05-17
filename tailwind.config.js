/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beers: "#FB8A22",
        "dark-gummetal": "#22262A",
        nickel: "#878F99",
        "antiqu-white": "#FAE8DC",
      },
      screens: {
        mobile: "0px",
        small: "250px",
        medium: "500px",
        large: "750px",
        xlarge: "1000px",
        xxlarge: "1250px",
        fullhd: "1440px",
      },
      fontFamily: {
        "uncut-sans": ["Uncut Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
