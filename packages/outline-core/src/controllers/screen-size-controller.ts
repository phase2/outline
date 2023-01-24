import { ReactiveControllerHost, ReactiveController } from 'lit';
// @todo: Figure out why outline-config isn't working.
// import { defaultScreenSizes } from '@phase2/outline-config';
const defaultScreenSizes = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1440px',
  xxxl: '2160px',
};

/**
 * Screen size lookup, ordered small to large.
 *
 * Notice: If you get a linting issue, `Parsing error: Cannot read properties of undefined (reading 'map')`, you need to update your packages.
 * At least:
 * "@typescript-eslint/eslint-plugin": "^4.0.0",
 * "@typescript-eslint/parser": "^4.0.0",
 */
export const screenSizeMap = new Map(
  (
    Object.entries(defaultScreenSizes).map(([screen, sizeString]) => {
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
