import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { LinkTargetType } from '@phase2/outline-core-link';
// Import the component itself.
import '@phase2/outline-core-link';

import sampleImage from '@phase2/outline-static-assets/media/tech/1440/code-6.jpg';

export default {
  title: 'Navigation/Link',
  component: 'outline-core-link',
  // Tags are a new feature coming in 7.1, that we are using to drive this behaviour.
  tags: ['docsPage'],
  argTypes: {
    linkHref: {
      name: 'link-href',
      description: 'https://www.w3schools.com/tags/att_a_href.asp',
      control: {
        type: 'text',
      },
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
    },
    linkTarget: {
      name: 'link-target',
      description: 'https://www.w3schools.com/tags/att_a_target.asp',
      options: ['', '_blank', '_self'],
      control: {
        type: 'select',
      },
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
    },
    linkText: {
      name: 'link-text',
      description:
        'The text to display for the link component. This text is part of the ShadowDOM vs omitting this property and utilizing the default slot will render the text in LightDOM.',
      control: {
        type: 'text',
      },
      table: { category: 'Properties', defaultValue: { summary: 'NULL' } },
    },
  },
  args: {
    linkHref: 'https://outline.phase2tech.com',
    linkTarget: '',
    linkText: 'Sample Link',
  },
  parameters: {
    docs: {
      description: {
        component: `
The \`outline-core-link\` component allows complete flexibility in how you choose to render a link element.

## Description & Usage

- You must provide and set the \`link-href\` property to a valid URL.
- You can optionally set the \`link-target\` property to a valid target value.
- You can optionally set the \`link-text\` property to a valid text value.
- You can optionally set the \`link-rel\` property to a valid rel value.
- If the link is external, the component will automatically add \`rel="noopener noreferrer"\` to the link and open the link in a new tab. 
- If you would like to put a link in a slot, you should now create a new component to handle this. 

## CSS Variables

The primary coloring of the \`outline-core-link\` component is handled by the following CSS Variables.

> Any consumer application that includes \`outline.theme.css\` can simply overwrite any relevant CSS Variables in a subsequent CSS include to affect change on the element styling using the following variables.

Additional documentation and references for these CSS Variables can be found in \`outline-core-link/css-variables/vars-link.css\`.

- \`--outline-core-link-transition-property\`: The CSS transition property to use for the link.
- \`--outline-core-link-transition-duration\`: The CSS transition duration to use for the link.
- \`--outline-core-link-transition-timing-function\`: The CSS transition timing function to use for the link.
- \`--outline-core-link-color-default\`: The default link color.
- \`--outline-core-link-color-default-decoration\`: Text decoration for the default link.
- \`--outline-core-link-color-hover\`: The link color when hovering on the link.
- \`--outline-core-link-color-hover-decoration\`: Text decoration for the link when hovering.
- \`--outline-core-link-color-focus\`: The link color when focusing on the link.
- \`--outline-core-link-color-focus-decoration\`: Text decoration for the link when focusing.
`,
      },
    },
  },
};

interface Options {
  linkHref?: string;
  linkText?: string;
  linkTarget?: LinkTargetType;
}

const LinkTemplate = ({
  linkHref,
  linkText,
  linkTarget,
}: Options): TemplateResult =>
  html`
    <outline-core-link
      link-href="${ifDefined(linkHref)}"
      link-target="${ifDefined(linkTarget)}"
    >
      ${ifDefined(linkText)}
    </outline-core-link>
  `;

export const Link = LinkTemplate.bind({});
// eslint-disable-next-line
// @ts-ignore
Link.args = {
  linkText: 'Sample Link',
};
// eslint-disable-next-line
// @ts-ignore
Link.parameters = {
  docs: {
    source: {
      code: `
<outline-core-link
  link-href="{{ linkHref }}"
  link-rel="{{ linkRel }}"
  link-target="{{ linkTarget }}"
>
  {{ defaultSlot }}
</outline-core-link>
      `,
    },
  },
};
export const PropsAndSlottedText = (): TemplateResult =>
  html`
<outline-core-link link-href="https://outline.phase2tech.com">
  Link using properties, with slotted link text
</outline-core-link>
  `;
PropsAndSlottedText.parameters = {
  docs: {
    description: {
      story: `
The following sample utilizes the \`link-href\` to pass the URL reference, and passes in the link content, simple text in this case, via the default slot.
    `,
    },
  },
};

export const PropertiesOnly = (): TemplateResult =>
  html`
<outline-core-link
  link-href="https://outline.phase2tech.com"
  link-text="Link using properties, including the link text"
></outline-core-link>
  `;
PropertiesOnly.parameters = {
  docs: {
    description: {
      story: `
The following sample utilizes the \`link-href\` and \`link-text\` properties to render a link completely via the Shadow DOM.
    `,
    },
  },
};

export const SlottedImageLink = (): TemplateResult =>
  html`
<outline-core-link link-href="https://outline.phase2tech.com">
    <img src="${sampleImage}" alt="Creative" />
</outline-core-link>
  `;
SlottedImageLink.parameters = {
  docs: {
    description: {
      story: `
The following sample goes a step beyond the previous example and provides more than just a simple text link from the consumer application.
An example of when this would be used could be a CMS providing pre-built responsive images using the \`picture\` element.
    `,
    },
  },
  layout: 'fullscreen',
};
