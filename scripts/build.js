const { series } = require('async');
const { exec } = require('child_process');

series([
  // Remove any prior build assets.
  callback => exec('rm -rf ./dist', callback),
  // Build the client-side assets.
  callback =>
    exec(
      'esbuild index.ts --bundle --outdir=dist --tsconfig=tsconfig.build.json',
      callback
    ),
  callback => exec('tsc -p tsconfig.build.json', callback),
  callback =>
    exec(
      "rsync -avm --remove-source-files --include '*.js' --include '*.css' --exclude '*' . dist",
      callback
    ),
]);
