import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '../outline-element/outline-element';
import '../outline-icon/outline-icon';
import '../outline-link/outline-link';
import { google, outlook, ics, CalendarEvent } from 'calendar-link';
import { UnitType } from 'dayjs';
import { customElement, property, state } from 'lit/decorators.js';
import componentStyles from './outline-calendar-link-dropdown.css.lit';

export type Duration = [number, UnitType];

/**
 * The Calendar Dropdown Link component
 * @element outline-calendar-link-dropdown
 */
@customElement('outline-calendar-link-dropdown')
export class OutlineCalendarLinkDropdown extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  /**
   * The event title.
   * Required
   */
  @property({ type: String })
  title: string;

  /**
   * The event start time.
   * Required
   * acceptable values are JS Date | ISO 8601 string | Unix Timestamp
   */
  @property({ type: String })
  start: string;

  /**
   * The event end time. You must provide either end, duration, or allDay
   * acceptable values are JS Date | ISO 8601 string | Unix Timestamp
   */
  @property({ type: String })
  end: string;

  /**
   * The event duration. You must provide either end, duration, or allDay
   * format is an array with value(number) and unit(string) i.e [3, "hour"]
   */
  @property({ type: Array })
  duration: Duration;

  /**
   * Whether this is an all day event. You must provide either end, duration, or allDay
   */
  @property({ type: Boolean, attribute: 'all-day' })
  allDay: boolean;

  /**
   * Event description
   */
  @property({ type: String })
  description: string;

  /**
   * Event location
   */
  @property({ type: String })
  location: string;

  /**
   * Whether to mark on calendar as busy
   */
  @property({ type: Boolean })
  busy: boolean;

  /**
   * Emails of other guests. An array of emails(string).
   * i.e ['user1@test.com', 'user2@test.com']
   */
  @property({ type: Array })
  guests: string[];

  /**
   * Calendar document URL
   */
  @property({ type: String })
  url: string;

  @state()
  open = false;

  @state()
  event: CalendarEvent;

  connectedCallback() {
    super.connectedCallback();
    this.event = {
      title: this.title,
      start: this.start,
      end: this.end,
      duration: this.duration,
      allDay: this.allDay,
      description: this.description,
      location: this.location,
      busy: this.busy,
      guests: this.guests,
      url: this.url,
    };
  }

  render(): TemplateResult | undefined {
    const iconName = this.open ? 'chevron-up' : 'chevron-down';
    const menuState = this.open ? 'open' : 'hidden';

    return html`
      <div class="button-wrapper ${menuState}">
        <button
          class="dropdown-button"
          aria-expanded="${this.open}"
          aria-haspopup="true"
          @click=${this.handleClick}
        >
          Add to calendar
          <outline-icon
            name="${iconName}"
            size="16px"
            mobile-size="16px"
          ></outline-icon>
        </button>
      </div>
      <div class="links-wrapper ${menuState}">
        ${this.open ? html`<hr class="divider" />` : undefined}
        ${this.calendarLinkTemplate(menuState)}
      </div>
    `;
  }

  calendarLinkTemplate = (menuState: string) => {
    return html`
      <ul
        class="dropdown-calendar-links ${menuState}"
        aria-hidden="${!this.open}"
        aria-label="submenu"
      >
        <li>
          <span class="cal-link">
            <outline-icon
              name="apple"
              size="24px"
              mobile-size="24px"
              decorative
            ></outline-icon>
            <a href="${ics(this.event)}" title="Add to Apple iCal">Apple</a>
          </span>
        </li>
        <li>
          <span class="cal-link">
            <outline-icon
              name="google-logo"
              size="24px"
              mobile-size="24px"
              decorative
            ></outline-icon>
            <a
              href="${google(this.event)}"
              target="_blank"
              title="Add to Google Calendar"
              >Google</a
            >
            <p>(online)</p>
          </span>
        </li>
        <li>
          <span class="cal-link">
            <outline-icon
              name="office-logo"
              size="24px"
              mobile-size="24px"
              decorative
            ></outline-icon>
            <a
              href="${outlook(this.event)}"
              target="_blank"
              title="Add to Outlook Calendar"
              >Outlook</a
            >
            <p>(online)</p>
          </span>
        </li>
      </ul>
    `;
  };

  handleClick = () => {
    if (!this.open) {
      this.open = true;
      addEventListener('keydown', e => this.handleClosingDropdown(e));
      addEventListener('focusout', this.handleFocusOut);
      document.onclick = (e: MouseEvent) => this.handleClickOutside(e);
    } else {
      this.open = false;
      removeEventListener('keydown', e => this.handleClosingDropdown(e));
      removeEventListener('focusout', this.handleFocusOut);
      document.onclick = null;
    }
  };

  handleClosingDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') this.open = false;
  };

  handleFocusOut = () => {
    if (document.activeElement !== this) {
      this.open = false;
    }
  };

  handleClickOutside = (e: MouseEvent) => {
    if ((e.target! as HTMLElement) !== this) {
      this.open = false;
      document.onclick = null;
    }
  };
}
