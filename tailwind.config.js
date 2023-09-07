/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/*.{scss,js,ts,jsx,tsx}'],
  darkMode: 'class', // false, 'media' or 'class' are the options
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'san-serif'],
      },
      colors: {
        green: 'hsl(115, 35%, 43%)',
        'dark-green': 'hsl(132, 38%, 18%)',
        'light-yellow': 'hsl(64, 73%, 67%)',
        yellow: 'hsl(63, 66%, 55%)',
        brown: 'hsl(40, 87%, 15%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
        gray: 'hsl(0, 0%, 50%)',
        beige: 'hsl(40, 33%, 84%)',
      },
    },
  },
  plugins: [],
}
