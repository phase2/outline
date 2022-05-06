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
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        component: `
## Difference from \`button\` element

This is rendered as an \`a\` element if a link and a \`button\` element if not a link. This allows for consistent styling that matches the user expectation of a button while matching the browser expectation for those elements.

<outline-alert statusType="info" size="large" class="mb-6">
  <span slot="header">CSS Variables</span>
  <p>Any consumer application that includes \`outline.theme.css\` can simply overwrite any relevant CSS Variables in a subsequent CSS include to affect change on the element styling using the following variables.</p>
  <p>Additional documentation and references for available CSS Variables can be found in the following locations.</p>
  <ul>
    <li>\`outline-button/css-variables/vars-default.css\`</li>
    <li>\`outline-button/css-variables/vars-primary.css\`</li>
    <li>\`outline-button/css-variables/vars-secondary.css\`</li>
    <li>\`outline-button/css-variables/vars-tertiary.css\`</li>
    <li>\`outline-button/css-variables/vars-link.css\`</li>
  </ul>
</outline-alert>
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

const PrimaryButtonsTemplate = (): TemplateResult =>
  html`
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-label="Link">Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-size="small" button-label="Small Button">Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-label="Button">Button</outline-button>
    <outline-button class="mr-2 mb-4" button-size="large" button-label="Large Button">Large Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-label="Link" is-disabled>Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2 mb-4" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-url="#" button-size="large" button-label="Large Link">
      Large Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-label="Link">
      Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-size="small" button-label="Small Link">
      Small Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-label="Button">
      Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
  </div>
`;

export const PrimaryButtons = PrimaryButtonsTemplate.bind({});
PrimaryButtons.parameters = {  
  docs: {
    description: {
      story: `
## The \`primary\` variant.
  
This is the primary button style variant. It is used for buttons that behave like a button, but look like a link, but is a button. Or a link.
`,
    },
  },
};

const SecondaryButtonsTemplate = (): TemplateResult =>
  html`
<outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
<div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-label="Link">Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="small" button-label="Small Button">Small Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-label="Button">Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="large" button-label="Large Button">Large Button</outline-button>
</div>
<outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>  
<div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-label="Link" is-disabled>Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-label="Button" is-disabled>Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
</div>
<outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>    
<div class="my-6">
<outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="large" button-label="Large Link">
    Large Link
    <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
  </outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-label="Link">
  Link
    <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
  </outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="small" button-label="Small Link">
    Small Link
    <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
  </outline-button> 
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="small" button-label="Small Button">
    Small Button
    <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
  </outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-label="Button">
    Button
    <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
  </outline-button>  
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="large" button-label="Large Button">
    Large Button
    <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
  </outline-button>
</div>
`;

export const SecondaryButtons = SecondaryButtonsTemplate.bind({});
SecondaryButtons.parameters = {  
  docs: {
    description: {
      story: `
## The \`secondary\` variant.
  
This is the secondary button style variant. It is used for buttons that behave like a button, but look like a link, but is a button. Or a link.
`,
    },
  },
};

const TertiaryButtonsTemplate = (): TemplateResult =>
  html`
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-label="Link">Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="small" button-label="Small Button">Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-label="Button">Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="large" button-label="Large Button">Large Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>    
  <div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-label="Link" is-disabled>Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>    
  <div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Link">
      Large Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-label="Link">
    Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Link">
      Small Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-label="Button">
      Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
  </div>
`;

export const TertiaryButtons = TertiaryButtonsTemplate.bind({});
TertiaryButtons.parameters = {  
  docs: {
    description: {
      story: `
## The \`tertiary\` variant.
  
This is the tertiary button style variant. It is used for buttons that behave like a button, but look like a link, but is a button. Or a link.
`,
    },
  },
};

const LinkButtonsTemplate = (): TemplateResult =>
  html`  
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-label="Link">Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="small" button-label="Small Button">Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-label="Button">Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="large" button-label="Large Button">Large Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>    
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-label="Link" is-disabled>Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>    
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="large" button-label="Large Link">
      Large Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-label="Link">
    Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="small" button-label="Small Link">
      Small Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-label="Button">
      Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
  </div>
`;

export const LinkButtons = LinkButtonsTemplate.bind({});
LinkButtons.parameters = {  
  docs: {
    description: {
      story: `
## The \`link\` variant.
  
This is the link button style variant. It is used for buttons that behave like a button, but look like a link, but is a button. Or a link.
`,
    },
  },
};
