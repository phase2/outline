import { html, TemplateResult } from 'lit';
import sampleImage from '../../../.storybook/static/media/color/Code_color.jpg';
import './outline-image-gallery';
import '../outline-image/outline-image';

export default {
  title: 'Content/Image Gallery',
  component: 'outline-image-gallery',
  argTypes: {},
  args: {},
};

export const ImageGallery = (): TemplateResult =>
  html`
    <outline-image-gallery>
      <img src="${sampleImage}" alt="random image" />
      <img src="${sampleImage}" alt="random image" />
      <img src="${sampleImage}" alt="random image" />
    </outline-image-gallery>
  `;
