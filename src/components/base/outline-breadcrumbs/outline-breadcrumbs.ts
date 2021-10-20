// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { CSSResultGroup, html, css, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-breadcrumbs.css.lit';
import { SlottedController } from '../../controllers/slotted-controller';

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
  private = new SlottedController(this);

  render(): TemplateResult {
    return html` <div class="outline-breadcrumbs">
      <slot></slot>
    </div>`;
  }
}
