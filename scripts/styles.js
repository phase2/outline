/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-console */
const yargs = require('yargs');
const gaze = require('gaze');
const postcss = require('postcss');
const fs = require('fs');
const glob = require('glob');
const config = require('../postcss.config');
const outline = require('../outline.config');
const components = require('../src/custom-elements.json');
const options = yargs.option('watch', {
  type: 'boolean',
  describe: 'Watch the file system for changes and render automatically',
}).argv;

const globalStylesheets = () => {
  outline.css.global.forEach(style => {
    global(style.src, style.dest);
  });
};

const foucStylesheet = () => {
  let style = '';
  if (outline.css.fouc.enabled && components.tags.length) {
    components.tags.forEach(tag => {
      /**
       * Any rules created below with :not(:defined) do NOT require
       * any negating rule with opacity:1. This allows for 2 things.
       * 1. Drastically reduced CSS.
       * 2. ensure we don't set opacity to 1 by default EVER. There
       * could be any number of reasons that we would want it to
       * inherit/revert to its previous value, and not 1.
       */
      style += `
      /* Prevent FOUC on ${tag.name} */      
      ${tag.name}:not(:defined) {
        opacity: 0;
      }
      /* Prevent FOUC on all elements inside of ${tag.name} */
      ${tag.name}:not(:defined) * {
        opacity: 0;
      }
      `;
    });
    fs.writeFile(outline.css.fouc.dest, style, () => true);
  }
};

const global = (src, dest) => {
  fs.readFile(src, (err, css) => {
    postcss([...config.plugins])
      .process(css, { from: src, to: dest })
      .then(result => {
        console.log(`Writing ${src} to ${dest}...`);
        fs.writeFile(dest, result.css, () => true);
        if (result.map) {
          fs.writeFile(`${dest}.map`, result.map.toString(), () => true);
        }
      });
  });
};

const litify = filepath => {
  const filename = filepath.replace(/^.*[\\\/]/, '');
  //console.log(`${filename} was changed`);
  fs.readFile(filepath, (err, css) => {
    const nFilePath = `${filepath}.lit.ts`;
    postcss([...config.plugins])
      .process(css, { from: filepath, to: nFilePath })
      .then(result => {
        fs.writeFile(
          nFilePath,
          `
import { css } from 'lit';
export default css\`
${
  result.css
  // .replace(/\\/g, '\\\\')
  // .replace(/`/g, '\\`')
  // .replace(/^(?:[\t ]*(?:\r?\n|\r))+/g, '')
}\`;`,
          () => true
        );
      });
  });
};

// Ensure dist directory exists.
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Run the global style generation.
globalStylesheets();
foucStylesheet();

// Run the component style generation.
glob('src/components/**/*.css', (err, files) => {
  files.forEach(litify);
});

// Watch mode with --watch in cli.
if (options.watch) {
  // Watch globals.
  gaze('*.css', (err, watcher) => {
    watcher.on('added', globalStylesheets);
    watcher.on('changed', globalStylesheets);
    watcher.on('added', foucStylesheet);
    watcher.on('changed', foucStylesheet);
  });

  // Watch components.
  gaze('src/components/**/*.css', (err, watcher) => {
    watcher.on('added', litify);
    watcher.on('changed', litify);
  });
}
// ${prettier.format(result.css, {parser: "css"})}
