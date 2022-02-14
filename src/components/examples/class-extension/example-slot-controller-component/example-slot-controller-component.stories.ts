import { html, TemplateResult } from 'lit';
import './example-slot-controller-component';

const configuration = {
  title:
    'Documentation/Guides/Component Development/Code Examples/Slot Controller',
  component: 'example-slot-controller-component',
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
  },
  argTypes: {},
  args: {},
};

export default configuration;

const Template = (): TemplateResult => {
  return html`
<example-slot-controller-component>
  <p>This is slotted content in a paragraph tag inside the default slot.</p>
  <p>This is slotted content in a paragraph tag inside the default slot.</p>
  <p>This is slotted content in a paragraph tag inside the default slot.</p>
  <p slot="named-slot--one">This is some slotted content in <code>named-slot--one</code>.</p>
  <p slot="named-slot--two">This is some slotted content in <code>named-slot--two</code>.</p>
  <p slot="named-slot--two">This is some slotted content in a second instance of <code>named-slot--two</code>.</p>
  <p slot="named-slot--three">This is some slotted content in <code>named-slot--three</code>.</p>
  <p slot="named-slot--four">This is some slotted content in <code>named-slot--four</code>.</p>
  <p slot="named-slot--five">This is some slotted content in <code>named-slot--five</code>.</p>
</example-slot-controller-component>
`;
};

export const SlotController = () => Template();
