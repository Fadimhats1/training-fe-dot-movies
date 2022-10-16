/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        mobS: '320px',
        mobM: '375px',
        mobL: '576px',
        mobXL: '640px',
        tablet: '768px',
        tabletL: '992px',
        laptop: '1024px',
        laptopL: '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  important: true,
};
