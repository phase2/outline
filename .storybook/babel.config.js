const modules = process.env.BABEL_MODE === 'cjs' ? 'auto' : false;
const targets =
  process.env.BABEL_MODE === 'modern' ? { chrome: '79' } : 'defaults';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        shippedProposals: true,
        useBuiltIns: 'usage',
        corejs: '3',
        targets,
        modules,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    // 'babel-plugin-named-exports-order',
    [
      '@babel/plugin-proposal-decorators',
      {
        decoratorsBeforeExport: true,
      },
    ],
  ],
};
