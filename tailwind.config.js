/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",      // Dark Slate Gray
        secondary: "#FACC15",    // Amber Yellow
        accent: "#EF4444",       // Red
        textPrimary: "#F8FAFC",  // Light text
        cardBg: "#111827",       // Dark card background
      },
      keyframes: {
        pulseLogo: {
          '0%, 90%, 100%': { transform: 'rotate(0deg)' },
          '90%': { transform: 'rotate(360deg)' }
        },
        bounceLinkedIn: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        bounceEmail: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        bounceGitHub: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        underlineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        handWave: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(14deg)' },
          '30%': { transform: 'rotate(-8deg)' },
          '45%': { transform: 'rotate(14deg)' },
          '60%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        pulseLogo: 'pulseLogo 3s ease infinite',
        bounceLinkedIn: 'bounceLinkedIn 3s ease infinite',
        bounceEmail: 'bounceEmail 3s ease infinite',
        bounceGitHub: 'bounceGitHub 3s ease infinite',
        underlineGrow: 'underlineGrow 0.3s ease forwards',
        handWave: 'handWave 2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};