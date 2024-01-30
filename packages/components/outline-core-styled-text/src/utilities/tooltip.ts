import { wrapLastWord } from './wrap-last-word';

/**
 * Updates link with title and href to have markup for tooltip.
 */
export function tooltipLink(el: HTMLElement) {
  // Check if the element contains an image
  if (el.querySelector('.outline-core-tooltip-popup') || !el.hasAttribute('title')) {
    return;
  }

  if (el.textContent) {
    const tooltipText = el.getAttribute('title');
    if (!tooltipText) {
      return;
    }

    const id: string = self.crypto.randomUUID
      ? `outline-core-tooltip-${self.crypto.randomUUID()}`
      : `outline-core-tooltip-${self.crypto
          .getRandomValues(new Uint32Array(3))
          .join('-')}`;

    if (el.getAttribute('href') == '#') {
      el.addEventListener('click', function (event) {
        event.preventDefault();
      });
    }
    // Wraps last word in a span.last-word element.
    // span.last-word is where the icon is added via pseudo
    wrapLastWord(el as HTMLElement);

    // Build out tooltip.
    const tooltipPopup = document.createElement('span');
    tooltipPopup.setAttribute('id', id);
    tooltipPopup.setAttribute('role', 'tooltip');
    tooltipPopup.classList.add('outline-core-tooltip-popup');
    tooltipPopup.classList.add('hidden');
    tooltipPopup.innerHTML = tooltipText;

    // Update link element.
    el.setAttribute('aria-describedby', id);
    el.removeAttribute('title');
    el.append(tooltipPopup);

    new Tooltip(el);
  }
}

export class Tooltip {
  container: HTMLElement;
  trigger: HTMLElement;
  tooltip: HTMLElement | null;
  tooltipPosition: string;
  globalEscapeBound: (event: KeyboardEvent) => void;
  globalPointerDownBound: (event: MouseEvent) => void;

  constructor(element: HTMLElement) {
    this.container = element;
    this.trigger = element;
    this.tooltip = element.querySelector('[role=tooltip]');
    this.tooltipPosition = this.getTooltipPosition();
    this.globalEscapeBound = this.globalEscape.bind(this);
    this.globalPointerDownBound = this.globalPointerDown.bind(this);
    this.initialiseClassList();
    this.bindEvents();
  }

  // Basic actions
  openTooltip() {
    this.showTooltip();
    this.checkBoundingBox();
    this.attachGlobalListener();
  }

  closeTooltip() {
    this.hideTooltip();
    this.resetBoundingBox();
    this.removeGlobalListener();
  }

  // Binding event listteners
  bindEvents() {
    // Events that trigger openTooltip()
    // Open on mouse hover
    this.container.addEventListener('mouseenter', this.openTooltip.bind(this));
    // Open when a touch is detected
    this.container.addEventListener('touchstart', this.openTooltip.bind(this));
    // Open when the trigger gets focus
    this.trigger.addEventListener('focus', this.openTooltip.bind(this));

    // Events that trigger closeTooltip()
    // Close when the mouse cursor leaves the trigger or tooltip area
    this.container.addEventListener('mouseleave', this.closeTooltip.bind(this));
    // Close when the trigger loses focus
    this.trigger.addEventListener('blur', this.closeTooltip.bind(this));
  }

  attachGlobalListener() {
    document.addEventListener('keydown', this.globalEscapeBound);
    document.addEventListener('pointerdown', this.globalPointerDownBound);
  }

  removeGlobalListener() {
    document.removeEventListener('keydown', this.globalEscapeBound);
    document.removeEventListener('pointerdown', this.globalPointerDownBound);
  }

  globalEscape(event: KeyboardEvent) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      this.closeTooltip();
    }
  }

  // Close the tooltip if the target is anything other than the components within the tooltip widget
  globalPointerDown(event: MouseEvent) {
    switch (event.target) {
      case this.container:
      case this.trigger:
      case this.tooltip:
        event.preventDefault();
        break;
      default:
        this.closeTooltip();
        this.trigger.blur();
    }
  }

  // Show or hide the tooltip
  showTooltip() {
    this.container.classList.add('tooltip-visible');
    if (this.tooltip) {
      this.tooltip.classList.remove('hidden');
    }
  }

  hideTooltip() {
    this.container.classList.remove('tooltip-visible');
    if (this.tooltip) {
      this.tooltip.classList.add('hidden');
    }
  }

  // Get the desired default position for the tooltip (defaults to 'bottom')
  getTooltipPosition() {
    const attribute = this.container.getAttribute('data-tooltip-position');
    let setting = 'top';

    if (attribute === 'bottom') {
      setting = attribute;
    }

    return setting;
  }

  // Set the default classes for tooltips based on this.getTooltipPosition()
  initialiseClassList() {
    switch (this.tooltipPosition) {
      case 'bottom':
        this.container.classList.add('bottom');
        break;

      default:
        this.container.classList.remove('bottom');
        break;
    }
  }

  // Calculate if the tooltip is within the viewport
  checkBoundingBox() {
    if (!this.tooltip) {
      return;
    }
    const bounds: DOMRect = this.tooltip.getBoundingClientRect();

    this.checkHorizontalBounding(bounds);
    this.checkVerticalBounding(bounds);
  }

  checkHorizontalBounding(bounds: DOMRect) {
    const windowWidth: number = window.innerWidth;

    // If the tooltip overlaps on both sides, throw an error
    if (bounds.right > windowWidth && bounds.left < 0) {
      throw new Error('Tooltip width too wide for the window');
    }

    // Check if the right side of the tooltip is beyond the right side of the viewport
    if (bounds.right > windowWidth) {
      this.moveTooltipLeft(bounds, windowWidth);
    }

    // Check if the left side of the tooltip is beyond the left side of the viewport
    if (bounds.left < 0) {
      this.moveTooltipRight(bounds);
    }
  }

  checkVerticalBounding(bounds: DOMRect) {
    const windowHeight = window.innerHeight;

    // If the tooltip overlaps on both sides, throw an error
    if (bounds.bottom > windowHeight && bounds.top < 0) {
      throw new Error('Tooltip height too high for the window');
    }

    // Check if the bottom of the tooltip is below the bottom of the viewport
    if (bounds.bottom > windowHeight) {
      this.moveTooltipUp();
    }

    // Check if the top of the tooltip is above the top of the viewport
    if (bounds.top < 0) {
      this.moveTooltipDown();
    }
  }

  // Move the tooltip so it fits within the viewport
  moveTooltipUp() {
    this.container.classList.remove('bottom');
  }

  moveTooltipRight(bounds: DOMRect) {
    if (!this.tooltip) {
      return;
    }
    const numToMove = Math.floor(bounds.width / 2);
    this.tooltip.style.left = `${numToMove}px`;
  }

  moveTooltipDown() {
    this.container.classList.add('bottom');
  }

  moveTooltipLeft(bounds: DOMRect, windowWidth: number) {
    if (!this.tooltip) {
      return;
    }

    const translateAmount =
      windowWidth - Math.round(bounds.right) - Math.round(bounds.width) / 1.6;
    this.tooltip.style.transform = `translateX(${translateAmount}px)`;
  }

  // Reset the changes made by the bounding box functions
  resetBoundingBox() {
    if (!this.tooltip) {
      return;
    }

    if (this.tooltip.style.left || this.tooltip.style.transform) {
      this.tooltip.style.left = '';
      this.tooltip.style.transform = '';
    }

    this.initialiseClassList();
  }
}
