import { html, TemplateResult } from 'lit';
import sampleImage1 from '@phase2/outline-static-assets/media/color/Code_color.jpg';
import sampleImage2 from '@phase2/outline-static-assets/media/color/Codeworkbench_color.jpg';
import sampleImage3 from '@phase2/outline-static-assets/media/color/Laptop_Keyboard_2_color.jpg';

import '@phase2/outline-image-slider';

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
