/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      sans: ['Kanit', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      palanquin: ['Palanquin', 'sans-serif'],
    },
    backgroundImage: {
      'form': "url('assets/images/Background.svg')",
      
    },},
  },
  plugins: [],
}

