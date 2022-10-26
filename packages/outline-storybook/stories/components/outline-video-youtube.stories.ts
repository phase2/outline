/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@phase2/outline-video-youtube';

const configuration = {
  title: 'Media/Youtube Video',
  component: 'outline-video-youtube',
  argTypes: {
    videoID: {
      name: 'video-id',
      description: 'Youtube video id',
      control: { type: 'text' },
    },
  },
  args: {
    videoID: 'xiqgG8HUZXE',
  },
  parameters: {
    docs: {
      description: {
        component: `
Responsive Youtube video.
`,
      },
      source: {
        // This code sample will be used for every example unless overridden.
        code: `
<outline-video-youtube
  video-id="{{ videoID }}"
>
</outline-video-youtube>
        `,
      },
    },
  },
};

export default configuration;

const Template = (args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args,
  };

  return html`
    <outline-video-youtube video-id="${ifDefined(args.videoID)}">
    </outline-video-youtube>
  `;
};

// @todo: Investigate the `Error: page.evaluate: Error: allowedOrigins value "null" is not a valid origin` error. 
export const YoutubeVideo: any = Template.bind({});
YoutubeVideo.parameters = {
  axe: {
    skip: true,
  },
};
