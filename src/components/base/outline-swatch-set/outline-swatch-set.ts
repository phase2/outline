import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-swatch-set.css.lit';
import { OutlineElement } from '../outline-element/outline-element';
import tailwindThemeConfig from '../../../resolved-tailwind-config';
// const outline = require('../outline.config');
import '../outline-grid/outline-grid';
import '../outline-grid/outline-column/outline-column';
import '../outline-swatch/outline-swatch';

export const swatchSets = ['brand', 'neutral', 'ui', 'demo'] as const;
export type SwatchSet = typeof swatchSets[number];

export interface OutlineSwatchSetInterface extends HTMLElement {
  set: SwatchSet;
}

/**
 * Color swatch set
 *
 * @element outline-swatch-set
 */
@customElement('outline-swatch-set')
export class OutlineSwatchSet
  extends OutlineElement
  implements OutlineSwatchSetInterface
{
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String })
  set: SwatchSet = 'brand';

  render(): TemplateResult {
    const colors = Object.entries(tailwindThemeConfig.colors[this.set]).map(
      ([name]) => name
    );

    return html`
      <outline-grid>
        ${colors.map(
          color => html`
            <outline-column col-span-md="6" col-span-lg="4" col-span-xl="3">
              <outline-swatch
                set="${this.set}"
                color="${color}"
              ></outline-swatch>
            </outline-column>
          `
        )}
      </outline-grid>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-swatch-set': OutlineSwatchSet;
  }
}
