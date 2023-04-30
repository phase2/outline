/**
 * Takes an argument of the path to a directory containing package directories to link for
 * local development. Will register them all for local development in the current project.
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const directoryPath = process.argv[2];
const pattern = /^[^\.]/;

const originalCwd = process.cwd();

if (!directoryPath) {
  console.error(
    'Directory containing packages to link must be provided as first argument'
  );
  process.exit(1);
}

fs.readdir(directoryPath, async (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    process.exit(1);
  }

  const matchingDirs = files.filter(file => {
    const filePath = path.join(directoryPath, file);
    return fs.statSync(filePath).isDirectory() && pattern.test(file);
  });

  if (matchingDirs.length === 0) {
    console.log(
      `No directories matching pattern: /${pattern}/ found in ${directoryPath}`
    );
    process.exit();
  }

  for (const dir of matchingDirs) {
    const dirPath = path.join(directoryPath, dir);
    const pkgJsonPath = path.join(dirPath, 'package.json');

    if (!fs.existsSync(pkgJsonPath)) {
      console.error(`Skipping ${dirPath}: No 'package.json' file found`);
      continue;
    }

    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath));

    try {
      process.chdir(dirPath);

      await execAsync('yarn unlink').catch(error => {
        if (!error.message.includes('No registered package found')) {
          throw error;
        }
      });

      const linkOutput = await execAsync(`yarn link`);
      process.chdir(originalCwd);

      const linkOutput2 = await execAsync(`yarn link ${pkgJson.name}`);
    } catch (error) {
      console.error(`Error linking package: ${error}`);
      process.exit(1);
    }
  }
});

function execAsync(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
}