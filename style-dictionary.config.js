module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'tokens/',
      files: [
        {
          destination: 'outline-generated.theme.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
        {
          destination: 'tokens.js',
          format: 'javascript/module-flat',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
