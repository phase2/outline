import { OutlineLink } from '../outline-link';
import { assert, fixture, html } from '@open-wc/testing';

describe('outline-link', () => {
  it('is defined', () => {
    const el = document.createElement('outline-link');
    assert.instanceOf(el, OutlineLink);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-link></outline-link>`);
    assert.shadowDom.equal(
      el,
      `
      <slot></slot>
    `
    );
  });
});
