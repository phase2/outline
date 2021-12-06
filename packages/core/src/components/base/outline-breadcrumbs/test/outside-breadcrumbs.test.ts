import { OutlineBreadcrumbs } from '../outline-breadcrumbs';
import { assert, fixture, html } from '@open-wc/testing';

describe('outline-breadcrumbs', () => {
  it('is defined', () => {
    const el = document.createElement('outline-breadcrumbs');
    assert.instanceOf(el, OutlineBreadcrumbs);
  });

  it('renders with default values', async () => {
    const el = await fixture(html`<outline-breadcrumbs></outline-breadcrumbs>`);
    assert.shadowDom.equal(el, `<slot></slot>`);
  });
});
