/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "lg": {"max": "992px"},
      "md": {"max": "768px"},
      "sm": {"max": "480px"},
    },
    container: {
      padding: "20px",
      center: true
    },
    extend: {
      colors: {
        lightBlack: "#404244",
        lightRed: "#FF0038",
        darkRed: "rgba(139, 0, 0, 0.966)",
        lightGray: "#747474",
        darkGray: "#272727",
        
      },
      boxShadow: {
        "btnShadow": "0px 0px 30px rgba(255, 13, 56, 0.35);"
      }
    },
  },
  plugins: [],
}
