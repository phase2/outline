import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../../base/outline-element/outline-element';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './sb-icon-wrapper.css.lit';

/**
 * The Icon Wrapper component.
 * Wraps Icon in Storybook to provide hover effect and click to copy icon name function
 * @element sb-icon-wrapper
 */
@customElement('sb-icon-wrapper')
export class IconWrapper extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String, attribute: 'icon-name' })
  iconName: string;

  disconnectedCallback = () => {
    document.removeEventListener('copy', () => {});
  };

  render(): TemplateResult {
    return html`
      <div class="tooltip" @click=${() => this.copyToClipboard(this.iconName)}>
        <span class="tooltip-text">${this.iconName}</span>
        <slot></slot>
      </div>
    `;
  }

  copyToClipboard = (text: string) => {
    const iconNameCache = this.iconName;
    document.addEventListener('copy', e => {
      e.clipboardData!.setData('text/plain', text);
      e.preventDefault();
    });
    document.execCommand('copy');
    this.iconName = 'Copied!';
    setTimeout(() => (this.iconName = iconNameCache), 2000);
  };
}
