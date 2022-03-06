/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-console */

const fs = require('fs');
const outline = require('../outline.config.js');
const components = require('../src/custom-elements.json');

// Ensure dist directory exists.
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

/**
 * @todo document this.
 */
const generateComponentQuerySelector = () => {
  let selector = '';
  if (components.tags.length) {
    components.tags.forEach((tag, index) => {
      selector += `${tag.name}${
        index !== components.tags.length - 1 ? ', ' : ''
      }`;
    });
    return selector;
  }
};

/**
 * @todo document this.
 */
const generateComponentArray = () => {
  let outlineComponents = [];
  if (components.tags.length) {
    components.tags.forEach(tag => {
      outlineComponents.push(tag.name);
    });
    return outlineComponents;
  }
};

/**
 * Function to generate a project specific stylesheet to correct or minify the FOUC.
 */
const generateComponentHelper = () => {
  fs.writeFile(
    'dist/outline-components.js',
    `
export const outlineComponentSelector = '${generateComponentQuerySelector()}'
export const outlineComponents = ${JSON.stringify(generateComponentArray())}
  `,
    () => true
  );
};

generateComponentHelper();
