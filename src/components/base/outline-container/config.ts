import { ALL_HORIZONTAL_ALIGNMENT } from "../outline-element/utils/types";
let HORIZONTAL_ALIGNMENT = ALL_HORIZONTAL_ALIGNMENT;
type HorizontalAlignmentTuple = typeof HORIZONTAL_ALIGNMENT;
export type HorizontalAlignment = HorizontalAlignmentTuple[number];
