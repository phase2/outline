import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentVars from './css-variables/vars-container.css.lit';
import componentStyles from './outline-container.css.lit';

// Our base component, which all others extend.
import { OutlineElement } from '@phase2/outline-core';
import type { HorizontalAlignment } from '@phase2/outline-core';

/**
 * The Outline  Link component
 * @element outline-link
 * @extends OutlineElement
 * @slot - The default slot for this element.
 * @cssprop --outline-container-padding-x: The horizontal padding for the container.
 * @cssprop --outline-container-padding-y: The vertical padding for the container.
 * @todo: Cleanup default responsive CSS styling and Tailwind CSS usage.
 * @todo: Implement a method for 'simplified' media queries.
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
