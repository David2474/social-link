/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
        'Grey': 'hsl(0, 0%, 20%)',
        'gray-dark': 'hsl(0, 0%, 8%)',
        'Dark-Grey': 'hsl(0, 0%, 12%)',
        'Green': 'hsl(75, 94%, 57%)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}