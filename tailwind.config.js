/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {},
    fontSize: {
      sm: ["1rem", "100%"],
      base: ["1.58rem", "100%"],
      lg: ["3rem", "100%"],
      xl: ["4rem", "100%"],
    },
  },
  plugins: [],
};
