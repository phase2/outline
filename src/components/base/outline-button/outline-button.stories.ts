import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  argTypeSlotContent,
} from '../outline-element/utils/utils';
import { ButtonVariant, ButtonSize } from './outline-button';
import './outline-button';

const buttonOptions: ButtonVariant[] = ['none', 'primary', 'secondary'];
const buttonSizes: ButtonSize[] = ['small', 'medium', 'large'];

export default {
  title: 'Navigation/Button',
  component: 'outline-button',
  argTypes: {
    ...argTypeSlotContent,
    target: {
      name: 'button-target',
      description: 'https://www.w3schools.com/tags/att_a_target.asp',
      options: [undefined, '_blank', '_self', '_parent', '_top'],
      control: {
        type: 'select',
      },
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
    },
    isDisabled: {
      name: 'is-disabled',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
      description:
        'Set whether the button is disabled. Only applies to implementations not using the url property',
      control: {
        type: 'boolean',
      },
    },
    url: {
      name: 'button-url',
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description:
        'The url to use for a link. This will render an anchor element. Do not set this prop if you want to render a button element.',
      control: {
        type: 'text',
      },
    },
    label: {
      name: 'button-label',
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description:
        'Label to be passed to `aria-label` on the link or button element.',
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'button-variant',
      table: { category: 'Properties', defaultValue: { summary: 'primary' } },
      description: 'The button style variant to use.',
      options: buttonOptions,
      control: {
        type: 'select',
      },
    },
    size: {
      name: 'button-size',
      table: { category: 'Properties', defaultValue: { summary: 'medium' } },
      description: 'The button size variant.',
      options: buttonSizes,
      control: {
        type: 'select',
      },
    },
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
    },
  },
};

const Template = ({
  defaultSlot,
  isDisabled,
  url,
  target,
  variant,
  size,
  onClick,
  onKeyUp,
}): TemplateResult =>
  html`
<outline-button
  button-url="${ifDefined(url)}"
  button-target="${ifDefined(target)}"
  button-variant="${variant}"
  button-size="${size}"
  .onClick="${onClick}"
  .onKeyUp="${onKeyUp}"
  ?is-disabled=${isDisabled}
>
  ${defaultSlot}
</outline-button>
  `;

export const Link = Template.bind({});
Link.args = {
  defaultSlot: 'Link Button',
  url: 'https://outline.phase2tech.com',
  target: '_blank',
  variant: 'primary',
  isDisabled: false,
};

const inlineIconDecorator = [
  (Story): TemplateResult => html`
<div class="flex flex-row">
${Story()}
</div> `,
];

const PrimaryButtonsTemplate = (): TemplateResult =>
  html`
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <p>This section of primary buttons demonstrates various configurations, and can be navigated to test hover/focus states.</p>
  <div class="my-6">
    <outline-button class="mr-2" button-url="#" button-size="large" button-label="Large Button">Large Button</outline-button>
    <outline-button class="mr-2" button-url="#" button-label="Button">Button</outline-button>
    <outline-button class="mr-2" button-url="#" button-size="small" button-label="Small Button">Small Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>  
  <p>This section of primary buttons demonstrates the disabled version of the same buttons as the previous example.</p>
  
  <div class="my-6">
    <outline-button class="mr-2" button-url="#" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
    <outline-button class="mr-2" button-url="#" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2" button-url="#" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>  
  <p>This section highlights using icons in the primary button.</p>
  
  <div class="my-6">
    <outline-button class="mr-2" button-url="#" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2" button-url="#" button-label="Button">
      Button
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2" button-url="#" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
  </div>
`;

export const PrimaryButtons = PrimaryButtonsTemplate.bind({});
PrimaryButtons.parameters = {
  name: 'Primary Button',
  docs: {
    source: {
      code: `
<!-- Primary Buttons -->
<outline-button class="mr-2" button-url="#" button-size="large" button-label="Large Button">Large Button</outline-button>
<outline-button class="mr-2" button-url="#" button-label="Button">Button</outline-button>
<outline-button class="mr-2" button-url="#" button-size="small" button-label="Small Button">Small Button</outline-button>
<!-- Primary Buttons (Disabled) -->
<outline-button class="mr-2" button-url="#" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
<outline-button class="mr-2" button-url="#" button-label="Button" is-disabled>Button</outline-button>
<outline-button class="mr-2" button-url="#" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
      `,
    },
  },
};

const SecondaryButtonsTemplate = (): TemplateResult =>
  html`
<outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
<p>This section of primary buttons demonstrates various configurations, and can be navigated to test hover/focus states.</p>
<div class="my-6">
  <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button">Large Button</outline-button>
  <outline-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button">Button</outline-button>
  <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button">Small Button</outline-button>
</div>
<outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>  
<p>This section of primary buttons demonstrates the disabled version of the same buttons as the previous example.</p>
<div class="my-6">
  <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  <outline-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button" is-disabled>Button</outline-button>
  <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
</div>
<outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>  
  <p>This section highlights using icons in the primary button.</p>
  
  <div class="my-6">
    <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button">
      Button
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
  </div>
`;

export const SecondaryButtons = SecondaryButtonsTemplate.bind({});
//PrimaryButtons.decorators = inlineIconDecorator;
SecondaryButtonsTemplate.parameters = {
  name: 'Secondary Button',
  docs: {
    source: {
      code: `
      <!-- Primary Buttons -->
      <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button">Large Button</outline-button>
      <outline-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button">Button</outline-button>
      <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button">Small Button</outline-button>
      <!-- Primary Buttons (Disabled) -->
      <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
      <outline-button class="mr-2" button-variant="secondary" button-url="#" button-label="Button" is-disabled>Button</outline-button>
      <outline-button class="mr-2" button-variant="secondary" button-url="#" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    `,
    },
  },
};

const LinkButtonsTemplate = (): TemplateResult =>
  html`  
  <outline-button class="mr-2" button-variant="none" button-url="#">Link Button</outline-button>
  <outline-button class="mr-2" button-variant="none" button-url="#" icon-right="chevron-down">Link Button</outline-button>
  <outline-button class="mr-2" button-variant="none" button-url="#" is-disabled>Disabled Link Button</outline-button>
`;

export const LinkButtons = LinkButtonsTemplate.bind({});
LinkButtons.decorators = inlineIconDecorator;
