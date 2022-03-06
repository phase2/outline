/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
/* eslint-disable no-console */
// TODO: Create separate lists based on folders to be read by Storybook for separated groups in stories
// TODO: Refactor templates
const fs = require('fs');
const path = require('path');

const svgPath = 'src/components/base/outline-svg/svgs';
const generatedIconsFilePath =
  'src/components/base/outline-svg/generated-svgs/';
const generatedIconListPath = 'src/components/base/outline-svg/';

const nameList = [];
const nameDelimiter = ['-', '_'];

const parseFiles = (fileNames, filepath, folder) => {
  const fileArr = {};
  fileNames.forEach(file => {
    const svgPath = path.resolve(filepath, file);
    let name = path.parse(file).name;

    if (nameList.includes(name)) {
      name = `${name}-${folder}`;
      nameList.push(name);
    } else {
      nameList.push(name);
    }
    const rawSvg = fs.readFileSync(svgPath, { encoding: 'utf8', flag: 'r' });
    fileArr[name] = rawSvg;
  });
  return fileArr;
};

const parseFolders = (folders, dir) => {
  const folderObj = {};
  folders.forEach(folder => {
    const filepath = path.resolve(dir, folder);
    const fileNames = fs.readdirSync(filepath);
    const fileObj = parseFiles(fileNames, filepath, folder);
    folderObj[folder] = fileObj;
  });
  return folderObj;
};

createSvgObjects = dir => {
  const folders = fs.readdirSync(dir);
  return parseFolders(folders, dir);
};

const camelize = s => s.replace(/[-_]./g, x => x.toUpperCase()[1]);

/**
 * Generates lit friendly svg format at outline-svg/generated-svgs/<folderName>.ts
 * @param svg
 * @param folder
 */
const generateIcons = (svg, folder) => {
  let data = `// !! This file is auto-generated, refer to the icon component story for more info' !!\n`;
  data += `import { svg } from 'lit';\n\n`;
  Object.entries(svg).forEach(([n, rawSvg]) => {
    data += `export const ${camelize(n)} = svg\`
  ${rawSvg}\`;\n\n`;
  });
  fs.writeFileSync(generatedIconsFilePath + `${folder}Icons.ts`, data);
};

const generateSvgImports = svg => {
  let data = '';
  Object.entries(svg).forEach(([n, svg]) => {
    data += `${camelize(n)},\n`;
  });
  return data;
};

const generateIconList = svg => {
  return Object.keys(svg).map(key => {
    if (nameDelimiter.some(i => key.includes(i))) {
      return `'${key}': ${camelize(key)},\n`;
    } else {
      return `${key},\n`;
    }
  });
};

/**
 * Generates iconList.ts file
 * @param svgs
 */
const generateSvgTemplates = svgs => {
  let iconsSorted = {};

  let iconListTemplate = `// !! This file is auto-generated, refer to the icon component story for more info' !!\n`;
  iconListTemplate += `import { SVGTemplateResult } from 'lit';\n`;
  Object.entries(svgs).forEach(([folder, svg]) => {
    generateIcons(svg, folder);
    iconsSorted[folder] = [];
    const iconList = generateIconList(svg).join(' ');
    iconsSorted[folder].push(iconList);

    iconListTemplate += 'import {\n';
    iconListTemplate += `${generateSvgImports(svg)}`;
    iconListTemplate += `} from './generated-svgs/${folder}Icons';\n`;
  });

  iconListTemplate += '\n';
  iconListTemplate += 'export type IconList = {\n';
  iconListTemplate += '[key: string]: SVGTemplateResult;\n';
  iconListTemplate += '};\n\n';

  Object.entries(iconsSorted).forEach(([iconFolder, icons]) => {
    iconListTemplate += `export const ${iconFolder}: IconList = {\n`;
    icons.forEach(icon => (iconListTemplate += `${icon}`));
    iconListTemplate += '};\n\n';
  });

  iconListTemplate += `export const iconList: IconList = {\n`;
  Object.keys(iconsSorted).forEach(
    iconFolder => (iconListTemplate += `...${iconFolder},\n`)
  );
  iconListTemplate += '}\n\n';

  fs.writeFileSync(generatedIconListPath + `iconList.ts`, iconListTemplate);
};

const main = () => {
  console.log('Generating SVG Files...');
  const svgs = createSvgObjects(svgPath);
  generateSvgTemplates(svgs);
  console.log('SVG Files Generated');
};

main();
