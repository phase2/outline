const { series } = require('async');
const { exec } = require('child_process');

series([
  // Remove any prior build assets.
  callback => exec('rm -rf ./dist', callback),
  // Build the client-side assets.
  callback =>
    exec(
      'esbuild index.ts --bundle --minify --sourcemap --outdir=dist --tsconfig=tsconfig.build.json',
      callback
    ),
  // Thinking this can be removed, as we handle linting earlier on.
  // Removing this from the Turborepo build may potentially speed up the build process.
  // callback => exec('tsc -p tsconfig.build.json', callback),
  callback =>
    exec(
      "rsync -avm --remove-source-files --include '*.css' --exclude '*' . dist",
      callback
    ),
]);
