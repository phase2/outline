import { OutlineCoreButton } from '@phase2/outline-core-button';
import { customElement } from 'lit/decorators.js';
import '@phase2/outline-core-button';
// Import @phase2 version breaking Storybook
// import { buttonVariantsTypes } from "@phase2/outline-core-button/src/outline-core-button";
import { buttonVariantsTypes } from '../outline-core-button/src/outline-core-button';

buttonVariantsTypes.push('shiny');

// Rewriting does not work
// const buttonVariantsTypes = ['shiny', 'dull', 'matte'];

@customElement('outline-extended-button')
export class OutlineExtendedButton extends OutlineCoreButton {}
