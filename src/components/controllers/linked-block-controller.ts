import { ReactiveController } from 'lit';
import { OutlineElement } from '../base/outline-element/outline-element';

interface OutlineElementWithHref extends OutlineElement {
  href?: string;
}

/**
 * Support accessible linked blocks.
 *
 * See https://inclusive-components.design/cards/.
 *
 * Blocks can function as a single clickable object while supporting good screen reader features.
 * - The link is focusable and shows in the accessibility tree with a short description.
 * - Each of the pieces of the component are available individually if not cosmetic.
 *
 * Supports click or drag to select text.
 */
export class LinkedBlockController implements ReactiveController {
  host: OutlineElementWithHref;

  // This needs to be a method so that we can target elements that don't exist until the component is done rendering.
  private _getLink: () => HTMLElement | undefined;

  // Try and support clicking and selecting text.
  private _lastMouseDownTimestamp = 0;

  constructor(
    host: OutlineElementWithHref,
    getLink: () => HTMLElement | undefined
  ) {
    this.host = host;
    this.host.addController(this);

    this._getLink = getLink;

    // Bind our methods so that `this` doesn't change depending on how the methods are called.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#this_in_classes.
    this.isLinked = this.isLinked.bind(this);
  }

  hostConnected() {
    if (this.isLinked()) {
      this._handleClicks();
      this._handleHover();
      this._handleFocus();
    }
  }

  isLinked(): boolean {
    return this.host.href !== undefined && this.host.href.length > 0;
  }

  private _handleClicks(): void {
    this.host.addEventListener('mousedown', () => {
      this._lastMouseDownTimestamp = Date.now();
    });

    this.host.addEventListener('mouseup', (event: Event) => {
      // First element in the event's composedPath is the element returned by this._getLink(),
      // but the event.target is the shadow host element, even when the click event is triggered
      // programmatically on this._getLink().
      if (
        event.composedPath()[0] !== this._getLink() &&
        this._isClickNotDrag()
      ) {
        event.stopPropagation();

        this._getLink()?.dispatchEvent(new Event('mousedown'));
        this._getLink()?.dispatchEvent(new Event('mouseup'));
      }
    });

    this.host.addEventListener('click', (event: Event) => {
      // First element in the event's composedPath is the element returned by this._getLink(),
      // but the event.target is the shadow host element, even when the click event is triggered
      // programmatically on this._getLink().
      if (
        event.composedPath()[0] !== this._getLink() &&
        this._isClickNotDrag()
      ) {
        event.stopPropagation();

        // Could only get `click` to trigger `a` elements, but it doesn't trigger the `mousedown` and `mouseup` events for nested elements.
        this._getLink()?.click();
      }
    });
  }

  private _isClickNotDrag(): boolean {
    return Date.now() - this._lastMouseDownTimestamp < 200;
  }

  private _handleHover(): void {
    const buttons = this.host.querySelectorAll('labcoat-button');

    this.host.addEventListener('mouseover', () => {
      buttons.forEach(button => {
        button.classList.add('state--hover');
      });
    });

    this.host.addEventListener('mouseout', () => {
      buttons.forEach(button => {
        button.classList.remove('state--hover');
      });
    });
  }

  private _handleFocus(): void {
    const buttons = this.host.querySelectorAll('labcoat-button');

    this.host.addEventListener('focus', () => {
      buttons.forEach(button => {
        button.classList.add('state--focus');
      });
    });

    this.host.addEventListener('blur', () => {
      buttons.forEach(button => {
        button.classList.remove('state--focus');
      });
    });
  }
}
