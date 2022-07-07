import { html, TemplateResult } from 'lit';
import sampleImage from '../../../.storybook/static/media/color/Code_color.jpg';
import './outline-carousel';
import '../outline-image/outline-image';

export default {
  title: 'Media/Carousel',
  component: 'outline-carousel',
  argTypes: {},
  args: {},
};

export const ImageSlider = (): TemplateResult =>
  html`
    <outline-carousel>
      <img src="${sampleImage}" alt="random image" />
      <img src="${sampleImage}" alt="random image" />
      <img src="${sampleImage}" alt="random image" />
    </outline-carousel>
  `;
