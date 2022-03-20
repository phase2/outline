import { CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-split-button.css.lit';
import { OutlineButton } from '../outline-button/outline-button';

/**
 * The Outline Dropdown Button component
 * @element outline-split-button
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
