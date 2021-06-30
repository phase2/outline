import { OutlineHeading } from '../outline-heading';
import { fixture, html, assert } from '@open-wc/testing';

describe('outline-heading', () => {
  it('is defined', () => {
    const el = document.createElement('outline-heading');
    assert.instanceOf(el, OutlineHeading);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-heading></outline-heading>`);
    assert.shadowDom.equal(
      el,
      `
      <h2 class="outline-font--bold outline-text outline-text--2xl">
        <slot></slot>
      </h2>
    `
    );
  });

  it('renders with slotted content', async () => {
    const el = await fixture(html`<outline-heading>Test</outline-heading>`);
    assert.lightDom.equal(el, `Test`);
  });
});
