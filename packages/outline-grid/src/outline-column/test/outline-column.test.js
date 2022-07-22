import { OutlineColumn } from '../outline-column';
import { assert, fixture, html } from '@open-wc/testing';
describe('outline-column', () => {
  it('is defined', () => {
    const el = document.createElement('outline-column');
    assert.instanceOf(el, OutlineColumn);
  });
  it('renders with default values', async () => {
    const el = await fixture(html`<outline-column></outline-column>`);
    assert.shadowDom.equal(
      el,
      `
      <slot>
      </slot>
    `
    );
  });
  it('renders slotted content', async () => {
    const el = await fixture(
      html`<outline-column><p>Testing column</p></outline-column>`
    );
    assert.lightDom.equal(
      el,
      `
      <p>
        Testing column
      </p>
      `
    );
  });
});
//# sourceMappingURL=outline-column.test.js.map
