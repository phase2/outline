import { CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-dropdown-button.css.lit';
import { OutlineButton } from '../outline-button/outline-button';

/**
 * The Outline Dropdown Button component
 * @element outline-dropdown-button
 */
@customElement('outline-dropdown-button')
export class OutlineDropdownButton extends OutlineButton {
  static styles: CSSResultGroup = [OutlineButton.styles, componentStyles];
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-dropdown-button': OutlineDropdownButton;
  }
}
