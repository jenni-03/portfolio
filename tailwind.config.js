/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    '@tailwindcss/forms',
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
