import { OutlineAdminLinks } from '../outline-admin-links';
import { assert, fixture, elementUpdated } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

describe('outline-admin-links', () => {
  it('is defined', () => {
    const el = document.createElement('outline-admin-links');
    assert.instanceOf(el, OutlineAdminLinks);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-admin-links></outline-admin-links>`);
    assert.shadowDom.equal(
      el,
      `<div class="links">
        <slot></slot>
      </div>`
    );
  });

  it('renders slotted content in shadowDOM', async () => {
    const el = await fixture(
      html`<outline-admin-links>
        <ul>
          <li><a href="#"> Ping </a></li>
        </ul>
      </outline-admin-links>`
    );

    await elementUpdated(el);
    assert.shadowDom.equal(
      el,
      `
      <div class="links">
        <ul>
          <li>
            <a href="#">
              Ping
            </a>
          </li>
        </ul>
        <slot>
        </slot>
      </div>`
    );
  });
});
