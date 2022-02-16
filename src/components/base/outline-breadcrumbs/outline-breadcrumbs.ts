// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { CSSResultGroup, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-breadcrumbs.css.lit';
import { SlotController } from '../../controllers/slot-controller';

/**
 * The Outline  Breadcrumbs component
 * @element Outline-Breadcrumbs
 * @slot - The default only slot for this element.
 */

@customElement('outline-breadcrumbs')
export class OutlineBreadcrumbs extends OutlineElement {
  static styles: CSSResultGroup = [
    componentStyles,
    css`
      span.last::after {
        display: none;
      }
      span::after {
        content: '/';
        margin: 0 15px 10px;
      }
    `,
  ];
  /* The new SlotController */
  slots = new SlotController(
    this, // This, the host element.
    true // To shift or not to shift LightDom nodes to ShadowDOM.
  );

  render(): TemplateResult {
    return html` <div class="outline-breadcrumbs">
      <slot></slot>
    </div>`;
  }
}
