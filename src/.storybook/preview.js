import customTheme from './CustomTheme';
import { addParameters } from '@storybook/web-components';
import './storybook-styles.css';

addParameters({
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
});
