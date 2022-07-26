import { CSSResultGroup, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { OutlineElement } from '@phase2/outline-core';
import componentStyles from './outline-tab.css.lit';

let id = 0;

/**
 * @slot - The tab's label.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('outline-tab')
export class OutlineTab extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @query('.tab') tab: HTMLElement;

  private componentId = `tab-${++id}`;

  /** The name of the tab panel the tab will control. The panel must be located in the same tab group. */
  @property() panel = '';

  /** Draws the tab in an active state. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Draws the tab in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Sets focus to the tab. */
  focus(options?: FocusOptions) {
    this.tab.focus(options);
  }

  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }

  render() {
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    this.id = this.id || this.componentId;

    return html`
      <div
        part="base"
        class=${classMap({
          'tab': true,
          'tab--active': this.active,
          'tab--disabled': this.disabled,
        })}
        role="tab"
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-selected=${this.active ? 'true' : 'false'}
        tabindex=${this.disabled || !this.active ? '-1' : '0'}
      >
        <slot> </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-tab': OutlineTab;
  }
}
