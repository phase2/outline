import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { emit } from '../../../internal/event';
import { watch } from '../../../internal/watch';
import { MobileController } from '../../controllers/mobile-controller';
import { OutlineElement } from '../outline-element/outline-element';
import { getIconLibrary, unwatchIcon, watchIcon } from './library';
import { requestIcon } from './request';

const parser = new DOMParser();

/**
 * @since 1.0
 * @status stable
 *
 * @event outline-load - Emitted when the icon has loaded.
 * @event {{ status: number }} outline-error - Emitted when the icon fails to load due to an error.
 *
 * @csspart base - The component's base wrapper.
 */
@customElement('outline-icon')
export default class OutlineIcon extends OutlineElement {
  @state() private svg = '';

  /** The name of the icon to draw. */
  @property({ type: String, reflect: true, attribute: 'name' })
  name?: string;

  /**
   * An external URL of an SVG file.
   *
   * WARNING: Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks.
   */
  @property({ type: String, attribute: 'src' })
  src?: string;

  /** An alternate description to use for accessibility. If omitted, the icon will be ignored by assistive devices. */
  /** @todo: Make this default to "true" and be turned off when an icon is decorative. */
  @property({ type: String, attribute: 'label' })
  label = '';

  /** The name of a registered custom icon library. */
  @property({ type: String, attribute: 'library' })
  library = 'default';

  /**
   * The width and height of the icon.
   * @param size in pixels
   * @default 32px
   */
  @property({ type: String, attribute: 'size' })
  size = '32px';

  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }

  firstUpdated() {
    this.setIcon();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }

  private getUrl() {
    const library = getIconLibrary(this.library);
    if (this.name && library) {
      return library.resolver(this.name);
    }
    return this.src;
  }

  /** @internal Fetches the icon and redraws it. Used to handle library registrations. */
  redraw() {
    this.setIcon();
  }

  @watch('name')
  @watch('src')
  @watch('library')
  async setIcon() {
    const library = getIconLibrary(this.library);
    const url = this.getUrl();
    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          // If the url has changed while fetching the icon, ignore this request
          return;
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, 'text/html');
          const svgEl = doc.body.querySelector('svg');

          if (svgEl !== null) {
            library?.mutator?.(svgEl);

            this.svg = svgEl.outerHTML;
            emit(this, 'outline-load');
          } else {
            this.svg = '';
            emit(this, 'outline-error', { detail: { status: file.status } });
          }
        } else {
          this.svg = '';
          emit(this, 'outline-error', { detail: { status: file.status } });
        }
      } catch {
        emit(this, 'outline-error', { detail: { status: -1 } });
      }
    } else if (this.svg.length > 0) {
      // If we can't resolve a URL and an icon was previously set, remove it
      this.svg = '';
    }
  }

  handleChange() {
    this.setIcon();
  }

  render() {
    const hasLabel = typeof this.label === 'string' && this.label.length > 0;
    const styles = {
      width: this.library === 'system' && this.size ? this.size : '24px',
      height: this.library === 'system' && this.size ? this.size : '24px',
    };
    return html` <div
      part="base"
      class="icon"
      style="${styleMap(styles)}"
      role=${ifDefined(hasLabel ? 'img' : undefined)}
      aria-label=${ifDefined(hasLabel ? this.label : undefined)}
      aria-hidden=${ifDefined(hasLabel ? undefined : 'true')}
    >
      ${unsafeSVG(this.svg)}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-icon': OutlineIcon;
  }
}
