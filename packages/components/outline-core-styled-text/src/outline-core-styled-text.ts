import { TemplateResult, html, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';

// Our base component, which all others extend.
import { OutlineElement } from '@phase2/outline-core';

import componentStyles from './outline-core-styled-text.css.lit';

import { checkFileType } from './utilities/check-file-type';
import { externalLinkText } from './utilities/external-link-text';
import { tooltipLink } from './utilities/tooltip';
import { wrapLastWord } from './utilities/wrap-last-word';


wrapLastWord;

/**
 * The Outline Core Styled Text component
 * @element outline-core-styled-text
 * @since 1.0.0
 * @slot - default slot
 *
 * Lightdom styles in outline-core-styled-text.lightdom.css included in /shared.css
 */
@customElement('outline-core-styled-text')
export class OutlineCoreStyledText extends OutlineElement {
  static styles: CSSResultGroup = [OutlineElement.styles, componentStyles];

  connectedCallback(): void {
    super.connectedCallback();

    this.querySelectorAll('a').forEach(el => {
      // Check if has target="_blank" before adding last-word span.
      checkFileType(el);
      if (
        el.getAttribute('target') === '_blank' ||
        el.classList.contains('outline-core-cta')
      ) {
        // Wraps last word in a span.last-word element.
        // span.last-word is where the icon is added via pseudo
        wrapLastWord(el as HTMLElement);

        // Adds external link text for screen readers.
        if (el.classList.contains('is-external-link')) {
          externalLinkText(el as HTMLElement);
        }
      }
      //
      if (el.classList.contains('outline-core-tooltip')) {
        tooltipLink(el as HTMLElement);
      }
    });
  }

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-core-styled-text': OutlineCoreStyledText;
  }
}
