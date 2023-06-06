import { TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

import { OutlineElement, MobileController } from '@phase2/outline-core';

import componentStyles from './outline-heading.css.lit';
import {
  AllowedHeadingLevels,
  AllowedHeadingSizes,
  AllowedHeadingStyles,
} from './config';

/**
 * The Heading component.
 * @element outline-heading
 * @deprecated since version 0.1.2
 * @slot defaultSlot
 */
@customElement('outline-heading')
export class OutlineHeading extends OutlineElement {
  private mobileController = new MobileController(this);

  static styles = [componentStyles];

  /**
   * The tag to apply: h1 | h2 | h3 | h4 | h5 | h6
   */
  @property({ type: String, reflect: true, attribute: 'level' })
  level: AllowedHeadingLevels = 'h2';

  /**
   * The heading level size to apply. Optional override to default styles for a given level
   */
  @property({ type: String, reflect: true, attribute: 'level-size' })
  levelSize: AllowedHeadingSizes;

  /**
   * The heading level style to apply. Optional override to default styles for a given level
   */
  @property({ type: String, reflect: true, attribute: 'level-style' })
  levelStyle: AllowedHeadingStyles = 'bold';

  render(): TemplateResult {
    const classes = {
      'outline-text': true,
      [`outline-text--${this.levelSize}`]: this.levelSize ? true : '',
      [`outline-font--${this.levelStyle}`]: true,
      'mobile': this.mobileController.isMobile,
    };
    return html`
      <${unsafeStatic(this.level as string)} class=${classMap(classes)}>
        <slot></slot>
      </${unsafeStatic(this.level as string)}>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-heading': OutlineHeading;
  }
}
