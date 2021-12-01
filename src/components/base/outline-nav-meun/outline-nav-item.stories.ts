import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './outline-nav-item';
import { ListItem } from './outline-nav-item';
export default {
  title: 'Navigation/OutlineNavItem',
  component: 'outline-nav-item',
  argTypes: {
    hasButton: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    item: {
      text: 'Residents',
      url: '#',
      sub: [
        {
          text: 'Find',
          sub: [
            { text: 'COVID-19 Information', url: '#' },
            { text: "Farmer's Markets", url: '#' },
            { text: 'Hospitals', url: '#' },
            { text: 'Libraries', url: '#' },
            { text: 'My Supervisorial District', url: '#' },
            { text: 'Parks', url: '#' },
            { text: 'Public WiFi Locations', url: '#' },
            { text: 'Recycling Drop-off', url: '#' },
            { text: 'Services Near Me (SMC Connect)', url: '#' },
            { text: 'Voting Information', url: '#' },
          ],
        },
      ],
    },
  },
};

const Template = ({ item, hasButton }): TemplateResult =>
  html`
    <outline-nav-item ?hasButton=${hasButton} .item=${item}> </outline-nav-item>
  `;

export const OutlineNavItemVariation = Template.bind({});
OutlineNavItemVariation.args = {};
