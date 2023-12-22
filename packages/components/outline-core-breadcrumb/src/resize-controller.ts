//THIS IS A TEMP FILE, REPLACE WITH OFER'S PACKAGE WHEN READY

import { ReactiveControllerHost, ReactiveController } from 'lit';

/**
 * Debounces a function
 * @template T
 * @param {T} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @param {boolean} [immediate=false] - Whether to execute the function immediately
 * @returns {(...args: Parameters<T>) => void} - The debounced function
 */
export const debounce = <T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;

  return function debounced(...args: Parameters<T>) {
    const executeFunc = () => func(...args);

    clearTimeout(timeoutId);

    if (immediate && timeoutId === undefined) {
      executeFunc();
    }

    timeoutId = setTimeout(executeFunc, delay);
  };
};

export type breakpointsRangeType = {
  min: number;
  max: number;
};

/**
 * ResizeController class
 * @implements {ReactiveController}
 */
export class ResizeController implements ReactiveController {
  host: ReactiveControllerHost & HTMLElement;
  resizeObserver: ResizeObserver;
  elementToObserve: Element;
  options: {
    debounce: number;
    breakpoints: number[];
    elementToRerender: ReactiveControllerHost & HTMLElement;
  };
  currentComponentWidth: number;
  currentBreakpointRange: number;
  breakpointsRangeArray: breakpointsRangeType[] = [];

  /**
   * Create a constructor that takes a host and options
   * @param {ReactiveControllerHost & Element} host - The host element
   * @param {{debounce?: number; breakpoints?: number[]}} [options={}] - The options object
   */
  constructor(
    host: ReactiveControllerHost & HTMLElement,
    options: {
      debounce?: number;
      breakpoints?: number[];
      elementToRerender?: ReactiveControllerHost & HTMLElement;
    } = {}
  ) {
    const defaultOptions = {
      debounce: 200,
      breakpoints: [768],
      elementToRerender: host,
    };

    /**
     * Remove any undefined variables from options object
     */
    const filteredOptionsObject = Object.fromEntries(
      Object.entries(options).filter(([_, value]) => value !== undefined)
    );
    this.options = { ...defaultOptions, ...filteredOptionsObject };

    this.host = host;
    this.host.addController(this);

    this.initializeBreakpointsRangeType();
  }

  /**
   * Initialize the breakpoints range array
   *
   * The default breakpoints array ([768]) will create this breakpoints range array:
   * [{min: 0, max: 767}, {min: 768, max: 100000}]
   *
   * If custom breakpoints array is provided, (for example [768, 1200, 2000]) this breakpoints range array will be created:
   * [{min: 0, max: 767}, {min: 768, max: 1199}, {min: 1200, max: 1999}, {min: 2000, max: 100000}]
   *
   */
  initializeBreakpointsRangeType() {
    // This will allow create an additional breakpoint from the last custom breakpoint to 100000
    this.options.breakpoints?.push(100000);

    let minBreakpoint = 0;
    this.options.breakpoints?.forEach(breakpoint => {
      const newBreakpointRange = {
        min: minBreakpoint,
        max: breakpoint - 1,
      };
      minBreakpoint = breakpoint;
      this.breakpointsRangeArray.push(newBreakpointRange);
    });
  }

  /**
   * Called when the host element is connected to the DOM
   */
  hostConnected() {
    if (!this.host.style.display) {
      // adding `display: block` to :host of component
      this.host.style.setProperty(
        'display',
        'var(--style-added-by-resize-controller, block)'
      );
    }

    // Create a new ResizeObserver and pass in the function to be called when the element is resized
    this.resizeObserver = new ResizeObserver(
      (entries: ResizeObserverEntry[]) => {
        // Create a debounced version of the onElementResize function
        debounce(
          this.onElementResize.bind(this),
          this.options.debounce
        )(entries);
      }
    );

    // Get a reference to the element you want to observe
    this.elementToObserve = this.host;

    // Observe the element for size changes
    this.resizeObserver.observe(this.elementToObserve);
  }

  /**
   * Called when the host element is disconnected from the DOM
   */
  hostDisconnected() {
    this.resizeObserver.disconnect();
  }

  /**
   * Called when the element is resized
   * @param {ResizeObserverEntry[]} _entries - The ResizeObserverEntry array
   */
  onElementResize(_entries: ResizeObserverEntry[]) {
    this.currentComponentWidth = _entries[0].contentRect.width;

    // skip if width is not yet set
    if (this.currentComponentWidth) {
      this.calculateNewBreakpointRange();
    } else if (this.currentComponentWidth === 0) {
      // eslint-disable-next-line no-console
      console.warn(
        `resize-controller: No width detected in <${this.host.localName}>. Please confirm it has display: block`
      );
    }
  }

  /**
   * Calculate the new breakpoint based on the current width
   */
  calculateNewBreakpointRange() {
    let newBreakpointRange = this.currentBreakpointRange;

    this.breakpointsRangeArray.forEach((breakpoint, index) => {
      if (
        this.currentComponentWidth >= breakpoint.min &&
        this.currentComponentWidth <= breakpoint.max
      ) {
        newBreakpointRange = index;
      }
    });

    if (newBreakpointRange !== this.currentBreakpointRange) {
      this.currentBreakpointRange = newBreakpointRange;
      this.options.elementToRerender.requestUpdate();
    }
  }
}