import {
  OutlineButton,
  ButtonVariant,
  ButtonSize,
  ButtonType,
} from '../outline-button';
import {
  assert,
  expect,
  fixture,
  fixtureCleanup,
  html,
} from '@open-wc/testing';
import sinon from 'sinon';

describe('outline-button', () => {
  const buttonVariants: Array<ButtonVariant> = ['none', 'primary', 'secondary'];
  const buttonSizes: Array<ButtonSize> = ['small', 'medium', 'large'];
  const buttonTypes: Array<ButtonType> = ['button', 'submit', 'reset'];

  it('is defined', () => {
    const el = document.createElement('outline-button');
    assert.instanceOf(el, OutlineButton);
  });

  // Assert/expect classes to include 'medium' and 'primary'.
  // Checking markup  is like a 'snapshot' test.
  it('renders with default values', async () => {
    const el = await fixture(
      html`<outline-button>Default Test</outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button class="btn medium primary" type="button">
        <slot></slot>
      </button>
    `
    );
    assert.lightDom.equal(el, 'Default Test');
  });

  // Test the ButtonVariant and assert the values are rendered as classes
  buttonVariants.forEach(async variant => {
    it(`correctly renders button-variant ${variant} class `, async () => {
      const el = await fixture(
        html`<outline-button button-variant="${variant}"
          >Button Variant Test</outline-button
        >`
      );
      const button = el.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('class')).to.contain(variant);
    });
  });

  // Test the ButtonSize and assert the values are rendered as classes
  buttonSizes.forEach(async size => {
    it(`correctly renders button-size ${size} class `, async () => {
      const el = await fixture(
        html`<outline-button button-size="${size}"
          >Button Size Test</outline-button
        >`
      );
      const button = el.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('class')).to.contain(size);
    });
  });

  // Test the ButtonSize and assert values not in type are voided
  it('does not apply variant styles when invalid buttonVariant is added', async () => {
    const el = (await fixture(
      html`<outline-button button-variant="foo"
        >Invalid Button Variant Test</outline-button
      >`
    )) as HTMLElement;
    const button = el.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('class')).to.not.contain('foo');
  });

  // Test the onClick handler
  it('fires a click handler when clicked', async () => {
    const callback = sinon.spy();
    const el = (await fixture(
      html`<outline-button @click=${callback}
        >Click Handler Test</outline-button
      >`
    )) as HTMLElement;
    el.shadowRoot?.querySelector('button')?.click();
    expect(callback.called);
  });

  // Test button type 'submit', 'reset' or 'button' (button by default)
  buttonTypes.forEach(async bType => {
    it(`correctly renders button-type ${bType} class `, async () => {
      const el = await fixture(
        html`<outline-button button-type="${bType}"
          >Button Type Test</outline-button
        >`
      );
      const button = el.shadowRoot?.querySelector('button');
      expect(button?.getAttribute('type')).to.equal(bType);
    });
  });

  //Test button use of left or right icon with empty slot, assert aria-label - Peter
  it(`correctly renders the aria-label with icon slot`, async () => {
    const el = await fixture(
      html`<outline-button button-label="Button Label No Default Slot Test">
        <outline-icon
          slot="right"
          name="chevron-right"
          library="system"
        ></outline-icon>
        <outline-icon
          slot="left"
          name="chevron-left"
          library="system"
        ></outline-icon>
      </outline-button>`
    );
    // Expec the label to be printed
    const button = el.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('aria-label')).to.equal(
      'Button Label No Default Slot Test'
    );

    // Expect the right slot to be rendered
    const rightSlot = el.shadowRoot?.querySelector('slot[name=right]');
    expect(rightSlot?.getAttribute('name')).to.equal('right');

    // Expect the right slot to be rendered
    const leftSlot = el.shadowRoot?.querySelector('slot[name=left]');
    expect(leftSlot?.getAttribute('name')).to.equal('left');

    // Expect outline-icon is passed to the expected slot
    assert.lightDom.equal(
      el,
      `
      <outline-icon slot="right" name="chevron-right" library="system"></outline-icon>
      <outline-icon slot="left" name="chevron-left" library="system"></outline-icon>
    `
    );

    // Expect an svg to be rendered in the outline-icon shadowDom
    const iconRight = el
      .querySelector('outline-icon')
      ?.shadowRoot?.querySelector('svg');
    expect(iconRight);
  });

  it(`throws an error if no button-label is provided without default slot`, async () => {
    try {
      await fixture(
        html`<outline-button>
          <outline-icon
            slot="right"
            name="chevron-right"
            library="system"
            size="1em"
            class="ml-2"
          ></outline-icon>
        </outline-button>`
      );
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      assert.equal(
        error.message,
        'Button has neither button-label nor default slot text.'
      );
    }
  });

  // TODO: Test no error if icon has an aria-label
  it(`renders if outline-icon label is provided without default slot`, async () => {
    const el = await fixture(
      html`<outline-button>
        <outline-icon
          name="chevron-right"
          library="system"
          size="1em"
          class="ml-2"
        ></outline-icon>
      </outline-button>`
    );
    expect(el);
  });

  // Test to assert/expect the aria-label to exist when provided.
  it('renders with an aria-label', async () => {
    const el = await fixture(
      html`<outline-button button-label="Button label"
        >Button Label Test</outline-button
      >`
    );
    const button = el.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('aria-label')).to.contain('Button label');
  });

  // Test to assert/expect href to match the url var.
  it('renders as a link', async () => {
    const el = await fixture(
      html`<outline-button
        button-url="https://outline.phase2tech.com"
        button-target="_blank"
        >Link Test</outline-button
      >`
    );
    const button = el.shadowRoot?.querySelector('a');
    expect(button?.getAttribute('href')).to.contain(
      'https://outline.phase2tech.com'
    );
    expect(button?.getAttribute('target')).to.contain('_blank');
  });

  // Test to assert/expect the aria-default to exist.
  it('renders as a disabled button', async () => {
    const el = await fixture(
      html`<outline-button is-disabled>Disabled Button Test</outline-button>`
    );
    const button = el.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('aria-disabled')).to.contain('true');
  });

  it('renders with slotted content', async () => {
    const el = await fixture(
      html`<outline-button>Slotted Content Test</outline-button>`
    );
    assert.lightDom.equal(el, `Slotted Content Test`);
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
