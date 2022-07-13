import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-element.base.css.lit';
import outlineConfig from '../../../resolved-outline-config';

interface BubbledEvent extends Event {
  sourceEvent?: Event;
  aggregatedPath?: EventTarget[];
  aggregatedComposedPath?: () => EventTarget[];
}

@customElement('outline-element')
export class OutlineElement extends LitElement {
  static styles: CSSResultGroup = [componentStyles];

  connectedCallback() {
    super.connectedCallback();

    this._addBubbledEventHandlers();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  /**
   * Bubble events that are not `composed`, but that we want to view in parent DOM(s).
   *
   * Some events like `submit` do not reach outside of the shadow DOM. These have their `composed` property set to `false`.
   *
   * We want to create a stand-in for these events that are composed and will bubble. This will allow tools like Google Tag Manger to view them.
   *
   * Limitations:
   * - The event type is `CustomEvent` instead of something like `SubmitEvent`.
   * - Some properties and methods produce different results such as `event.composedPath()`. An attempt was made to make the original event and these properties / methods available as replacements.
   * - An attempt is made to make all properties on the original source event readable on the custom event. This has had limited testing.
   *
   * The original source event is available at `event.sourceEvent`. You can interact with this event and do things like `preventDefault()` as needed.
   * See https://stackoverflow.com/a/67882470 for some discussion.
   *
   * The aggregated composed path is available with `event.aggregatedComposedPath()`. This is a replacement for `event.composedPath()`.
   */
  private _addBubbledEventHandlers() {
    outlineConfig.bubbledEvents.forEach(eventName => {
      this.shadowRoot?.addEventListener(eventName, event => {
        // Our custom events have a `sourceEvent` property and are composed events, so they will bubble naturally. We don't want to create more than one clone.
        if ('sourceEvent' in event === false) {
          const eventForLightDOM: BubbledEvent = new CustomEvent(event.type, {
            bubbles: true,
            composed: true,
          });

          eventForLightDOM.sourceEvent = event;

          eventForLightDOM.aggregatedComposedPath = function () {
            return [
              ...(this.sourceEvent?.composedPath() ?? []),
              ...this.composedPath(),
            ];
          };

          // Attempt to make all the extra properties readable on the new event.
          for (const property in event) {
            if (property in eventForLightDOM === false) {
              Object.defineProperty(eventForLightDOM, property, {
                get: function () {
                  return this.sourceEvent[property];
                },
              });
            }
          }

          this.dispatchEvent(eventForLightDOM);
        }
      });
    });
  }

  /**
   * Create a conditional slot.
   *
   * Generates the slot if there is slotted content. Includes a wrapper:
   * ```
   * <div id="header">
   *   <slot name="outline-element--header"></slot>
   * </div>
   * ```
   */
  protected _conditionalSlotTemplate({
    elementName,
    slotNameStub,
    wrapperElementType = 'div',
    ariaLabel = null,
  }: {
    elementName: string;
    slotNameStub: string;
    wrapperElementType?: string;
    ariaLabel?: string | null;
  }): TemplateResult | null {
    const namespacedSlotName = `${elementName}--${slotNameStub}`;

    return this.querySelector(`[slot="${namespacedSlotName}"]`) !== null
      ? html`<${unsafeStatic(
          wrapperElementType
        )} id="${slotNameStub}" aria-label="${ifDefined(ariaLabel)}">
          <slot
            name="${namespacedSlotName}"
            @slotchange="${() => this.requestUpdate()}"
          ></slot>
        </${unsafeStatic(wrapperElementType)}>`
      : null;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-element': OutlineElement;
  }
}
