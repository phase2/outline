import { html, TemplateResult } from 'lit';
import { StoryFn } from '@storybook/web-components';

import '@phase2/outline-alert';
import '@phase2/outline-container';
import '@phase2/outline-image';

import code1 from '@phase2/outline-static-assets/media/tech/1440/code-1.jpg';
import code2 from '@phase2/outline-static-assets/media/tech/1440/code-2.jpg';
import code3 from '@phase2/outline-static-assets/media/tech/1440/code-3.jpg';
import code4 from '@phase2/outline-static-assets/media/tech/1440/code-4.jpg';
import code5 from '@phase2/outline-static-assets/media/tech/1440/code-5.jpg';
import code6 from '@phase2/outline-static-assets/media/tech/1440/code-6.jpg';
import code7 from '@phase2/outline-static-assets/media/tech/1440/code-7.jpg';

const configuration = {
  title: 'Structure/Container',
  component: 'outline-container',
  // Tags are a new feature coming in 7.1, that we are using to drive this behavior.
  tags: ['docsPage'],
  parameters: {
    layout: 'fullscreen',
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    controls: {
      hideNoControlsWarning: true,
      expanded: false,
      include: '/*/',
    },
    options: {
      showPanel: false,
    },
    docs: {
      description: {
        component: `
## Description
The \`outline-container\` component is a container/wrapper for components,
page sections or entire pages. It is used to provide a consistent layout.

## Component Status
<outline-alert statusType="warning" size="large" className="mb-6">
  <span slot="header">Status: Needs Work/In Progress</span>
  <p>
    The \`OutlineContainer\` class, is a wrapper component that provides the
    \`outline-container\` component, giving consistent containers for
    content spacing both horizontally and vertically.
  </p>
</outline-alert>
<br />
<outline-alert statusType="error" size="large" className="mb-6">
  <span slot="header">@todo</span>
  <ul>
    <li>Fix for Documentation section styling. (\`README.md\` import)</li>
  </ul>
</outline-alert>
        `,
      },
    },
  },
  argTypes: {},
  args: {},
};
export default configuration;

export const gridFullWidth: StoryFn = (): TemplateResult => {
  return html` <outline-container
    container-width="full"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="${code1}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;
};

gridFullWidth.storyName = 'Full width container';
gridFullWidth.parameters = {
  controls: {
    disabled: true,
  },
  docs: {
    description: {
      story: `
<outline-alert statusType="info" size="large">
  <span slot="header">Container: Full</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`full\`.
  </p>
</outline-alert>
    `,
    },
  },
};

export const gridWideWidth: StoryFn = (): TemplateResult => {
  return html` <outline-container
    container-width="wide"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="${code2}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;
};

gridWideWidth.storyName = 'Wide container';
gridWideWidth.parameters = {
  controls: {
    disabled: true,
  },
  docs: {
    description: {
      story: `
<outline-alert statusType="info" size="large">
  <span slot="header">Container: Wide</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`wide\`.
  </p>
</outline-alert>
    `,
    },
  },
};

export const gridMediumWidth: StoryFn = (): TemplateResult => {
  return html` <outline-container
    container-width="medium"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="${code3}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;
};

gridMediumWidth.storyName = 'Medium container';
gridMediumWidth.parameters = {
  controls: {
    disabled: true,
  },
  docs: {
    description: {
      story: `
<outline-alert statusType="info" size="large">
  <span slot="header">Container: Medium</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`medium\`.
  </p>
</outline-alert>
    `,
    },
  },
};

export const gridNarrowWidth: StoryFn = (): TemplateResult => {
  return html` <outline-container
    container-width="narrow"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="${code4}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;
};

gridNarrowWidth.storyName = 'Narrow container';
gridNarrowWidth.parameters = {
  controls: {
    disabled: true,
  },
  docs: {
    description: {
      story: `
<outline-alert statusType="info" size="large">
  <span slot="header">Container: Narrow</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`narrow\`.
  </p>
</outline-alert>
    `,
    },
  },
};

export const gridNarrowWidthLeft: StoryFn = (): TemplateResult => {
  return html` <outline-container
    container-width="narrow"
    top-margin="spacing-0"
    bottom-margin="spacing-0" 
    justify-start
  >
  <outline-image
    image-href="${code5}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;
};

gridNarrowWidthLeft.storyName = 'Narrow container (left)';
gridNarrowWidthLeft.parameters = {
  controls: {
    disabled: true,
  },
  docs: {
    description: {
      story: `
<outline-alert statusType="info" size="large">
  <span slot="header">Container: Narrow</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`narrow\`.
  </p>
</outline-alert>
    `,
    },
  },
};

export const gridNarrowWidthRight: StoryFn = (): TemplateResult => {
  return html` <outline-container
    container-width="narrow"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
    justify-end
  >
  <outline-image
    image-href="${code6}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;
};

gridNarrowWidthRight.storyName = 'Narrow container (right)';
gridNarrowWidthRight.parameters = {
  controls: {
    disabled: true,
  },
  docs: {
    description: {
      story: `
<outline-alert statusType="info" size="large">
  <span slot="header">Container: Narrow</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`narrow\`.
  </p>
</outline-alert>
    `,
    },
  },
};
