import { CSSResultGroup, TemplateResult, html, css } from 'lit';
import { OutlineElement } from '@phase2/outline-core';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import componentStyles from './outline-container.css.lit';

type containerWidths = 'wide' | 'medium' | 'narrow' | 'full';

/**
 * The `outline-container` Web Component.
 *
 * @element outline-container
 *
 * @since 0.0.1
 * @extends OutlineElement
 *
 * @attr container-width - Sets the width of the container. Options are wide, medium, narrow, and full.
 * @attr top-margin - Sets the top margin of the container. Options are none, small, medium, and large.
 * @attr bottom-margin - Sets the bottom margin of the container. Options are none, small, medium, and large.
 * @attr justify-end - Sets the container to justify content to the end.
 * @attr component-spacing - Sets the spacing between components.
 * @prop {string} topMargin - Sets the top margin of the container.
 * @prop {string} bottomMargin - Sets the bottom margin of the container.
 * @prop {boolean} justifyEnd - Sets the container to justify content to the end.
 * @prop {string} containerWidth - Sets the width of the container.
 * @prop {string} componentSpacing - Sets the spacing between components.
 *
 * @slot - Default Slot.
 */
@customElement('outline-container')
export class OutlineContainer extends OutlineElement {
  static styles: CSSResultGroup = [
    css`
      :host {
        --component-spacing: var(--spacing-6);
      }
    `,
    componentStyles,
  ];
  /**
   * The vertical space from the component above it (using Utopia fluid space variables defined in outline.theme.css, ie. space-3xl)
   **/
  @property({
    type: String,
    reflect: true,
    attribute: 'top-margin',
  })
  topMargin: string;

  @property({
    type: String,
    reflect: true,
    attribute: 'bottom-margin',
  })
  bottomMargin: string;

  @property({
    type: String,
    reflect: true,
    attribute: 'child-spacing',
  })
  childSpacing: string;

  @property({
    type: Boolean,
    reflect: true,
    attribute: 'justify-end',
  })
  justifyEnd = false;

  @property({
    type: Boolean,
    reflect: true,
    attribute: 'justify-start',
  })
  justifyStart = false;

  @property({
    type: String,
    reflect: true,
    attribute: 'container-width',
  })
  containerWidth: containerWidths = 'wide';

  render(): TemplateResult {
    const containerWidth = this.containerWidth;
    const classes = {
      'container': true,
      [containerWidth]: true,
      'justify-end': this.justifyEnd,
      'justify-start': this.justifyStart,
    };
    return html`
      ${
        this.topMargin || this.bottomMargin
          ? html` <style>
            .container {
              margin-top: var(--${this.topMargin});
              margin-bottom: var(--${this.bottomMargin});
            }
          </style>`
          : ''
      }
      <div class=${classMap(classes)}>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-container': OutlineContainer;
  }
}
