import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../../base/outline-element/outline-element';
import { customElement } from 'lit/decorators.js';
import componentStyles from './state-management-example.css.lit';

import { observeState } from 'lit-element-state';
import {
  resetCount,
  decreaseCount,
  increaseCount,
  exampleState,
} from './state';

/**
 * An example of state management using the lit-state library
 * @element state-management-example
 */
@customElement('state-management-example')
export class StateManagementExample extends observeState(OutlineElement) {
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html`
      <div class="wrapper">
        <p class="count">${exampleState.count}</p>
        <div class="btn-wrapper">
          <outline-button @click=${decreaseCount}>-</outline-button>
          <outline-button @click=${resetCount}>0</outline-button>
          <outline-button @click=${increaseCount}>+</outline-button>
        </div>
      </div>
    `;
  }
}
