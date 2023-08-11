import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';

// Our base component, which all others extend.
import { OutlineElement } from '@phase2/outline-core';

import componentStyles from './outline-core-card.css.lit';

/** The element name, reused throughout the codebase */
const componentName = 'outline-core-card';

/**
 *
 * The Outline Core Card component
 *
 * @element outline-core-card
 * @extends OutlineElement
 * @slot - The default slot for this element.
 *
 * @todo: Complete component.
 * @todo: Update `../docs/outline-core-card.mdx` to accurately document the component.
 * @todo: Run `yarn analyze` to generate README.md.
 * @todo: Update `package.json` to remove the `private` flag.
 * @todo: Create PR for updated and completed component.
 */
@customElement(componentName)
export class OutlineCoreCard extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: OutlineCoreCard;
  }
}
