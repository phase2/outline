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
      <button aria-disabled="false" class="btn medium primary" type="button">
        <slot></slot>
      </button>
    `
    );
  });

  // Test the ButtonVariant and assert the values are rendered as classes - Dan
  it('renders ButtonVariant as classes, for valid variant types', async () => {
    const tests = [
      {
        args: ['none'],
        expected: `
        <button aria-disabled="false" class="btn medium none" type="button">
          <slot></slot>
        </button>
      `,
      },
      {
        args: ['primary'],
        expected: `
        <button aria-disabled="false" class="btn medium primary" type="button">
          <slot></slot>
        </button>
      `,
      },
      {
        args: ['secon'],
        expected: `
        <button aria-disabled="false" class="btn medium secondary" type="button">
          <slot></slot>
        </button>
      `,
      },
    ];

    tests.forEach(async ({ args, expected }) => {
      const el = await fixture(
        html`<outline-button button-variant="${args}"></outline-button>`
      );
      assert.shadowDom.equal(el, expected);
    });
  });

  // Test the ButtonVariant and assert values not in type return 'error'
  // Test the ButtonSize and assert the values are rendered as classes - Jacob
  it('renders ButtonSize values as classes', async () => {
    const tests = [
      {
        args: 'small',
        expected: `
      <button aria-disabled="false" class="btn small primary" type="button">
        <slot></slot>
      </button>
    `,
      },
      {
        args: 'medium',
        expected: `
      <button aria-disabled="false" class="btn medium primary" type="button">
        <slot></slot>
      </button>
    `,
      },
      {
        args: 'large',
        expected: `
      <button aria-disabled="false" class="btn large primary" type="button">
        <slot></slot>
      </button>
    `,
      },
    ];
    tests.forEach(async ({ args, expected }) => {
      it(`correctly renders button-size classes `, async () => {
        const el = await fixture(
          html`<outline-button button-size="${args}"></outline-button>`
        );
        assert.shadowDom.equal(el, expected);
      });
    });
  });
  // cleaner?
  // it('renders ButtonSize values as classes', async () => {
  //   const tests = [
  //     {args: 'small', expected: `class="btn small primary"`},
  //     {args: 'medium', expected: `class="btn medium primary"`},
  //     {args: 'large', expected: `class="btn large primary"`}
  //   ];
  //   tests.forEach(async ({args, expected}) => {
  //     it(`correctly renders button-size classes `, async () => {
  //       const el = await fixture(
  //         html`<outline-button button-size="${args}"></outline-button>`
  //       );
  //       assert.shadowDom.equal(
  //         el,
  //         expected
  //       );
  //     });
  //   });
  // });
  // Test the ButtonSize and assert values not in type return 'error' - Ian
  // Test the onClick handler - Peter

  // Test the onKeyUp handler

  // Test button type 'submit', 'reset' or 'button' (button by default)

  it('renders button type as attribute', async () => {
    const el = await fixture(
      html`<outline-button button-type="button"></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium primary" type="button">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders button type as attribute', async () => {
    const el = await fixture(
      html`<outline-button button-type="submit"></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium primary" type="submit">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders button type as attribute', async () => {
    const el = await fixture(
      html`<outline-button button-type="reset"></outline-button>`
    );
    assert.shadowDom.equal(
      el,
      `
      <button aria-disabled="false" class="btn medium primary" type="reset">
        <slot></slot>
      </button>
    `
    );
  });

  // Test button use of left or right icon with empty slot, assert aria-label

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
      <button aria-disabled="true" class="btn medium primary" type="button">
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
      <button aria-disabled="false" class="btn medium primary" type="button">
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
      <button aria-disabled="false" class="btn small primary" type="button">
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
      <button aria-disabled="false" class="btn large primary" type="button">
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
      <button aria-disabled="false" class="btn medium secondary" type="button">
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
      <button aria-disabled="false" class="btn medium none" type="button">
        <slot></slot>
      </button>
    `
    );
  });

  it('renders with slotted content', async () => {
    const el = await fixture(html`<outline-button>Test</outline-button>`);
    assert.lightDom.equal(el, `Test`);
  });

  it('does not apply variant styles when invalid buttonVariant is added', async () => {
    const el = (await fixture(
      html`<outline-button variant="invalid">Test</outline-button>`
    )) as HTMLElement;
    const variants = ['primary', 'secondary', 'none'];
    variants.map(variant => assert(!el.classList.contains(variant)));
  });
});
