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
        'Getting Started',
        'Documentation',
        'Design Tokens',
        'Media',
        'Navigation',
        'Content',
        'Templates',
        'Pages',
        'Code Examples',
        'Utility Components',
      ],
    },
  },
  docs: {
    theme: customTheme,
  },
};
