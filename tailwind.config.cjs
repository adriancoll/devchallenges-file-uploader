/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      // COLORS
      colors: {
        primary: "#2F80ED",
        "drop-zone": "#F6F8FB",
        "primary-light": "#97BEF4",
        "primary-text": "#BDBDBD",
      },

      //FONTS
      letterSpacing: {
        normal: "-0.035em",
      },
      fontSize: {
        normal: "18px",
      },
      lineHeight: {
        normal: "18px",
      },

      // ANIMATIONS
      animation: {
        "progress-loading":
          "progressLoading 1.5s ease-in-out infinite alternate-reverse",
        "fade-in-up": "fadeInUp 1.25s ease",
      },
      keyframes: {
        progressLoading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(300%)" },
        },
        fadeInUp: {
          "0%": {
            transform: "translateY(200px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
};
