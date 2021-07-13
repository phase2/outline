import { html, TemplateResult } from 'lit';
import './outline-accordion';

export default {
  title: 'Molecules/Accordion',
  component: 'outline-accordion',
  argTypes: {
    singleLeaf: { control: { type: 'boolean' } },
  },
};

const Template = ({ data, singleLeaf }): TemplateResult =>
  html`
    <outline-accordion .data=${data} .singlePanel=${singleLeaf}>
    </outline-accordion>
  `;

export const Accordion = Template.bind({});
Accordion.args = {
  data: [
    {
      heading: 'I am heading 1',
      content: html`<p>Praesent ut ligula non mi</p>`,
    },
    {
      heading: 'I am heading 2',
      content: html`<p>Praesent ut ligula non mi</p>`,
    },
    {
      heading: 'I am heading 3',
      content: html`<p>Praesent ut ligula non mi</p>`,
    },
  ],
  singleLeaf: true,
};
