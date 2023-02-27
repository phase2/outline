// Our base component, which all others extend.
import { OutlineElement, SlotController } from '@phase2/outline-core';
import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-breadcrumbs.css.lit';
import '@phase2/outline-container';

/**
 * The Outline  Breadcrumbs component
 * @element outline-breadcrumbs
 * @extends OutlineElement
 * @slot - The default slot for this element.
 * @cssprop --outline-breadcrumb--text-color: The default text color for the breadcrumbs.
 * @cssprop --outline-breadcrumb--link-color: The default link color for the breadcrumbs.
 * @cssprop --outline-breadcrumb--link-color-hover: The hover link color for the breadcrumbs.
 * @cssprop --outline-breadcrumb--link-color-focus: The focus link color for the breadcrumbs.
 * @cssprop --outline-breadcrumb--link-decoration: The default text decoration for the breadcrumb links.
 * @cssprop --outline-breadcrumb--link-decoration-hover: The hover text decoration for the breadcrumb links.
 * @cssprop --outline-breadcrumb--link-decoration-focus: The focus text decoration for the breadcrumb links.
 * @cssprop --outline-breadcrumb--bg-color: The background color for the breadcrumbs.
 * @cssprop --outline-breadcrumb--bg-padding: The padding for the breadcrumbs.
 * @cssprop --outline-breadcrumb--separator-spacing: The spacing between the breadcrumbs.
 *
 * @todo - Add support for separator icons in slots. This would need optionally a home icon, and a separator icon.
 */

@customElement('outline-breadcrumbs')
export class OutlineBreadcrumbs extends OutlineElement {
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );
  static styles: CSSResultGroup = [componentStyles];

  firstUpdated(): void {
    const breadcrumbItems: NodeListOf<HTMLSpanElement> =
      this.querySelectorAll('span:not(.last)');
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
