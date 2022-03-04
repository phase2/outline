import { html, TemplateResult } from 'lit';
import './outline-tab-group';
import '../outline-tab/outline-tab';
import '../outline-tab-panel/outline-tab-panel';
import '../../outline-heading/outline-heading';
import '../../outline-accordion/outline-accordion';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const tabControlPosition: string[] = ['top', 'start'];

interface TabData {
  title: string;
  content: string;
  disabled?: boolean;
}

const formatTitle = title => {
  return title.replace(/\s+/g, '-').toLowerCase();
};

const tabData: TabData[] = [
  {
    title: 'Tab Number One',
    content: `
      <outline-heading>Content for Tab Number One</outline-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quae cum essent dicta, discessimus. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? <a href="http://loripsum.net/" target="_blank">Hoc ipsum elegantius poni meliusque potuit.</a> Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Qua tu etiam inprudens utebare non numquam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quae est igitur causa istarum angustiarum? Dic in quovis conventu te omnia facere, ne doleas. Igitur ne dolorem quidem. </p>
    `,
  },
  {
    title: 'Tab Number Two',
    content: `
      <outline-heading>Content for Tab Number Two</outline-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quae cum essent dicta, discessimus. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? <a href="http://loripsum.net/" target="_blank">Hoc ipsum elegantius poni meliusque potuit.</a> Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Qua tu etiam inprudens utebare non numquam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quae est igitur causa istarum angustiarum? Dic in quovis conventu te omnia facere, ne doleas. Igitur ne dolorem quidem. </p>
    `,
  },
  {
    title: 'Tab Number Three',
    content: `
      <outline-heading>Content for Tab Number Three</outline-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quae cum essent dicta, discessimus. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? <a href="http://loripsum.net/" target="_blank">Hoc ipsum elegantius poni meliusque potuit.</a> Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Qua tu etiam inprudens utebare non numquam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quae est igitur causa istarum angustiarum? Dic in quovis conventu te omnia facere, ne doleas. Igitur ne dolorem quidem. </p>
    `,
  },
  {
    title: 'Disabled',
    content: `<p>This is a disabled tab panel.</p>`,
    disabled: true,
  },
];
export default {
  title: 'Navigation/Tabs',
  component: 'outline-tab-group',
  parameters: {
    viewMode: 'docs',
  },
  argTypes: {
    placement: {
      name: 'Control Placement',
      options: tabControlPosition,
      control: {
        type: 'select',
      },
      description: 'The placement of the tab controls.',
    },
  },
};

const Template = ({ placement }): TemplateResult =>
  html`<outline-tab-group placement=${placement}>
    ${tabData.map(panel => {
      return html`<outline-tab
          slot="nav"
          ?disabled=${panel.disabled}
          panel="${formatTitle(panel.title)}"
          >${panel.title}</outline-tab
        >
        <outline-tab-panel name="${formatTitle(panel.title)}">
          ${unsafeHTML(`${panel.content}`)}
        </outline-tab-panel> `;
    })}
    <div slot="accordion-wrapper">
      <outline-accordion ?clean=${true} ?single-panel=${true}>
        ${tabData.map(panel => {
          return html` <outline-accordion-panel
            ?disabled=${panel.disabled}
            slot="panels"
          >
            <h5 slot="heading">${panel.title}</h5>
            ${unsafeHTML(`${panel.content}`)}
          </outline-accordion-panel>`;
        })}
      </outline-accordion>
    </div>
  </outline-tab-group> `;

export const TabGroup = Template.bind({});
TabGroup.args = {
  placement: 'start',
};
