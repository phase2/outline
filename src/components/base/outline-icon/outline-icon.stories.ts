import { html, TemplateResult } from 'lit-html';
import { ifDefined } from 'lit/directives/if-defined';
import {
  IconTypeSolid,
  IconTypeOutline,
  IconVariant,
  IconTypeCustom,
  IconList,
} from './config';

import { argTypeColor } from '../outline-element/utils/utils';
import './outline-icon';

export default {
  title: 'Atoms/Icon',
  component: 'outline-icon',
  argTypes: {
    color: argTypeColor,
    icon: {
      description: 'Select from a pre-defined list of icons.',
      control: {
        type: 'select',
        options: IconList,
      },
    },
    variant: {
      description: 'Is the icon solid or does it use an outline.',
      control: {
        type: 'select',
        options: IconVariant,
      },
    },
    url: {
      description: 'Specify your own source URL for an icon.',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders an icon as an \`img\` element.

## Choosing the icon to render

### Choosing a pre-defined icon

You can select from a predefined \`icon\`.

_@todo add documentation about \`variant\` and \`color\` when those are implemented._

### Specifying your own source URL

If you specify a \`url\`, this will be used.

## Differences from an \`img\` element

This component allows to vary the icon using attributes rather than selecting a new icon.

_@todo specify why this would be used instead of an \`img\` element when the \`url\` pattern is used._

        `,
      },
      source: {
        code: `
<outline-icon
  icon="{{ icon }}"
  url="{{ url }}"
  color="{{ color }}"
></outline-icon>
        `,
      },
    },
  },
};

const Template = ({ icon, url, color }): TemplateResult =>
  html`
    <div class="w-24">
      <outline-icon
        icon="${ifDefined(icon)}"
        url="${ifDefined(url)}"
        color="${ifDefined(color)}"
      ></outline-icon>
    </div>
  `;

export const SelectIcon = Template.bind({});
SelectIcon.args = {
  icon: IconTypeSolid.ADJUSTMENTS_SOLID,
};

export const AllCustomIcons = (): TemplateResult => html`
  ${Object.values(IconTypeCustom).map(
    icon =>
      html`
        <div class="text-center w-24">
          <outline-icon icon="${ifDefined(icon)}"></outline-icon>
          <div class="text-xs">${icon}</div>
        </div>
      `
  )}
`;

export const AllOutlineIcons = (): TemplateResult => html`
  ${Object.values(IconTypeOutline).map(
    icon =>
      html`
        <div class="text-center w-24">
          <outline-icon icon="${ifDefined(icon)}"></outline-icon>
          <div class="text-xs">${icon}</div>
        </div>
      `
  )}
`;

export const AllSolidIcons = (): TemplateResult => html`
  ${Object.values(IconTypeSolid).map(
    icon =>
      html`
        <div class="text-center w-24">
          <outline-icon icon="${ifDefined(icon)}"></outline-icon>
          <div class="text-xs">${icon}</div>
        </div>
      `
  )}
`;
