export const HeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', undefined];
export type AllowedHeadingLevels = (typeof HeadingLevels)[number];

// Updated to limit the allowed values to the set we want to be selectable in Storybook.
export const HeadingSizes = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
] as const;
export type AllowedHeadingSizes = (typeof HeadingSizes)[number];

export const HeadingWeights = [
  'thin',
  'extralight',
  'light',
  'normal',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
] as const;
export type AllowedHeadingWeights = (typeof HeadingWeights)[number];
