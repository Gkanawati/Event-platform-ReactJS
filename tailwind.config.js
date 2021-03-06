/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // adicionar os arquivos que irao utiliza o tailwind
    // no caso: todos os arquivos que estao dentro de src e que terminar em .tsx
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        code: 'url(/src/assets/code-mockup.png)',
        blur: 'url(/src/assets/blur-background.png)',
        react: 'url(/src/assets/iconReact-icon.svg)',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
