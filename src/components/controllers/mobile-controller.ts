import { ReactiveControllerHost, ReactiveController } from 'lit';
import tailwindThemeConfig from '../../resolved-tailwind-config';
//TODO: add functionality to receive array of screen sizes to map to object in controller state
export class MobileController implements ReactiveController {
  isMobile = false;
  host: ReactiveControllerHost;

  constructor(host: ReactiveControllerHost) {
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
    const tailwindMdScreen = this.formatScreenSize(
      tailwindThemeConfig.screens.md
    );
    if (window.innerWidth <= tailwindMdScreen) {
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
