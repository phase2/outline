import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  orientations,
} from './outline-button-group';
import './outline-button-group';

export default {
  title: 'Navigation/Button Group',
  component: 'outline-button-group',
  argTypes: {
    orientation: {
      description:
        '**`<Orientation>`("horizontal" | "vertical"):** <br> Sets orientation of list',
      options: orientations,
      control: { type: 'select' },
    },
  },
  args: {
    itemCount: 3,
    orientation: ' horizontal',
  },
};
const items = itemCount => {
  const itemList = [];
  for (let i = 0; i < itemCount; i++) {
    itemList.push({ text: `button ${i + 1}` });
  }
  return itemList;
};

const Template = ({
  itemCount,
}): TemplateResult =>
  html`
    <outline-button-group>
    ${items(itemCount).map(
        item => html`
          <li style=${`padding: 0.5rem; list-style: none`}>
          <outline-button>${item.text}</outline-button>
          </li>
        `
      )}
    </outline-button-group>
  `;

export const ButtonGroup = Template.bind({});
