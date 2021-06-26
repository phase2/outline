export enum IconList {
  ADJUSTMENTS = 'adjustments',
  ANNOTATION = 'annotation',
}

export enum IconTypeCustom {
  CODE_BRACKET = 'codeBrackets',
  COLORS = 'colors',
  COMMENTS = 'comments',
  DIRECTION = 'direction',
  FLOW = 'flow',
  PLUGIN = 'plugin',
  REPO = 'repo',
  STACK = 'stack',
}

export enum IconTypeOutline {
  ADJUSTMENTS_OUTLINE = 'adjustmentsOutline',
  ANNOTATION_OUTLINE = 'annotationOutline',
  ARROW_CIRCLE_DOWN_OUTLINE = 'arrowCircleDownOutline',
  ARROW_CIRCLE_LEFT_OUTLINE = 'arrowCircleLeftOutline',
  ARROW_CIRCLE_RIGHT_OUTLINE = 'arrowCircleRightOutline',
  ARROW_CIRCLE_UP_OUTLINE = 'arrowCircleUpOutline',
  ARROW_DOWN_OUTLINE = 'arrowDownOutline',
  ARROW_LEFT_OUTLINE = 'arrowLeftOutline',
  ARROW_RIGHT_OUTLINE = 'arrowRightOutline',
  ARROW_UP_OUTLINE = 'arrowUpOutline',
  ARROW_NARROW_DOWN_OUTLINE = 'arrowNarrowDownOutline',
  ARROW_NARROW_LEFT_OUTLINE = 'arrowNarrowLeftOutline',
  ARROW_NARROW_RIGHT_OUTLINE = 'arrowNarrowRightOutline',
  ARROW_NARROW_UP_OUTLINE = 'arrowNarrowUpOutline',
  ARROW_EXPAND_OUTLINE = 'arrowExpandOutline',
  USER_OUTLINE = 'userOutline',
  SEARCH_OUTLINE = 'searchOutline',
}

export enum IconTypeSolid {
  ADJUSTMENTS_SOLID = 'adjustmentsSolid',
  ANNOTATION_SOLID = 'annotationSolid',
  ARROW_CIRCLE_DOWN_SOLID = 'arrowCircleDownSolid',
  ARROW_CIRCLE_LEFT_SOLID = 'arrowCircleLeftSolid',
  ARROW_CIRCLE_RIGHT_SOLID = 'arrowCircleRightSolid',
  ARROW_CIRCLE_UP_SOLID = 'arrowCircleUpSolid',
  ARROW_DOWN_SOLID = 'arrowDownSolid',
  ARROW_LEFT_SOLID = 'arrowLeftSolid',
  ARROW_RIGHT_SOLID = 'arrowRightSolid',
  ARROW_UP_SOLID = 'arrowUpSolid',
  ARROW_NARROW_DOWN_SOLID = 'arrowNarrowDownSolid',
  ARROW_NARROW_LEFT_SOLID = 'arrowNarrowLeftSolid',
  ARROW_NARROW_RIGHT_SOLID = 'arrowNarrowRightSolid',
  ARROW_NARROW_UP_SOLID = 'arrowNarrowUpSolid',
  ARROW_EXPAND_SOLID = 'arrowExpandSolid',
  USER_SOLID = 'userSolid',
  SEARCH_SOLID = 'searchSolid',
}

export enum IconVariant {
  OUTLINE = 'Outline',
  SOLID = 'Solid',
}

export enum AlertWeights {
  BACKGROUND = 100,
  HEADING = 700,
  TEXT = 600,
}

export const AllIcons = {
  ...IconTypeCustom,
  ...IconTypeOutline,
  ...IconTypeSolid,
};
