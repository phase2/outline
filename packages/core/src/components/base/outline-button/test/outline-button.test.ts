import { OutlineButton } from '../outline-button';
import { assert, fixture, html } from '@open-wc/testing';

describe('outline-button', () => {
  it('is defined', () => {
    const el = document.createElement('outline-button');
    assert.instanceOf(el, OutlineButton);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-button></outline-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button class="btn primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders with slotted content', async () => {
    const el = await fixture(html`<outline-button>Test</outline-button>`);
    assert.lightDom.equal(el, `Test`);
  });
});
