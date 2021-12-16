// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-container.css.lit';
import type { HorizontalAlignment } from '../outline-element/utils/types';

/**
 * The Outline  Link component
 * @slot - The default, and only slot for this element.
 */
@customElement('outline-container')
export class OutlineContainer extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * Whether or not this container has padding.
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'is-nested',
  })
  isNested = false;

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
   * This methodology allows us to create a component that can use properties
   * passed into it to generate a link element (<a>). This requires the linkHref
   * attribute is passed, otherwise, anything passed in will override the default
   * content in the slot allowing you to pass a pre-generated link into the
   * outline-link component wrapper.
   */
  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
