import { OutlineElement } from '../outline-element';
import { assert } from '@open-wc/testing';

describe('outline-element', () => {
  it('is defined', () => {
    const el = document.createElement('outline-element');
    assert.instanceOf(el, OutlineElement);
  });
});
