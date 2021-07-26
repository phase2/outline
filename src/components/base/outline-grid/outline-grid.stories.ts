import { html, HTMLTemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';

import { argTypeGapSize } from '../outline-element/utils/utils';
import './outline-grid';

export default {
  title: 'Templates/Grid',
  component: 'outline-grid',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    gapSize: {
      ...argTypeGapSize,
      name: 'Default Gap Size',
    },
    gapSizeSm: {
      ...argTypeGapSize,
      name: 'Gap Size on Small+',
    },
    gapSizeMd: {
      ...argTypeGapSize,
      name: 'Gap Size on Medium+',
    },
    gapSizeLg: {
      ...argTypeGapSize,
      name: 'Gap Size on Large+',
    },
    gapSizeXl: {
      ...argTypeGapSize,
      name: 'Gap Size on Extra Large+',
    },
    gapSizeXxl: {
      ...argTypeGapSize,
      name: 'Gap Size on Extra Extra Large+',
    },
    isNested: {
      name: 'Nested Grid',
      control: {
        type: 'boolean',
      },
    },
    fullBleed: {
      name: 'Full Bleed Grid',
      control: {
        type: 'boolean',
      },
    },
  },
};

interface Options {
  gapSize?: string;
  gapSizeSm?: number;
  gapSizeMd?: number;
  gapSizeLg?: number;
  gapSizeXl?: number;
  gapSizeXxl?: number;
  isNested?: boolean;
  fullBleed?: boolean;
  defaultSlot?: boolean;
}

const Template = ({
  gapSize,
  gapSizeSm,
  gapSizeMd,
  gapSizeLg,
  gapSizeXl,
  gapSizeXxl,
  isNested,
  fullBleed,
  defaultSlot,
}: Options): HTMLTemplateResult => html`
  <outline-grid
    gap-size="${ifDefined(gapSize)}"
    gap-size-sm="${ifDefined(gapSizeSm)}"
    gap-size-md="${ifDefined(gapSizeMd)}"
    gap-size-lg="${ifDefined(gapSizeLg)}"
    gap-size-xl="${ifDefined(gapSizeXl)}"
    gap-size-xxl="${ifDefined(gapSizeXxl)}"
    is-nested="${ifDefined(isNested)}"
    full-bleed="${ifDefined(fullBleed)}"
  >
    ${defaultSlot}
  </outline-grid>
`;

export const RowsAndColumns = Template.bind({});
RowsAndColumns.args = {
  gapSize: 'small',
  defaultSlot: html`
    <outline-column col-span-default="12" content-align="middle">
      <outline-heading level="h2" level-style="semibold">
        Column/Row Spanning</outline-heading
      >
    </outline-column>

    <outline-column
      col-span-default="12"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 1 row and 12 columns.</p>
    </outline-column>
    <outline-column
      col-span-md="6"
      row-span="4"
      class="py-64 border-2 bg-demo-lightBlue border-demo-darkBlue p-8 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 4 rows and 6 columns.</p>
    </outline-column>
    <outline-column
      col-span-md="6"
      row-span="1"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 6 columns and 1 row.</p>
    </outline-column>
    <outline-column
      col-span-md="6"
      row-span="3"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 6 columns and 3 rows.</p>
    </outline-column>
    <outline-column
      col-span-default="12"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This box spans 1 row and 12 columns.</p>
    </outline-column>
  `,
};

export const EqualColumns = Template.bind({});
EqualColumns.args = {
  gapSize: 'small',
  defaultSlot: html`
    <outline-column col-span-default="12">
      <outline-heading level="h2" level-style="semibold">
        Equal Column Grid</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
  `,
};

export const FullBleed = Template.bind({});
FullBleed.args = {
  gapSize: 'small',
  fullBleed: true,
  defaultSlot: html`
    <outline-column col-span-default="12">
      <outline-heading level="h2" level-style="semibold">
        Equal Column Grid</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>This is some text inside of a grid column.</p>
    </outline-column>
  `,
};

export const AsymmetricLeft = Template.bind({});
AsymmetricLeft.args = {
  gapSize: 'small',
  defaultSlot: html`
    <outline-column col-span-default="12">
      <outline-heading level="h2" level-style="semibold">
        >Asymmetrical Grid</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-md="8"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </outline-column>
  `,
};

export const AsymmetricRight = Template.bind({});
AsymmetricRight.args = {
  gapSize: 'small',
  defaultSlot: html`
    <outline-column col-span-default="12">
      <outline-heading level="h2" level-style="semibold">
        >Asymmetrical Grid</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-md="4"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </outline-column>
    <outline-column
      col-span-md="8"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is some text inside of a grid column. Because it's asymmetrical,
        This box is either twice as large or half the size of the other column.
      </p>
    </outline-column>
  `,
};

export const AsymmetricLeftWithBorder = Template.bind({});
AsymmetricLeftWithBorder.args = {
  gapSize: '',
  defaultSlot: html`
    <outline-column col-span-default="12">
      <outline-heading level="h2" level-style="semibold">
        >Asymmetrical Grid With Divider</outline-heading
      >
    </outline-column>

    <outline-column col-span-default="12" class="pb-2">
      <!-- <outline-heading level="h3" levelstyle="3">
        Border gap size: small</outline-heading
      > -->
      <h3>Border gap size: small</h3>
    </outline-column>

    <outline-column
      col-span-lg="8"
      has-right-divider=${true}
      border-gap-size="small"
    >
      <div
        class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
      >
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </outline-column>
    <outline-column
      col-span-lg="4"
      has-left-divider=${true}
      border-gap-size="small"
    >
      <div
        class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
      >
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </outline-column>

    <outline-column col-span-default="12" class="pb-2 border-t-2 mt-6 pt-4">
      <outline-heading level="h3" level-style="semibold">
        Border gap size: medium</outline-heading
      >
    </outline-column>

    <outline-column
      col-span-lg="8"
      has-right-divider=${true}
      border-gap-size="medium"
    >
      <div
        class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
      >
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </outline-column>
    <outline-column
      col-span-lg="4"
      has-left-divider=${true}
      border-gap-size="medium"
    >
      <div
        class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
      >
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </outline-column>

    <outline-column col-span-default="12" class="pb-2 border-t-2 mt-6 pt-4">
      <outline-heading level="h3" level-style="semibold">
        Border gap size: large</outline-heading
      >
      -
    </outline-column>

    <outline-column
      col-span-lg="8"
      has-right-divider=${true}
      border-gap-size="large"
    >
      <div
        class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
      >
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </outline-column>
    <outline-column
      col-span-lg="4"
      has-left-divider=${true}
      border-gap-size="large"
    >
      <div
        class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
      >
        <p>
          This is some text inside of a grid column. Because it's asymmetrical,
          This box is either twice as large or half the size of the other
          column.
        </p>
      </div>
    </outline-column>
  `,
};

export const OffsetLeft = Template.bind({});
OffsetLeft.args = {
  defaultSlot: html`
    <outline-column col-span-default="12">
      <outline-heading level="h2" level-style="semibold">
        >Offset Left</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-default="10"
      class="border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is an example of a grid column layout in which the content doesn't
        expand the whole width of the container.
      </p>
    </outline-column>
  `,
};

export const OffsetRight = Template.bind({});
OffsetRight.args = {
  defaultSlot: html`
    <outline-column col-span-default="12">
      <outline-heading level="h2" level-style="semibold">
        >Offset Right</outline-heading
      >
    </outline-column>
    <outline-column
      col-span-default="10"
      class="col-start-3 justify-self-end border-2 bg-demo-lightBlue border-demo-darkBlue p-8 py-16 border-dashed rounded-xl shadow-md"
    >
      <p>
        This is an example of a grid column layout in which the content doesn't
        expand the whole width of the container.
      </p>
    </outline-column>
  `,
};
