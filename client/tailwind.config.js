/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #5f4078",
        textColor: "#A175C4",
      },
      keyframes: {
        right: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        left: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        up: {
          "0%": {
            transform: "translateY(60%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        text: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            transform: "1",
          },
        },
        border: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "100%": {
            transform: "rotateY(180deg)",
          },
        },
      },
      animation: {
        right: "right 1.2s ease-in-out ",
        left: "left 1.2s ease-in-out ",
        up: "up 0.9s ease-in-out ",
        border: "border 0.7s linear ",
        "bounce-slow": "bounce 1s infinite",
        "bounce-delay-1": "bounce 1s infinite 0.1s",
        "bounce-delay-2": "bounce 1s infinite 0.2s",
        "bounce-delay-3": "bounce 1s infinite 0.3s",
        "bounce-delay-4": "bounce 1s infinite 0.4s",
        "bounce-delay-5": "bounce 1s infinite 0.5s",
        "bounce-delay-6": "bounce 1s infinite 0.6s",
        "bounce-delay-7": "bounce 1s infinite 0.7s",
      },
    },
    borderRadius: {
      md: "0.375rem",
      lg: "0.5rem",
      xl: "1.5rem",
      full: "9999px",
      large: "160px",
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    require("tailwind-scrollbar"),
  ],
};
