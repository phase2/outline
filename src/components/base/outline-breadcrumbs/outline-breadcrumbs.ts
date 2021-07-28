// Our base component, which all others extend.
import { OutlineElement } from '../outline-element/outline-element';
import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
// import componentStyles from './outline-breadcrumbs.css.lit';

/**
 * The Outline  Breadcrumbs component
 * @slot - The default and used twice for this element.
 */

@customElement('outline-breadcrumbs')
export class OutlineBreadcrumbs extends OutlineElement {
  // /**
  //  * Crumbs Array
  //  */
  // @property({ type: Array })
  // crumbsLinks: HTMLElement[] | null;

  render(): TemplateResult {
    return html` <nav role="navigation" aria-label="breadcrumbs"></nav>
      <ol class="list-none inline-flex p-8">
        <slot></slot>
      </ol>`;
  }
}
