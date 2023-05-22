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

//TODO: add functionality to receive array of screen sizes to map to object in controller state
export class MobileController implements ReactiveController {
  isMobile = false;
  host: ReactiveControllerHost;
  mobileBreakpoint: string;

  constructor(host: ReactiveControllerHost, mobileBreakpoint = 'md') {
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
      // eslint-disable-next-line
      // @ts-ignore
      defaultScreenSizes[this.mobileBreakpoint]
    );
    if (window.innerWidth < mobileScreen) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.host.requestUpdate();
  };

  formatScreenSize = (screen: string): number => {
    return parseInt(screen.slice(0, -2));
  };
}
