import outline from '../../resolved-outline-config';
import { ReactiveControllerHost, ReactiveController } from 'lit';
// @todo - add functionality to pass in multiple screen widths
type ScreenSize = typeof outline.screens;
type Breakpoint = keyof ScreenSize;
export class BreakpointController implements ReactiveController {
  isBreakpoint = false;
  host: ReactiveControllerHost;
  mobileBreakpoint: Breakpoint;

  constructor(
    host: ReactiveControllerHost,
    mobileBreakpoint: Breakpoint = 'md'
  ) {
    this.mobileBreakpoint = mobileBreakpoint;
    (this.host = host).addController(this);
    this.handleResize();
  }

  hostConnected() {
    window.addEventListener('resize', this.handleResize);
  }

  hostDisconnected() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const mobileScreen = this.formatScreenSize(
      outline.screens[this.mobileBreakpoint]
    );
    if (window.innerWidth <= mobileScreen) {
      this.isBreakpoint = true;
    } else {
      this.isBreakpoint = false;
    }
    this.host.requestUpdate();
  };

  formatScreenSize = (screen: string): number => {
    return parseInt(screen.slice(0, -2));
  };
}
