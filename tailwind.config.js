const { keyframes } = require("@angular/animations");
const { transform } = require("typescript");

module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Blue
        secondary: "#FACC15", // Amber Yellow
        textPrimary: "#1E293B", // Slate Gray
        accent: "#EF4444", // Red
      },
      keyframes: {
        pulseLogo: {
          '0%, 90%, 100%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(360deg)'}
        },
        bounceLinks: {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-10px)'}
        }
      },
      animation: {
        pulseLogo: 'pulseLogo 3s ease-in-out infinite',
        bounceLinks: 'bounceLinks 2s ease infinite'

      }
    },
  },
  plugins: [],
};
