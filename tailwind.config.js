/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#1B1937",
        "primary-600": "#0A0C1C",
        "secondary-500": "#AB5CDB",
        "gray": "#979797",
        "white": "#ffffff",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/image-header-mobile.jpg')",
        "hero-pattern-desktop": "url('./src/assets/image-header-desktop.jpg')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], 
        lexendDeca: ["Lexend Deca", "sans-serif"]
      }
    },
  },
  plugins: [],
}