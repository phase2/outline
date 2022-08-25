import { CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-split-button.css.lit';
import { OutlineButton } from '../outline-button';

/**
 * The Outline Dropdown Button component
 * @element outline-split-button
 * @todo: It is likely this split button and the outline-button can be combined.
 */
@customElement('outline-split-button')
export class OutlineSplitButton extends OutlineButton {
  static styles: CSSResultGroup = [OutlineButton.styles, componentStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-split-button': OutlineSplitButton;
  }
}
