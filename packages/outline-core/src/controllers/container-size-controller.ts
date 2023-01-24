import { ReactiveControllerHost, ReactiveController } from 'lit';
import { defaultScreenSizes } from '@phase2/outline-config';

/**
 * Container size lookup, ordered small to large.
 *
 * We are using screen sizes to avoid making additional size groups.
 */
export const containerSizeMap = new Map(
  (
    Object.entries(defaultScreenSizes).map(([container, sizeString]) => {
      return [container, parseInt(sizeString.slice(0, -2))];
    }) as [string, number][]
  ).sort(([, sizeA], [, sizeB]) => {
    return sizeA - sizeB;
  })
);

/**
 * Can be used to get the container size of the element. Useful if we want to display components differently based on container size rather than the screen size, such as with different sized columns.
 *
 * This attempts to fit the mobile first pattern.
 *
 * Will set a `container-size-??` attributes on the component that indicate if the container is at least that size.
 *
 * Example: `@screen md` translates to `container-size-xs container-size-sm container-size-md`.
 */
export class ContainerSizeController implements ReactiveController {
  containerSizes: string[] = [];

  host: ReactiveControllerHost;

  resizeObserver: ResizeObserver;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.host.addController(this);

    this.handleResize();
  }

  hostConnected() {
    this.resizeObserver = new ResizeObserver(this.handleResize);

    this.resizeObserver.observe(document.querySelector('body') as HTMLElement);
  }

  hostDisconnected() {
    this.resizeObserver.disconnect();
  }

  handleResize = () => {
    const containerSizesPreUpdate = this.containerSizes;

    const containerWidth =
      (this.host as unknown as HTMLElement).parentElement?.clientWidth ?? 0;

    this.containerSizes = Array.from(containerSizeMap)
      .filter(([, size]) => containerWidth >= size)
      .map(([container]) => container);

    // Since this is mobile first and we just add more sizes as we get larger, the length will tell us if we have the same size.
    if (this.containerSizes.length !== containerSizesPreUpdate.length) {
      Array.from(containerSizeMap).forEach(([containerSize]) => {
        if (this.containerSizes.includes(containerSize)) {
          (this.host as unknown as HTMLElement).setAttribute(
            `container-size-${containerSize}`,
            'true'
          );
        }

        if (this.containerSizes.includes(containerSize) === false) {
          (this.host as unknown as HTMLElement).removeAttribute(
            `container-size-${containerSize}`
          );
        }
      });

      this.host.requestUpdate();
    }
  };
}
