export { OutlineElement } from './src/outline-element/outline-element';

export { ContainerSizeController } from './src/controllers/container-size-controller';
export { IsHoverableDeviceController } from './src/controllers/is-hoverable-device-controller';
export { LinkedBlockController } from './src/controllers/linked-block-controller';
export { MobileController } from './src/controllers/mobile-controller';
export { ScreenSizeController } from './src/controllers/screen-size-controller';
export { SlotsController } from './src/controllers/slots-controller';
export { LightDomStyles } from './src/controllers/light-dom-styles';
export { animateTo } from './src/internal/animate';
export { emit, waitForEvent } from './src/internal/event';
export { watch } from './src/internal/watch';
export { scrollIntoView } from './src/internal/scroll';
export { getOffset } from './src/internal/offset';

export type {
  Size,
  VerticalAlignment,
  HorizontalAlignment,
  Orientation,
  TextInput,
  LinkType,
} from './src/utils/types';
export {
  format,
  extractPx,
  argTypeSlotContent,
  argTypeOrientation,
  argTypeColSpan,
  argTypeRowSpan,
  argTypeGapSize,
  argTypeVerticalAlign,
  argTypeHorizontalAlign,
  argTypeSize,
  argTypeImageUrl,
  argTypeHidden,
  argTypeMapMarkers,
} from './src/utils/utils';

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
