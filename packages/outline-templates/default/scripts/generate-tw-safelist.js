#! usr/bin/env node
const fs = require('fs');
const path = require('path');
const resolveTailwindConfig = require('tailwindcss/resolveConfig');
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default;

const tailwindConfig = require('../tailwind.config');

const tailwindThemeConfig = resolveTailwindConfig(tailwindConfig).theme;
const colorPalette = colors => Object.keys(flattenColorPalette(colors));

const tailwindColors = colorPalette(tailwindThemeConfig.colors);
const tailwindFontSizes = Object.keys(tailwindThemeConfig.fontSize);
const tailwindFontWeights = Object.keys(tailwindThemeConfig.fontWeight);
const tailwidSpacingValues = Object.keys(tailwindThemeConfig.spacing);

const variableMap = (variable, prefix) =>
  variable.map(v => `${prefix}-${v}`).join('\n');

fs.writeFileSync(
  path.join(__dirname, '../src/safelist.txt'),
  `# Tailwind Safelist Classes

## Background Colors
${variableMap(tailwindColors, 'bg')}

## Text Colors
${variableMap(tailwindColors, 'text')}

## Border Colors
${variableMap(tailwindColors, 'border')}

## Font Sizes
${variableMap(tailwindFontSizes, 'text')}

## Font Weights
${variableMap(tailwindFontWeights, 'font')}

## Width Values
${variableMap(tailwidSpacingValues, 'w')}
`
);
