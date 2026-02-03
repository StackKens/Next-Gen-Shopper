/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
        },
        "scroll-left": {
          "0%": { transform: "translateY(-100%) rotate(-5deg)" },
          "100%": { transform: "translateY(100vh) rotate(-5deg)" },
        },
        "scroll-right": {
          "0%": { transform: "translateY(-100%) rotate(5deg)" },
          "100%": { transform: "translateY(100vh) rotate(5deg)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.25" },
        },
        slideInBottomLeft: {
          "0%": { opacity: "0", transform: "translate(-100px, 100px)" },
          "100%": { opacity: "1", transform: "translate(0, 0)" },
        },
        slideInTopRight: {
          "0%": { opacity: "0", transform: "translate(100px, -100px)" },
          "100%": { opacity: "1", transform: "translate(0, 0)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-reverse": "float-reverse 10s ease-in-out infinite",
        "scroll-left": "scroll-left 30s linear infinite",
        "scroll-right": "scroll-right 35s linear infinite",
        "gradient-shift": "gradient-shift 15s ease infinite",
        glow: "glow 8s ease-in-out infinite",
        "slide-in-bottom-left": "slideInBottomLeft 2s ease-out forwards",
        "slide-in-top-right": "slideInTopRight 2s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
