import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import sampleImage from '../../../.storybook/static/media/color/Creative_Process_color.jpg';
import { argTypeHidden } from '../outline-element/utils/utils';
import './outline-image';
// import '../outline-heading/outline-heading'

export default {
  title: 'Atoms/Image',
  component: 'outline-image',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    imageUrl: argTypeHidden,
    parallaxContainer: argTypeHidden,
    el: argTypeHidden,
    caption: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    imageUrl: sampleImage,
    caption: '',
  },
};

const Template = ({ imageUrl, caption, parallax }): TemplateResult => html`
  <outline-image parallax="${ifDefined(parallax)}">
    <img src="${imageUrl}" alt="Random Image" />
    <outline-container slot="caption">${caption}</outline-container>
  </outline-image>
`;

export const StaticImage = Template.bind({});

export const ImageWithCaption = Template.bind({});
ImageWithCaption.args = {
  caption: 'A simple caption text',
};
ImageWithCaption.decorators = [
  //TODO determine appropriate typing for Story
  (Story): TemplateResult =>
    html` <div class="w-9/12 mx-auto">${Story()}</div> `,
];
