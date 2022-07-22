import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { OutlineElement } from '@phase2/outline-core';

import componentStyles from './outline-swatch-set.css.lit';
import tailwindThemeConfig from '../../../resolved-tailwind-config';
import '../outline-swatch/outline-swatch';

export const swatchSets = [
  'outline',
  'brand',
  'alert',
  'outline-gray',
  'outline-blue',
  'red',
  'yellow',
  'green',
  'indigo',
  'purple',
  'pink',
] as const;
export type SwatchSet =
  | 'outline'
  | 'brand'
  | 'alert'
  | 'outline-gray'
  | 'outline-blue'
  | 'red'
  | 'yellow'
  | 'green'
  | 'indigo'
  | 'purple'
  | 'pink';
// export const swatchSets = outline.color.sets as const;
// export type SwatchSet = typeof swatchSets[number];

export interface OutlineSwatchSetInterface extends HTMLElement {
  set: SwatchSet;
}

/**
 * Color swatch set
 *
 * @element outline-swatch-set
 * @extends OutlineElement
 * @implements {OutlineSwatchSetInterface}
 */
@customElement('outline-swatch-set')
export class OutlineSwatchSet
  extends OutlineElement
  implements OutlineSwatchSetInterface
{
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String })
  set: SwatchSet = 'outline';

  render(): TemplateResult {
    // @ts-expect-error it just is.
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
