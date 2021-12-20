import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { argTypeHidden } from '../outline-element/utils/utils';
import sampleImage1 from '../../../.storybook/static/media/color/Codeworkbench_color.jpg';
import './outline-card';
import '../outline-container/outline-container';
// import '../outline-heading/outline-heading'

const allowedColors: string[] = [
  'primary',
  'secondary',
  'tertiary',
  'black',
  'white',
  'gray',
  'lightgray',
];

const argTypeColors = {
  name: 'Color',
  options: allowedColors,
  control: {
    type: 'select',
  },
};

export default {
  title: 'Content/Card',
  component: 'outline-card',
  argTypes: {
    bgColorHeader: {
      ...argTypeColors,
      name: 'Background of header slot.',
    },
    bgColorContent: {
      ...argTypeColors,
      name: 'Background of content slot.',
    },
    bgColorFooter: {
      ...argTypeColors,
      name: 'Background of footer slot.',
    },
    hostElement: argTypeHidden,
    hasFooterSlot: argTypeHidden,
    hasContentSlot: argTypeHidden,
    hasHeaderSlot: argTypeHidden,
    cardHeader: argTypeHidden,
    cardContent: argTypeHidden,
    cardFooter: argTypeHidden,
    isRounded: {
      name: 'Rounded Corners',
      control: {
        type: 'boolean',
      },
    },
    hasShadow: {
      name: 'Has Shadow',
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    cardContent: html`
      <div slot="content" class="p-4">
        <!-- <outline-heading level="h2" level-size="xxl" level-size="light"
          >This is a sample card. It has content in the content
          slot.</outline-heading
        > -->
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <a href="#" target="_self">Quis istum dolorem timet?</a> Sin
          laboramus, quis est, qui alienae modum statuat industriae? Quae qui
          non vident, nihil umquam magnum ac cognitione dignum amaverunt. Res
          enim concurrent contrariae.
          <a href="#" target="_self">Duo Reges: constructio interrete.</a> Res
          enim concurrent contrariae. Quaesita enim virtus est, non quae
          relinqueret naturam, sed quae tueretur. Omnia contraria, quos etiam
          insanos esse vultis.
        </p>
      </div>
    `,
  },
};

const Template = ({
  bgColorHeader,
  bgColorContent,
  bgColorFooter,
  hasShadow,
  isRounded,
  cardHeader,
  cardContent,
  cardFooter,
}): TemplateResult =>
  html`
    <outline-container>
      <outline-card
        ?hasshadow=${ifDefined(hasShadow)}
        isrounded="${ifDefined(isRounded)}"
        bgcolorheader="${ifDefined(bgColorHeader)}"
        bgcolorcontent="${ifDefined(bgColorContent)}"
        bgcolorfooter="${ifDefined(bgColorFooter)}"
      >
          ${cardHeader}
          ${cardContent}
          ${cardFooter}
        </section>
      </outline-card>
    </outline-container>
  `;

export const CardWithImageHeader = Template.bind({});
CardWithImageHeader.args = {
  cardHeader: html`
    <div slot="header">
      <div class="max-h-80 overflow-hidden object-cover">
        <!-- <outline-image>
          <img slot="multimedia" src=${sampleImage1} alt="Random Image" />
        </outline-image> -->
      </div>
    </div>
  `,
  cardFooter: html`
    <div slot="footer" class="p-4 flex justify-between">
      <p class="font-semibold">02/2020</p>
      <p class="font-semibold text-blue-500 hover:text-blue-900">
        <a href="#">Read More</a>
      </p>
    </div>
  `,
  cardContent: html`
    <div slot="content" class="p-4">
      <!-- <outline-heading
        level="h2"
        level-size="5xl"
        level-style="semibold"
        class="mb-6"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </outline-heading> -->
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <a href="#" target="_self">Quis istum dolorem timet?</a> Sin laboramus,
        quis est, qui alienae modum statuat industriae? Quae qui non vident,
        nihil umquam magnum ac cognitione dignum amaverunt. Res enim concurrent
        contrariae.
        <a href="#" target="_self">Duo Reges: constructio interrete.</a> Res
        enim concurrent contrariae. Quaesita enim virtus est, non quae
        relinqueret naturam, sed quae tueretur. Omnia contraria, quos etiam
        insanos esse vultis.
      </p>

      <p class="">
        Sin autem est in ea, quod quidam volunt, nihil impedit hanc nostram
        comprehensionem summi boni. Quod non faceret, si in voluptate summum
        bonum poneret. Estne, quaeso, inquam, sitienti in bibendo voluptas?
        <strong>Quid ergo?</strong>
        <strong>Sed tu istuc dixti bene Latine, parum plane.</strong> Et ais, si
        una littera commota sit, fore tota ut labet disciplina. Nam si beatus
        umquam fuisset, beatam vitam usque ad illum a Cyro extructum rogum
        pertulisset. Cur iustitia laudatur? Quod autem magnum dolorem brevem,
        longinquum levem esse dicitis, id non intellego quale sit.
      </p>
    </div>
  `,
  bgColorFooter: 'gray',
  bgColorContent: 'lightgray',
  isRounded: true,
  hasShadow: true,
};

const cleanTemplate = (): TemplateResult =>
  html`
    <outline-container>
      <outline-card
        hasshadow="true"
        isrounded="true"
        bgcolorheader="lightgray"
        bgcolorcontent="gray"
        bgcolorfooter="lightgray"
      >
        <div slot="header">
          <!-- <outline-heading
            level="h2"
            level-size="2xl"
            level-style="normal"
            class="p-4 text-neutral-white"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </outline-heading> -->
        </div>
        <div slot="content" class="p-4 md:p-8 md:flex">
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <a href="#" target="_self">Quis istum dolorem timet?</a> Sin
            laboramus, quis est, qui alienae modum statuat industriae? Quae qui
            non vident, nihil umquam magnum ac cognitione dignum amaverunt. Res
            enim concurrent contrariae.
            <a href="#" target="_self">Duo Reges: constructio interrete.</a> Res
            enim concurrent contrariae. Quaesita enim virtus est, non quae
            relinqueret naturam, sed quae tueretur. Omnia contraria, quos etiam
            insanos esse vultis.
          </p>
        </div>
        <div slot="footer" class="p-4 flex justify-between text-xs">
          <p class="font-semibold">02/2020</p>
          <p class="font-semibold text-blue-500 hover:text-blue-900">
            <a href="#">Read More</a>
          </p>
        </div>
      </outline-card>
    </outline-container>
  `;

export const CardWithTitleHeader = cleanTemplate.bind({});

export const SimpleCard = Template.bind({});
SimpleCard.args = {};

export const CardWithHeader = Template.bind({});
CardWithHeader.args = {
  cardHeader: html`
    <div slot="header" class="p-4">
      <outline-header>Generic Header</outline-header>
    </div>
  `,
};

export const CardWithFooter = Template.bind({});
CardWithFooter.args = {
  cardFooter: html`
    <div slot="footer" class="p-4">
      <outline-header>Generic Footer</outline-header>
    </div>
  `,
};

export const CardWithHeaderAndFooter = Template.bind({});
CardWithHeaderAndFooter.args = {
  cardHeader: html`
    <div slot="header" class="p-4">
      <outline-header>Generic Header</outline-header>
    </div>
  `,
  cardFooter: html`
    <div slot="footer" class="p-4">
      <outline-header>Generic Footer</outline-header>
    </div>
  `,
};
