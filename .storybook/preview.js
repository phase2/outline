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
        'Welcome Guide',
        'Coding Guide',
        'Media',
        'Navigation',
        'Content',
        'Templates',
        'Pages',
        'Utility Components',
      ],
    },
  },
};
