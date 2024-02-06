import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement, SlotsController } from '@phase2/outline-core';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-admin-links.css.lit';

/**
 * The Outline Admin Links component
 * @element outline-admin-links
 * @extends OutlineElement
 * @slot - The default slot for this element.
 * @cssprop --outline-admin-links--color: The default text color for the admin links.
 * @cssprop --outline-admin-links--color-hover: The hover text color for the admin links.
 * @cssprop --outline-admin-links--color-focus: The focus text color for the admin links.
 * @cssprop --outline-admin-links--color-active: The active text color for the admin links.
 * @cssprop --outline-admin-links--bg-default: The default background color for the admin links.
 * @cssprop --outline-admin-links--bg-hover: The hover background color for the admin links.
 * @cssprop --outline-admin-links--bg-focus: The focus background color for the admin links.
 * @cssprop --outline-admin-links--bg-active: The active background color for the admin links.
 * @cssprop --outline-admin-links--spacing-y: The vertical spacing for the admin links group.
 * @cssprop --outline-admin-links--link-spacing-y: The vertical padding for the individual admin links.
 * @cssprop --outline-admin-links--link-spacing-x: The horizontal padding for the individual admin links.
 * @todo: Ensure this component is more mobile friendly.
 */
@customElement('outline-admin-links')
export class OutlineAdminLinks extends OutlineElement {
  slots = new SlotsController(this);
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html` <div class="links">${this.slots.renderInShadow('')}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-admin-links': OutlineAdminLinks;
  }
}
