import { OutlineContainer } from '../outline-container';
import { assert, fixture, html } from '@open-wc/testing';

describe('outline-container', () => {
  it('is defined', () => {
    const el = document.createElement('outline-container');
    assert.instanceOf(el, OutlineContainer);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-container></outline-container>`);
    assert.shadowDom.equal(
      el,
      `
      <slot>
      </slot>
    `
    );
  });

  it('renders with named slotted content', async () => {
    const el = await fixture(
      html`<outline-container><p>Testing the container</p></outline-container>`
    );
    assert.lightDom.equal(
      el,
      `
      <p>
        Testing the container
      </p>`
    );
  });
});
