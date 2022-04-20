// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentVars from './css-variables/vars-container.css.lit';
import componentStyles from './outline-container.css.lit';
import type { HorizontalAlignment } from '../outline-element/utils/types';

/**
 * The Outline  Link component
 * @slot - The default, and only slot for this element.
 */
@customElement('outline-container')
export class OutlineContainer extends OutlineElement {
  static styles: CSSResultGroup = [componentVars, componentStyles];

  /**
   * Whether or not this container has padding.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'x-padding',
  })
  xPadding = false;

  /**
   * Whether or not this container has padding.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'y-padding',
  })
  yPadding = false;

  /**
   * Whether or not this is a full bleed container.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'full-bleed',
  })
  fullBleed = false;

  /**
   * The horizontal position of the container.
   */
  @property({
    type: String,
    reflect: true,
    attribute: 'container-align',
  })
  containerAlign: HorizontalAlignment = 'center';

  /**
   * Return the container element.
   */
  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-container': OutlineContainer;
  }
}
