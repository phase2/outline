import { OutlineElement } from '@phase2/outline-core';
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * SampleComponent
 * @element sample-component
 * @slot - This element has a slot
 */
@customElement('sample-component')
export class SampleComponent extends OutlineElement {
  /** Empty render method */
  render(): TemplateResult {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sample-component': SampleComponent;
  }
}
