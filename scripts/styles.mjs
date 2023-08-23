/* eslint-disable global-require */
/* eslint-disable no-console */
import yargs from 'yargs';
import gaze from 'gaze';
import postcss from 'postcss';
import fs from 'fs';
import path from 'path';
import glob from 'glob';
import outline from '../outline.config.js';
import config from '@phase2/outline-config/postcss.config';
import { addScopeToStyles } from '@phase2/outline-core/src/internal/light-dom.mjs';

const options = yargs.option('watch', {
  type: 'boolean',
  describe: 'Watch the file system for changes and render automatically',
}).argv;

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
 * Function to wrap all generic .css files with CSS template literals suitable for consumption via Lit.
 *
 * @param {string} filepath
 */
const createLightDomStyles = filepath => {
  fs.readFile(filepath, 'utf8', (err, css) => {
    const nFilePath = `${filepath.replace(
      '.global.',
      '.global.scoped.'
    )}.lit.ts`;
    const componentName = path.basename(filepath, '.global.css');
    postcss([...config.plugins])
      .process(css, { from: filepath, to: nFilePath })
      .then(result => {
        const newCss = addScopeToStyles(result.css, componentName);
        fs.writeFile(
          nFilePath,
          `
import { css } from 'lit';
export default css\`
/* Scoped CSS. */
${newCss}\`;`,
          () => true
        );
      });
  });
  fs.readFile(filepath, 'utf8', (err, css) => {
    const nFilePath = filepath.replace('.global.', '.global.scoped.');
    const componentName = path.basename(filepath, '.global.css');
    postcss([...config.plugins])
      .process(css, { from: filepath, to: nFilePath })
      .then(result => {
        const newCss = addScopeToStyles(result.css, componentName);
        fs.writeFile(nFilePath, newCss, () => true);
      });
  });
};

// Run the global style generation.
createCssGlobals();

// Add scoping to any *.global.css files.
// Allow dot files to allow class-based scoping.
glob('packages/**/*.global.css', { dot: true }, (err, files) => {
  files.forEach(createLightDomStyles);
});

// Run the component style generation.
glob(
  'packages/**/*.css',
  {
    ignore: [
      'packages/documentation/outline-storybook/**/*.css',
      '.storybook/**/*.css',
    ],
  },
  (err, files) => {
    files.forEach(createCssLiterals);
  }
);

// Watch mode with --watch in cli.
if (options.watch) {
  // Watch globals.
  gaze('*.css', { ignore: ['**/packages/**/*.css'] }, (err, watcher) => {
    watcher.on('added', createCssGlobals);
    watcher.on('changed', createCssGlobals);
  });

  // Watch components global scoping.
  gaze('packages/**/*.global.css', { dot: true }, (err, watcher) => {
    watcher.on('added', createLightDomStyles);
    watcher.on('changed', createLightDomStyles);
  });

  // Watch components.
  gaze(
    'packages/**/*.css',
    {
      ignore: [
        '**/dist/**/*.css',
        '*packages/documentation/outline-storybook/**/*.css',
      ],
    },
    (err, watcher) => {
      watcher.on('added', createCssLiterals);
      watcher.on('changed', createCssLiterals);
    }
  );
}
