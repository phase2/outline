import { html, TemplateResult } from 'lit';
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
      control: {
        type: 'select',
        options: IconList,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: IconVariant,
      },
    },
    url: {
      control: {
        type: 'text',
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
