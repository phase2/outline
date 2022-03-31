import { html, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import componentStyles from './outline-video-vimeo.css.lit';
import { OutlineElement } from '../../base/outline-element/outline-element';

export interface OutlineVideoVimeoInterface extends HTMLElement {
  videoID: string;
}

/**
 * The Outline VideoVimeo component
 *
 * @element outline-video-vimeo
 */
@customElement('outline-video-vimeo')
export class OutlineVideoVimeo
  extends OutlineElement
  implements OutlineVideoVimeoInterface
{
  static styles: CSSResultGroup = [componentStyles];

  @property({ type: String, attribute: 'video-id', reflect: true })
  videoID: string;

  render(): TemplateResult {
    return html`
      <iframe
        src="https://player.vimeo.com/video/${this.videoID}"
        title="Vimeo video ${this.videoID}"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-video-vimeo': OutlineVideoVimeo;
  }
}
