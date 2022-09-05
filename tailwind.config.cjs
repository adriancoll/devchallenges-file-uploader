/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        "drop-zone": "#F6F8FB",
        "primary-light": "#97BEF4",
        "primary-text": "#BDBDBD",
      },
      letterSpacing: {
        normal: "-0.035em",
      },
      fontSize: {
        normal: "18px",
      },
      lineHeight: {
        normal: "18px",
      },
    },
  },
};
