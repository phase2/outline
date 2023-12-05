import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';

// Our base component, which all others extend.
import { OutlineElement } from '@phase2/outline-core';

import componentStyles from './outline-core-icon.css.lit';

/** The element name, reused throughout the codebase */
const componentName = 'outline-core-icon';

/**
 *
 * The Outline Core Image component
 *
 * @element outline-core-icon
 * @extends OutlineElement
 * @slot - The default slot for this element.
 *
 * @todo: Complete component.
 * @todo: Update `../docs/outline-core-icon.mdx` to accurately document the component.
 * @todo: Run `yarn analyze` to generate README.md.
 * @todo: Update `package.json` to remove the `private` flag.
 * @todo: Update `.changeset/config.json` to remove this component from the `ignore` list.
 * @todo: Create PR for updated and completed component.
 */
@customElement(componentName)
export class OutlineCoreIcon extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: OutlineCoreIcon;
  }
}
