import { OutlineElement } from '../../base/outline-element/outline-element';
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import './form-submit-test';

const elementName = 'form-submit-test-wrapper';

/**
 * The Form Submit Test component
 *
 * This wrapper helps test whether multiple nested shadow DOMs work with bubbling.
 */
@customElement(elementName)
export class FormSubmitTestWrapper extends OutlineElement {
  render(): TemplateResult {
    return html`<form-submit-test></form-submit-test>`;
  }
}
