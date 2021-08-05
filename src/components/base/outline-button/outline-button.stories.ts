import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
// import { AllIcons } from '../outline-icon/config';
import { argTypeTarget } from '../outline-link/config';
import { argTypeSlotContent } from '../../base/outline-element/utils/utils';
import { ButtonVariant, ButtonSize } from './outline-button';
import './outline-button';

const buttonOptions: ButtonVariant[] = [
  'none',
  'primary',
  'secondary',
  'tertiary',
];

const sizeOptions: ButtonSize[] = ['small', 'medium', 'large'];

export default {
  title: 'Atoms/Button',
  component: 'outline-button',
  argTypes: {
    ...argTypeSlotContent,
    target: argTypeTarget,
    isDisabled: {
      description:
        '**Boolean:** Set whether the button is disabled. Only applies to implementations not using the url property',
      control: {
        type: 'boolean',
      },
    },
    url: {
      description:
        '**String:** The url to use for a link. This will render an anchor element. Do not set this prop if you want to render a button element.',
      control: {
        type: 'text',
      },
    },
    variant: {
      description:
        '**ButtonVariant (none, primary, secondary, teritary)**: The button style variant to use.',
      control: {
        type: 'select',
        options: buttonOptions,
      },
    },
    size: {
      description:
        '**ButtonSize (small, medium, large)** The button size to use',
      control: {
        type: 'select',
        options: sizeOptions,
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
  parameters: {
    docs: {
      description: {
        component: `
This component renders a button that can either be a link or trigger an action.

## Difference from \`button\` element

This is rendered as an \`a\` element if a link and a \`button\` element if not a link. This allows for consistent styling that matches the user expectation of a button while matching the browser expectation for those elements.
        `,
      },
      source: {
        code: `
<outline-button
  url="{{ url }}"
  target="{{ target }}"
  variant="{{ variant }}"
  disabled="{{ disabled }}"
  icon="{{ icon }}"
>
  {{ defaultSlot }}
</outline-button>
        `,
      },
    },
  },
};

const Template = ({
  defaultSlot,
  isDisabled,
  icon,
  url,
  target,
  variant,
  size,
  onClick,
  onKeyUp,
}): TemplateResult =>
  html`
    <outline-button
      url="${ifDefined(url)}"
      target="${ifDefined(target)}"
      variant="${variant}"
      size="${size}"
      ?isDisabled="${isDisabled}"
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
  size: 'medium',
};

export const IconLink = Template.bind({});
IconLink.args = {
  defaultSlot: 'Link button w/icon',
  size: 'medium',
  url: '#',
  variant: 'primary',
  icon: 'arrowNarrowRightOutline',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  defaultSlot: 'Primary button',
  size: 'medium',
  variant: 'primary',
  onClick: (e: Event) => {
    e.preventDefault();
    console.log('onClick called!!');
  },
  onKeyUp: (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === ' ') {
      console.log(e);
    }
  },
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  defaultSlot: 'Secondary button',
  variant: 'secondary',
  size: 'medium',
};

export const TertiaryButton = Template.bind({});
TertiaryButton.args = {
  defaultSlot: 'Tertiary button',
  variant: 'tertiary',
  size: 'medium',
};
