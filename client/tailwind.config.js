/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    // rotate: {
    //   180: "rotateY(180deg)",
    // },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
