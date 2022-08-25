import { OutlineButtonGroup } from '../outline-button-group';
import { assert, fixture, html } from '@open-wc/testing';

describe('outline-button-group', () => {
  it('is defined', () => {
    const el = document.createElement('outline-button-group');
    assert.instanceOf(el, OutlineButtonGroup);
  });

  it('renders with default values', async () => {
    const el = await fixture(
      html`<outline-button-group></outline-button-group>`
    );
    assert.shadowDom.equal(
      el,
      `
      <outline-list
        orientation="row"
      >
        <slot>
        </slot>
      </outline-list>
    `
    );
  });
});
