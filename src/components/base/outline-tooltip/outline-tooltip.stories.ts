import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import './outline-tooltip';
import '../outline-button/outline-button';
import '../outline-heading/outline-heading';
export default {
  title: 'Atoms/Tooltip',
  component: 'outline-tooltip',
  argTypes: {
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

const InlineTemplate = ({ tip, position }): TemplateResult =>
  html`
    <outline-grid gap-size="small">
      <outline-column col-span-default="6">
        <outline-heading>Using tip property.</outline-heading>
        <p>
          mauris ipsum aliquam libero.
          <outline-tooltip tip="${ifDefined(tip)}" position="${position}">
            WRAPPED TEXT.
          </outline-tooltip>
          Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.
        </p>
      </outline-column>
    </outline-grid>
  `;

const FormTemplate = ({ position }): TemplateResult =>
  html`
    <outline-grid gap-size="small">
      <outline-column col-span-default="6">
        <outline-heading>Using 'tip-info' slot .</outline-heading>
        <p>
          mauris ipsum aliquam libero.
          <outline-tooltip position="${position}">
            <span slot="tip-info">Important information</span>
            <outline-link url="#"> wrapped link.</outline-link>
          </outline-tooltip>
          Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.
        </p>
      </outline-column>
    </outline-grid>
  `;

export const WithTipProp = InlineTemplate.bind({});
WithTipProp.args = {
  tip: '<p>Important information to be shared by this tooltip</p>',
  position: 'bottom',
};

export const WithTipInfoSlot = FormTemplate.bind({});
WithTipInfoSlot.args = {
  position: 'bottom',
};
