import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import type { HorizontalAlignment } from './config';
import { argTypeHorizontalAlign } from '../outline-element/utils/utils';
import './outline-container';

export default {
  title: 'Templates/Container',
  component: 'outline-container',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    //...argTypeSlotContent,
    containerAlign: {
      ...argTypeHorizontalAlign,
      name: 'Alignment of the Container',
      defaultValue: 'center',
    },
    isNested: {
      name: 'Padding',
      control: {
        type: 'boolean',
      },
    },
    fullBleed: {
      name: 'Full Bleed Container',
      control: {
        type: 'boolean',
      },
    },
  },
};

interface Options {
  isNested?: boolean;
  fullBleed?: boolean;
  containerAlign?: HorizontalAlignment;
}

export const Container = ({
  isNested,
  fullBleed,
  containerAlign,
}: Options): TemplateResult =>
  html`
    <outline-container
      class="text-left rounded-xl border-2 border-dashed bg-demo-lightBlue border-demo-darkBlue py-10 md:py-20 my-10 md:my-20"
      is-nested="${ifDefined(isNested)}"
      full-bleed="${ifDefined(fullBleed)}"
      container-align="${ifDefined(containerAlign)}"
    >
      <!-- <outline-heading level="h2" level-size="2xl" class="mb-4"
        >Container</outline-heading
      > -->
      <p>
        This is text inside of a container. The various stylings of the element
        in demo mode are just here to show where the container starts and ends
        and will not be visible on the actual component being rendered.
      </p>
      <p>
        The left and right padding are in fact representative of the final
        display.
      </p>
    </outline-container>
  `;
