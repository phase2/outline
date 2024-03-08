/**
 * @file
 * This file is a script that is called by web components and other TypeScript packages
 * to create a consistent build process. It uses the 'async' library to run a series
 * of tasks in order. These tasks include cleaning up prior build assets, running the
 * build process, running the TypeScript compiler, and copying styles to the
 * 'dist' directory after the build. This ensures a clean, efficient, and consistent
 * build process across different components and packages.
 */

const { series } = require('async');
const { exec } = require('child_process');
const fs = require('fs');

series([
  // This callback removes any prior build assets. This is done to ensure a clean
  // build environment. The 'rm -rf ./dist' command deletes the 'dist' directory and
  // all its contents. This is a common practice in build processes to avoid conflicts
  // with previous builds. More about 'rm' command can be found here:
  // https://www.geeksforgeeks.org/rm-command-linux-examples/
  callback => exec('rm -rf ./dist', callback),

  // This callback runs the Vite build process. Vite is a modern front-end build
  // tool that provides faster and leaner development experience. The 'vite build'
  // command packages, minifies and optimizes your code for production. More about
  // Vite and its build process can be found here: https://vitejs.dev/guide/build.html
  callback => exec('vite build', callback),

  // This callback runs the TypeScript compiler. This is done to transpile
  // TypeScript code into JavaScript code that can be run in the browser. The
  // '--project tsconfig.build.json' option tells the compiler to use the settings
  // specified in the 'tsconfig.build.json' file. More about TypeScript compiler
  // options can be found here: https://www.typescriptlang.org/docs/handbook/compiler-options.html
  callback => exec('npx tsc --project tsconfig.build.json', callback),

  // This callback copies the styles to the 'dist' directory after the build.
  // This is done to ensure that the styles are included in the final build. The
  // 'cp -R src/style dist/src/style' command recursively copies the 'src/style'
  // directory and its contents to the 'dist/src/style' directory. More about 'cp'
  // command can be found here: https://www.geeksforgeeks.org/cp-command-linux-examples/
  callback =>
    fs.existsSync('src/style')
      ? exec('cp -R src/style dist/src/style', callback)
      : callback(),
]);
