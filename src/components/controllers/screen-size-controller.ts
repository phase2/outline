import { ReactiveControllerHost, ReactiveController } from 'lit';
import tailwindThemeConfig from '../../resolved-tailwind-config';

/**
 * Screen size lookup, ordered small to large.
 */
export const screenSizeMap = new Map(
  (
    Object.entries(tailwindThemeConfig.screens).map(([screen, sizeString]) => {
      return [screen, parseInt(sizeString.slice(0, -2))];
    }) as [string, number][]
  ).sort(([, sizeA], [, sizeB]) => {
    return sizeA - sizeB;
  })
);

/**
 * Usage:
 * 
 * Import `screenSizeMap` and `ScreenSizeController`:
 * import {
 *  screenSizeMap,
 *  ScreenSizeController,
 * } from '../../controllers/screen-size-controller';
 * 
 * Add the property to your class:
 * 
 * // eslint-disable-next-line
 * // @ts-ignore
 * // We are using the controller to watch for screen size changes, but don't need to use it otherwise.
 * private _screenSizeController = new ScreenSizeController(this);
 * 
 * Set a variable as needed:
 * const isMobile = window.innerWidth < (screenSizeMap.get('lg') as number);
 */
export class ScreenSizeController implements ReactiveController {
  isMobile = false;

  screenSize = 'xxs';

  host: ReactiveControllerHost;

  resizeObserver: ResizeObserver;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
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
    const propertyValuesPreUpdate = [
      ['isMobile', this.isMobile],
      ['screenSize', this.screenSize],
    ] as [keyof ScreenSizeController, boolean | string][];

    this.isMobile = window.innerWidth <= (screenSizeMap.get('sm') as number);

    this.screenSize = Array.from(screenSizeMap).reduce(
      (previousValue, [screen, size]) => {
        return window.innerWidth >= size ? screen : previousValue;
      },
      'xxs'
    );

    if (
      propertyValuesPreUpdate
        .map(([propertyName, preUpdateValue]) => {
          return this[propertyName] !== preUpdateValue;
        })
        .reduce((previous, current) => previous || current)
    ) {
      this.host.requestUpdate();
    }
  };
}
