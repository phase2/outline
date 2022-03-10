import { CSSResultGroup, LitElement, TemplateResult } from 'lit';
import { html, unsafeStatic } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { customElement } from 'lit/decorators.js';
import componentStyles from './outline-element.base.css.lit';
import outlineConfig from '../../../resolved-outline-config';

interface BubbledEvent extends Event {
  sourceEvent: Event;
  aggregatedPath: HTMLElement[];
  aggregatedComposedPath: () => HTMLElement[];
  path?: HTMLElement[];
}

@customElement('outline-element')
export class OutlineElement extends LitElement {
  static styles: CSSResultGroup = [componentStyles];

  connectedCallback() {
    super.connectedCallback();

    this.addBubbledEventHandlers();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  /**
   * Bubble events that are not `composed`, but that we want to view in parent DOM(s).
   *
   * Some events like `submit` do not reach outside of the shadow DOM. These have their `composed` property set to `false`.
   *
   * We want to redispatch these events so they can travel up the tree and be used by things like Google Tag Manager.
   *
   * Limitations:
   * - Some properties are different such as `event.composedPath()`. An attempt was made to make the original event and these properties / methods available as replacements.
   *
   * The original source event is available at `event.sourceEvent`. You can interact with this event and do things like `preventDefault()` as needed.
   * See See https://stackoverflow.com/a/67882470 for some discussion.
   *
   * The aggregated composed path is available with `event.aggregatedComposedPath()`. This is a replacement for `event.composedPath()`.
   */
  addBubbledEventHandlers() {
    outlineConfig.bubbledEvents.forEach(eventName => {
      this.shadowRoot?.addEventListener(eventName, event => {
        // eslint-disable-next-line
        // @ts-ignore
        const eventForLightDOM: BubbledEvent = new event.constructor(
          event.type,
          event
        );

        eventForLightDOM.sourceEvent ??= event;

        eventForLightDOM.aggregatedPath ??= [];
        // eslint-disable-next-line
        // @ts-ignore
        if (event.path !== undefined) {
          eventForLightDOM.aggregatedPath = [
            ...eventForLightDOM.aggregatedPath,
            // eslint-disable-next-line
            // @ts-ignore
            ...event.path,
          ];
        }

        eventForLightDOM.aggregatedComposedPath = function () {
          return this.path !== undefined
            ? [...this.aggregatedPath, ...this.path]
            : [];
        };

        this.dispatchEvent(eventForLightDOM);
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
