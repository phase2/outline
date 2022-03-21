import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { ButtonSize, ButtonVariant } from '../outline-button/outline-button';
import './outline-dropdown.ts';

const triggerVariants: ButtonVariant[] = ['none', 'primary', 'secondary'];
const triggerSizes: ButtonSize[] = ['small', 'medium', 'large'];

const configuration = {
  title: 'Navigation/Outline Dropdown',
  component: 'outline-dropdown',
  argTypes: {
    isDisabled: {
      name: 'is-disabled',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
      description:
        'Set whether the dropdown is disabled. When disabled, the dropdown will not open.',
      control: {
        type: 'boolean',
      },
    },
    isOpen: {
      name: 'is-open',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
      description:
        'Set whether the dropdown is open. You can use this in lieu of the show/hide methods.',
      control: {
        type: 'boolean',
      },
    },
    url: {
      name: 'trigger-url',
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description:
        'The url to use for a link. This will render an anchor element. Do not set this prop if you want to render a button element.',
      control: {
        type: 'text',
      },
    },
    label: {
      name: 'trigger-label',
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description:
        'Label to be passed to `aria-label` on the link or button element. This is required for accessibility if we use a button with an icon only.',
      control: {
        type: 'text',
      },
    },
    text: {
      name: 'trigger-text',
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
      description:
        'Text of the actual button/link of the trigger element.',
      control: {
        type: 'text',
      },
    },
    variant: {
      name: 'trigger-variant',
      table: { category: 'Properties', defaultValue: { summary: 'primary' } },
      description: 'The button style variant to use.',
      options: triggerVariants,
      control: {
        type: 'select',
      },
    },
    size: {
      name: 'trigger-size',
      table: { category: 'Properties', defaultValue: { summary: 'medium' } },
      description: 'The button size variant.',
      options: triggerSizes,
      control: {
        type: 'select',
      },
    },
    dropdownSlot: {
      name: 'dropdown',
      description: 'The dropdown slot.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots',
        defaultValue: { summary: 'NULL' },
      },
    },
  },
  args: {
    dropdownSlot: `
<p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
<p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
`,
    isDisabled: false,
    isOpen: false,
    text: 'Dropdown',
    variant: 'primary',
    size: 'medium',
    label: '',
    url: 'https://outline.phase2tech.com/',
  },
};

export default configuration;

const paddedMenuWrapper = [
  (Story): TemplateResult => html`
<div class="relative m-12">
${Story()}
</div> `,
];


const DropdownTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-dropdown 
  ?is-disabled=${args.isDisabled} 
  ?is-open=${args.isOpen} 
  trigger-text="${ifDefined(args.text)}"
  trigger-label="${ifDefined(args.label)}"
  trigger-variant="${ifDefined(args.variant)}"
  trigger-size="${ifDefined(args.size)}"
  trigger-url="${ifDefined(args.url)}"
  class="my-4"
>  
  <div slot="dropdown">${unsafeHTML(args.dropdownSlot ?? '')}</div>
</outline-dropdown>`;
};

export const DropdownButtonWithLink = (customArguments = {}) =>
DropdownTemplate(customArguments);
DropdownButtonWithLink.args = {
  isOpen: false,
};
DropdownButtonWithLink.decorators = paddedMenuWrapper;

export const DropdownButtonWithoutLink = (customArguments = {}) =>
DropdownTemplate(customArguments);
DropdownButtonWithoutLink.args = {
  isOpen: false,
  url: null,
};
DropdownButtonWithoutLink.decorators = paddedMenuWrapper;

const MenuDropdownsTemplate = (): TemplateResult => {
  return html`
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Menu & Link" 
  trigger-variant="primary" 
  trigger-size="medium" 
  trigger-url="https://outline.phase2tech.com/"
>  
  <div slot="dropdown">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </div>
</outline-dropdown>
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Menu" 
  trigger-variant="primary" 
  trigger-size="medium" 
>  
  <div slot="dropdown">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </div>
</outline-dropdown>
  `;
}
export const MenuDropdown = () =>
MenuDropdownsTemplate();
MenuDropdown.decorators = paddedMenuWrapper;

const SecondaryMenuDropdownsTemplate = (): TemplateResult => {
  return html`
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Menu & Link" 
  trigger-variant="secondary" 
  trigger-size="medium" 
  trigger-url="https://outline.phase2tech.com/"
>  
  <div slot="dropdown">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </div>
</outline-dropdown>
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Link Only" 
  trigger-variant="secondary" 
  trigger-size="medium" 
  trigger-url="https://outline.phase2tech.com/" 
  is-disabled
>
</outline-dropdown>
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Menu" 
  trigger-variant="secondary" 
  trigger-size="medium" 
>  
  <div slot="dropdown">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </div>
</outline-dropdown>
  `;
}
export const SecondaryMenuDropdown = () =>
SecondaryMenuDropdownsTemplate();
SecondaryMenuDropdown.decorators = paddedMenuWrapper;

const MultipleButtonDropdownsTemplate = (): TemplateResult => {
  return html`
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Only" 
  trigger-variant="primary" 
  trigger-size="medium" 
>  
  <div slot="dropdown">
    <p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
    <p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
  </div>
</outline-dropdown>
<outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Link Only" 
    trigger-variant="primary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
  >
</outline-dropdown>
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown & Link" 
  trigger-variant="primary" 
  trigger-size="medium" 
  trigger-url="https://outline.phase2tech.com/"
>  
  <div slot="dropdown">
    <p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
    <p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
  </div>
</outline-dropdown>
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Disabled Dropdown & Link" 
  trigger-variant="primary" 
  trigger-size="medium" 
  trigger-url="https://outline.phase2tech.com/"
  is-disabled
>  
  <div slot="dropdown">
    <p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
    <p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
  </div>
</outline-dropdown>
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Only" 
  trigger-variant="primary" 
  trigger-size="medium" 
>  
  <div slot="dropdown">
    <p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
    <p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
  </div>
</outline-dropdown>
  `;
}
export const MultipleButtonDropdowns = () =>
MultipleButtonDropdownsTemplate();
MultipleButtonDropdowns.decorators = paddedMenuWrapper;


const MultipleLinkDropdownsTemplate = (): TemplateResult => {

  return html`
<div class="flex flex-row flex-wrap">
  <outline-dropdown 
    trigger-text="Dropdown Menu & Link" 
    trigger-variant="none" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
  >  
    <div slot="dropdown">
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Disabled Link" 
    trigger-variant="none" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
    is-disabled
  >
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Link Only" 
    trigger-variant="none" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
  >
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Dropdown" 
    trigger-variant="none" 
    trigger-size="medium"
  >
    <div slot="dropdown">
      <p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
      <p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
    </div>
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Dropdown & Link" 
    trigger-variant="none" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
  >  
    <div slot="dropdown">
      <p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
      <p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
    </div>
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Disabled Dropdown" 
    trigger-variant="none" 
    trigger-size="medium" 
    is-disabled
  >
    <div slot="dropdown">
      <p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
      <p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
    </div>
  </outline-dropdown>
</div>
`;
};

export const MultipleLinkDropdowns = () =>
MultipleLinkDropdownsTemplate();
MultipleLinkDropdowns.decorators = paddedMenuWrapper;
