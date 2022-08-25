/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './outline-video-vimeo';

const configuration = {
  title: 'Media/Vimeo Video',
  component: 'outline-video-vimeo',
  argTypes: {
    videoID: {
      name: 'video-id',
      description: 'Vimeo video id',
      control: { type: 'text' },
    },
  },
  args: {
    videoID: '432639001',
  },
  parameters: {
    docs: {
      description: {
        component: `
Vimeo video. Allows the embedded video to fit the space.
`,
      },
      source: {
        // This code sample will be used for every example unless overridden.
        code: `
<outline-video-vimeo
  video-id="{{ videoID }}"
>
</outline-video-vimeo>
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
    <outline-video-vimeo video-id="${ifDefined(args.videoID)}">
    </outline-video-vimeo>
  `;
};

// @todo: Investigate the `Error: page.evaluate: Error: allowedOrigins value "null" is not a valid origin` error. 
export const VimeoVideo: any = Template.bind({});
VimeoVideo.parameters = {
  axe: {
    skip: true,
  },
};
