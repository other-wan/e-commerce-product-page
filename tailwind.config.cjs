/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      orange: "hsl(26, 100%, 55%)",
      "pale-orange": "hsl(25, 100%, 94%)",

      "dark-blue": "hsl(220, 13%, 13%)",
      "grayish-blue": "hsl(220, 14%, 75%)",
      "dark-grayish-blue": "hsl(219, 9%, 45%)",
      "light-grayish-blue": "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsla(0, 0%, 0%, 0.75)",
    },
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
