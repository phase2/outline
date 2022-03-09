import { OutlineElement } from '../../base/outline-element/outline-element';
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

const elementName = 'form-submit-test';

/**
 * The Form Submit Test component
 */
@customElement(elementName)
export class FormSubmitTest extends OutlineElement {
  render(): TemplateResult {
    return html`
      <form>
        <input type="submit" />
      </form>
    `;
  }
}
