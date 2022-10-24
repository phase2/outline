export { OutlineElement } from './src/outline-element/outline-element';

export {
  ContainerSizeController,
  defaultScreenSizes,
} from './src/controllers/container-size-controller';
export { IsHoverableDeviceController } from './src/controllers/is-hoverable-device-controller';
export { LinkedBlockController } from './src/controllers/linked-block-controller';
export { MobileController } from './src/controllers/mobile-controller';
export { ScreenSizeController } from './src/controllers/screen-size-controller';
export { SlotController } from './src/controllers/slot-controller';

export const defaultColorSets = {
  sets: ['outline', 'primary', 'secondary', 'tertiary', 'neutral'],
};

export const defaultIconConfig = {
  libraries: {
    bootstrap: true,
    boxicons: true,
    fontawesome: true,
    heroicons: true,
    iconoir: true,
    ionicons: true,
    jam: true,
    lucide: true,
    material: true,
    remix: true,
    unicons: true,
  },
  defaults: {
    library: 'bootstrap',
    size: '16px',
    icon: 'chevron-right',
  },
};
