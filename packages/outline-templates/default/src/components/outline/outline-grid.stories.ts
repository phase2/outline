// import { html, TemplateResult, ifDefined } from '@phase2/outline-core';
// import { Size } from '@phase2/outline-element';

// import { argTypeGapSize, argTypeHidden } from '@phase2/outline-element';

// export default {
//   title: 'Templates/Grid',
//   component: 'outline-grid',
//   parameters: {
//     layout: 'fullscreen',
//   },
//   argTypes: {
//     defaultSlot: argTypeHidden,
//     gapSize: {
//       ...argTypeGapSize,
//       name: 'Default Gap Size',
//       table: { defaultValue: { summary: 'small' } },
//     },
//     gapSizeSm: {
//       ...argTypeGapSize,
//       name: 'Gap Size on Small+',
//       table: { defaultValue: { summary: 'inherited' } },
//     },
//     gapSizeMd: {
//       ...argTypeGapSize,
//       name: 'Gap Size on Medium+',
//       table: { defaultValue: { summary: 'inherited' } },
//     },
//     gapSizeLg: {
//       ...argTypeGapSize,
//       name: 'Gap Size on Large+',
//       table: { defaultValue: { summary: 'inherited' } },
//     },
//     gapSizeXl: {
//       ...argTypeGapSize,
//       name: 'Gap Size on Extra Large+',
//       table: { defaultValue: { summary: 'inherited' } },
//     },
//     gapSizeXxl: {
//       ...argTypeGapSize,
//       name: 'Gap Size on Extra Extra Large+',
//       table: { defaultValue: { summary: 'inherited' } },
//     },
//     xPadding: {
//       name: 'Padding: x-axis',
//       description: '',
//       table: { defaultValue: { summary: 'false' } },
//       control: {
//         type: 'boolean',
//       },
//     },
//     yPadding: {
//       name: 'Padding: y-axis',
//       description: '',
//       table: { defaultValue: { summary: 'false' } },
//       control: {
//         type: 'boolean',
//       },
//     },
//     fullBleed: {
//       name: 'Full Bleed',
//       description:
//         'If the container should be full bleed and extend its left and right edges to edge of parent.',
//       table: { defaultValue: { summary: 'false' } },
//       control: {
//         type: 'boolean',
//       },
//     },
//   },
//   args: {
//     xPadding: false,
//     yPadding: false,
//     fullBleed: false,
//   },
// };

// interface Options {
//   gapSize?: Size;
//   gapSizeSm?: Size;
//   gapSizeMd?: Size;
//   gapSizeLg?: Size;
//   gapSizeXl?: Size;
//   gapSizeXxl?: Size;
//   xPadding?: boolean;
//   yPadding?: boolean;
//   fullBleed?: boolean;
//   defaultSlot?: boolean;
// }

// const Template = ({
//   gapSize,
//   gapSizeSm,
//   gapSizeMd,
//   gapSizeLg,
//   gapSizeXl,
//   gapSizeXxl,
//   xPadding,
//   yPadding,
//   fullBleed,
//   defaultSlot,
// }: Options): TemplateResult => html`
//   <outline-grid
//     gap-size="${ifDefined(gapSize)}"
//     gap-size-sm="${ifDefined(gapSizeSm)}"
//     gap-size-md="${ifDefined(gapSizeMd)}"
//     gap-size-lg="${ifDefined(gapSizeLg)}"
//     gap-size-xl="${ifDefined(gapSizeXl)}"
//     gap-size-xxl="${ifDefined(gapSizeXxl)}"
//     ?x-padding="${xPadding}"
//     ?y-padding="${yPadding}"
//     ?full-bleed="${fullBleed}"
//   >
//     ${defaultSlot}
//   </outline-grid>
// `;

// const DefaultGridDecorators = [
//   (Story): TemplateResult => html` <div class="block py-12">${Story()}</div> `,
// ];

// export const RowsAndColumns = Template.bind({});
// RowsAndColumns.decorators = DefaultGridDecorators;
// RowsAndColumns.args = {
//   gapSize: 'small',
//   defaultSlot: html`
//     <outline-column col-span-default="12" content-align="middle">
//       <outline-heading level="h2" level-style="semibold">
//         Column/Row Spanning</outline-heading
//       >
//     </outline-column>

//     <outline-column
//       col-span-default="12"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>This box spans 1 row and 12 columns.</p>
//     </outline-column>
//     <outline-column
//       col-span-md="6"
//       row-span="4"
//       class="py-64 border-2 bg-outline-blue-100 border-outline-blue-600 p-8 border-dashed rounded-xl shadow-md"
//     >
//       <p>This box spans 4 rows and 6 columns.</p>
//     </outline-column>
//     <outline-column
//       col-span-md="6"
//       row-span="1"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 border-dashed rounded-xl shadow-md"
//     >
//       <p>This box spans 6 columns and 1 row.</p>
//     </outline-column>
//     <outline-column
//       col-span-md="6"
//       row-span="3"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 border-dashed rounded-xl shadow-md"
//     >
//       <p>This box spans 6 columns and 3 rows.</p>
//     </outline-column>
//     <outline-column
//       col-span-default="12"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>This box spans 1 row and 12 columns.</p>
//     </outline-column>
//   `,
// };

// export const EqualColumns = Template.bind({});
// EqualColumns.decorators = DefaultGridDecorators;
// EqualColumns.args = {
//   gapSize: 'small',
//   defaultSlot: html`
//     <outline-column col-span-default="12">
//       <outline-heading level="h2" level-style="semibold">
//         Equal Column Grid</outline-heading
//       >
//     </outline-column>
//     <outline-column
//       col-span-md="4"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>This is some text inside of a grid column.</p>
//     </outline-column>
//     <outline-column
//       col-span-md="4"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>This is some text inside of a grid column.</p>
//     </outline-column>
//     <outline-column
//       col-span-md="4"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>This is some text inside of a grid column.</p>
//     </outline-column>
//   `,
// };

// export const FullBleed = Template.bind({});
// FullBleed.decorators = DefaultGridDecorators;
// FullBleed.args = {
//   gapSize: 'small',
//   fullBleed: true,
//   defaultSlot: html`
//     <outline-column col-span-default="12">
//       <outline-heading level="h2" level-style="semibold">
//         Full Bleed Grid</outline-heading
//       >
//     </outline-column>
//     <outline-column
//       col-span-md="4"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>This is some text inside of a grid column.</p>
//     </outline-column>
//     <outline-column
//       col-span-md="4"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>This is some text inside of a grid column.</p>
//     </outline-column>
//     <outline-column
//       col-span-md="4"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>This is some text inside of a grid column.</p>
//     </outline-column>
//   `,
// };

// export const AsymmetricLeft = Template.bind({});
// AsymmetricLeft.decorators = DefaultGridDecorators;
// AsymmetricLeft.args = {
//   gapSize: 'small',
//   defaultSlot: html`
//     <outline-column col-span-default="12">
//       <outline-heading level="h2" level-style="semibold">
//         Asymmetrical Grid</outline-heading
//       >
//     </outline-column>
//     <outline-column
//       col-span-md="8"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>
//         This is some text inside of a grid column. Because it's asymmetrical,
//         This box is either twice as large or half the size of the other column.
//       </p>
//     </outline-column>
//     <outline-column
//       col-span-md="4"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>
//         This is some text inside of a grid column. Because it's asymmetrical,
//         This box is either twice as large or half the size of the other column.
//       </p>
//     </outline-column>
//   `,
// };

// export const AsymmetricRight = Template.bind({});
// AsymmetricRight.decorators = DefaultGridDecorators;
// AsymmetricRight.args = {
//   gapSize: 'small',
//   defaultSlot: html`
//     <outline-column col-span-default="12">
//       <outline-heading level="h2" level-style="semibold">
//         Asymmetrical Grid</outline-heading
//       >
//     </outline-column>
//     <outline-column
//       col-span-md="4"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>
//         This is some text inside of a grid column. Because it's asymmetrical,
//         This box is either twice as large or half the size of the other column.
//       </p>
//     </outline-column>
//     <outline-column
//       col-span-md="8"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>
//         This is some text inside of a grid column. Because it's asymmetrical,
//         This box is either twice as large or half the size of the other column.
//       </p>
//     </outline-column>
//   `,
// };

// export const AsymmetricLeftWithBorder = Template.bind({});
// AsymmetricLeftWithBorder.decorators = DefaultGridDecorators;
// AsymmetricLeftWithBorder.args = {
//   gapSize: '',
//   defaultSlot: html`
//     <outline-column col-span-default="12">
//       <outline-heading level="h2" level-style="semibold">
//         Asymmetrical Grid With Divider</outline-heading
//       >
//     </outline-column>
//     <outline-column col-span-default="12" class="pb-2">
//       <h3>Border gap size: small</h3>
//     </outline-column>

//     <outline-column
//       col-span-lg="8"
//       has-right-divider=${true}
//       border-gap-size="small"
//     >
//       <div
//         class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//       >
//         <p>
//           This is some text inside of a grid column. Because it's asymmetrical,
//           This box is either twice as large or half the size of the other
//           column.
//         </p>
//       </div>
//     </outline-column>
//     <outline-column
//       col-span-lg="4"
//       has-left-divider=${true}
//       border-gap-size="small"
//     >
//       <div
//         class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//       >
//         <p>
//           This is some text inside of a grid column. Because it's asymmetrical,
//           This box is either twice as large or half the size of the other
//           column.
//         </p>
//       </div>
//     </outline-column>

//     <outline-column col-span-default="12" class="pb-2 border-t-2 mt-6 pt-4">
//       <outline-heading level="h2" level-style="semibold">
//         Asymmetrical Grid With Divider</outline-heading
//       >
//     </outline-column>
//     <outline-column col-span-default="12" class="pb-2">
//       <h3>Border gap size: medium</h3>
//     </outline-column>

//     <outline-column
//       col-span-lg="8"
//       has-right-divider=${true}
//       border-gap-size="medium"
//     >
//       <div
//         class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//       >
//         <p>
//           This is some text inside of a grid column. Because it's asymmetrical,
//           This box is either twice as large or half the size of the other
//           column.
//         </p>
//       </div>
//     </outline-column>
//     <outline-column
//       col-span-lg="4"
//       has-left-divider=${true}
//       border-gap-size="medium"
//     >
//       <div
//         class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//       >
//         <p>
//           This is some text inside of a grid column. Because it's asymmetrical,
//           This box is either twice as large or half the size of the other
//           column.
//         </p>
//       </div>
//     </outline-column>

//     <outline-column col-span-default="12" class="pb-2 border-t-2 mt-6 pt-4">
//       <outline-heading level="h2" level-style="semibold">
//         Asymmetrical Grid With Divider</outline-heading
//       >
//     </outline-column>
//     <outline-column col-span-default="12" class="pb-2">
//       <h3>Border gap size: large</h3>
//     </outline-column>

//     <outline-column
//       col-span-lg="8"
//       has-right-divider=${true}
//       border-gap-size="large"
//     >
//       <div
//         class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//       >
//         <p>
//           This is some text inside of a grid column. Because it's asymmetrical,
//           This box is either twice as large or half the size of the other
//           column.
//         </p>
//       </div>
//     </outline-column>
//     <outline-column
//       col-span-lg="4"
//       has-left-divider=${true}
//       border-gap-size="large"
//     >
//       <div
//         class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//       >
//         <p>
//           This is some text inside of a grid column. Because it's asymmetrical,
//           This box is either twice as large or half the size of the other
//           column.
//         </p>
//       </div>
//     </outline-column>
//   `,
// };

// export const OffsetLeft = Template.bind({});
// OffsetLeft.decorators = DefaultGridDecorators;
// OffsetLeft.args = {
//   defaultSlot: html`
//     <outline-column col-span-default="12">
//       <outline-heading level="h2" level-style="semibold">
//         Offset Left</outline-heading
//       >
//     </outline-column>
//     <outline-column
//       col-span-default="10"
//       class="border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>
//         This is an example of a grid column layout in which the content doesn't
//         expand the whole width of the container.
//       </p>
//     </outline-column>
//   `,
// };

// export const OffsetRight = Template.bind({});
// OffsetRight.decorators = DefaultGridDecorators;
// OffsetRight.args = {
//   defaultSlot: html`
//     <outline-column col-span-default="12">
//       <outline-heading level="h2" level-style="semibold">
//         Offset Right</outline-heading
//       >
//     </outline-column>
//     <outline-column
//       col-span-default="10"
//       class="col-start-3 justify-self-end border-2 bg-outline-blue-100 border-outline-blue-600 p-8 py-16 border-dashed rounded-xl shadow-md"
//     >
//       <p>
//         This is an example of a grid column layout in which the content doesn't
//         expand the whole width of the container.
//       </p>
//     </outline-column>
//   `,
// };
