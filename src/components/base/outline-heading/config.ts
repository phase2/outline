import tailwindConfig from '../../../resolved-tailwind-config';

export type AllowedHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | undefined;

// Updated to limit the allowed values to the set we want to be selectable in Storybook.
export type AllowedHeadingSizes =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
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
];

export type AllowedHeadingStyles = keyof typeof tailwindConfig.fontWeight;
export const HeadingStyles = Object.keys(tailwindConfig.fontWeight);
