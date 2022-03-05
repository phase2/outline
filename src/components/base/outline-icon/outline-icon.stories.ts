import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './outline-icon';
import outline from '../../../resolved-outline-config';

const configuration = {
  title: 'Media/Outline Icon',
  component: 'outline-icon',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    icon: {
      name: 'name',
      table: { category: 'Properties', defaultValue: { summary: outline.icons.defaults.icon } },
      description: 'The name of the icon to draw. Refer to the proper naming of icons from the library you are using.',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      table: { category: 'Properties', defaultValue: { summary: outline.icons.defaults.size } },
      description: 'The size of icon. Required when `library === \'system\'`. Omit for other libraries to allow parent text size to control icon sizing. Valid values include `px`, `rem`, `em`, `%`, and `vw`.',
      control: {
        type: 'text',
      },
    },
    library: {
      name: 'library',
      table: { category: 'Properties', defaultValue: { summary: 'system' } },
      description: 'The icon library to use. Custom libraries can be registered with `outline.registerIconLibrary()`.',
      control: {
        type: 'select',
      },
      options: ['system', 'bootstrap'],
    },
    sizeEnabled: {
      description:
        'If `false`, the size of the icon will be controlled by the parent text size. If `true`, the size will be controlled by the `size` property.',
      control: {
        type: 'boolean',
      },
      name: 'Enable Size Property',
      table: { category: 'Custom Controls', defaultValue: { summary: 'true' } },
    }
  },
  args: {
    icon: outline.icons.defaults.icon,
    library: outline.icons.defaults.library,
    size: outline.icons.defaults.size,
    sizeEnabled: true,
  },
};
export default configuration;

const inlineIconDecorator = [
  (Story): TemplateResult => html`
<div class="flex flex-row flex-wrap">
${Story()}
</div> `,
];

const DefaultTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  // Use our custom "Is size enabled" flag.
  args.size = args.size && args.sizeEnabled ? args.size : null;

  return html`
<outline-icon 
  name="${ifDefined(args.icon)}"
  library="${ifDefined(args.library)}"
  size="${ifDefined(args.size)}"
></outline-icon>
`;
};

export const DefaultIcon = (customArguments = {}) =>
  DefaultTemplate(customArguments);
  DefaultIcon.args = {
    size: '64px',
  };
  DefaultIcon.decorators = inlineIconDecorator;

const SystemTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-icon name="chevron-up" library="system" size="${ifDefined(args.size)}"></outline-icon>
<outline-icon name="chevron-down" library="system" size="${ifDefined(args.size)}"></outline-icon>
<outline-icon name="chevron-left" library="system" size="${ifDefined(args.size)}"></outline-icon>
<outline-icon name="chevron-right" library="system" size="${ifDefined(args.size)}"></outline-icon>
<outline-icon name="check-lg" library="system" size="${ifDefined(args.size)}"></outline-icon>
<outline-icon name="x" library="system" size="${ifDefined(args.size)}"></outline-icon>
<outline-icon name="x-circle-fill" library="system" size="${ifDefined(args.size)}"></outline-icon>
`;
};

export const SystemIcons = (customArguments = {}) =>
SystemTemplate(customArguments);
SystemTemplate.args = {
  size: '64px',
  sizeEnabled: true,
};
SystemIcons.decorators = inlineIconDecorator;


const BoxiconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`

<outline-heading level="h2" level-size="2xl" level-style="thin">Outline</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="boxicons" name="bx-bot" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-cookie" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-joystick" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-save" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-server" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-wine" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Solid</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="boxicons" name="bxs-bot" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-cookie" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-joystick" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-save" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-server" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-wine" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Brands</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="boxicons" name="bxl-apple" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-chrome" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-edge" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-firefox" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-opera" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-microsoft" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const Boxicons = (customArguments = {}) =>
BoxiconsTemplate(customArguments);
Boxicons.args = {
  size: '32px',
  sizeEnabled: true,
};

const FaTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="fa" name="far-bell" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-comment" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-hand-point-right" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-hdd" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-heart" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-star" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Solid</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="fa" name="fas-archive" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-book" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-chess-knight" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-dice" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-pizza-slice" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-scroll" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Brands</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="fa" name="fab-apple" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-chrome" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-edge" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-firefox" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-opera" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-microsoft" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>   
</div>
`;
};

export const FontAwesomeFree = (customArguments = {}) =>
FaTemplate(customArguments);
FontAwesomeFree.args = {
  size: '32px',
  sizeEnabled: true,
};
