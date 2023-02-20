/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{jsx,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
      },
      height:  {
        'screen-3/4': '92vh',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
