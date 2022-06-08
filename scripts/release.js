const { execSync } = require('child_process');
const semver = require('semver');
const fs = require('fs');

const getPackageJSON = () => {
  const packageJSON = fs.readFileSync('./package.json', 'utf-8');
  return JSON.parse(packageJSON);
};

const setPackageJSONVersions = (originalVersion, version) => {
  packageJSON.version = originalVersion;
  packageJSON.developmentVersion = version;
  fs.writeFileSync('package.json', JSON.stringify(packageJSON, null, 2));
};

const packageJSON = getPackageJSON();
const originalVersion = `${packageJSON.version}`;
const version = semver.inc(
  process.env.NODE_ENV === 'development'
    ? packageJSON.developmentVersion
    : packageJSON.version,
  'minor'
);

const force = process.env.NODE_ENV === 'development' ? '--force' : '';

const registry =
  process.env.NODE_ENV === 'development'
    ? '--registry http://localhost:4873'
    : '';

try {
  execSync(
    `npm version ${version} --allow-same-version ${registry} && npm publish --access public ${force} ${registry}`
  );
} catch (exception) {
  setPackageJSONVersions(originalVersion, version);
}

if (process.env.NODE_ENV === 'development') {
  setPackageJSONVersions(originalVersion, version);
}
