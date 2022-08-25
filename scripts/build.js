const { series } = require('async');
const { exec } = require('child_process');

series([
  callback => exec('rm -rf ./dist', callback),
  callback => exec('tsc -p tsconfig.build.json', callback),
  callback =>
    exec(
      "rsync -avm --include '*/' --include '*.css' --exclude '*' . dist",
      callback
    ),
]);
