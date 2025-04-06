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
        // logo animation
        pulseLogo: {
          '0%, 90%, 100%': {transform: 'rotate(0deg)'},
          '50%': {transform: 'rotate(360deg)'}
        },
        // nav links animation
        bounceLinks: {
          '0%, 100%': {transform: 'translateX(0)'},
          '90%': {transform: 'translateX(-10px)'}
        },
        // social media icons animations
        pulseLinkedIn: {
          '0%, 100%': {transform: 'translateY(0)'},
          '90%': {transform: 'translateY(-10px)'}
        },
        pulseEmail: {
          '0%, 100%': {transform: 'translateY(0)'},
          '90%': {transform: 'translateY(-10px)'}
        },
        pulseGitHub: {
          '0%, 100%': {transform: 'translateY(0)'},
          '90%': {transform: 'translateY(-10px)'}
        }
      },
      // animations calls
      animation: {
        pulseLogo: 'pulseLogo 5s ease-in-out infinite',
        bounceLinks: 'bounceLinks 2s ease infinite',
        bounceLinkedIn: 'pulseLinkedIn 1s ease infinite',
        bounceEmail: 'pulseEmail 3s ease infinite',
        bounceGitHub: 'pulseGitHub 1s ease infinite'
      }
    },
  },
  plugins: [],
};
