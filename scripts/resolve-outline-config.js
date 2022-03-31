#! usr/bin/env node
const fs = require('fs');
const path = require('path');
const { format, resolveConfig: resolvePrettierConfig } = require('prettier');
const outlineConfig = require('../outline.config');

resolvePrettierConfig('.prettierrc')
  .then(options => {
    return format(
      `
/**
 * This file is auto generated via npm run generate.resolved-outline
 */
export default ${JSON.stringify(outlineConfig)}
  `,
      { ...options, parser: 'babel' }
    );
  })
  .then(formatted =>
    fs.writeFileSync(
      path.join(__dirname, '../src/resolved-outline-config.ts'),
      formatted
    )
  );
