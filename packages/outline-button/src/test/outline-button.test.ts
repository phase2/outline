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

  it('renders with an aria-label', async () => {
    const el = await fixture(
      html`<outline-button button-label="Button label"></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" aria-label="Button label" class="btn medium primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders as a link', async () => {
    const el = await fixture(
      html`<outline-button
        button-url="https://outline.phase2tech.com"
        button-target="_blank"
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
      html`<outline-button is-disabled></outline-button>`
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

  it('renders a standard primary button variant', async () => {
    const el = await fixture(
      html`<outline-button button-variant="primary"></outline-button>`
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

  it('renders a small primary button variant', async () => {
    const el = await fixture(
      html`<outline-button
        button-variant="primary"
        button-size="small"
      ></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn small primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a large primary button variant', async () => {
    const el = await fixture(
      html`<outline-button
        button-variant="primary"
        button-size="large"
      ></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn large primary">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders a secondary button variant', async () => {
    const el = await fixture(
      html`<outline-button button-variant="secondary"></outline-button>`
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

  it('renders a "none" variant', async () => {
    const el = await fixture(
      html`<outline-button button-variant="none"></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium none">
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
