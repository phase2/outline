import { OutlineImage } from '../outline-image';
import { assert, fixture, html } from '@open-wc/testing';

describe('outline-image', () => {
  it('is defined', () => {
    const el = document.createElement('outline-image');
    assert.instanceOf(el, OutlineImage);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-image></outline-image>`);
    assert.shadowDom.equal(
      el,
      `
      <figure><slot></slot></figure>
    `
    );
  });

  it('renders slotted content', async () => {
    const el = await fixture(
      html`<outline-image
        ><picture><img src="image.jpg" alt="An image" /></picture
      ></outline-image>`
    );
    assert.shadowDom.equal(
      el,
      `
      <figure><picture><img src="image.jpg" alt='An image' /></picture><slot></slot></figure>
      `
    );
  });

  it('renders image with properties', async () => {
    const el = await fixture(
      html`<outline-image
        image-href="image.jpg"
        image-label="An image"
      ></outline-image>`
    );
    assert.shadowDom.equal(
      el,
      `
      <figure><picture><img src="image.jpg" alt='An image' /></picture></figure>
      `
    );
  });

  it('renders caption slotted content', async () => {
    const el = await fixture(
      html`<outline-image
        ><picture><img src="image.jpg" alt="An image" /></picture>
        <p slot="caption">A test caption</p></outline-image
      >`
    );
    assert.shadowDom.equal(
      el,
      `
      <figure><picture><img src="image.jpg" alt='An image' /></picture><slot></slot></figure>
      <figcaption><slot name="caption"><p slot='caption'>A test caption</p></slot></figcaption>
      `
    );
  });
});
