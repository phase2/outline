import { mkdirsSync, copySync } from 'fs-extra';
import path = require('path');
import { execSync } from 'node:child_process';

/**
 * Creates story from custom element json file
 * @param {string} args - Args: name of project
 * @param {string} flags - flags: name of the starter package. Defaults to 'default';
 * @returns Nothing, fixing lint warning
 */
export const initProject = (args: any, flags: any): void => {
  const projectName = flags.test ? `${args.name}-test` : args.name;
  const starterTemplate = flags.template || 'default';
  const nameSpace = `${flags.nameSpace || projectName}`.replace(
    /[^\dA-Za-z]/g,
    '-'
  );
  const currDir = process.cwd();
  const resolvedPath = path.resolve(currDir, nameSpace);
  const starterPath = path.resolve(
    `${resolvedPath + '/node_modules/@phase2/outline-templates/'}`,
    starterTemplate
  );

  mkdirsSync(resolvedPath);
  process.chdir(resolvedPath);

  execSync('yarn add @phase2/outline-templates', { stdio: [0, 1, 2] });

  copySync(starterPath, resolvedPath);

  execSync('yarnpkg', { stdio: [0, 1, 2] });
};
