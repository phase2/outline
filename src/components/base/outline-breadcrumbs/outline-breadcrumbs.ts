// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-breadcrumbs.css.lit';
import { SlottedController } from '../../controllers/slotted-controller';

// import componentStyles from './outline-breadcrumbs.css.lit';

/**
 * The Outline  Breadcrumbs component
 * @element Outline-Breadcrumbs
 * @slot - The default only slot for this element.
 */

@customElement('outline-breadcrumbs')
export class OutlineBreadcrumbs extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];
  private slottedController = new SlottedController(this);

  render(): TemplateResult {
    return html` <div class="outline-breadcrumbs">
      <slot></slot>
    </div>`;
  }
}
