/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9900",
        secondary: "#232f3e"
      }
    }
  },
  plugins: []
};
