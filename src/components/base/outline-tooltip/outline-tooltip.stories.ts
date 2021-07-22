import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import './outline-tooltip';
import '../outline-button/outline-button';
export default {
  title: 'Atoms/OutlineTooltip',
  component: 'outline-tooltip',
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
    },
    tip: {
      control: {
        type: 'text',
      },
    },
    position: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
    },
  },
};

const InlineTemplate = ({ id, tip, position }): TemplateResult =>
  html`
    <div style=${`max-width: 50%`}>
      <h2 style=${`font-size: 30px; margin-bottom: 1rem`}>
        Hover over all caps text below.
      </h2>
      <p>
        Donec id justo. Suspendisse non nisl sit amet velit hendrerit rutrum.
        Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
        <outline-tooltip
          id="${ifDefined(id)}"
          tip="${ifDefined(tip)}"
          position="${position}"
        >
          TOOL-TIP WRAPPED AROUND THIS TEXT.
        </outline-tooltip>
        Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.
      </p>
    </div>
  `;

const FormTemplate = ({ id, position }): TemplateResult =>
  html`
    <div>
      <h2 style=${`font-size: 30px; margin-bottom: 1rem`}>
        Simulated Disabled Form Button.
      </h2>
      <div>
        <form>
          <outline-tooltip id="${id}" position="${position}">
            <span slot="tip-info"> Enter a valid email adress here </span>
            <input
              type="text"
              style=${`border: blue solid 2px`}
              placeholder="your email address"
            />
          </outline-tooltip>
        </form>
      </div>
    </div>
  `;

export const InlineTooltip = InlineTemplate.bind({});
InlineTooltip.args = {
  id: 'tooltip-id',
  tip: '<div><h2>Thing of Import</h2><p>Important information to be shared by this tooltip</p></div>',
  position: 'bottom',
};

export const FormTooltip = FormTemplate.bind({});
FormTooltip.args = {
  id: 'tooltip-1',
  position: 'top',
};
