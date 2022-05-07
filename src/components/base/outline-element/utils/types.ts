import tailwindConfig from '../../../../resolved-tailwind-config';
export { ALL_COLORS } from '../../../../resolved-tailwind-config';

/**
 * Pass along all the Tailwind colors
 */
export type { Color } from '../../../../resolved-tailwind-config';

export type SpacingTokens = keyof typeof tailwindConfig.spacing;

export const ALL_SPACING_TOKENS = Object.keys(
  tailwindConfig.spacing
) as SpacingTokens[];

export const ALL_SIZES = ['small', 'medium', 'large', 'none'] as const;
type SizeTuple = typeof ALL_SIZES;
export type Size = SizeTuple[number];

export const ALL_VERTICAL_ALIGNMENT = ['top', 'middle', 'bottom'] as const;
type AlignmentTuple = typeof ALL_VERTICAL_ALIGNMENT;
export type VerticalAlignment = AlignmentTuple[number];

export const ALL_HORIZONTAL_ALIGNMENT = [
  'left',
  'center',
  'right',
  'none',
] as const;
type HorizontalAlignmentTuple = typeof ALL_HORIZONTAL_ALIGNMENT;
export type HorizontalAlignment = HorizontalAlignmentTuple[number];

export const ALL_ORIENTATION = ['vertical', 'horizontal'] as const;
type OrientationTuple = typeof ALL_ORIENTATION;
export type Orientation = OrientationTuple[number];

export const ALL_TEXT_INPUTS = [
  'text',
  'search',
  'password',
  'email',
  'tel',
  'number',
  'url',
] as const;
type TextInputTuple = typeof ALL_TEXT_INPUTS;
export type TextInput = TextInputTuple[number];

export interface LinkType {
  target?: string;
  text: string;
  url: string;
}
