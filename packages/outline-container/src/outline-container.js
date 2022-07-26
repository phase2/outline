var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentVars from './css-variables/vars-container.css.lit';
import componentStyles from './outline-container.css.lit';
// Our base component, which all others extend.
import { OutlineElement } from '@phase2/outline-core';
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
let OutlineContainer = class OutlineContainer extends OutlineElement {
  constructor() {
    super(...arguments);
    /**
     * Whether or not this container has padding.
     */
    this.xPadding = false;
    /**
     * Whether or not this container has padding.
     */
    this.yPadding = false;
    /**
     * Whether or not this is a full bleed container.
     */
    this.fullBleed = false;
    /**
     * The horizontal position of the container.
     */
    this.containerAlign = 'center';
  }
  /**
   * Return the container element.
   */
  render() {
    return html`<slot></slot>`;
  }
};
OutlineContainer.styles = [componentVars, componentStyles];
__decorate(
  [
    property({
      type: Boolean,
      reflect: true,
      attribute: 'x-padding',
    }),
  ],
  OutlineContainer.prototype,
  'xPadding',
  void 0
);
__decorate(
  [
    property({
      type: Boolean,
      reflect: true,
      attribute: 'y-padding',
    }),
  ],
  OutlineContainer.prototype,
  'yPadding',
  void 0
);
__decorate(
  [
    property({
      type: Boolean,
      reflect: true,
      attribute: 'full-bleed',
    }),
  ],
  OutlineContainer.prototype,
  'fullBleed',
  void 0
);
__decorate(
  [
    property({
      type: String,
      reflect: true,
      attribute: 'container-align',
    }),
  ],
  OutlineContainer.prototype,
  'containerAlign',
  void 0
);
OutlineContainer = __decorate(
  [customElement('outline-container')],
  OutlineContainer
);
export { OutlineContainer };
//# sourceMappingURL=outline-container.js.map
