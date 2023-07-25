/**
 * The Heading component.
 * @element outline-core-heading
 * @slot defaultSlot
 */
import { TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

import { OutlineElement } from '@phase2/outline-core';

import componentStyles from './outline-core-heading.css.lit';
import {
  AllowedHeadingLevels,
  AllowedHeadingSizes,
  AllowedHeadingWeights,
} from './config';

@customElement('outline-core-heading')
export class OutlineCoreHeading extends OutlineElement {
  static styles = [componentStyles];

  /**
   * The tag to apply: h1 | h2 | h3 | h4 | h5 | h6
   */
  @property({ type: String, reflect: true, attribute: 'level' })
  level: AllowedHeadingLevels;

  /**
   * The size of the heading.
   * @type {AllowedHeadingSizes}
   */
  @property({ type: String, reflect: true, attribute: 'size' })
  size: AllowedHeadingSizes;

  /**
   * The weight of the heading.
   * @type {AllowedHeadingWeights}
   */
  @property({ type: String, reflect: true, attribute: 'weight' })
  weight: AllowedHeadingWeights;

  /**
   * Additional CSS classes to apply to the heading element.
   * @type {string}
   */
  @property({ type: String, reflect: true, attribute: 'additional-classes' })
  additionalClasses: string;

  generateHeading(classes: {
    [key: string]: boolean | string;
  }): TemplateResult {
    return html`
      <${unsafeStatic(this.level as string)} class=${classMap(classes)}>
        <slot></slot>
      </${unsafeStatic(this.level as string)}>
    `;
  }

  fullMarkupInSlot(classes: {
    [key: string]: boolean | string;
  }): TemplateResult {
    return html`
      
      <slot class=${classMap(classes)}></slot>
      
    `;
  }

  render(): TemplateResult {
    const classes = {
      [`outline-text--${this.size}`]: true,
      [`outline-font--${this.weight}`]: true,
      [`${this.additionalClasses}`]: this.additionalClasses,
    };

    if (this.level) {
      return this.generateHeading(classes);
    } else {
      return this.fullMarkupInSlot(classes);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-core-heading': OutlineCoreHeading;
  }
}
