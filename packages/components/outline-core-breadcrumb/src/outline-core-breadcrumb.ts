import { html, TemplateResult, CSSResultGroup, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AdoptedStylesheets } from '@phase2/outline-adopted-stylesheets-controller';
// Our base component, which all others extend.
import { OutlineElement } from '@phase2/outline-core';
import componentStyles from './outline-core-breadcrumb.css.lit';
import globalStyles from './outline-core-breadcrumb.global.css?inline';
import encapsulatedStyles from './outline-core-breadcrumb.encapsulated.css?inline';
import { ResizeController } from './resize-controller';

/** The element name, reused throughout the codebase */
const componentName = 'outline-core-breadcrumb';

/**
 *
 * The Outline Core Breadcrumb component
 *
 * @element outline-core-breadcrumb
 * @extends OutlineElement
 * @slot - The default slot for this element.
 * @prop {String} breadcrumb - The breadcrumb items to display in an unordered list
 *
 * @todo: Run `yarn analyze` to generate README.md. - failed
 * @todo: Update `package.json` to remove the `private` flag.
 * @todo: Update `.changeset/config.json` to remove this component from the `ignore` list.
 * @todo: Create PR for updated and completed component.
 */

@customElement(componentName)
export class OutlineCoreBreadcrumb extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles, componentStyles, css``];
  GlobalStylesheets: AdoptedStylesheets | undefined = new AdoptedStylesheets(
    this,
    globalStyles
  );
  EncapsulatedStylesheets: AdoptedStylesheets | undefined;
// THIS NEEDS TO BE HERE FOR STORYBOOK TO WORK
  debug = false;
  resizeController = new ResizeController(this, {
    breakpoints: [768, 1440],
  });

  render(): TemplateResult {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const isMobile = this.resizeController.currentBreakpointRange === 0;
    const listItems = this.getElementsByTagName('li');
    const totalListItems = listItems.length;

    const backLink = listItems[totalListItems - 2].cloneNode(
      true
    ) as HTMLLIElement;

    return isMobile
      ? html`${backLink}`
      : html`<div>
          <slot></slot>
        </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: OutlineCoreBreadcrumb;
  }
}
