import { html, TemplateResult } from 'lit';
import './outline-modal';
import { argTypeSlotContent } from '../../base/outline-element/utils/utils';
import { modalSizes } from './outline-modal';
import { ifDefined } from 'lit/directives/if-defined';

export default {
  title: 'Molecules/Modal',
  component: 'outline-modal',
  argTypes: {
    triggerSlot: {
      name: 'slot="outline-modal--trigger"',
      description: 'The trigger slot.',
      // @todo how can we edit this as HTML.
      control: { type: 'text' },
    },
    headerSlot: {
      name: 'slot="outline-modal--header"',
      description: 'The header slot.',
      // @todo how can we edit this as HTML.
      control: { type: 'text' },
    },
    // This is the modal content.
    defaultSlot: {
      ...argTypeSlotContent.defaultSlot,
      // @todo how can we edit this as HTML.
      control: { type: 'text' },
    },
    size: {
      name: 'size',
      description: 'The size of the modal.',
      options: modalSizes,
    },
  },
};

const Template = ({
  triggerSlot,
  headerSlot,
  defaultSlot,
  size,
}): TemplateResult => {
  return html`
    <outline-modal size="${ifDefined(size)}">
      <div slot="outline-modal--trigger">${triggerSlot}</div>
      <div slot="outline-modal--header">${headerSlot}</div>
      ${defaultSlot}
    </outline-modal>
  `;
};

export const Small = Template.bind({});
Small.args = {
  triggerSlot: html`<a href="#">Open modal</a>`,
  headerSlot: html`<h2>The modal header</h2>`,
  defaultSlot: html`<p>A small modal.</p>`,
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  triggerSlot: html`<a href="#">Open modal</a>`,
  headerSlot: html`<h2>The modal header</h2>`,
  defaultSlot: html`<p>A medium modal.</p>`,
  size: 'medium',
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  triggerSlot: html`<a href="#">Open modal</a>`,
  headerSlot: html`<h2>The modal header</h2>`,
  defaultSlot: html`<p>A full screen modal.</p>`,
  size: 'full-screen',
};
