/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavanda': '#8B5CF6',
        'pink': '#EC4899',
        'gray-ligth': '#F3F4F6',
      },
    },
  },
  plugins: [],
}
