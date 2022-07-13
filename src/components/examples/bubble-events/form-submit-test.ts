import { OutlineElement } from '../../base/outline-element/outline-element';
import { html, TemplateResult, css } from 'lit';
import { customElement } from 'lit/decorators.js';

const elementName = 'form-submit-test';

/**
 * The Form Submit Test component
 */
@customElement(elementName)
export class FormSubmitTest extends OutlineElement {
  // Unset the standard styles so that our button looks like a button.
  static styles = css``;

  render(): TemplateResult {
    return html`
      <form>
        <input type="submit" />
      </form>
    `;
  }
}
