import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import './outline-tooltip';
import '../outline-button/outline-button';
import '../outline-heading/outline-heading';
export default {
  title: 'Atoms/Tooltip',
  component: 'outline-tooltip',
  argTypes: {
    id: {
      description:
        '**Required**: Sets the id used by accessibility technologies to associate the tooltip with the target element.',
      control: {
        type: 'text',
      },
    },
    tip: {
      description:
        'An optional prop to pass the tip info. Can also be passed via the "tip-info" slot.',
      control: {
        type: 'text',
      },
    },
    position: {
      description:
        'Sets the cardinal position of the tool-tip display on hover',
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
    },
  },
};

const InlineTemplate = ({ id, tip, position }): TemplateResult =>
  html`
    <outline-grid gap-size="small">
      <outline-column col-span-default="6">
        <outline-heading>Hover over all caps text below.</outline-heading>
        <p>
          mauris ipsum aliquam libero.
          <outline-tooltip
            .id="${id}"
            tip="${ifDefined(tip)}"
            position="${position}"
          >
            TOOL-TIP WRAPPED AROUND THIS TEXT.
          </outline-tooltip>
          Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.
        </p>
      </outline-column>
    </outline-grid>
  `;

const FormTemplate = ({ id, position }): TemplateResult =>
  html`
    <outline-grid>
      <outline-column col-span-default="6">
        <outline-heading> Simulated Disabled Form Button. </outline-heading>
        <div>
          <form>
            <outline-tooltip .id="${id}" position="${position}">
              <span slot="tip-info"> Enter a valid email address here </span>
              <input
                type="text"
                style=${`border: blue solid 2px`}
                placeholder="your email address"
              />
            </outline-tooltip>
          </form>
        </div>
      </outline-column>
    </outline-grid>
  `;

export const WithTipProp = InlineTemplate.bind({});
WithTipProp.args = {
  tip: '<div><h2>Thing of Import</h2><p>Important information to be shared by this tooltip</p></div>',
  position: 'bottom',
};

export const WithTipInfoSlot = FormTemplate.bind({});
WithTipInfoSlot.args = {
  position: 'top',
};
