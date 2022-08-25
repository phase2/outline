import { OutlineElement } from '@phase2/outline-core';
import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from './example-slot-controller-base.css.lit';

/**
 * The Outline  Breadcrumbs component
 * @element SlotControllerComponent
 * @slot - The default slot.
 * @slot named-slot--one - A named slot.
 * @slot named-slot--two - A named slot.
 * @slot named-slot--three - A named slot.
 * @slot named-slot--four - A named slot.
 * @slot named-slot--five - A named slot.
 */

@customElement('example-slot-controller-base')
export class ExampleSlotControllerBase extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html`
      <section class="example-slot-controller">
        <outline-container>
          <!-- A simple ShadowDOM element. -->
          <div>
            <p class="original">
              This is a paragraph originally in the ShadowDOM. It has the class
              <code>.original</code> in order to style it specifically for
              demonstration purposes.
            </p>
          </div>
          <!-- The default slot. -->
          <slot></slot>
          <!-- The named slot(s) -->
          <slot name="named-slot--one"></slot>
          <slot name="named-slot--two"></slot>
          <slot name="named-slot--three"></slot>
          <slot name="named-slot--four"></slot>
          <slot name="named-slot--five"></slot>
        </outline-container>
      </section>
    `;
  }
}
