// craco.config.js
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

module.exports = {
  style: {
    postcss: {
      plugins: [autoprefixer, tailwind],
    },
  },
};
