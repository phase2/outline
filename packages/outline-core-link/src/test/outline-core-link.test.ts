import { OutlineCoreLink } from '@phase2/outline-core-link';
import { assert, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

describe('outline-core-link', () => {
  it('is defined', () => {
    const el = document.createElement('outline-core-link');
    assert.instanceOf(el, OutlineCoreLink);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-core-link></outline-core-link>`);
    assert.shadowDom.equal(
      el,
      `
      <slot></slot>
    `
    );
  });

  it('renders with link-href attribute and slotted text', async () => {
    const el = await fixture(
      html`<outline-core-link link-href="http://outline.phase2tech.com/"
        >link</outline-core-link
      >`
    );
    assert.shadowDom.equal(
      el,
      `
      <a href="http://outline.phase2tech.com/"><slot></slot></a>
    `
    );
    assert.lightDom.equal(el, `link`);
  });

  it('renders with link-href and link-text attributes', async () => {
    const el = await fixture(
      html`<outline-core-link
        link-href="http://outline.phase2tech.com/"
        link-text="link"
      ></outline-core-link>`
    );
    assert.shadowDom.equal(
      el,
      `
      <a href="http://outline.phase2tech.com/">link</a>
    `
    );
  });

  it('renders with fully slotted link', async () => {
    const el = await fixture(
      html`<outline-core-link
        ><a href="http://outline.phase2tech.com/">link</a></outline-core-link
      >`
    );
    assert.lightDom.equal(
      el,
      `<a href="http://outline.phase2tech.com/">link</a>`
    );
  });
});
