import { OutlineList } from '../outline-list';
import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

describe('outline-list', () => {
  it('is defined', () => {
    const el = document.createElement('outline-list');
    assert.instanceOf(el, OutlineList);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-list></outline-list>`);
    assert.shadowDom.equal(
      el,
      `
      <slot name="heading"></slot>
      <div class="column list">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    `
    );
  });

  it('renders ul list-type', async () => {
    const el = await fixture(
      html`<outline-list list-type=${'ul'}></outline-list>`
    );
    assert.shadowDom.equal(
      el,
      `
      <slot name="heading"></slot>
      <ul class="column list">
        <slot></slot>
      </ul>
      <slot name="footer"></slot>
    `
    );
  });

  it('renders ol list-type', async () => {
    const el = await fixture(
      html`<outline-list list-type=${'ol'}></outline-list>`
    );
    assert.shadowDom.equal(
      el,
      `
      <slot name="heading"></slot>
      <ol class="column list">
        <slot></slot>
      </ol>
      <slot name="footer"></slot>
    `
    );
  });
  it('renders slotted content', async () => {
    const el = await fixture(
      html`<outline-list list-type="ul">
        <h2 slot="heading">heading</h2>
        <li><p>list item 1</p></li>
        <li><p>list item 2</p></li>
        <li><p>list item 3</p></li>
        <div slot="footer">
          <div>
            <p>footer content</p>
          </div>
        </div>
      </outline-list>`
    );
    assert.lightDom.equal(
      el,
      `
      <h2 slot="heading">heading</h2>
        <li><p>list item 1</p></li>
        <li><p>list item 2</p></li>
        <li><p>list item 3</p></li>
        <div slot="footer">
          <div>
            <p>footer content</p>
          </div>
        </div>`
    );
  });
});
