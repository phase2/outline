/**
 * The Heading component.
 * @element outline-core-heading
 * @slot defaultSlot
 */
import { TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { AdoptedStyleSheets } from '@phase2/outline-adopted-stylesheets-controller';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import globalStyles from './outline-core-heading.lightdom.css.lit';

import { OutlineElement } from '@phase2/outline-core';

import componentStyles from './outline-core-heading.css.lit';
import { AllowedHeadingLevels } from './config';

export const allowedHeadingSizes = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
];
export const allowedHeadingWeights = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
];

// export type ButtonVariant = keyof typeof buttonVariantsTypes;
export type HeadingSizes = keyof typeof allowedHeadingSizes;
export type HeadingWeights = keyof typeof allowedHeadingWeights;

@customElement('outline-core-heading')
export class OutlineCoreHeading extends OutlineElement {
  static styles = [componentStyles];
  AdoptedStyleSheets: AdoptedStyleSheets;

  connectedCallback() {
    super.connectedCallback();
    this.AdoptedStyleSheets = new AdoptedStyleSheets(globalStyles);
    this.addController(this.AdoptedStyleSheets);
  }

  /**
   * The tag to apply: h1 | h2 | h3 | h4 | h5 | h6
   */
  @property({ type: String, reflect: true, attribute: 'level' })
  level: AllowedHeadingLevels;

  /**
   * The size of the heading.
   * @type {HeadingSizes}
   */
  @property({
    type: String,
    reflect: true,
    attribute: 'size',
    converter: size => {
      if (size && !Object.values(allowedHeadingSizes).includes(size)) {
        size = allowedHeadingSizes[0];
      }
      return size;
    },
  })
  size: HeadingSizes;

  /**
   * The weight of the heading.
   * @type {HeadingWeights}
   */
  @property({
    type: String,
    reflect: true,
    attribute: 'weight',
    converter: weight => {
      if (weight && !Object.values(allowedHeadingWeights).includes(weight)) {
        weight = allowedHeadingWeights[0];
      }
      return weight;
    },
  })
  weight: HeadingWeights;

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
    return html` <slot class=${classMap(classes)}></slot> `;
  }

  render(): TemplateResult {
    const classes = {
      [`${this.additionalClasses}`]: this.additionalClasses,
      [`${String(this.size)}`]: this.size as string,
      [`${String(this.weight)}`]: this.weight as string,
    };
    const typedValues = allowedHeadingSizes.concat(allowedHeadingWeights);
    const slottedHeading: HTMLElement | null =
      this.querySelector(':is(h1, h2, h3, h4, h5, h6)') ?? null;
    if (slottedHeading) {
      // add classes from shadow DOM of component to light DOM of Slot
      slottedHeading.classList.remove(...typedValues);
      if (this.size) {
        slottedHeading?.classList.add(this.size as string);
      }
      if (this.weight) {
        slottedHeading?.classList.add(this.weight as string);
      }
    }

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
