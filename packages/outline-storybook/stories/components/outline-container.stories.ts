import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import type { HorizontalAlignment } from '@phase2/outline-core';
import { argTypeHorizontalAlign } from '@phase2/outline-core';
import '../../../outline-container/src/outline-container';

export default {
  title: 'Templates/Container',
  component: 'outline-container',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The \`outline-container\` component is a general container element to control width around wrapped elements.

## CSS Variables

- \`--outline-container-padding-x\`: The horizontal padding for the container.
- \`--outline-container-padding-y\`: The vertical padding for the container.
`,
      },
    },
  },
  argTypes: {
    containerAlign: {
      ...argTypeHorizontalAlign,
      name: 'container-align',
      description: 'How the container should align to the parent.',
      table: { category: 'Properties', defaultValue: { summary: 'center' } },
    },
    xPadding: {
      name: 'x-padding',
      description: 'The padding on the x axis for the container. This should be set using simply `x-padding`, and not `x-padding="true"` or `x-padding=""` as the example snippet shows.',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
    yPadding: {
      name: 'y-padding',
      description: 'The padding on the y axis for the container. This should be set using simply `y-padding`, and not `y-padding="true"` or `y-padding=""` as the example snippet shows.',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
    fullBleed: {
      name: 'full-bleed',
      description:
        'If the container should be full bleed and extend its left and right edges to edge of parent.',
      table: { category: 'Properties', defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    containerAlign: 'center',
    xPadding: true,
    yPadding: true,
    fullBleed: false,
  },
};

interface Options {
  xPadding?: boolean;
  yPadding?: boolean;
  fullBleed?: boolean;
  containerAlign?: HorizontalAlignment;
}

export const Container = ({
  xPadding,
  yPadding,
  fullBleed,
  containerAlign,
}: Options): TemplateResult =>
  html`
<outline-container
  class="text-left border-2 border-dashed bg-outline-blue-100 border-outline-blue-600"
  ?x-padding=${xPadding}
  ?y-padding=${yPadding}
  ?full-bleed=${fullBleed}
  container-align="${ifDefined(containerAlign)}"
>
  <p>
    This is text inside of a container. The various stylings of the element
    in demo mode are just here to show where the container starts and ends
    and will not be visible on the actual component being rendered. The maximum width 
    of this sample container is 800px, and is only present to help sample the alignment and full bleed options.
  </p>
  <p>
    The left and right padding are in fact representative of the final
    display.
  </p>
</outline-container>
  `;
