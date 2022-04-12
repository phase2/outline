import { html, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { OutlineElement } from '../../base/outline-element/outline-element';

const elementName = 'slot-query';

/**
 * Slot query component.
 *
 * @element slot-query
 * @slot unnested
 * @slot nested
 */
@customElement(elementName)
export class SlotQuery extends OutlineElement {
  render(): TemplateResult {
    this._logQuery(`[slot="unnested"]`);
    this._logQuery(`[slot="nested"]`);
    this._logQuery(`:scope > [slot="unnested"]`);
    this._logQuery(`:scope > [slot="nested"]`);

    return html`
      <div id="slot-query">
        <slot name="unnested"></slot>
        <slot name="nested"></slot>
      </div>
    `;
  }

  _logQuery(query: string): void {
    // eslint-disable-next-line
    console.log(this, query, this.querySelectorAll(query));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slot-query': SlotQuery;
  }
}
