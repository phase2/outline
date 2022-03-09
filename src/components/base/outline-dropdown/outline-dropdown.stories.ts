import { html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import './outline-dropdown.ts';

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
    triggerSlot: {
      name: 'trigger',
      description: 'The trigger/button slot',
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots',
        defaultValue: { summary: 'NULL' },
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
    footerSlot: {
      name: 'footer',
      description: 'The footer slot for the download size.',
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
    triggerSlot: `Button Trigger`,
    dropdownSlot: `<p>This is the content of the dropdown. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
<p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
`,
    footerSlot: ``,
    isDisabled: false,
    isOpen: false,
  },
};

export default configuration;

const ButtonTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`<outline-dropdown ?is-disabled=${args.isDisabled} ?is-open=${args.isOpen}>
    <outline-button slot="trigger">${unsafeHTML(
      args.triggerSlot ?? ''
    )}</outline-button>
    <div slot="dropdown">${unsafeHTML(args.dropdownSlot ?? '')}</div>
    ${unsafeHTML(args.footerSlot ?? '')}
  </outline-dropdown>`;
};

export const ButtonTrigger = (customArguments = {}) =>
  ButtonTemplate(customArguments);

const LinkTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`<outline-dropdown ?is-disabled=${args.isDisabled} ?is-open=${args.isOpen}>
    <outline-link slot="trigger" link-href="#">${unsafeHTML(
      args.triggerSlot ?? ''
    )}</outline-link>
    <div slot="dropdown">${unsafeHTML(args.dropdownSlot ?? '')}</div>
    ${unsafeHTML(args.footerSlot ?? '')}
  </outline-dropdown>`;
};

export const LinkTrigger = (customArguments = {}) =>
  LinkTemplate(customArguments);
LinkTrigger.args = {
  triggerSlot: `Link Trigger`,
};
