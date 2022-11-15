const { series } = require('async');
const { exec } = require('child_process');

series([
  // Remove any prior build assets.
  callback => exec('rm -rf ./dist', callback),
]);
