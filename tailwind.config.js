/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",      // Blue
        secondary: "#FACC15",    // Amber Yellow
        textPrimary: "#1E293B",  // Slate Gray
        accent: "#EF4444",       // Red
      },
      keyframes: {
        pulseLogo: {
          '0%, 90%, 100%': { transform: 'rotate(0deg)' },
          '90%': { transform: 'rotate(360deg)' }
        },
        bounceLinkedIn: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        bounceEmail: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        bounceGitHub: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        gradientX: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        underlineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        pulseLogo: 'pulseLogo 3s ease infinite',
        bounceLinkedIn: 'bounceLinkedIn 3s ease infinite',
        bounceEmail: 'bounceEmail 3s ease infinite',
        bounceGitHub: 'bounceGitHub 3s ease infinite',
        gradientX: 'gradientX 15s ease infinite',
        underlineGrow: 'underlineGrow 0.3s ease forwards'
      }
    },
  },
  plugins: [],
};
