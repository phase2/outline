import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypeRel, argTypeTarget, argTypeHref } from './config';
import type { LinkTargetType, LinkRelType } from './config';
import sampleImage from '../../../.storybook/static/media/color/Creative_Process_color.jpg';
// Import the component itself.
import './outline-link';

export default {
  title: 'Navigation/Link',
  component: 'outline-link',
  argTypes: {
    linkHref: {
      ...argTypeHref,
    },
    linkRel: {
      ...argTypeRel,
    },
    linkTarget: {
      ...argTypeTarget,
    },
    linkText: {
      name: 'Link Text',
      description: 'The text to display for the link component. This text is part of the ShadowDOM vs omitting this property and utilizing the default slot will render the text in LightDOM.',
      control: {
        type: 'text',
      },
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    linkHref: 'https://outline.phase2tech.com',
    linkRel: 'external',
    linkTarget: '_blank',
    linkText: 'Sample Link',
  },
  parameters: {
    docs: {
      description: {
        component: `
This component renders a link as an \`a\` element.

## Difference from a standard \`a\` element.

The \`outline-link\` component allows the ultimate flexibility in how you want to utilize the component.

- Providing a \`link-text\` attribute negates the need or usage of any slotted content.
- Providing a \`link-href\` without the \`link-text\` attribute will then use the slotted content as the content of the link.
- Providing neither the \`link-href\` nor the \`link-text\` attributes will make the link assume the entire link, including \`<a></a>\` portions of the link be passed into the slot. 

## CSS Variables

The primary coloring of the \`outline-link\` component is handled by the following CSS Variables. 

> Any consumer application that includes \`outline.theme.css\` can simply overwrite any relevant CSS Variables in a subsequent include to affect change on the element styling.

- \`--outline-link-color-default\` The default link color
- \`--outline-link-color-hover\` The link color when hovering on the link
- \`--outline-link-color-focus\` The link color when focusing on the link
`,
      },
    },
  },
};

interface Options {
  linkHref?: string;
  linkRel?: LinkRelType;
  linkText?: string;
  linkTarget?: LinkTargetType;
}

const LinkTemplate = ({
  linkHref,
  linkRel,
  linkText,
  linkTarget,
}: Options): TemplateResult =>
  html`
    <outline-link
      link-href="${ifDefined(linkHref)}"
      link-rel="${ifDefined(linkRel)}"
      link-target="${ifDefined(linkTarget)}"
    >
      ${ifDefined(linkText)}
    </outline-link>
  `;

export const Link = LinkTemplate.bind({});
Link.args = {
  linkText: 'Sample Link',
};
Link.parameters = {
  docs: {
    source: {
      code: `
<outline-link
  link-href="{{ linkHref }}"
  link-rel="{{ linkRel }}"
  link-target="{{ linkTarget }}"
>
  {{ defaultSlot }}
</outline-link>
      `,
    },
  },
};
export const PropsAndSlottedText = (): TemplateResult =>
  html`
<outline-link link-href="https://outline.phase2tech.com">
  Link using properties, with slotted link text
</outline-link>
  `;

export const PropertiesOnly = (): TemplateResult =>
  html`
<outline-link
  link-href="https://outline.phase2tech.com"
  link-text="Link using properties, including the link text"
></outline-link>
  `;

export const FullySlotted = (): TemplateResult =>
  html`
<outline-link>
  <a href="https://outline.phase2tech.com" target="_blank">
    Link using fully slotted link element
  </a>
</outline-link>
  `;

export const SlottedImageLink = (): TemplateResult =>
  html`
<outline-link>
  <a href="https://outline.phase2tech.com" target="_blank">
    <img src="${sampleImage}" alt="Creative" />
  </a>
</outline-link>
  `;
