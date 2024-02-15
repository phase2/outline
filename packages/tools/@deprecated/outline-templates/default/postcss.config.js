module.exports = {
  plugins: [
    require('postcss-nested-import'),
    require('postcss-preset-env')({ stage: 1 }),
    require('tailwindcss'),
    require('postcss-discard-comments'),
  ],
};
