import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Beauty brand colors - Pink and luxury aesthetic
        'beauty-pink': '#EC4899',
        'beauty-rose': '#F472B6',
        'beauty-light': '#FCE7F3',
        'beauty-dark': '#831843',
        'beauty-gold': '#FCD34D',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'mono': ['Menlo', 'monospace'],
      },
      backgroundColor: {
        'primary': '#EC4899',
        'secondary': '#F472B6',
        'accent': '#FCD34D',
      },
      textColor: {
        'primary': '#EC4899',
        'secondary': '#F472B6',
        'dark': '#831843',
      },
    },
  },
  plugins: [],
}

export default config
