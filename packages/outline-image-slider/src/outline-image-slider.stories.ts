import { html, TemplateResult } from 'lit';
const sampleImage1 = 'https://raw.githubusercontent.com/phase2/outline/next/src/.storybook/static/media/color/Code_color.jpg';
const sampleImage2 = 'https://raw.githubusercontent.com/phase2/outline/next/src/.storybook/static/media/color/Codeworkbench_color.jpg';
const sampleImage3 = 'https://raw.githubusercontent.com/phase2/outline/next/src/.storybook/static/media/color/Laptop_Keyboard_2_color.jpg';

import './outline-image-slider';

export default {
  title: 'Media/Image Slider',
  component: 'outline-image-slider',
  argTypes: {},
  args: {},
};

export const ImageSlider = (): TemplateResult =>
  html`
    <outline-image-slider>
      <img src="${sampleImage1}" alt="random image" />
      <img src="${sampleImage2}" alt="random image" />
      <img src="${sampleImage3}" alt="random image" />
    </outline-image-slider>
  `;
