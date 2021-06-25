/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-console */
const yargs = require('yargs');
const gaze = require('gaze');
const postcss = require('postcss');
const fs = require('fs');
const glob = require('glob');
const config = require('../postcss.config');
// const prettier = require("prettier");

const options = yargs.option('watch', {
  alias: 'w',
  type: 'boolean',
  describe: 'Watch the file system for changes and render automatically',
}).argv;

const render = filepath => {
  const filename = filepath.replace(/^.*[\\\/]/, '');
  console.log(`${filename} was changed`);
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

glob('src/components/**/*.css', (err, files) => {
  files.forEach(render);
});

if (options.watch) {
  console.log('Watching component CSS for changes...');
  gaze('src/components/**/*.css', (err, watcher) => {
    watcher.on('added', render);

    watcher.on('changed', render);
  });
}
// ${prettier.format(result.css, {parser: "css"})}
