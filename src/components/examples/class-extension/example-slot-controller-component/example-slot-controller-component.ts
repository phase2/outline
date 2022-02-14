// Our base component, which all others extend.
import { OutlineElement } from '../../../components/base/outline-element/outline-element';
import { CSSResultGroup, html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from './example-slot-controller-component.css.lit';
import { SlotController } from '../../controllers/slot-controller';
//import { SlottedController } from '../../controllers/slotted-controller';
import '../../base/outline-container/outline-container';

/**
 * The Outline  Breadcrumbs component
 * @element ExampleSlotControllerComponent
 * @slot - The default only slot for this element.
 * @todo CONTRIB
 */

@customElement('example-slot-controller-component')
export class ExampleSlotControllerComponent extends OutlineElement {
  slots = new SlotController(
    this, // This, the host element.
    false // Wether or not to shift LightDom nodes to ShadowDOM
  );
  //slottedController = new SlottedController(this);
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    //console.log(this.slots.getSlots());
    // console.log(this.slots.test());
    // console.log(this.slots.test('extra-slot'));
    // console.log(this.slots.test('another-slot'));
    return html`
      <section class="example-slot-controller-component">
        <outline-container>
          <slot></slot>
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
