// Our base component, which all others extend.
import { OutlineElement } from '../../../../components/base/outline-element/outline-element';
import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './example-slot-controller-component.css.lit';
import { SlotController } from '../../../controllers/slot-controller';
//import { SlottedController } from '../../../controllers/slotted-controller';
import '../../../base/outline-container/outline-container';

/**
 * The Outline  Breadcrumbs component
 * @element ExampleSlotControllerComponent
 * @slot - The default only slot for this element.
 * @todo CONTRIB
 */

@customElement('example-slot-controller-component')
export class ExampleSlotControllerComponent extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * This is a description of shadowShift.
   */
  @property({ type: Boolean, attribute: 'shadow-shift' })
  shadowShift = false;

  /* The new SlotController */
  slots = new SlotController(
    this, // This, the host element.
    true // Wether or not to shift LightDom nodes to ShadowDOM
    //this.shadowShift // Wether or not to shift LightDom nodes to ShadowDOM
  );
  /* The old SlottedController */
  // slottedController = new SlottedController(this);

  render(): TemplateResult {
    // console.log(this.slots.getSlots());
    // console.log(this.slots.test());
    // console.log(this.slots.test('named-slot--one'));
    // console.log(this.slots.test('named-slot--two'));
    // console.log(this.slots.test('named-slot--three'));
    // console.log(this.slots.test('named-slot--four'));
    // console.log(this.slots.test('named-slot--five'));
    return html`
      <section class="example-slot-controller-component">
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
