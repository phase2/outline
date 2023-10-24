import { OutlineCoreButton } from "@phase2/outline-core-button";
import { customElement } from 'lit/decorators.js';
import "@phase2/outline-core-button";
// Import @phase2 version breaking Storybook
// import { buttonVariantsTypes } from "@phase2/outline-core-button/src/outline-core-button";
import { buttonVariantsTypes } from "../outline-core-button/src/outline-core-button";
import { AdoptedStyleSheets } from '@phase2/outline-adopted-stylesheets-controller';
import componentStyles from './outline-extended-button.css.lit';
import globalStyles from './outline-extended-button-lightdom.css.lit';
import { CSSResultGroup } from "lit";

buttonVariantsTypes.push('shiny');

// Rewriting does not work - instead push your variants into the array
// Wrong - const buttonVariantsTypes = ['shiny', 'dull', 'matte'];
// Right - buttonVariantsTypes.push('shiny', 'dull', 'matte');
// If you want to remove all styles from the array, you need to write your own function and ensure you cannot have a null style class
// If you want styles from core, copy paste them into your own file and import them (plus any vars)

@customElement('outline-extended-button')
export class OutlineExtendedButton extends OutlineCoreButton {
    static styles: CSSResultGroup = [componentStyles];
    AdoptedStyleSheets: AdoptedStyleSheets;
  
    connectedCallback() {
      super.connectedCallback();
      this.AdoptedStyleSheets = new AdoptedStyleSheets(globalStyles);
      this.addController(this.AdoptedStyleSheets);
    }
}