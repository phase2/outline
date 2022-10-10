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
    // ['@babel/plugin-proposal-class-properties', { loose: false }],
    // ['@babel/plugin-proposal-private-methods', { loose: false }],
    // '@babel/plugin-proposal-export-default-from',
    // '@babel/plugin-syntax-dynamic-import',
    // [
    //   '@babel/plugin-proposal-object-rest-spread',
    //   { loose: true, useBuiltIns: true },
    // ],
    // 'babel-plugin-macros',
    // ['emotion', { sourceMap: true, autoLabel: true }],
  ],
};
