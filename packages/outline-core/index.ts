export { OutlineElement } from './src/outline-element/outline-element';

export { ContainerSizeController } from './src/controllers/container-size-controller';
export { IsHoverableDeviceController } from './src/controllers/is-hoverable-device-controller';
export { LinkedBlockController } from './src/controllers/linked-block-controller';
export { ScreenSizeController } from './src/controllers/screen-size-controller';
export { SlotController } from './src/controllers/slot-controller';

export {
  animateTo,
  parseDuration,
  prefersReducedMotion,
  stopAnimations,
  shimKeyframesHeightAuto,
} from './src/internal/animate';
export { autoIncrement } from './src/internal/auto-increment';
export { drag } from './src/internal/drag';
export { emit, waitForEvent } from './src/internal/event';
export {
  hasFocusVisible,
  focusVisibleSelector,
} from './src/internal/focus-visible';

export type { FormSubmitControllerOptions } from './src/internal/form-control';
export {
  FormSubmitController,
  renderFormControl,
  getLabelledBy,
} from './src/internal/form-control';
export { clamp } from './src/internal/math';
export { default } from './src/internal/modal';
export { getOffset } from './src/internal/offset';
export {
  lockBodyScrolling,
  unlockBodyScrolling,
  scrollIntoView,
} from './src/internal/scroll';
export {
  HasSlotController,
  getInnerHTML,
  getTextContent,
} from './src/internal/slot';
export { uppercaseFirstLetter } from './src/internal/string';
export { getTabbableBoundary } from './src/internal/tabbable';
export { updateUrlSearchParam } from './src/internal/url';
export { watch } from './src/internal/watch';

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
