import customTheme from './CustomTheme';

import './storybook-styles.css';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    expanded: true,
  },
  options: {
    storySort: {
      order: [
        'Documentation',
        'Protons',
        'Atoms',
        'Molecules',
        'Organisms',
        'Templates',
        'Pages',
        'Code Examples',
      ],
    },
  },
  docs: {
    theme: customTheme,
  },
};
