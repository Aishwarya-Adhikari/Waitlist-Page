//* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
       fontFamily: {
        playfair: "'Playfair Display', serif",
        lato: "'Lato', sans-serif"
      }
    },
  },
  plugins: [],
}
// tailwind.config.js
// This file configures Tailwind CSS for the project, specifying where to look for class names