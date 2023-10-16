module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested-import'),
    require('postcss-custom-properties'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('postcss-discard-comments'),
  ],
};
