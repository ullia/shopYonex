/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0057b7",
      },
      backgroundImage: {
        banner: `url('../public/assets/images/main-bg.jpg')`,
      },
    },
  },
  plugins: [],
};
