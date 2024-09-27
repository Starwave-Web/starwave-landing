import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      colors: {
        "primary-green": "#B9FF66",
        "primary-grey": "#F3F3F3",
        "primary-dark": "#191A23",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "h1": [
          "60px",
          {
            lineHeight: "77px",
            letterSpacing: "0",
            fontWeight: "500",
          },
        ],
        "h2": [
          "40px",
          {
            lineHeight: "51px",
            letterSpacing: "0",
            fontWeight: "500",
          },
        ],
        "h3": [
          "30px",
          {
            lineHeight: "38.3px",
            letterSpacing: "0",
            fontWeight: "500",
          },
        ],
        "h4": [
          "20px",
          {
            lineHeight: "25.5px",
            letterSpacing: "0",
            fontWeight: "500",
          },
        ],
        "p": [
          "18px",
          {
            lineHeight: "23px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "outlaw": [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "form-label": [
          "16px",
          {
            lineHeight: "28px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "form-input": [
          "18px",
          {
            lineHeight: "23px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "h1-mobile": [
          "43px",
          {
            lineHeight: "54.9px",
            letterSpacing: "0",
            fontWeight: "500",
          },
        ],
        "h2-mobile": [
          "36px",
          {
            lineHeight: "45.9px",
            letterSpacing: "0",
            fontWeight: "500",
          },
        ],
        "h3-mobile": [
          "26px",
          {
            lineHeight: "33.2px",
            letterSpacing: "0",
            fontWeight: "500",
          },
        ],
        "h4-mobile": [
          "18px",
          {
            lineHeight: "23px",
            letterSpacing: "0",
            fontWeight: "500",
          },
        ],
        "p-mobile": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
        "form-label-mobile": [
          "14px",
          {
            lineHeight: "18px",
            letterSpacing: "0",
            fontWeight: "400",
          },
        ],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
