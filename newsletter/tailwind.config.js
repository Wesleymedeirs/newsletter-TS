/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html", // Para Vite, pode ser esse
    "./src/**/*.{js,ts,jsx,tsx}", // ou de acordo com a estrutura do seu projeto
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: 'rgb(18, 18, 18)',
          200: 'rgb(51, 51, 51)'
        },
        alura: {
          100: '#167BF7',
          200: '#051933'
        }
      },
    }
  },
  plugins: [],

}