import {
  ALL_COLORS,
  ALL_SPACING_TOKENS,
  ALL_SIZES,
  ALL_VERTICAL_ALIGNMENT,
  ALL_HORIZONTAL_ALIGNMENT,
  ALL_ORIENTATION,
} from './types';

export function format(
  first: string,
  middle: string | undefined,
  last: string | undefined
): string {
  return (
    (first || '') +
    (middle !== undefined ? ` ${middle}` : '') +
    (last !== undefined ? ` ${last}` : '')
  );
}

/**
 * Merge into argTypes in stories for a repeatable slot content type
 * This is for a control to dump in arbitrary strings which are NOT properties
 * of a component.
 */
export const argTypeSlotContent = {
  defaultSlot: {
    table: { category: 'Slots', defaultValue: { summary: 'NULL' } },
    name: 'Default Slot',
    description:
      'Renders anything that is passed into the inner HTML of the given element.',
  },
};

export const argTypeOrientation = {
  orientation: {
    name: 'Orientation',
    control: {
      type: 'radio',
      options: ALL_ORIENTATION,
    },
  },
};

export const argTypeColSpan = {
  name: 'Number of Columns to Span',
  control: { type: 'range', min: 1, max: 12, step: 1 },
};

export const argTypeRowSpan = {
  name: 'Number of Rows to Span',
  control: { type: 'range', min: 1, max: 6, step: 1 },
};

export const argTypeGapSize = {
  name: 'Gap Size',
  control: {
    type: 'select',
    options: ['large', 'medium', 'small', 'none'],
  },
};

export const argTypeVerticalAlign = {
  name: 'Vertical Alignment',
  control: {
    type: 'select',
    options: ALL_VERTICAL_ALIGNMENT,
  },
};

export const argTypeHorizontalAlign = {
  name: 'Horizontal Alignment',
  control: {
    type: 'select',
    options: ALL_HORIZONTAL_ALIGNMENT,
  },
};

export const argTypeSize = {
  name: 'Size',
  control: {
    type: 'select',
    options: ALL_SIZES,
  },
};

export const argTypeColor = {
  name: 'Color',
  description: 'Select from a pre-defined list of colors.',
  control: {
    type: 'select',
    options: ALL_COLORS,
  },
};

export const argTypeSpacing = {
  name: 'Spacing',
  control: {
    type: 'select',
    options: ALL_SPACING_TOKENS,
  },
};

export const argTypeImageUrl = {
  name: 'Image URL',
  description: 'The image URL to use for this demo.',
  control: {
    type: 'text',
  },
};

export const argTypeHidden = {
  table: {
    disable: true,
  },
};

/**
 * Turn a rem string like `4rem` into a px string like `64px`
 * @param {string} remVal
 */
export const extractPx = (remVal: string): string => {
  const [num, unit] = remVal.split('rem');

  return unit === 'px' || unit === undefined
    ? remVal
    : `${parseFloat(num) * 16}px`;
};
