/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'mono': ['Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        'black': '#162D3A',
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
    },
  },
  plugins: [],
}
