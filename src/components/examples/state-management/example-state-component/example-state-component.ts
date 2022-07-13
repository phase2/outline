import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../../../base/outline-element/outline-element';
import { customElement } from 'lit/decorators.js';
import componentStyles from './example-state-component.css.lit';

import { observeState } from 'lit-element-state';
import { exampleState } from '../state';

/**
 *
 * @element example-state-component
 */
@customElement('example-state-component')
export class ExampleStateComponent extends observeState(OutlineElement) {
  static styles: CSSResultGroup = [componentStyles];

  render(): TemplateResult {
    return html`
      <div class="wrapper">
        <outline-heading>Days Since Last Incident</outline-heading>
        <p class="count">${exampleState.count}</p>
      </div>
    `;
  }
}
