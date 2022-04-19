// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentVars from './css-variables/vars-breadcrumbs.css.lit';
import componentStyles from './outline-breadcrumbs.css.lit';
import '../outline-container/outline-container';
import { SlotController } from '../../controllers/slot-controller';
/**
 * The Outline  Breadcrumbs component
 * @element Outline-Breadcrumbs
 * @slot - The default only slot for this element.
 * @todo CONTRIB
 */

@customElement('outline-breadcrumbs')
export class OutlineBreadcrumbs extends OutlineElement {
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );
  static styles: CSSResultGroup = [componentVars, componentStyles];

  firstUpdated(): void {
    const breadcrumbItems = this.querySelectorAll('span:not(.last)');
    breadcrumbItems.forEach(item => {
      const sep: HTMLSpanElement = document.createElement('span');
      sep.classList.add('separator');
      sep.innerHTML = this.stringSeparator;
      item.append(sep);
    });
  }

  /**
   * Property to define the value of the separator.
   */
  @property({ type: String, attribute: 'string-separator' })
  stringSeparator = '/';

  render(): TemplateResult {
    return html`
      <section class="outline-breadcrumbs">
        <outline-container>
          <slot></slot>
        </outline-container>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-breadcrumbs': OutlineBreadcrumbs;
  }
}
