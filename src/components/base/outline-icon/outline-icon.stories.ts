import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './outline-icon';
import outline from '../../../resolved-outline-config';

const configuration = {
  title: 'Media/Outline Icon',
  component: 'outline-icon',
  parameters: {
    docs: {
      description: {
        component: `
The \`outline-icon\` component will render all manner of icons.
        `,
      },
    },
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
      description: 'The size of icon. Required when `library === \'system\'`. Omit for other libraries to allow parent text size to control icon sizing. Valid values include `px`, `rem`, `em`, `%`, `vw`, and `vh`.',
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
      options: ['system', 'custom', 'bootstrap', 'boxicon', 'heroicons', 'iconoir', 'ionicons', 'jam', 'lucide', 'material', 'remix', 'unicons'],
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
    library: outline.icons.defaults.library ? outline.icons.defaults.library : 'system',
    size: outline.icons.defaults.size,
    sizeEnabled: true,
  },
};
export default configuration;

const specificLibraryArgTypes = {
  library: {
    table: {
      disable: true
    }
  },
  icon: {
    table: {
      disable: true
    }
  }
}
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

export const AnIcon = (customArguments = {}) =>
  DefaultTemplate(customArguments);
  AnIcon.args = {
    size: '64px',
  };
  AnIcon.decorators = inlineIconDecorator;

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
SystemIcons.argTypes = specificLibraryArgTypes;
SystemIcons.args = {
  size: '32px',
  sizeEnabled: true,
};
SystemIcons.parameters = {
  docs: {
    storyDescription: 'This is custom documentation for the icons of the `system` library.',
  },
}
SystemIcons.decorators = inlineIconDecorator;

const BoostrapIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Outline</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="bootstrap" name="badge-4k" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="badge-8k" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-right-square" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-down-circle" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="bar-chart" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="image" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="x-square" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Fill</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="bootstrap" name="badge-4k-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="badge-8k-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-right-square-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-down-circle-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="bar-chart-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="image-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="x-square-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const BootstrapIcons = (customArguments = {}) =>
BoostrapIconsTemplate(customArguments);
BootstrapIcons.argTypes = specificLibraryArgTypes;
BootstrapIcons.args = {
  size: '32px',
  sizeEnabled: true,
};

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
BootstrapIcons.argTypes = specificLibraryArgTypes;
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
FontAwesomeFree.argTypes = specificLibraryArgTypes;
FontAwesomeFree.args = {
  size: '32px',
  sizeEnabled: true,
};

const LucideTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="lucide" name="feather" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="pie-chart" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="settings" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="map-pin" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="printer" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="shopping-cart" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const LucideIcons = (customArguments = {}) =>
LucideTemplate(customArguments);
LucideIcons.argTypes = specificLibraryArgTypes;
LucideIcons.args = {
  size: '32px',
  sizeEnabled: true,
};

const HeroiconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="heroicons" name="chat" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="cloud" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="cog" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="document-text" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="gift" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="volume-up" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const Heroicons = (customArguments = {}) =>
HeroiconsTemplate(customArguments);
Heroicons.argTypes = specificLibraryArgTypes;
Heroicons.args = {
  size: '32px',
  sizeEnabled: true,
};

const IconoirTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="iconoir" name="check-circled-outline" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="drawer" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="keyframes" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="headset-help" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="color-picker" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="wifi" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const IconoirIcons = (customArguments = {}) =>
IconoirTemplate(customArguments);
IconoirIcons.argTypes = specificLibraryArgTypes;
IconoirIcons.args = {
  size: '32px',
  sizeEnabled: true,
};

const IonIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="ionicons" name="alarm" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="american-football" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="bug" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="chatbubble" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="settings" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="warning" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Outline</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="ionicons" name="alarm-outline" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="american-football-outline" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="bug-outline" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="chatbubble-outline" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="settings-outline" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="warning-outline" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Sharp</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="ionicons" name="alarm-sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="american-football-sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="bug-sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="chatbubble-sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="settings-sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="warning-sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const IonIcons = (customArguments = {}) =>
IonIconsTemplate(customArguments);
IonIcons.argTypes = specificLibraryArgTypes;
IonIcons.args = {
  size: '32px',
  sizeEnabled: true,
};

const JamIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Stroke</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="jam" name="calendar" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="camera" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="filter" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="leaf" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="picture" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="set-square" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Fill</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="jam" name="calendar-f" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="camera-f" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="filter-f" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="leaf-f" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="picture-f" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="set-square-f" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const JamIcons = (customArguments = {}) =>
JamIconsTemplate(customArguments);
JamIcons.argTypes = specificLibraryArgTypes;
JamIcons.args = {
  size: '32px',
  sizeEnabled: true,
};

const MaterialIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="material" name="notifications" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="email" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="delete" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="volume_up" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="settings" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="shopping_basket" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Round</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="material" name="notifications_round" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="email_round" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="delete_round" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="volume_up_round" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="settings_round" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="shopping_basket_round" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Sharp</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="material" name="notifications_sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="email_sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="delete_sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="volume_up_sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="settings_sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="shopping_basket_sharp" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const MaterialIcons = (customArguments = {}) =>
MaterialIconsTemplate(customArguments);
MaterialIcons.argTypes = specificLibraryArgTypes;
MaterialIcons.args = {
  size: '32px',
  sizeEnabled: true,
};

const RemixIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Line</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="remix" name="business/cloud-line" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="design/brush-line" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="business/pie-chart-line" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="development/bug-line" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="media/image-line" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="system/alert-line" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Fill</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="remix" name="business/cloud-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="design/brush-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="business/pie-chart-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="development/bug-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="media/image-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="system/alert-fill" size="${ifDefined(args.size)}" class="mr-2"></outline-icon> 
</div>
`;
};

export const RemixIcons = (customArguments = {}) =>
RemixIconsTemplate(customArguments);
RemixIcons.argTypes = specificLibraryArgTypes;
RemixIcons.args = {
  size: '32px',
  sizeEnabled: true,
};

const UniconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="unicons" name="clock" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="graph-bar" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="padlock" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="polygon" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="rocket" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="star" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Solid</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
<outline-icon library="unicons" name="clock-s" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="graph-bar-s" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="padlock-s" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="polygon-s" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="rocket-s" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>  
  <outline-icon library="unicons" name="star-s" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const Unicons = (customArguments = {}) =>
UniconsTemplate(customArguments);
Unicons.argTypes = specificLibraryArgTypes;
Unicons.args = {
  size: '32px',
  sizeEnabled: true,
};

const CustomTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="custom" name="calendar" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
  <outline-icon library="custom" name="clock" size="${ifDefined(args.size)}" class="mr-2"></outline-icon>
</div>
`;
};

export const CustomIcons = (customArguments = {}) =>
CustomTemplate(customArguments);
CustomIcons.argTypes = specificLibraryArgTypes;
CustomIcons.args = {
  size: '32px',
  library: 'custom',
  sizeEnabled: true,
};
