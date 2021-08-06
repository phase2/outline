import { html, TemplateResult } from 'lit';
import './outline-accordion';

export default {
  title: 'Molecules/Accordion',
  component: 'outline-accordion',
  argTypes: {
    singlePanel: {
      description:
        'Boolean attribute that determines if the accordion can have multiple panels opne at one time. Defaults to false.',
      control: {
        type: 'boolean',
      },
    },
    panels: {
      description:
        'Takes an array of AccordioPanel objects. `{heading: string, content: any}`',
    },
  },
};

const Template = ({ panels, singlePanel }): TemplateResult =>
  html`
    <outline-accordion .panels=${panels} ?singlePanel=${singlePanel}>
    </outline-accordion>
  `;

export const Accordion = Template.bind({});
Accordion.args = {
  panels: [
    {
      heading: 'I am heading 1',
      content: `<div class="test"><h3>I'm magic!!!</h3><p>Praesent ut ligula non mi</p></div> `,
    },
    {
      heading: 'I am heading 2',
      content: `<p>Praesent ut ligula non mi</p>`,
    },
    {
      heading: 'I am heading 3',
      content: `<p>Praesent ut ligula non mi</p>`,
    },
  ],
  singlePanel: false,
};
