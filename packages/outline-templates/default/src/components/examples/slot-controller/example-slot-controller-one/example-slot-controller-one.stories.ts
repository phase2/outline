import { html, TemplateResult } from 'lit';
import './example-slot-controller-one';

const configuration = {
  title:
    'Documentation/Code Examples/Slot Controller/Simple Usage',
  component: 'example-slot-controller-one',
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
<example-slot-controller-one>
  <p>This is slotted content in a paragraph tag inside the default slot.</p>
  <p>This is slotted content in a paragraph tag inside the default slot.</p>
  <p>This is slotted content in a paragraph tag inside the default slot.</p>
  <p slot="named-slot--one">This is some slotted content in <code>named-slot--one</code>.</p>
  <p slot="named-slot--two">This is some slotted content in <code>named-slot--two</code>.</p>
  <p slot="named-slot--two">This is some slotted content in a second instance of <code>named-slot--two</code>.</p>
  <p slot="named-slot--three">This is some slotted content in <code>named-slot--three</code>.</p>
  <p slot="named-slot--four">This is some slotted content in <code>named-slot--four</code>.</p>
  <p slot="named-slot--five">This is some slotted content in <code>named-slot--five</code>.</p>
  <p slot="named-slot--five">This is some slotted content in a second instance of <code>named-slot--five</code>.</p>
  <p slot="named-slot--five">This is some slotted content in a third instance of <code>named-slot--five</code>.</p>
</example-slot-controller-one>
`;
};

export const SimpleUsage = () => Template();
