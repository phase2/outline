/* eslint-disable global-require */
/* eslint-disable no-console */
import postcss from 'postcss';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { writeFile, readFile } from 'node:fs/promises';
import outline from '../outline.config.js';
import config from '@phase2/outline-config/postcss.config';
import { addScopeToStyles } from '@phase2/outline-core/src/internal/light-dom.mjs';

/**
 * Function declared via watcher to handle looping in any globally focus style generation.
 */
const createCssGlobals = () => {
  globalStylesheets();
};

/**
 * Function to loop over config declared CSS source files to process.
 */
const globalStylesheets = () => {
  outline.css.global.forEach(style => {
    global(style.src, style.dest);
  });
};

/**
 * Function to process a source file and output to a destination via postcss.
 *
 * @param {string} src
 * @param {string} dest
 */
const global = (src, dest) => {
  fs.readFile(src, (err, css) => {
    postcss([...config.plugins])
      .process(css, { from: src, to: dest })
      .then(result => {
        //console.log(`Writing ${src} to ${dest}...`);
        fs.writeFile(dest, result.css, () => true);
        if (result.map) {
          fs.writeFile(`${dest}.map`, result.map.toString(), () => true);
        }
      });
  });
};

/**
 * Function to wrap all generic .css files with CSS template literals suitable for consumption via Lit.
 *
 * @param {string} filepath
 */
const createCssLiterals = filepath => {
  if (filepath.includes('.global.scoped.css')) {
    return;
  }
  const filename = filepath.replace(/^.*[\\/]/, '');
  //console.log(filename);
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
${result.css}\`;`,
    () => true
  );
};

/**
 * Write light dom styles files.
 *
 * @param {string} filepath
 * @param {string} fileExtension
 * @param {string} cssPrefix
 */
const writeLightDomStyles = async (
  filepath,
  fileExtension = '',
  cssPrefix = ''
) => {
  const css = await readFile(filepath, 'utf8');
  const nFilePath = `${filepath.replace(
    '.global.',
    '.global.scoped.'
  )}${fileExtension}`;
  const componentName = path.basename(filepath, '.global.css');
  const result = await postcss([...config.plugins]).process(css, {
    from: filepath,
    to: nFilePath,
  });
  const newCss = addScopeToStyles(result.css, componentName);
  const data =
    cssPrefix === ''
      ? newCss
      : `${cssPrefix}
    ${newCss}\`;`;
  await writeFile(nFilePath, data);
};

/**
 * Function to wrap all generic .css files with CSS template literals suitable for consumption via Lit.
 *
 * @param {string} filepath
 */
const createLightDomStyles = async filepath => {
  const cssPrefix = `import { css } from 'lit';
  export default css\`
  /* Scoped CSS. */`;
  await writeLightDomStyles(filepath, '.lit.ts', cssPrefix);

  await writeLightDomStyles(filepath);
};

// Add scoping to any *.global.css files.
// Allow dot files to allow class-based scoping.
const globalCssFiles = await glob('packages/**/*.global.css', {
  dot: true,
});

// Await for light dom styles since we may include the generated files further down the chain.
for await (const globalCssFile of globalCssFiles) {
  await createLightDomStyles(globalCssFile);
}

// Run the component style generation.
const componentCss = await glob('packages/**/*.css', {
  ignore: ['packages/outline-storybook/**/*.css', '.storybook/**/*.css'],
});
componentCss.forEach(createCssLiterals);

// Run the global style generation.
createCssGlobals();
