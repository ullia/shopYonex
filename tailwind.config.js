/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0057b7",
      },
      backgroundImage: {
        miniBanner: `url('../public/assets/images/icon_korea_team.jpg')`,
        banner: `url('../public/assets/images/main-bg.jpg')`,
      },
    },
  },
  plugins: [],
};
