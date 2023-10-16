import { OutlineElement } from '@phase2/outline-core';
import { customElement, property } from 'lit/decorators.js';

@customElement('outline-core-contained-element')
export class OutlineCoreContainedElement extends OutlineElement {
  @property({ type: String, reflect: true })
  padding: string;
  @property({ type: String, reflect: true, attribute: 'padding-bottom' })
  paddingBottom: string;
  @property({ type: String, reflect: true, attribute: 'padding-top' })
  paddingTop: string;
  @property({ type: String, attribute: 'padding-left' })
  paddingLeft: string;
  @property({ type: String, reflect: true, attribute: 'padding-right' })
  paddingRight: string;
  @property({ type: String, reflect: true, attribute: 'padding-inline' })
  paddingInline: string;
  @property({ type: String, reflect: true, attribute: 'padding-block' })
  paddingBlock: string;

  @property({ type: String, reflect: true })
  margin: string;
  @property({ type: String, reflect: true, attribute: 'margin-bottom' })
  marginBottom: string;
  @property({ type: String, reflect: true, attribute: 'margin-top' })
  marginTop: string;
  @property({ type: String, reflect: true, attribute: 'margin-left' })
  marginLeft: string;
  @property({ type: String, reflect: true, attribute: 'margin-right' })
  marginRight: string;
  @property({ type: String, reflect: true, attribute: 'margin-inline' })
  marginInline: string;
  @property({ type: String, reflect: true, attribute: 'margin-block' })
  marginBlock: string;

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    changedProperties.forEach((_, propName) => {
      if (
        typeof propName === 'string' &&
        (propName.startsWith('padding') || propName.startsWith('margin'))
      ) {
        const value = this[propName as keyof this] as string;

        if (value && this.isValidCSSValue(value)) {
          // Set the style property directly
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this.style as any)[propName] = value;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this.style as any)[propName] = null;
        }
      }
    });
  }

  private isValidCSSValue(value: string): boolean {
    if (value === '' || value === null || value === undefined) return false;
    const cssUnits = [
      'em',
      'rem',
      '%',
      'px',
      'vh',
      'vw',
      'vmin',
      'vmax',
      'ex',
      'ch',
      'cm',
      'mm',
      'in',
      'pt',
      'pc',
    ];
    const values = value.split(' ').filter(v => v.trim() !== ''); // split by space and filter out any empty strings
    if (values.length > 4) return false;

    return values.every(
      v => cssUnits.some(unit => v.endsWith(unit)) || !isNaN(Number(v))
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-core-contained-element': OutlineCoreContainedElement;
  }
}
