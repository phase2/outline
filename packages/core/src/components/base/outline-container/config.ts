export const ALL_HORIZONTAL_ALIGNMENT = ['left', 'center', 'right'] as const;
type HorizontalAlignmentTuple = typeof ALL_HORIZONTAL_ALIGNMENT;
export type HorizontalAlignment = HorizontalAlignmentTuple[number];
