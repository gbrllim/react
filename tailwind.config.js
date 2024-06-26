/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      colors: {
        inspectorDark: "#4C85FB",
        inspectorLight: "#94B5FC",
        minerLight: "#F5BC73",
        minerDark: "#F58853",
        creatorLight: "#D2F2A4",
        creatorDark: "#00C8A0",
      },
      screens: {
        tall: { raw: "(min-height: 800px)" },
      },
      animation: {
        fade: "fadeIn .25s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
