import { html, TemplateResult } from 'lit';
import '@phase2/outline-container';

export default {
  title: 'Layout/Container',
  component: 'outline-container',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
};

const Template = (): TemplateResult =>
  html`
    <outline-container>
      <img src="https://picsum.photos/id/237/2000/2000" style="object-fit: cover; width: 100%; aspect-ratio: 16 / 9;">
    </outline-container>

    <outline-container container-width="full">
      <img src="https://picsum.photos/id/237/2000/2000" style="object-fit: cover; width: 100%; aspect-ratio: 16 / 9;">
    </outline-container>

    <outline-container container-width="narrow">
      <img src="https://picsum.photos/id/237/2000/2000" style="object-fit: cover; width: 100%; aspect-ratio: 16 / 9;">
    </outline-container>

    <outline-container container-width="medium">
      <img src="https://picsum.photos/id/237/2000/2000" style="object-fit: cover; width: 100%; aspect-ratio: 16 / 9;">
    </outline-container>

    <outline-container container-width="wide">
      <img src="https://picsum.photos/id/237/2000/2000" style="object-fit: cover; width: 100%; aspect-ratio: 16 / 9;">
    </outline-container>
  `;

export const Container = Template.bind({});
