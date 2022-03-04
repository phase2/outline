import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../../base/outline-element/outline-element';
import { customElement, property, query, state } from 'lit/decorators.js';
import '../sb-icon-wrapper/sb-icon-wrapper';
import '../../base/outline-svg/outline-svg';
import componentStyles from './sb-icon-list-container.css.lit';
import { ifDefined } from 'lit/directives/if-defined.js';

type IconObj = {
  [key: string]: string[];
};

/**
 * The Icon List Container component for displaying icons in Storybook
 * @element sb-icon-list-container
 */
@customElement('sb-icon-list-container')
export class SbIconListContainer extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @query('.search')
  searchEl: HTMLInputElement;

  @query('.dropdown')
  dropdownEl: HTMLInputElement;

  @query('.alt-checkbox')
  altCheckbox: HTMLInputElement;

  /**
   * Array of IconList objects. Used to parse for name to render icons
   */
  @property({ type: Object })
  icons: Object;

  /**
   * Whether the icons should be light on a dark background
   */
  @property({ type: Boolean })
  alt = false;

  @state()
  filteredIcons: string[];

  @state()
  search: string;

  allIcons: string[];

  currentIcons: string[];

  iconObj: IconObj = {};

  connectedCallback() {
    super.connectedCallback();
    this.organizeIcons();
    this.currentIcons = this.allIcons;
    this.filteredIcons = this.allIcons;
  }

  render(): TemplateResult {
    const alt = this.alt ? 'alt' : undefined;

    return html`
    <div class="main ${alt}">
      <input 
        class="search" 
        placeholder='Search for Icon...' 
        @keyup=${this.handleSearch}
        @change=${this.handleSearch}
      >
      ${this.dropdownTemplate()}
      <label class=${ifDefined(alt)} for="alt">Alt</label>
      <input type="checkbox" class="alt-checkbox" name="alt" id="alt" @change=${
        this.handleCheckbox
      }>
      <span class='sr-only'>Search for Icons</span></input>
      <div class="icon-container">${this.filteredListTemplate(alt)}</div>
    </div>
    `;
  }

  filteredListTemplate = (alt: string | undefined) => {
    return this.filteredIcons.map(
      i => html`
        <div class="icon">
          <sb-icon-wrapper icon-name=${i}>
            <outline-svg class=${ifDefined(alt)} name=${i}></outline-svg>
          </sb-icon-wrapper>
        </div>
      `
    );
  };

  dropdownTemplate = (): TemplateResult => {
    const options: TemplateResult[] = Object.keys(this.icons).map(
      i =>
        html`<option value=${i}>${this.capitalizeFirstLetter(i)} Icons</option>`
    );

    return html`
      <select
        aria-label="icon-selector"
        class="dropdown"
        @change=${this.handleDropdown}
      >
        <option value="All Icons">All Icons</option>
        ${options}
      </select>
    `;
  };

  handleCheckbox = () => {
    this.alt = this.altCheckbox.checked;
  };

  handleDropdown = (): void => {
    const dropdownValue = this.dropdownEl.value;
    if (dropdownValue === 'All Icons') {
      this.filteredIcons = this.allIcons;
      this.currentIcons = this.allIcons;
    } else {
      this.filteredIcons = this.iconObj[this.dropdownEl.value];
      this.currentIcons = this.iconObj[this.dropdownEl.value];
    }

    if (this.searchEl.value.length > 0) {
      this.handleSearch();
    }
  };

  handleSearch = (): void => {
    this.filteredIcons = this.currentIcons.filter(i =>
      i.includes(this.searchEl.value.toLowerCase())
    );
  };

  organizeIcons = (): void => {
    let icons: string[] = [];

    Object.entries(this.icons).forEach(([key, val]) => {
      const arr = Object.keys(val).map(k => k);
      this.iconObj[key] = arr;
      icons = [...icons, ...arr];
    });

    this.allIcons = this.sortAlphabetically(icons);
  };

  sortAlphabetically = (iconList: string[]): string[] => {
    return iconList.sort((a, b) => a.localeCompare(b));
  };

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
