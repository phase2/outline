import { OutlineCalendarLinkDropdown } from '../outline-calendar-link-dropdown';
import { assert, fixture, html } from '@open-wc/testing';

describe('outline-calendar-link-dropdown', () => {
  it('is defined', () => {
    const el = document.createElement('outline-calendar-link-dropdown');
    assert.instanceOf(el, OutlineCalendarLinkDropdown);
  });

  it('renders with default values', async () => {
    const el = await fixture(
      html`<outline-calendar-link-dropdown></outline-calendar-link-dropdown>`
    );
    assert.shadowDom.equal(
      el,
      `
      <div class="button-wrapper">
        <button
          class="dropdown-button"
        >
          Add to calendar
          <outline-icon
            size="16px"
            mobile-size="16px"
          ></outline-icon>
        </button>
      </div>
      <div class="links-wrapper">
        <ul
        class="dropdown-calendar-links"
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
              <a title="Add to Apple iCal">Apple</a>
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
                target="_blank"
                title="Add to Outlook Calendar"
                >Outlook</a
              >
              <p>(online)</p>
            </span>
          </li>
        </ul>
      </div>
    `
    );
  });
});
