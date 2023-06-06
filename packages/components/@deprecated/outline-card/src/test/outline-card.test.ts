import { OutlineCard } from '../outline-card';
import { assert, fixture, html } from '@open-wc/testing';

describe('outline-card', () => {
  it('is defined', () => {
    const el = document.createElement('outline-card');
    assert.instanceOf(el, OutlineCard);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-card></outline-card>`);
    assert.shadowDom.equal(
      el,
      `
      <section class="card">
      </section>
    `
    );
  });

  it('renders with named slotted content', async () => {
    const el = await fixture(
      html`<outline-card
        ><p slot="header">Test Header</p>
        <p slot="content">Test Content</p></outline-card
      >`
    );
    assert.lightDom.equal(
      el,
      `
      <p slot="header">
        Test Header
      </p>
      <p slot="content">
        Test Content
      </p>`
    );
  });
});
