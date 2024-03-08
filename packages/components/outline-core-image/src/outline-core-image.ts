import { html, TemplateResult, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

// import componentStyles from './outline-core-image.css.lit';

/** The element name, reused throughout the codebase */
const componentName = 'outline-core-image';

/**
 *
 * The Outline Core Image component
 *
 * @element outline-core-image
 * @extends LitElement
 * @slot - The default slot for this element.
 *
 * @todo: Complete component.
 * @todo: Update `../docs/outline-core-image.mdx` to accurately document the component.
 * @todo: Run `yarn analyze` to generate README.md.
 * @todo: Update `package.json` to remove the `private` flag.
 * @todo: Update `.changeset/config.json` to remove this component from the `ignore` list.
 * @todo: Create PR for updated and completed component.
 */
@customElement(componentName)
export class OutlineCoreImage extends LitElement {
  // static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html` <slot></slot> `;
  }
}

/**
 * TypeScript declaration extends the HTMLElementTagNameMap interface, adding
 * the 'v-tile' web component. This enhances type checking and autocompletion in IDEs.
 * @see {@link https://lit.dev/docs/components/defining/#typescript-typings | Providing good TypeScript typings}
 */
declare global {
  interface HTMLElementTagNameMap {
    [componentName]: OutlineCoreImage;
  }
}
