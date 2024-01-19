import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        coffee100: "rgba(92, 79, 5, 0.44)",
        coffee200: "rgba(219, 184, 0, 0.20)",
        coffee300: "#211D0D",
        gray100: "rgba(255, 255, 255, 0.31)",
        gray200: "#CFCFCF",
        yellow200: "#FFC603",
        yellow300: "#F9D326",
        yellow400: "#FECC00",
        white: '#ffffff', 
        black: "#000000" ,
        black100: '#0D0E11',
        black200: "#141411",
        black300: "#0E0E0E",
        black400: "#1C1C1C"
      },
      
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
  },
  },
  plugins: [],
}
export default config
