import { ReactiveControllerHost, ReactiveController } from 'lit';

/**
 * Determine if the device supports hovering.
 *
 * Usually this means that there is a mouse.
 *
 * Will also refresh the component if this state changes, so that inspector interaction doesn't cause weird behavior.
 *
 * CSS rules should use: `@screen md` translates to `@media (any-hover: hover) and (any-pointer: fine) {}`.
 *
 * See https://css-irl.info/detecting-hover-capable-devices for details on approach.
 */
export class IsHoverableDeviceController implements ReactiveController {
  isHoverableDevice = false;

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
    const isHoverableDevicePreUpdate = this.isHoverableDevice;

    this.isHoverableDevice = window.matchMedia(
      '(any-hover: hover) and (any-pointer: fine)'
    ).matches;

    if (this.isHoverableDevice !== isHoverableDevicePreUpdate) {
      this.host.requestUpdate();
    }
  };
}
