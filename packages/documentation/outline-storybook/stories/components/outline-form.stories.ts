/* eslint-disable @typescript-eslint/no-explicit-any */
import { html, TemplateResult } from 'lit';
import '@phase2/outline-form';

export default {
  title: 'Content/Form',
  component: 'outline-form',
  parameters: {},
  args: {},
};

export const StyledInputs = (): TemplateResult => html`
  <outline-form>
    <form
      action="#"
      method="get"
      accept-charset="UTF-8"
    >
      <div class="form-item form-item-title">
        <label for="title-3" class="font-body">Input label</label>
        <div class="form-item__description">
          This is a label description using a
          <code>'form-item__description'</code> class
        </div>
        <input
          type="text"
          id="title-3"
          name="title"
          value=""
          size="30"
          maxlength="128"
          class="form-text"
        />
      </div>

      <div class="form-item">
        <label for="field-example-0-value" class="font-body form-item__label"
          >Input label</label
        >
        <div class="form-textarea-wrapper">
          <textarea
            class="text-full form-textarea form-element"
            id="field-example-0-value"
            name="field_example[0][value]"
            rows="5"
            cols="60"
            placeholder=""
            spellcheck="false"
          ></textarea>
        </div>
      </div>

      <div class="form-item form-item-field-tags-target-id">
        <label for="field-tags-target-id-1" class="font-body"
          >Select input label</label
        >
        <select
          id="field-tags-target-id-1"
          name="field_tags_target_id"
          class="form-select"
        >
          <option value="All" selected="selected">Default text</option>
          <option value="1">Demo</option>
          <option value="3">Example</option>
          <option value="2">Test</option>
        </select>
      </div>

      <div class="form-item form-type--boolean">
        <input
          type="checkbox"
          id="published"
          name="published"
          value="1"
          checked="checked"
          class="form-checkbox"
        />
        <label for="published" class="font-body option">Published</label>
      </div>

      <fieldset
        data-drupal-selector="display-as"
        id="display-as--wrapper"
        class="radios--wrapper fieldgroup form-composite form-item form-wrapper"
        role="radiogroup"
        aria-labelledby="display-as--wrapper-legend"
      >
        <legend id="display-as--wrapper-legend">
          <span class="fieldset-legend">Optional radio grouping heading</span>
        </legend>
        <div class="fieldset-wrapper">
          <div id="display-as" class="webform-options-display-one-column">
            <div class="form-item">
              <input
                type="radio"
                id="display-as-0-1"
                name="display_as"
                value="1"
                class="form-radio"
              />
              <label for="display-as-0-1" class="font-body option"
                >Default label</label
              >
            </div>
            <div class="form-item">
              <input
                type="radio"
                id="display-as-0-2"
                name="display_as"
                value="2"
                checked="checked"
                class="form-radio"
              />
              <label for="display-as-0-2" class="font-body option"
                >Default label</label
              >
            </div>
          </div>
        </div>
      </fieldset>

      <div class="form-actions form-wrapper" id="actions">
        <input
          type="submit"
          id="submit-events"
          value="Search for Events"
          class="button form-submit"
        />
        <input
          type="submit"
          id="reset"
          name="op"
          value="Clear Filters"
          class="button form-submit secondary"
        />
      </div>
    </form>
  </outline-form>
`;

export const StyledInvalidInputs = (): TemplateResult => html`
  <outline-form>
    <form
      class="views-exposed-form"
      action="/articles"
      method="get"
      id="views-exposed-form-last-articles-page-1"
      accept-charset="UTF-8"
    >
      <div class="form-item form-item-title">
        <label for="title" class="font-body">Error Input</label>
        <input
          type="text"
          id="title"
          name="title"
          value=""
          size="30"
          maxlength="128"
          class="form-text error"
        />
        <div class="error-message">Error message text</div>
      </div>
      <div class="form-item">
        <label for="field-example-0-value-1" class="font-body form-item__label"
          >Input label</label
        >
        <div class="form-textarea-wrapper">
          <textarea
            class="text-full form-textarea form-element error"
            id="field-example-0-value-1"
            name="field_example[0][value]"
            rows="5"
            cols="60"
            placeholder=""
            spellcheck="false"
          ></textarea>
        </div>
      </div>

      <div class="form-item form-item-field-tags-target-id">
        <label for="field-tags-target-id-2" class="font-body"
          >Select input label</label
        >
        <select
          id="field-tags-target-id-2"
          name="field_tags_target_id"
          class="form-select error"
        >
          <option value="All" selected="selected">Default text</option>
          <option value="1">Demo</option>
          <option value="3">Example</option>
          <option value="2">Test</option>
        </select>
      </div>

      <div class="form-item form-type--boolean">
        <input
          type="checkbox"
          id="published-1"
          name="published"
          value="1"
          checked="checked"
          class="form-checkbox error"
        />
        <label for="published-1" class="font-body option">Published</label>
      </div>

      <fieldset
        data-drupal-selector="display-as-1"
        id="display-as--wrapper-1"
        class="radios--wrapper fieldgroup form-composite form-item form-wrapper"
        role="radiogroup"
        aria-labelledby="display-as--wrapper-legend-1"
      >
        <legend id="display-as--wrapper-legend-1">
          <span class="fieldset-legend">Optional radio grouping heading</span>
        </legend>
        <div class="fieldset-wrapper">
          <div id="display-as-1" class="webform-options-display-one-column">
            <div class="form-item">
              <input
                type="radio"
                id="display-as-1-1"
                name="display_as"
                value="1"
                class="form-radio error"
              />
              <label for="display-as-1-1" class="font-body option"
                >Default label</label
              >
            </div>
            <div class="form-item">
              <input
                type="radio"
                id="display-as-1-2"
                name="display_as"
                value="2"
                checked="checked"
                class="form-radio error"
              />
              <label for="display-as-1-2" class="font-body option"
                >Default label</label
              >
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </outline-form>
`;

export const StyledDisabledInputs = (): TemplateResult => html`
  <outline-form>
    <form
      class="views-exposed-form"
      action="/articles"
      method="get"
      id="views-exposed-form-last-articles-page-2"
      accept-charset="UTF-8"
    >
      <div class="form-item form-item-title">
        <label for="title-2" class="font-body">Error Input</label>
        <input
          type="text"
          id="title-2"
          name="title"
          value=""
          size="30"
          maxlength="128"
          class="form-text"
          disabled=""
        />
      </div>
      <div class="form-item">
        <label for="field-example-0-value-2" class="font-body form-item__label"
          >Input label</label
        >
        <div class="form-textarea-wrapper">
          <textarea
            class="text-full form-textarea form-element"
            id="field-example-0-value-2"
            name="field_example[0][value]"
            rows="5"
            cols="60"
            placeholder=""
            spellcheck="false"
            disabled=""
          ></textarea>
        </div>
      </div>

      <div class="form-item form-item-field-tags-target-id">
        <label for="field-tags-target-id-3" class="font-body"
          >Select input label</label
        >
        <select
          id="field-tags-target-id-3"
          name="field_tags_target_id"
          class="form-select"
          disabled=""
        >
          <option value="All" selected="selected">Default text</option>
          <option value="1">Demo</option>
          <option value="3">Example</option>
          <option value="2">Test</option>
        </select>
      </div>

      <div class="form-item form-type--boolean">
        <input
          type="checkbox"
          id="published-2"
          name="published"
          value="1"
          checked="checked"
          class="form-checkbox"
          disabled=""
        />
        <label for="published-2" class="font-body option">Published</label>
      </div>

      <fieldset
        data-drupal-selector="display-as-2"
        id="display-as--wrapper-2"
        class="radios--wrapper fieldgroup form-item"
        role="radiogroup"
        aria-labelledby="display-as--wrapper-legend-2"
      >
        <legend id="display-as--wrapper-legend-2">
          <span class="fieldset-legend">Optional radio grouping heading</span>
        </legend>
        <div class="fieldset-wrapper">
          <div id="display-as-2" class="webform-options-display-one-column">
            <div class="form-item">
              <input
                type="radio"
                id="display-as-2-1"
                name="display_as"
                value="1"
                class="form-radio"
                disabled=""
              />
              <label for="display-as-2-1" class="font-body option"
                >Default label</label
              >
            </div>
            <div class="form-item">
              <input
                type="radio"
                id="display-as-2-2"
                name="display_as"
                value="2"
                checked="checked"
                class="form-radio"
                disabled=""
              />
              <label for="display-as-2-2" class="font-body option"
                >Default label</label
              >
            </div>
          </div>
        </div>
      </fieldset>

      <div class="form-actions form-wrapper" id="actions-2">
        <input
          type="submit"
          id="submit-events-2"
          value="Search for Events"
          class="button form-submit"
          disabled=""
        />
        <input
          type="submit"
          id="reset-2"
          name="op"
          value="Clear Filters"
          class="button form-submit secondary"
          disabled=""
        />
      </div>
    </form>
  </outline-form>
`;

export const InlineForm = (): TemplateResult => html`
  <p class="md-4">Styled form must have the <code>'inline'</code> class.</p>
  <br />

  <outline-form>
    <form
      action="/search"
      method="get"
      id="views-exposed-form-search-full-search"
      accept-charset="UTF-8"
      class="inline"
    >
      <div class="form-item form-item-search-api-fulltext">
        <label for="search-api-fulltext" class="font-body">Search</label>
        <input
          placeholder="Eg. Allergist in Tomah..."
          type="text"
          id="search-api-fulltext"
          name="search_api_fulltext"
          value=""
          size="30"
          maxlength="128"
          class="form-text"
        />
      </div>

      <div class="form-actions form-wrapper" id="actions-3">
        <input
          type="submit"
          id="submit-search"
          value="Search for care"
          class="button form-submit"
        />
      </div>
    </form>
  </outline-form>
`;

export const ExposedForm = (): TemplateResult => html`
  <p class="mb-4">Styled form must have <code>'exposed-form'</code> class.</p>

  <outline-form>
    <form
      class="views-exposed-form exposed-form"
      action="/events"
      method="get"
      id="views-exposed-form-events-page-1"
      accept-charset="UTF-8"
    >
      <div class="form-item form-item--order-first">
        <label for="combine" class="font-body">Search events by keyword</label>

        <input
          type="text"
          id="combine"
          name="combine"
          value="sdas"
          size="30"
          maxlength="128"
          class="form-text"
          placeholder="Eg. Support Groups..."
        />
      </div>

      <div class="form-item">
        <label for="type-target-id" class="font-body">Category</label>

        <select
          id="type-target-id"
          name="field_event_type_target_id"
          class="form-select"
        >
          <option value="All" selected="selected">Select Category</option>
        </select>
      </div>

      <div class="form-item">
        <label for="field-services-target-id" class="font-body"
          >Specialty</label
        >

        <select
          id="field-services-target-id"
          name="field_services_target_id"
          class="form-select"
        >
          <option value="All" selected="selected">Select Specialty</option>
        </select>
      </div>

      <div class="form-item">
        <label for="field-locations-target-id" class="font-body"
          >Location</label
        >

        <select
          id="field-locations-target-id"
          name="field_locations_target_id"
          class="form-select"
        >
          <option value="All" selected="selected">Select Location</option>
        </select>
      </div>

      <div class="form-item form-item-field-event-dates-value-1">
        <label for="dates-value-1" class="font-body">Event Dates - Start</label>

        <input
          type="text"
          id="dates-value-1"
          name="field_event_dates_value_1"
          value=""
          size="30"
          maxlength="128"
          class="form-text"
          placeholder="Select Dates"
        />
      </div>

      <div class="form-actions" id="actions-4">
        <input
          type="submit"
          id="submit-events-4"
          value="Search for Events"
          class="button form-submit"
        />

        <input
          type="submit"
          id="reset-4"
          name="op"
          value="Clear Filters"
          class="button form-submit secondary"
        />
      </div>
    </form>
  </outline-form>
`;

export const MiscellaneousInputs = (): TemplateResult => html`
  <outline-form>
    <form
      class="views-exposed-form"
      action="/articles"
      method="get"
      id="views-exposed-form"
      accept-charset="UTF-8"
    >
      <div class="form-content">
        <div class="form-item">
          <label for="file">File Input</label>
          <input type="file" name="file" id="file" />
        </div>
        <div class="form-item">
          <label for="cowbell">Range</label>
          <input
            type="range"
            id="cowbell"
            name="cowbell"
            min="0"
            max="100"
            value="90"
            step="10"
          />
        </div>
        <div class="form-item">
          <label for="number">Number Input</label>
          <input type="number" id="number" name="number" min="10" max="100" />
        </div>
        <div class="form-item">
          <label for="date">Date Input</label>
          <input type="date" name="date" id="date" />
        </div>
        <div class="form-item">
          <label for="time">Time Input</label>
          <input type="time" name="time" id="time" />
        </div>
        <div class="form-item">
          <label for="search">Search Input</label>
          <input type="search" name="search" id="search" />
        </div>
        <div class="form-item">
          <label for="color">Color Input</label>
          <input type="color" name="color" id="color" />
        </div>
      </div>
    </form>
  </outline-form>
`;

export const EmbeddedComponents = (): TemplateResult => html`
  <outline-form>
    <form
      class="views-exposed-form"
      action="/articles"
      method="get"
      id="views-exposed-form-2"
      accept-charset="UTF-8"
    >
      <h2>HTML Header styles</h2>
      <p>This section tests html markup within a form</p>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3 with a <a href="#">Link</a></li>
      </ul>
    </form>
  </outline-form>
`;
