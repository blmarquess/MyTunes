module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: '320px',
      // => @media (min-width: 640px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
