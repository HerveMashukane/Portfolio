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
          '0%, 90%, 100%': { transform: 'rotate(0deg)' },
          '90%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        pulseLogo: 'pulseLogo 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
