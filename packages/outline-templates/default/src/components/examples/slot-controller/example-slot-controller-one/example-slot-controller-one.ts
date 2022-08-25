import { customElement } from 'lit/decorators.js';
import { SlotController } from '@phase2/outline-core';
import { ExampleSlotControllerBase } from '../example-slot-controller-base/example-slot-controller-base';

/**
 * Sample SlotControllerComponent test.
 *
 * @element ExampleSlotControllerOne
 * @slot - The default slot.
 * @slot named-slot--one - A named slot.
 * @slot named-slot--two - A named slot.
 * @slot named-slot--three - A named slot.
 * @slot named-slot--four - A named slot.
 * @slot named-slot--five - A named slot.
 */

@customElement('example-slot-controller-one')
export class ExampleSlotControllerOne extends ExampleSlotControllerBase {
  /* The new SlotController */
  slots = new SlotController(
    this, // This, the host element.
    false // To shift or not to shift LightDom nodes to ShadowDOM.
  );
}
