import { html, HTMLTemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { argTypeRel, argTypeTarget, argTypeHref } from './config';
import type { LinkTargetType, LinkRelType } from './config';
import sampleImage from '../../../.storybook/static/media/color/Creative_Process_color.jpg';
// Import the component itself.
import './outline-link';

export default {
  title: 'Atoms/Link',
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
      description: 'The text to display for the link component.',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    linkHref: 'https://outline.phase2tech.com',
    linkRel: 'external',
    linkTarget: '_blank',
    linkText: 'Sample Link',
  },
};

interface Options {
  linkHref?: string;
  linkRel?: LinkRelType;
  linkText?: string;
  linkTarget?: LinkTargetType;
}

export const Link = ({
  linkHref,
  linkRel,
  linkText,
  linkTarget,
}: Options): HTMLTemplateResult =>
  html`
    <outline-link
      linkHref="${ifDefined(linkHref)}"
      linkRel="${ifDefined(linkRel)}"
      linkTarget="${ifDefined(linkTarget)}"
    >
      ${ifDefined(linkText)}
    </outline-link>
  `;

export const PropsAndSlottedText = (): HTMLTemplateResult =>
  html`
    <outline-link linkHref="https://outline.phase2tech.com">
      Link using properties, with slotted link text
    </outline-link>
  `;

export const PropertiesOnly = (): HTMLTemplateResult =>
  html`
    <outline-link
      linkHref="https://outline.phase2tech.com"
      linkText="Link using properties, including the link text"
    ></outline-link>
  `;

export const FullySlotted = (): HTMLTemplateResult =>
  html`
    <outline-link>
      <a href="https://outline.phase2tech.com" target="_blank">
        Link using fully slotted link element
      </a>
    </outline-link>
  `;

export const SlottedImageLink = (): HTMLTemplateResult =>
  html`
    <outline-link>
      <a href="https://outline.phase2tech.com" target="_blank">
        <img src="${sampleImage}" alt="Creative" />
      </a>
    </outline-link>
  `;
