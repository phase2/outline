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
  <div>
    <p>This is slotted content in a paragraph tag inside the default slot.</p>
  </div>
  <div>
    <p>This is slotted content in a paragraph tag inside the default slot.</p>
  </div>
  <div>
    <p>This is slotted content in a paragraph tag inside the default slot.</p>
  </div>
  <div slot="named-slot--one">
    <p>This is some slotted content in named-slot--one.</p>
  </div>
  <div slot="named-slot--two">
    <p>This is some slotted content in named-slot--two.</p>
  </div>
  <div slot="named-slot--three">
    <p>This is some slotted content in named-slot--three.</p>
  </div>
  <div slot="named-slot--four">
    <p>This is some slotted content in named-slot--four.</p>
  </div>
  <div slot="named-slot--five">
    <p>This is some slotted content in named-slot--five.</p>
  </div>
</example-slot-controller-component>
`;
};

export const SlotController = () => Template();
