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
      html`<outline-image><img alt="Im an image" /></outline-image>`
    );
    assert.lightDom.equal(
      el,
      `
      <img alt='Im an image' />
      `
    );
  });

  it('renders caption slotted content', async () => {
    const el = await fixture(
      html`<outline-image
        ><img alt="Im an image" />
        <p slot="caption">Im a test caption</p></outline-image
      >`
    );
    assert.lightDom.equal(
      el,
      `
      <img alt='Im an image' />
      <p slot='caption'>Im a test caption</p>
      `
    );
  });
});
