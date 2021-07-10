import { html, TemplateResult } from 'lit';
import './outline-accordion';

export default {
  title: 'Molecules/Accordion',
  component: 'outline-accordion',
};

const Template = ({ data }): TemplateResult =>
  html` <outline-accordion .data=${data}> </outline-accordion> `;

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
};
