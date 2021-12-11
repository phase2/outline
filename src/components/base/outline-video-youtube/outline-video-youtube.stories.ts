import { html, TemplateResult } from 'lit';
import './outline-video-youtube';
import { ifDefined } from 'lit/directives/if-defined.js';

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
    videoID: `xiqgG8HUZXE`,
  },
  parameters: {
    docs: {
      description: {
        component: `
Youtube video. Allows the embedded video to fit the space.
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

export const YoutubeVideo = Template.bind({});
