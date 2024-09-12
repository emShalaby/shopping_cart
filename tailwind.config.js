/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        wide: "2000px",
      },
      backgroundImage: {
        main: "url(./assets/site-bg.jpg)",
      },
    },
  },
  plugins: [],
};
