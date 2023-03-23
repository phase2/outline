import { ReactiveControllerHost } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html, unsafeStatic } from 'lit/static-html.js';

/**
 * The SlotsController ReactiveController.
 *
 * This controller allows cloning slots into the shadow DOM,
 * by calling a function inside render() of the component.
 * Any changes in the light DOM trigger requestUpdate() and thus re-cloning
 * of the slots into the shadow DOM.
 * The controller dispatches any events that were specified when they are triggered
 * in the cloned slots in shadow DOM to the equivalent light DOM slot.
 *
 * @param host The host element
 */

export class SlotsController {
  host: ReactiveControllerHost & Element;
  /**
   * Watches for changes to components childlist and clones nodes to shadow dom.
   */
  _mutationObserver = new MutationObserver(this._handleMutation.bind(this));

  constructor(host: ReactiveControllerHost & Element) {
    // Store a reference to the host
    this.host = host;
    // Register for lifecycle updates
    host.addController(this);
  }

  hostConnected(): void {}

  /**
   * MutationObserver callback.
   */
  _handleMutation() {
    // disconnect observer before making updates (to avoid infinite loop when adding comment)
    this._mutationObserver.disconnect();
    this.host.requestUpdate();
  }

  /**
   * Get slotted nodes by slot name.
   * @param {string | null} slotName - The slot name to search for.
   * @returns {Array} An array of slotted nodes.
   */
  getSlottedNodes(slotName: string | null = null) {
    const defaultSlot = slotName === '' || slotName === null;
    let slottedNodes = [];

    if (defaultSlot) {
      slottedNodes = Array.from(this.host.childNodes).filter(
        node => this.isDefaultSlotText(node) || this.isDefaultSlotElement(node)
      );
    } else {
      slottedNodes = Array.from(
        this.host.querySelectorAll(`[slot=${slotName}]`)
      );
    }

    if (slottedNodes.length) {
      return slottedNodes;
    } else {
      return false;
    }
  }

  /**
   * Check if a slot exists.
   * @param {string | null} slotName - The slot name to check for.
   * @returns {boolean} True if the slot exists, false otherwise.
   */
  exist(slotName: string | null = null) {
    return Boolean(this.getSlottedNodes(slotName));
  }

  /**
   * Check if a node is a default slot text.
   * @param {Node} node - The node to check.
   * @returns {boolean} True if the node is a default slot text, false otherwise.
   */
  isDefaultSlotText(node: Node) {
    return node.nodeType === node.TEXT_NODE && node.textContent!.trim() !== '';
  }

  /**
   * Check if a node is a default slot element.
   * @param {Node} node - The node to check.
   * @returns {boolean} True if the node is a default slot element, false otherwise.
   */
  isDefaultSlotElement(node: Node) {
    return (
      node.nodeType === node.ELEMENT_NODE &&
      (node as HTMLElement).getAttribute('slot') === null
    );
  }

  /**
   * Add annotations to a slot.
   * @param {string} slotName - The slot name.
   * @param {ChildNode} lightDomSlot - The light DOM slot.
   * @returns {HTMLElement} The annotated slot.
   */
  addAnnotations(slotName: string, lightDomSlot: ChildNode) {
    // Create cloned-node element
    const clonedSlot = lightDomSlot.cloneNode(true) as HTMLElement;

    // Add a comment above the slot in light DOM, to indicate it was cloned to shadow DOM
    const annotationComment =
      `slotsController cloned this ` +
      (slotName === '' ? 'default-slot' : `named-slot '${slotName}'`) +
      ` into the shadow DOM`;

    // Add the comment only once, avoid duplicate comments when requestUpdate() runs
    // Check if a light DOM comment already exist
    const commentExist = Array.from(this.host.childNodes).some(
      node => node.nodeValue === annotationComment
    );
    if (!commentExist) {
      lightDomSlot.before(document.createComment(annotationComment));
    }

    if (slotName !== '') {
      clonedSlot.setAttribute('cloned-slot-type', 'named-slot');
      clonedSlot.setAttribute('cloned-slot-name', slotName);
      clonedSlot.removeAttribute('slot');
      return clonedSlot;
    }

    if (this.isDefaultSlotElement(lightDomSlot)) {
      clonedSlot.setAttribute('cloned-slot-type', 'default-slot--element');
      clonedSlot.setAttribute('cloned-slot-name', 'default');
      clonedSlot.removeAttribute('slot');
      return clonedSlot;
    } else {
      // Insert the text-only default slot into a node element
      const slotWrapper = document.createElement('cloned-slot');
      clonedSlot.parentNode?.insertBefore(slotWrapper, clonedSlot);
      slotWrapper.appendChild(clonedSlot);
      slotWrapper.setAttribute('cloned-slot-type', 'default-slot--text');
      slotWrapper.setAttribute('cloned-slot-name', 'default');
      return slotWrapper;
    }
  }

  /**
   * Dispatch events from cloned slots in shadow DOM to the equivalent light DOM slot.
   * @param {string[]} eventsToDispatch - The events to dispatch.
   * @param {HTMLElement} clonedSlot - The cloned slot.
   *
   * As there is no way (aside from devtools) to determine what events are occurring in the DOM,
   * what we can do is simulate an event that originated in the shadow DOM.
   * Therefore, clicking on an element in a slotted shadow DOM would simulate a click event
   * on a parallel element in a slotted light DOM.
   *
   * When an event triggers -
   * Step 1 -
   * In the Shadow DOM, identify the path that leads to the element that triggered the event.
   *
   * Step 2 -
   * In the Light DOM, find the equivalent path to the one found in step 1.
   *
   * Step 3 -
   * Dispatch the event to the light DOM, following the same path that was found in step 2.
   *
   * Step 4 -
   * Wait for the component to refresh (by using timeout 0), then focus is reset to the component that hosts the element.
   *
   * Step 5 -
   * Focus the browser on the original element in Shadow DOM that triggered the event found in step 1
   */
  dispatchEventsToLightDom(
    eventsToDispatch: string[],
    clonedSlot: HTMLElement
  ) {
    // Dispatch events from shadow DOM to original node in light DOM
    eventsToDispatch.forEach(eventType => {
      clonedSlot.addEventListener(eventType, event => {
        if (event.target) {
          const elementPathInShadowDom = this.getElementPathInShadowDom(event);
          const elementPathInLightDom = this.getElementPathInLightDom(
            elementPathInShadowDom
          );

          // Dispatch same event to element in Light DOM
          if (elementPathInLightDom) {
            elementPathInLightDom.dispatchEvent(new Event(eventType));
          }

          // dispatchEvent focuses on the main component,
          // use setTimeout 0 to allow for display update to happen,
          // then restore the last focused element.
          setTimeout(() => {
            const originElementFocus = this.getElementPathInLightDom(
              elementPathInShadowDom,
              true
            ) as HTMLElement;
            if (originElementFocus) {
              originElementFocus.focus();
            }
          }, 0);
        }
      });
    });
  }

  /**
   * Render a slot in the shadow DOM.
   * @param {string} [slotName=''] - The slot name.
   * @param {string[]} [eventsToDispatch=[]] - The events to dispatch.
   * @param {boolean} [addAnnotations=true] - Whether to add annotations to the slot.
   * @returns {Array | null} An array of cloned slots or null if no slots found.
   */
  renderInShadow(
    slotName = '',
    eventsToDispatch = [] as string[],
    addAnnotations = true
  ) {
    // Cloning node allow us to re-use slots, as well a keep a copy in the light DOM.
    const slots = this.getSlottedNodes(slotName);

    if (slots) {
      const allClonedSlots = slots.map(slot => {
        const lightDomSlot = slot;
        let clonedSlot: HTMLElement;

        if (addAnnotations) {
          // Add additional annotations - cloned-slot attributes and a comment in light DOM
          clonedSlot = this.addAnnotations(slotName, lightDomSlot);
        } else {
          // Clone the slot into the shadow DOM as is with no annotations
          clonedSlot = lightDomSlot.cloneNode(true) as HTMLElement;
        }

        this.dispatchEventsToLightDom(eventsToDispatch, clonedSlot);

        return clonedSlot;
      });

      // Add mutation observer to watch for changes in the light DOM
      this._mutationObserver.observe(this.host, {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true,
      });
      return allClonedSlots;
    }
    return null;
  }

  /**
   * Get an array of CSS selectors that can be used to select the target of the event.
   * @param {Event} event - The event whose target we are trying to find.
   * @returns {Array} An array of CSS selectors that can be used to select the target of the event.
   */
  getElementPathInShadowDom(event: Event) {
    // Get the path of the event
    const path = event.composedPath() as HTMLElement[];

    // The selectors we will return
    const selectors = [];

    // Loop through the path until we find a shadow root
    let shadowFound = false;

    for (let i = 0; !shadowFound && i < path.length; i++) {
      const el = path[i];
      // If we find a shadow root, we are done
      if (el.nodeName === '#document-fragment') {
        shadowFound = true;
      } else {
        // Get a CSS selector for this element
        const selector = this.getSelectorForSingleElement(el);
        // If we found a selector, add it to our array
        if (selector) {
          selectors.push(selector);
        }
      }
    }

    // Return the selectors in the right order (we processed them in reverse)
    const reversedSelector = selectors.reverse();
    return reversedSelector;
  }

  /**
   * Get the class selector for a single element.
   * @param {HTMLElement} currentElement - The current element.
   * @returns {Object | null} The selector object or null if the element has no parent.
   */
  getSelectorForSingleElement(currentElement: HTMLElement) {
    // If the element has no parent element, it is the root element
    if (!currentElement.parentElement) {
      return null;
    }

    // Create a selector for the current element
    const currentSelectorClassName = Array.from(currentElement.classList).join(
      '.'
    );
    const currentSelector = `${currentElement.localName}${
      currentSelectorClassName !== '' ? '.' + currentSelectorClassName : ''
    }`;

    // Get all siblings of the current element
    const siblings = Array.from(
      currentElement.parentElement.querySelectorAll(currentSelector)
    );

    // Get the current element's index
    const currentIndex = siblings.indexOf(currentElement);

    // Create the final selector object
    const selector = {
      name: currentSelector,
      index: currentIndex,
    };
    return selector;
  }

  /**
   * Gets the targeted element from the event path.
   * @param {Array} elementPathInShadowDom - The path of the event.
   * @param {boolean} [isShadow=false] - Whether to search in the shadow DOM.
   * @returns {Element | null} The targeted element or null if not found.
   */
  getElementPathInLightDom(
    elementPathInShadowDom: {
      name: string;
      index: number;
    }[],
    isShadow = false
  ) {
    // start at the host element
    let El = isShadow
      ? (this.host.shadowRoot as Element | null)
      : (this.host as Element);

    if (!El) {
      return null;
    }

    // loop through the event path
    for (let i = 0; i < elementPathInShadowDom.length; i++) {
      // get the element with the name in the event path
      El = El.querySelectorAll(elementPathInShadowDom[i].name)[
        elementPathInShadowDom[i].index
      ];
    }
    // return the targeted element
    return El;
  }

  printExtraAttributes(extraAttributes: { name: string; value: string }[]) {
    return unsafeStatic(
      extraAttributes
        .map(attribute => `${attribute.name}=${attribute.value}`)
        .join(' ')
    );
  }

  /**
   * Conditionally render a slot with a wrapper and additional classes.
   * @param {string} slotName - The slot name.
   * @param {boolean} [renderInShadow=true] - Whether to render the slot in the shadow DOM.
   * @param {string | null} [classes=null] - Additional classes to add to the wrapper.
   * @param {string | null} [attributes=null] - Additional attributes to add to the wrapper.
   * @returns {TemplateResult | null} The rendered slot or null if the slot does not exist.
   */
  conditionalNGSlot(
    slotName: string,
    renderInShadow = true,
    extraClasses: string | null = null,
    extraAttributes: { name: string; value: string }[] = []
  ) {
    const defaultSlot = slotName === '' || slotName === null;
    const wrapperClasses = {
      'default-slot': defaultSlot,
      [`${slotName}`]: !defaultSlot,
      [`${extraClasses}`]: extraClasses ?? false,
    };

    if (this.exist(slotName)) {
      return html` <div
        class="${ifDefined(classMap(wrapperClasses))}"
        ${this.printExtraAttributes(extraAttributes)}
      >
        ${renderInShadow
          ? html`${this.renderInShadow(slotName)}`
          : html`<slot name=${slotName}></slot> `}
      </div>`;
    } else {
      return null;
    }
  }
}
