import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
// import { AllIcons } from '../outline-icon/config';
import { argTypeTarget } from '../outline-link/config';
import { argTypeSlotContent } from '../../base/outline-element/utils/utils';
import { ButtonVariant } from './outline-button';
import './outline-button';

const buttonOptions: ButtonVariant[] = [
  'none',
  'primary',
  'secondary',
  'tertiary',
];

export default {
  title: 'Atoms/Button',
  component: 'outline-button',
  argTypes: {
    ...argTypeSlotContent,
    target: argTypeTarget,
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    url: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: buttonOptions,
      },
    },
    // icon: {
    //   control: {
    //     type: 'select',
    //     options: AllIcons,
    //   },
    // },
  },
  args: {
    variant: 'primary',
  },
};

const Template = ({
  defaultSlot,
  disabled,
  icon,
  url,
  target,
  variant,
  onClick,
  onKeyUp,
}): TemplateResult =>
  html`
    <outline-button
      url="${ifDefined(url)}"
      target="${ifDefined(target)}"
      variant="${variant}"
      ?disabled="${disabled}"
      icon="${ifDefined(icon)}"
      @click="${onClick}"
      @keyup="${onKeyUp}"
    >
      ${defaultSlot}
    </outline-button>
  `;

export const Link = Template.bind({});
Link.args = {
  defaultSlot: 'Link button',
  url: '#',
};

export const IconLink = Template.bind({});
IconLink.args = {
  defaultSlot: 'Link button w/icon',
  url: '#',
  variant: 'primary',
  icon: 'arrowNarrowRightOutline',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  defaultSlot: 'Primary button',
  variant: 'primary',
  onClick: (e: Event) => {
    e.preventDefault(), console.log('onClick called!!');
  },
  onKeyUp: (e: KeyboardEvent) => {
    if (e.key === ' ') {
      console.log(e);
    }
  },
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  defaultSlot: 'Secondary button',
  variant: 'secondary',
};

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
  defaultSlot: 'Tertiary button',
  variant: 'tertiary',
};
