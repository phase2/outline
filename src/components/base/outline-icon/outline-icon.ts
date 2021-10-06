import { CSSResultGroup, html, TemplateResult } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import { customElement, property, query } from 'lit/decorators.js';
import { iconList, IconList } from './iconList';
import { styleMap } from 'lit/directives/style-map.js';
import componentStyles from './outline-icon.css.lit';
import { MobileController } from '../../controllers/mobile-controller';
/**
 * The OutlineIcon component
 * @element outline-icon
 */
@customElement('outline-icon')
export class OutlineIcon extends OutlineElement {
  private mobileController = new MobileController(this);

  static styles: CSSResultGroup = [componentStyles];

  @query('svg')
  icon: SVGElement;

  /**
   * Color of icon, by default it inherits current text color from wrapper
   * @param color
   * @default currentColor
   */
  @property()
  color = 'currentColor';

  /**
   * Determines if svg is hidden from screen readers or not
   * @param decorative
   * @default false;
   */
  @property({ type: Boolean })
  decorative = false;

  /**
   * Name of icon to display
   * @param name
   */
  @property()
  name: keyof IconList | string;

  /**
   * The width and height of the icon on mobile screens
   * @param mobileSize in pixels
   * @default 16px
   */
  @property({ attribute: 'mobile-size' })
  mobileSize = '16px';

  /**
   * The width and height of the icon on screens larger than mobile
   * @param size in pixels
   * @default 32px
   */
  @property()
  size = '32px';

  firstUpdated() {
    this.icon.setAttribute('aria-hidden', `${this.decorative}`);
  }

  render(): TemplateResult {
    const styles = {
      width: this.mobileController.isMobile ? this.mobileSize : this.size,
      height: this.mobileController.isMobile ? this.mobileSize : this.size,
      fill: this.color,
    };
    return html` <div style=${styleMap(styles)}>${iconList[this.name]}</div> `;
  }
}
