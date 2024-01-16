import { html, TemplateResult, CSSResultGroup, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Our base component, which all others extend.
import { OutlineElement, SlotsController } from '@phase2/outline-core';
import componentStyles from './outline-core-breadcrumb.css.lit';
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
 * @slot home-icon - slot for the home icon
 * @slot back-icon - slot for the back icon
 * @prop {String} breadcrumb - The breadcrumb items to display in an unordered list 
 * 
 * @todo: Complete component. - Morgan 
 * @todo: Update `../docs/outline-core-breadcrumb.mdx` to accurately document the component.
 * @todo: Run `yarn analyze` to generate README.md.
 * @todo: Update `package.json` to remove the `private` flag.
 * @todo: Update `.changeset/config.json` to remove this component from the `ignore` list.
 * @todo: Create PR for updated and completed component.
 */


@customElement(componentName)
export class OutlineCoreBreadcrumb extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles, componentStyles, css``];

  slots = new SlotsController(this);
  resizeController = new ResizeController(this, {
    breakpoints: [768, 1440],
  });

  /**
   * If the `home-icon` slot has been populated, this will return the icon element.
   *
   * @returns {Node | null} - The home icon element.
   */
  getHomeIcon = (): HTMLElement | null => {
    const homeIconExists = this.querySelectorAll('[slot="home-icon"]');
    // Check to prevent duplication
    if (homeIconExists.length <= 1) {
      const homeIconSlot =
        this.querySelector('[slot="home-icon"]')?.cloneNode(true);
      return homeIconSlot instanceof HTMLElement ? homeIconSlot : null;
    }
    return null;
  };

  /**
   * If the `back-icon` slot has been populated, this will return the icon element.
   *
   * @returns {Node | null} - The back icon element.
   */
  getBackIcon = (): HTMLElement | null => {
    const backIconExists = this.querySelectorAll('[slot="back-icon"]');
    // Check to prevent duplication
    if (backIconExists.length <= 1) {
      const backIconSlot =
        this.querySelector('[slot="back-icon"]')?.cloneNode(true);
      return backIconSlot instanceof HTMLElement ? backIconSlot : null;
    }
    return null;
  };

  createBackIcon() {
    const backIconSlot = this.getBackIcon();
    if (!backIconSlot) return null;

    const iconElement = backIconSlot as HTMLElement;
    const backIcon = document.createElement('span');
    backIcon.classList.add('back-icon');
    backIcon.innerHTML = iconElement.outerHTML;
    return backIcon;
  }

  createHomeIcon() {
    const homeIconSlot = this.getHomeIcon();
    if (!homeIconSlot) return null;

    const iconElement = homeIconSlot as HTMLElement;
    const homeIcon = document.createElement('span');
    homeIcon.classList.add('home-icon');
    homeIcon.innerHTML = iconElement.outerHTML;
    return homeIcon;
  }

  applyHomeIcon(li: HTMLLIElement) {
    const homeIcon = this.getHomeIcon();
    if (homeIcon) {
      li.getElementsByTagName('a')[0].prepend(homeIcon);
    }
  }

  applyBackIcon(li: HTMLLIElement) {
    const backIcon = this.getBackIcon();
    if (backIcon) {
      li.getElementsByTagName('a')[0].prepend(backIcon);
    }
  }

  render(): TemplateResult {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const isMobile = this.resizeController.currentBreakpointRange === 0;
    const listItems = this.getElementsByTagName('li');
    const totalListItems = listItems.length;

    const backLink = listItems[totalListItems - 2].cloneNode(
      true
    ) as HTMLLIElement;

    this.applyBackIcon(backLink);
    
    return isMobile ?
    html `${backLink}` :  html`<slot></slot>`;
  
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [componentName]: OutlineCoreBreadcrumb;
  }
}
