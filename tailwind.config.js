/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'mono': ['"Fira Code"', 'monospace'],
      'landing': ['Raleway','sans-serif']
    },
    extend: {
      backgroundImage: {
        'landing-image': "url('/src/assets/landing-bg.svg')",
      },
      colors: {
        'black': '#162D3A',
        'landing-primary': '#F5F8FF',
        'landing-secondary': '#252432',
        'background-input-login': '#F7FBFF',
        'strike-input-login': '#D4D7E3',
        'blue': '#1E4AE9',
        'green': '#00B8A9',
        'pink': '#F48FB1',
        'lavanda': '#B39DDB',
        'gray-ligth': '#F4F4F4'
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'bold': 700,
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'fade-in-delay': 'fadeIn 1s ease-in 0.5s forwards',
        'fade-in-delay-2': 'fadeIn 1s ease-in 1s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}