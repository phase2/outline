/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '../../../outline-icon/src/outline-icon';

const icons = {
  libraries: {
    bootstrap: true,
    boxicons: true,
    fontawesome: true,
    heroicons: true,
    iconoir: true,
    ionicons: true,
    jam: true,
    lucide: true,
    material: true,
    remix: true,
    unicons: true,
  },
  defaults: { library: 'bootstrap', size: '16px', icon: 'chevron-right' },
}

const configuration = {
  title: 'Media/Outline Icon',
  component: 'outline-icon',
  parameters: {
    docs: {
      description: {
        component: `
## Introduction

The \`outline-icon\` component will render all manner of icons for your component(s) and application. 

## Internal Icon Libraries
- \`system\`: The default icon library for the Outline core system.
- \`custom\`: A custom icon library of SVGs provided to the \`src/assets/svg\` directory.

## Custom CDN Library Integrations

[Bootstrap](#bootstrap), [Boxicons](#boxicons), [Font Awesome (Free)](#font-awesome-free),
[Heroicons](#heroicons), [Iconoir](#iconoir), [Ionicons](#ionicons),
[Jam](#jam), [Lucide](#lucide), [Material](#material), [Remix](#remix),
[Unicons](#unicons) and even more possible via custom CDN integration and icon resolver.
        `,
      },
    },
  },
  argTypes: {
    icon: {
      name: 'name',
      table: {
        category: 'Properties',
        defaultValue: { summary: icons.defaults.icon },
      },
      description:
        'The name of the icon to draw. Refer to the proper naming of icons from the library you are using.',
      control: {
        type: 'text',
      },
    },
    size: {
      name: 'size',
      table: {
        category: 'Properties',
        defaultValue: { summary: icons.defaults.size },
      },
      description:
        "The size of icon. Required when `library === 'system'`. Omit for other libraries to allow parent text size to control icon sizing. Valid values include `px`, `rem`, `em`, `%`, `vw`, and `vh`.",
      control: {
        type: 'text',
      },
    },
    library: {
      name: 'library',
      table: { category: 'Properties', defaultValue: { summary: 'system' } },
      description:
        'The icon library to use. Custom libraries can be registered with `outline.registerIconLibrary()`.',
      control: {
        type: 'select',
      },
      options: [
        'system',
        'custom',
        'bootstrap',
        'boxicon',
        'heroicons',
        'iconoir',
        'ionicons',
        'jam',
        'lucide',
        'material',
        'remix',
        'unicons',
      ],
    },
    sizeEnabled: {
      description:
        'If `false`, the size of the icon will be controlled by the parent text size. If `true`, the size will be controlled by the `size` property.',
      control: {
        type: 'boolean',
      },
      name: 'Enable Size Property',
      table: { category: 'Custom Controls', defaultValue: { summary: 'true' } },
    },
  },
  args: {
    icon: icons.defaults.icon,
    library: icons.defaults.library
      ? icons.defaults.library
      : 'system',
    size: icons.defaults.size ? icons.defaults.size : null,
    sizeEnabled: true,
  },
};
export default configuration;

const specificLibraryArgTypes = {
  library: {
    table: {
      disable: true,
    },
  },
  icon: {
    table: {
      disable: true,
    },
  },
};
const inlineIconDecorator = [
  // eslint-disable-next-line
  // @ts-ignore
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
<outline-icon name="chevron-up" library="system" size="${ifDefined(
    args.size
  )}"></outline-icon>
<outline-icon name="chevron-down" library="system" size="${ifDefined(
    args.size
  )}"></outline-icon>
<outline-icon name="chevron-left" library="system" size="${ifDefined(
    args.size
  )}"></outline-icon>
<outline-icon name="chevron-right" library="system" size="${ifDefined(
    args.size
  )}"></outline-icon>
<outline-icon name="check-lg" library="system" size="${ifDefined(
    args.size
  )}"></outline-icon>
<outline-icon name="x" library="system" size="${ifDefined(
    args.size
  )}"></outline-icon>
<outline-icon name="x-circle-fill" library="system" size="${ifDefined(
    args.size
  )}"></outline-icon>
`;
};

export const SystemIcons = (customArguments = {}) =>
  SystemTemplate(customArguments);
SystemIcons.argTypes = specificLibraryArgTypes;
SystemIcons.args = {
  size: '48px',
  sizeEnabled: true,
};
SystemIcons.parameters = {
  docs: {
    description: {
      story: `
## The \`system\` icon library.

The system library contains only the icons used by Outline components.
The icons are hard-coded as data URIs into the icon resolver to ensure their availability.

This method is ideal for a small library of icons where you prefer to ensure "hard coded" availability of the icons.
`,
    },
  },
};
SystemIcons.decorators = inlineIconDecorator;

const CustomTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<div class="flex flex-row flex-wrap">
  <outline-icon library="custom" name="calendar" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="custom" name="clock" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const CustomIcons = (customArguments = {}) =>
  CustomTemplate(customArguments);
CustomIcons.argTypes = specificLibraryArgTypes;
CustomIcons.args = {
  size: '48px',
  library: 'custom',
  sizeEnabled: true,
};
CustomIcons.parameters = {
  docs: {
    description: {
      story: `
## The \`custom\` icon library.

The \`custom\` library is a dynamic icon library that can be used to create custom icons.
It uses the \`src/assets/svg\` directory to store the icons. 
`,
    },
  },
};

const BootstrapIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Outline</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="bootstrap" name="badge-4k" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="badge-8k" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-right-square" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-down-circle" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="bar-chart" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="image" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="x-square" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Fill</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="bootstrap" name="badge-4k-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="badge-8k-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-right-square-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="arrow-down-circle-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="bar-chart-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="image-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="bootstrap" name="x-square-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const Bootstrap = (customArguments = {}) =>
  BootstrapIconsTemplate(customArguments);
Bootstrap.argTypes = specificLibraryArgTypes;
Bootstrap.args = {
  size: '48px',
  sizeEnabled: true,
};
Bootstrap.parameters = {
  docs: {
    description: {
      story: `
## The \`bootstrap\` icon library.

The \`bootstrap\` library uses the jsDelivr CDN to implement the [Bootstrap Icons library](https://icons.getbootstrap.com/).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};

const BoxiconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`

<outline-heading level="h2" level-size="2xl" level-style="thin">Outline</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="boxicons" name="bx-bot" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-cookie" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-joystick" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-save" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-server" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bx-wine" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Solid</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="boxicons" name="bxs-bot" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-cookie" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-joystick" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-save" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-server" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxs-wine" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Brands</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="boxicons" name="bxl-apple" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-chrome" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-edge" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-firefox" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-opera" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="boxicons" name="bxl-microsoft" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const Boxicons = (customArguments = {}) =>
  BoxiconsTemplate(customArguments);
Boxicons.argTypes = specificLibraryArgTypes;
Boxicons.args = {
  size: '48px',
  sizeEnabled: true,
};
Boxicons.parameters = {
  docs: {
    description: {
      story: `
## The \`boxicons\` icon library.

The \`boxicons\` library uses the jsDelivr CDN to implement [Boxicons](https://boxicons.com/).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};

const FaTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="fa" name="far-bell" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-comment" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-hand-point-right" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-hdd" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-heart" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="far-star" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Solid</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="fa" name="fas-archive" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-book" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-chess-knight" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-dice" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-pizza-slice" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fas-scroll" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Brands</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="fa" name="fab-apple" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-chrome" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-edge" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-firefox" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-opera" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="fa" name="fab-microsoft" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>   
</div>
`;
};

export const FontAwesomeFree = (customArguments = {}) =>
  FaTemplate(customArguments);
FontAwesomeFree.argTypes = specificLibraryArgTypes;
FontAwesomeFree.args = {
  size: '48px',
  sizeEnabled: true,
};
FontAwesomeFree.parameters = {
  docs: {
    description: {
      story: `
## The \`fa\` icon library.

The \`fa\` library uses the jsDelivr CDN to implement [Font Awesome (free)](https://fontawesome.com).
Please see the [icon list](https://fontawesome.com/icons) on their site for the list of available icons.
`,
    },
  },
};

const HeroiconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="heroicons" name="chat" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="cloud" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="cog" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="document-text" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="gift" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="heroicons" name="volume-up" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const Heroicons = (customArguments = {}) =>
  HeroiconsTemplate(customArguments);
Heroicons.argTypes = specificLibraryArgTypes;
Heroicons.args = {
  size: '48px',
  sizeEnabled: true,
};
Heroicons.parameters = {
  docs: {
    description: {
      story: `
## The \`heroicons\` icon library.

The \`heroicons\` library uses the jsDelivr CDN to implement [Heroicons](https://heroicons.com/).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};

const IconoirTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="iconoir" name="check-circled-outline" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="drawer" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="keyframes" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="headset-help" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="color-picker" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="iconoir" name="wifi" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const Iconoir = (customArguments = {}) =>
  IconoirTemplate(customArguments);
Iconoir.argTypes = specificLibraryArgTypes;
Iconoir.args = {
  size: '48px',
  sizeEnabled: true,
};
Iconoir.parameters = {
  docs: {
    description: {
      story: `
## The \`iconoir\` icon library.

The \`iconoir\` library uses the jsDelivr CDN to implement [Iconoir](https://iconoir.com/).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};

const IonIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="ionicons" name="alarm" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="american-football" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="bug" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="chatbubble" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="settings" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="warning" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Outline</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="ionicons" name="alarm-outline" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="american-football-outline" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="bug-outline" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="chatbubble-outline" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="settings-outline" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="warning-outline" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Sharp</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="ionicons" name="alarm-sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="american-football-sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="bug-sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="chatbubble-sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="settings-sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="ionicons" name="warning-sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const Ionicons = (customArguments = {}) =>
  IonIconsTemplate(customArguments);
Ionicons.argTypes = specificLibraryArgTypes;
Ionicons.args = {
  size: '48px',
  sizeEnabled: true,
};
Ionicons.parameters = {
  docs: {
    description: {
      story: `
## The \`ionicons\` icon library.

The \`ionicons\` library uses the jsDelivr CDN to implement [Ionicons](https://ionic.io/ionicons).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};

const JamIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Stroke</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="jam" name="calendar" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="camera" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="filter" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="leaf" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="picture" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="set-square" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Fill</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="jam" name="calendar-f" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="camera-f" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="filter-f" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="leaf-f" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="picture-f" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="jam" name="set-square-f" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const Jam = (customArguments = {}) => JamIconsTemplate(customArguments);
Jam.argTypes = specificLibraryArgTypes;
Jam.args = {
  size: '48px',
  sizeEnabled: true,
};
Jam.parameters = {
  docs: {
    description: {
      story: `
## The \`jam\` icon library.

The \`jam\` library uses the jsDelivr CDN to implement [Jam Icons](https://jam-icons.com/).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};

const LucideTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Standard</outline-heading>
<div class="flex flex-row flex-wrap">
  <outline-icon library="lucide" name="feather" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="pie-chart" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="settings" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="map-pin" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="printer" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="lucide" name="shopping-cart" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const Lucide = (customArguments = {}) => LucideTemplate(customArguments);
Lucide.argTypes = specificLibraryArgTypes;
Lucide.args = {
  size: '48px',
  sizeEnabled: true,
};
Lucide.parameters = {
  docs: {
    description: {
      story: `
## The \`lucide\` icon library.

The \`lucide\` library uses the jsDelivr CDN to implement [Lucide Icons](https://lucide.dev/).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};

const MaterialIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="material" name="notifications" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="email" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="delete" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="volume_up" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="settings" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="shopping_basket" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Round</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="material" name="notifications_round" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="email_round" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="delete_round" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="volume_up_round" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="settings_round" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="shopping_basket_round" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Sharp</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="material" name="notifications_sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="email_sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="delete_sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="volume_up_sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="settings_sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="material" name="shopping_basket_sharp" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const Material = (customArguments = {}) =>
  MaterialIconsTemplate(customArguments);
Material.argTypes = specificLibraryArgTypes;
Material.args = {
  size: '48px',
  sizeEnabled: true,
};
Material.parameters = {
  docs: {
    description: {
      story: `
## The \`material\` icon library.

The \`material\` library uses the jsDelivr CDN to implement [Material Icons](https://mui.com/components/material-icons/).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};

const RemixIconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Line</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="remix" name="business/cloud-line" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="design/brush-line" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="business/pie-chart-line" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="development/bug-line" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="media/image-line" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="system/alert-line" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Fill</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="remix" name="business/cloud-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="design/brush-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="business/pie-chart-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="development/bug-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="media/image-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="remix" name="system/alert-fill" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon> 
</div>
`;
};

export const Remix = (customArguments = {}) =>
  RemixIconsTemplate(customArguments);
Remix.argTypes = specificLibraryArgTypes;
Remix.args = {
  size: '48px',
  sizeEnabled: true,
};
Remix.parameters = {
  docs: {
    description: {
      story: `
## The \`remix\` icon library.

The \`remix\` library uses the jsDelivr CDN to implement [Remix Icons](http://remixicon.com/).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};

const UniconsTemplate = (customArguments = {}): TemplateResult => {
  const args = {
    ...configuration.args,
    ...customArguments,
  };

  return html`
<outline-heading level="h2" level-size="2xl" level-style="thin">Regular</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
  <outline-icon library="unicons" name="clock" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="graph-bar" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="padlock" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="polygon" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="rocket" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="star" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
<outline-heading level="h2" level-size="2xl" level-style="thin">Solid</outline-heading>
<div class="flex flex-row flex-wrap mb-10">
<outline-icon library="unicons" name="clock-s" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="graph-bar-s" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="padlock-s" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="polygon-s" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
  <outline-icon library="unicons" name="rocket-s" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>  
  <outline-icon library="unicons" name="star-s" size="${ifDefined(
    args.size
  )}" class="mr-2"></outline-icon>
</div>
`;
};

export const Unicons = (customArguments = {}) =>
  UniconsTemplate(customArguments);
Unicons.argTypes = specificLibraryArgTypes;
Unicons.args = {
  size: '48px',
  sizeEnabled: true,
};
Unicons.parameters = {
  docs: {
    description: {
      story: `
## The \`unicons\` icon library.

The \`unicons\` library uses the jsDelivr CDN to implement [Unicons](https://iconscout.com/unicons).
Please see the icon list on their site for the list of available icons.
`,
    },
  },
};
