import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  argTypeSlotContent,
} from '../outline-element/utils/utils';
import { ButtonVariant, ButtonSize } from './outline-button';
import './outline-button';

const buttonOptions: ButtonVariant[] = ['link', 'primary', 'secondary', 'tertiary'];
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

## CSS Variables

The primary coloring of the \`outline-button\` component is handled by the following CSS Variables. 

> Any consumer application that includes \`outline.theme.css\` can simply overwrite any relevant CSS Variables in a subsequent CSS include to affect change on the element styling using the following variables.

Additional documentation and references for these CSS Variables can be found in \`outline-button/css-variables/vars-default.css\`.

- \`--outline-btn-weight\`
- \`--outline-btn-family\`
- \`--outline-btn-padding\`
- \`--outline-btn-border-radius\`
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

const inlineButtonsDecorator = [
  (Story): TemplateResult => html`
<div class="flex flex-row">
${Story()}
</div> `,
];

const PrimaryButtonsTemplate = (): TemplateResult =>
  html`

  <outline-heading level-size="xl" level-style="semibold">Actual Buttons</outline-heading>  
  <p>This section shows the button as a real button element.</p>
  <div class="my-6">
    <outline-button class="mr-2" button-size="large" button-label="Large Button">Large Button</outline-button>
    <outline-button class="mr-2" button-label="Button">Button</outline-button>
    <outline-button class="mr-2" button-size="small" button-label="Small Button">Small Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <p>This section of primary buttons demonstrates various configurations, and can be navigated to test hover/focus states. The buttons shown here are rendered as a link because the button-url attribute was used. </p>
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
  docs: {
    source: {
      code: `
<!-- Primary Buttons -->
<outline-button class="mr-2" button-url="#" button-size="large" button-label="Large Button">Large Button</outline-button>
<outline-button class="mr-2" button-url="#" button-label="Button">Button</outline-button>
<outline-button class="mr-2" button-url="#" button-size="small" button-label="Small Button">Small Button</outline-button>
<!-- Primary Buttons (Disabled State) -->
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

const TertiaryButtonsTemplate = (): TemplateResult =>
  html`
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <p>This section of primary buttons demonstrates various configurations, and can be navigated to test hover/focus states.</p>
  <div class="my-6">
    <outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Button">Large Button</outline-button>
    <outline-button class="mr-2" button-variant="tertiary" button-url="#" button-label="Button">Button</outline-button>
    <outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Button">Small Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>  
  <p>This section of primary buttons demonstrates the disabled version of the same buttons as the previous example.</p>
  
  <div class="my-6">
    <outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
    <outline-button class="mr-2" button-variant="tertiary" button-url="#" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>  
  <p>This section highlights using icons in the primary button.</p>
  
  <div class="my-6">
    <outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2" button-variant="tertiary" button-url="#" button-label="Button">
      Button
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
  </div>
`;

export const TertiaryButtons = TertiaryButtonsTemplate.bind({});
PrimaryButtons.parameters = {
  name: 'Tertiary Button',
  docs: {
    source: {
      code: `
<!-- Primary Buttons -->
<outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Button">Large Button</outline-button>
<outline-button class="mr-2" button-variant="tertiary" button-url="#" button-label="Button">Button</outline-button>
<outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Button">Small Button</outline-button>
<!-- Primary Buttons (Disabled) -->
<outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
<outline-button class="mr-2" button-variant="tertiary" button-url="#" button-label="Button" is-disabled>Button</outline-button>
<outline-button class="mr-2" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
      `,
    },
  },
};

const LinkButtonsTemplate = (): TemplateResult =>
  html`  
  <outline-button class="mr-2" button-variant="link" button-url="#">Link Button</outline-button>
  <outline-button class="mr-2" button-variant="link" button-url="#" icon-right="chevron-down">Link Button</outline-button>
  <outline-button class="mr-2" button-variant="link" button-url="#" is-disabled>Disabled Link Button</outline-button>
`;

export const LinkButtons = LinkButtonsTemplate.bind({});
LinkButtons.decorators = inlineButtonsDecorator;
