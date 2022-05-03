import {
  OutlineButton,
  ButtonVariant,
  ButtonSize,
  ButtonType,
} from '../outline-button';
import { assert, expect, fixture, html } from '@open-wc/testing';

describe('outline-button', () => {
  const buttonVariants: Array<ButtonVariant> = ['none', 'primary', 'secondary'];
  const buttonSizes: Array<ButtonSize> = ['small', 'medium', 'large'];
  const buttonTypes: Array<ButtonType> = ['button', 'submit', 'reset'];

  it('is defined', () => {
    const el = document.createElement('outline-button');
    assert.instanceOf(el, OutlineButton);
  });

  // TODO: Update test to assert/expect class to include 'medium' and 'primary'
  // Unless we wish to keep this like a 'snapshot' test.
  it('renders with default values', async () => {
    const el = await fixture(html`<outline-button></outline-button>`);
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium primary" type="button">
        <slot></slot>
      </button>
    `
    );
  });

  // Test the ButtonVariant and assert the values are rendered as classes - Dan
  buttonVariants.forEach(async variant => {
    it(`correctly renders button-variant ${variant} class `, async () => {
      const el = await fixture(
        html`<outline-button button-variant="${variant}"></outline-button>`
      );
      const button = el.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('class')).to.contain(variant);
    });
  });

  // Test the ButtonSize and assert the values are rendered as classes - Jacob
  buttonSizes.forEach(async size => {
    it(`correctly renders button-size ${size} class `, async () => {
      const el = await fixture(
        html`<outline-button button-size="${size}"></outline-button>`
      );
      const button = el.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('class')).to.contain(size);
    });
  });

  // TODO: Test the ButtonSize and assert values not in type return 'error' - Ian

  // TODO: Test the ButtonVariant and assert values not in type return 'error'
  it('does not apply variant styles when invalid buttonVariant is added', async () => {
    const el = (await fixture(
      html`<outline-button button-variant="foo">Test</outline-button>`
    )) as HTMLElement;
    const button = el.shadowRoot?.querySelector('button');
    // Apparently we're getting "foo" if foo is added.
    // <button class="btn foo medium" type="button" aria-disabled="false">
    expect(button?.getAttribute('class')).to.not.contain('foo');
  });

  // TODO: Test the onClick handler - Peter

  // TODO: Test the onKeyUp handler

  // Test button type 'submit', 'reset' or 'button' (button by default)
  buttonTypes.forEach(async bType => {
    it(`correctly renders button-type ${bType} class `, async () => {
      const el = await fixture(
        html`<outline-button button-type="${bType}"></outline-button>`
      );
      const button = el.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('type')).to.equal(bType);
    });
  });

  // TODO: Test button use of left or right icon with empty slot, assert aria-label

  // TODO: Update test to only assert/expect the aria-label to exist.
  it('renders with an aria-label', async () => {
    const el = await fixture(
      html`<outline-button button-label="Button label"></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" aria-label="Button label" class="btn medium primary" type="button">
        <slot></slot>
      </button>
    `
    );
  });

  // TODO: Update test to only assert/expect href to match the url var.
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

  // TODO: Update test to only assert/expect the aria-defalut to exist.
  it('renders as a disabled button', async () => {
    const el = await fixture(
      html`<outline-button is-disabled></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="true" class="btn medium primary" type="button">
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
