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
      <button aria-disabled="false" class="btn medium primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders as a link', async () => {
    const el = await fixture(
      html`<outline-button
        url="https://outline.phase2tech.com"
        target="_blank"
      ></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <a aria-disabled="false" class="btn medium primary" href="https://outline.phase2tech.com" target="_blank">
        <slot></slot>
      </a>
    `
    );
  });

  it('renders as a disabled button', async () => {
    const el = await fixture(
      html`<outline-button isDisabled></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="true" class="btn medium primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a primary button variant', async () => {
    const el = await fixture(
      html`<outline-button variant="primary"></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a secondary button variant', async () => {
    const el = await fixture(
      html`<outline-button variant="secondary"></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium secondary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a tertiary variant', async () => {
    const el = await fixture(
      html`<outline-button variant="tertiary"></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium tertiary">
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
