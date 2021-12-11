import { html, TemplateResult } from 'lit';
import './outline-video-vimeo';
import { ifDefined } from 'lit/directives/if-defined.js';

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
    videoID: `253989945`,
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

export const VimeoVideo = Template.bind({});
