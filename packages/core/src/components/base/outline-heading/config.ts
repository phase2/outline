import tailwindConfig from '../../../resolved-tailwind-config';

export type AllowedHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | undefined;

export type AllowedHeadingSizes = keyof typeof tailwindConfig.fontSize;
export const HeadingSizes = Object.keys(tailwindConfig.fontSize);

export type AllowedHeadingStyles = keyof typeof tailwindConfig.fontWeight;
export const HeadingStyles = Object.keys(tailwindConfig.fontWeight);
