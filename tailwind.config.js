/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
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
          '90%': {transform: 'rotate(360deg)'}
        },
        // social media icons animations
        bounceLinkedIn: {
          '0%, 100%': {transform: 'translateY(0)'},
          '90%': {transform: 'translateY(-10px)'}
        },
        bounceEmail: {
          '0%, 100%': {transform: 'translateY(0)'},
          '90%': {transform: 'translateY(-10px)'}
        },
        bounceGitHub: {
          '0%, 100%': {transform: 'translateY(0)'},
          '90%': {transform: 'translateY(-10px)'}
        }
      },
      // animations calls
      animation: {
        pulseLogo: 'pulseLogo 3s ease infinite',
        bounceLinkedIn: 'bounceLinkedIn 3s ease infinite',
        bounceEmail: 'bounceEmail 1s ease infinite',
        bounceGitHub: 'bounceGitHub 3s ease infinite'
      }
    },
  },
  plugins: [],
};
