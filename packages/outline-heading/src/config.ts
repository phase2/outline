export const HeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', undefined];
export type AllowedHeadingLevels = typeof HeadingLevels[number];

// Updated to limit the allowed values to the set we want to be selectable in Storybook.
export const HeadingSizes = [
  'xs',
  'sm',
  'base',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
] as const;
export type AllowedHeadingSizes = typeof HeadingSizes[number];

export const HeadingStyles = [
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
export type AllowedHeadingStyles = typeof HeadingStyles[number];
