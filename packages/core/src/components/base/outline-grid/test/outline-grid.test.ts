import { OutlineGrid } from '../outline-grid';
import { assert, fixture, html } from '@open-wc/testing';

describe('outline-grid', () => {
  it('is defined', () => {
    const el = document.createElement('outline-grid');
    assert.instanceOf(el, OutlineGrid);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-grid></outline-grid>`);
    assert.shadowDom.equal(
      el,
      `
      <outline-container
        container-align="center"
        full-bleed=""
        is-nested=""
      >
        <slot>
        </slot>
      </outline-container>
    `
    );
  });

  it('renders slotted content', async () => {
    const el = await fixture(
      html`<outline-grid><p>Testing the Grid</p></outline-grid>`
    );
    assert.lightDom.equal(
      el,
      `
      <p>
        Testing the Grid
      </p>`
    );
  });
});
