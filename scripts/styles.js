/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-console */
const postcss = require('postcss');
const fs = require('fs');
const glob = require('glob');
const config = require('../postcss.config');
const destBasePath = 'dist';

/**
 * Function to wrap all generic .css files with CSS template literals suitable for consumption via Lit.
 *
 * @param {string} filepath
 */
const createCssLiterals = filepath => {
  const filename = filepath.replace(/^.*[\\\/]/, '');
  fs.readFile(filepath, (err, css) => {
    const nFilePath = `${filepath}.lit.ts`;
    postcss([...config.plugins])
      .process(css, { from: filepath, to: nFilePath })
      .then(result => {
        if (filepath.includes('css-variables')) {
          createVariableLiterals(result, nFilePath);
        } else {
          createComponentLiterals(result, nFilePath);
        }
      });
  });
};

const createComponentLiterals = (result, path) => {
  fs.writeFile(
    path,
    `
import { css } from 'lit';
export default css\`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
/* Apply proper CSS for accessibly hiding elements to each component. */
:host([aria-hidden="true"]),
[aria-hidden="true"],
.visually-hidden {
  position: absolute !important;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  width: 1px;
  height: 1px;
  word-wrap: normal;
}
/* Apply component specific CSS */
${result.css}\`;`,
    () => true
  );
};

const createVariableLiterals = (result, path) => {
  fs.writeFile(
    path,
    `
import { css } from 'lit';
export default css\`
/* Apply CSS Variables to the host element. */
:host {
${result.css}\`;`,
    () => true
  );
};

// Ensure dist directory exists.
if (!fs.existsSync(destBasePath)) {
  fs.mkdirSync(destBasePath);
}

// Run the component style generation.
glob('packages/**/*.css', (err, files) => {
  files.forEach(createCssLiterals);
});
