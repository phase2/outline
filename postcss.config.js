module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 1 }),
    require('tailwindcss'),
    require('postcss-discard-comments'),
  ],
};
