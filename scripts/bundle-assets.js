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

/**
 * Function to sync an asset to the `dist` directory.
 *
 * @param {string} filepath
 */
const assetSync = filepath => {};

// Ensure dist directory exists.
if (!fs.existsSync(outline.destBasePath)) {
  fs.mkdirSync(outline.destBasePath);
}

// Run the component style generation.
glob('src/assets/**/*', (err, files) => {
  files.forEach(assetSync);
});

// Watch mode with --watch in cli.
if (options.watch) {
  // Watch components.
  gaze('src/assets/**/*', (err, watcher) => {
    watcher.on('added', createCssLiterals);
    watcher.on('changed', createCssLiterals);
  });
}
