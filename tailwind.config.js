/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // adicionar os arquivos que irao utiliza o tailwind
    // no caso: todos os arquivos que estao dentro de src e que terminar em .tsx
    './src/**/*.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
