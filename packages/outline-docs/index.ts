const path = require('path');

exports.outlineStories = [
  // Intentionally ordering welcome page first.
  path.join(__dirname, 'src/guides/welcome.mdx'),
  // Component development guides.
  path.join(__dirname, 'src/guides/development/component-development/**/*.mdx'),
  // Component usage guides.
  path.join(__dirname, 'src/guides/consumers/**/*.mdx'),
  // QA/UAT usage guides.
  path.join(__dirname, 'src/guides/qa-uat/**/*.mdx'),
  // Tooling usage guides.
  path.join(__dirname, 'src/guides/tooling/**/*.mdx'),
];
