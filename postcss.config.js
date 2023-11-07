module.exports = {
  plugins: [
    require('postcss-preset-env')({ stage: 1 }),
    require('postcss-nested'),
    require('postcss-nested-import'),
    require('postcss-discard-comments'),
  ],
};
