import { html, TemplateResult } from 'lit';
import sampleImage from '../../../.storybook/static/media/color/Code_color.jpg';
import './outline-image-slider';
import '../outline-image/outline-image';

export default {
  title: 'Media/Image Slider',
  component: 'outline-image-slider',
  argTypes: {},
  args: {},
};

export const ImageSlider = (): TemplateResult =>
  html`
    <outline-image-slider>
      <img src="${sampleImage}" alt="random image" />
      <img src="${sampleImage}" alt="random image" />
      <img src="${sampleImage}" alt="random image" />
    </outline-image-slider>
  `;
