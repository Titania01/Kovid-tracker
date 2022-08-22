/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131736",
        blue2: "#303665",
        navyBlue: "#7178B2",
        indigoe: "#9972FF",
        coral: "#63DBF8",
        lightBlue: "#64A8E6",
        white: "#FFFFFF",
        orange: "#DB952D",
        lemonGreen: "#16CB3E",
        lemonBlue: "#DA38E9",
        "box-shadow": "0px 10px 15px rgba(33, 30, 67, 0.08)",
      },
    },
  },
  plugins: [],
};
