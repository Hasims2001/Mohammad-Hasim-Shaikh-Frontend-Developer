import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        coffee100: "rgba(92, 79, 5, 0.44)",
        coffee200: "rgba(219, 184, 0, 0.20)",
        coffee300: "#211D0D",
        gray100: "rgba(255, 255, 255, 0.31)",
        gray200: "#CFCFCF",
        gray300: "rgba(255, 255, 255, 0.60)",
        yellow200: "#FFC603",
        yellow300: "#F9D326",
        yellow400: "#FECC00",
        white: "#ffffff",
        black: "#000000",
        black100: "#0D0E11",
        black200: "#141411",
        black300: "#0E0E0E",
        black400: "#1C1C1C",
        black500: "#151821",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    animation: {
      bounceInLeft: 'bounceInLeftAnimation 1s',
      float: 'floatAnimation 3s infinite',
      fadeIn: 'fadeInAnimation 4s',
      floatingBounce: 'bounceInLeftAnimation 1s, floatAnimation 3s infinite',
      bounceInRight: "bounceInRightAnimation 1s",
      bounceInUp: "bounceInUpAnimation 1s",
      fadeInUp: 'fadeInUpAnimation 2s',
      fadeInRight: 'fadeInRightAnimation 2s ease-out'
    },
    keyframes: {
      bounceInLeftAnimation: {
        '0%': { opacity: '0', transform: 'translateX(-100%)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      bounceInRightAnimation: {
        '0%': { opacity: '0', transform: 'translateX(80%)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      bounceInUpAnimation: {
        '0%': { opacity: '0', transform: 'translateY(100%)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      floatAnimation: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      fadeInAnimation:{
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeInUpAnimation: {
        '0%': { opacity: '0', transform: 'translateY(100px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeInRightAnimation: {
        '0%': { opacity: '0', transform: 'translateX(50px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
    },
  },
  plugins: [],
};
export default config;
