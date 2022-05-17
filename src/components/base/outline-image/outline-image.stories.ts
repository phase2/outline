import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import code1 from '../../../.storybook/static/media/tech/1440/code-1.jpg';
import code2 from '../../../.storybook/static/media/tech/1440/code-2.jpg';
import code3 from '../../../.storybook/static/media/tech/1440/code-3.jpg';
import code4 from '../../../.storybook/static/media/tech/1440/code-4.jpg';
import code5 from '../../../.storybook/static/media/tech/1440/code-5.jpg';
import code6 from '../../../.storybook/static/media/tech/1440/code-6.jpg';
import code7 from '../../../.storybook/static/media/tech/1440/code-7.jpg';
import { imageDisplayMethodData, imageRatioPropertyData, NarrowStoryDecorator } from '../../../data';
import { argTypeHidden } from '../outline-element/utils/utils';
import './outline-image';

export default {
  title: 'Media/Image',
  component: 'outline-image',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
This component renders an image with an optional caption as a \`figure\` element and a \`figcaption\` element.

## Description & Usage

- Providing an \`image-href\` attribute will create a simple image tag based on the provided URL. The \`image-label\` attribute is optional and will be used as the alt text for the image.
- Providing a standard \`picture\` element, wrapping an \`img\` tag to the default slot will allow the consumer to provide the image markup, while allowing for standardized styling with property created images. 

## Sample Demonstrations
The \`Image (Configurable)\` story is completely testable by changing the render type, and aspect ratio. 
Additional stories will will indicate the ratio being used, and and the method of rendering the image.
        `,
      },
    },
  },
  argTypes: {
    imageRatio: imageRatioPropertyData('image-ratio'),
    imageMode: imageDisplayMethodData('Render Method'),
    imageUrl: argTypeHidden,
    imageLabel: argTypeHidden,
    caption: argTypeHidden,
  },
  args: {
    imageLabel: 'Picture of a thing',
    imageMode: 'slot',
  },
};

const Template = ({ imageUrl, imageRatio, imageLabel, imageMode, caption }): TemplateResult => html`
${imageMode == 'prop' ? html`
<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">
  ${caption ? html`<div slot="caption">${caption}</div>` : null}
</outline-image>
` : html`
<outline-image image-ratio="${ifDefined(imageRatio)}">
  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>
  ${caption ? html`<div slot="caption">${caption}</div>` : null}
</outline-image>
`}`;

export const ImageDefault = Template.bind({});
ImageDefault.args = {
  imageUrl: code6,
  imageRatio: '21/9',
  imageMode: 'slot',
};

ImageDefault.storyName = 'Image (Configurable)';

export const ImageOne = Template.bind({});
ImageOne.args = {
  imageUrl: code1,
  imageRatio: '1/1',
  imageMode: 'prop',
};
ImageOne.parameters = {
  docs: {
    description: {
      story: `
The following sample is set to a \`1:1\` aspect ratio and is using the \`prop\` image display method. 
    `},
  },
};
ImageOne.decorators = NarrowStoryDecorator;
ImageOne.storyName = 'Image: 1:1';

export const ImageTwo = Template.bind({});
ImageTwo.args = {
  imageUrl: code2,
  imageRatio: '3/2',
  imageMode: 'slot',
};
ImageTwo.parameters = {
  docs: {
    description: {
      story: `
The following sample is set to a \`3:2\` aspect ratio and is using the \`slot\` image display method. 
    `},
  },
};
ImageTwo.decorators = NarrowStoryDecorator;
ImageTwo.storyName = 'Image: 3:2';

export const ImageThree = Template.bind({});
ImageThree.args = {
  imageUrl: code3,
  imageRatio: '3/4',
  imageMode: 'prop',
};
ImageThree.parameters = {
  docs: {
    description: {
      story: `
The following sample is set to a \`3:4\` aspect ratio and is using the \`prop\` image display method. 
    `},
  },
};
ImageThree.decorators = NarrowStoryDecorator;
ImageThree.storyName = 'Image: 3:4';

export const ImageFour = Template.bind({});
ImageFour.args = {
  imageUrl: code4,
  imageRatio: '4/3',
  imageMode: 'slot',
};
ImageFour.parameters = {
  docs: {
    description: {
      story: `
The following sample is set to a \`4:3\` aspect ratio and is using the \`slot\` image display method. 
    `},
  },
};
ImageFour.decorators = NarrowStoryDecorator;
ImageFour.storyName = 'Image: 4:3';

export const ImageFive = Template.bind({});
ImageFive.args = {
  imageUrl: code5,
  imageRatio: '5/4',
  imageMode: 'prop',
};
ImageFive.parameters = {
  docs: {
    description: {
      story: `
The following sample is set to a \`5:4\` aspect ratio and is using the \`prop\` image display method. 
    `},
  },
};
ImageFive.decorators = NarrowStoryDecorator;
ImageFive.storyName = 'Image: 5:4';

export const ImageSix = Template.bind({});
ImageSix.args = {
  imageUrl: code6,
  imageRatio: '16/9',
  imageMode: 'slot',
};
ImageSix.parameters = {
  docs: {
    description: {
      story: `
The following sample is set to a \`16:9\` aspect ratio and is using the \`slot\` image display method. 
    `},
  },
};
ImageSix.decorators = NarrowStoryDecorator;
ImageSix.storyName = 'Image: 16:9';

export const ImageSeven = Template.bind({});
ImageSeven.args = {
  imageUrl: code7,
  imageRatio: '9/16',
  imageMode: 'prop',
};
ImageSeven.parameters = {
  docs: {
    description: {
      story: `
The following sample is set to a \`9/16\` aspect ratio and is using the \`prop\` image display method. 
    `},
  },
};
ImageSeven.decorators = NarrowStoryDecorator;
ImageSeven.storyName = 'Image: 9:16';

export const ImageEight = Template.bind({});
ImageEight.args = {
  imageUrl: code3,
  imageRatio: '21/9',
  imageMode: 'slot',
};
ImageEight.parameters = {
  docs: {
    description: {
      story: `
The following sample is set to a \`21:9\` aspect ratio and is using the \`slot\` image display method. 
    `},
  },
};
ImageEight.decorators = NarrowStoryDecorator;
ImageEight.storyName = 'Image: 21:9';
