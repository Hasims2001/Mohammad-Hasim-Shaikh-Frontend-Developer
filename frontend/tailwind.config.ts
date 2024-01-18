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
        gray100: "rgba(255, 255, 255, 0.31)",
        yellow200: "#FFC603",
        yellow300: "#F9D326",
        white: '#ffffff', 
        black: "#000000" 
      },
      
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
  },
  },
  plugins: [],
}
export default config
