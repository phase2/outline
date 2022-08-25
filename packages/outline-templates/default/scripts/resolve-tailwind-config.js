#! usr/bin/env node
const fs = require('fs');
const path = require('path');
const { format, resolveConfig: resolvePrettierConfig } = require('prettier');
const resolveTailwindConfig = require('tailwindcss/resolveConfig');
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default;

const tailwindConfig = require('../tailwind.config');

const tailwindThemeConfig = resolveTailwindConfig(tailwindConfig).theme;

const flattenTailwindColors = colors =>
  Object.keys(flattenColorPalette(colors));

const createTailwindUnionType = colors => colors.map(v => `'${v}'`).join(' | ');

resolvePrettierConfig('.prettierrc')
  .then(options => {
    const tailwindColors = flattenTailwindColors(tailwindThemeConfig.colors);
    return format(
      `
  /**
   * This file is auto generated via npm run generate.resolved-tailwind
   */

  export type Color = ${createTailwindUnionType(tailwindColors)}

  export const ALL_COLORS: Color[] = ${JSON.stringify(tailwindColors)}

  export default ${JSON.stringify(tailwindThemeConfig)}
  `,
      { ...options, parser: 'typescript' }
    );
  })
  .then(formatted =>
    fs.writeFileSync(
      path.join(__dirname, '../src/resolved-tailwind-config.ts'),
      formatted
    )
  );
