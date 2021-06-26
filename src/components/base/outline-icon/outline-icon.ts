import { html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconTypeCustom, IconTypeOutline, IconTypeSolid } from './config';
import { OutlineElement } from '../outline-element/outline-element';

import codeBrackets from './assets/custom/code-brackets.svg';
import colors from './assets/custom/colors.svg';
import comments from './assets/custom/comments.svg';
import direction from './assets/custom/direction.svg';
import flow from './assets/custom/flow.svg';
import plugin from './assets/custom/plugin.svg';
import repo from './assets/custom/repo.svg';
import stack from './assets/custom/stack.svg';

import adjustmentsOutline from './assets/outline/adjustments.svg';
import annotationOutline from './assets/outline/annotation.svg';
import arrowCircleDownOutline from './assets/outline/arrow-circle-down.svg';
import arrowCircleLeftOutline from './assets/outline/arrow-circle-left.svg';
import arrowCircleRightOutline from './assets/outline/arrow-circle-right.svg';
import arrowCircleUpOutline from './assets/outline/arrow-circle-up.svg';
import arrowDownOutline from './assets/outline/arrow-down.svg';
import arrowLeftOutline from './assets/outline/arrow-left.svg';
import arrowRightOutline from './assets/outline/arrow-right.svg';
import arrowUpOutline from './assets/outline/arrow-up.svg';
import arrowNarrowDownOutline from './assets/outline/arrow-narrow-down.svg';
import arrowNarrowLeftOutline from './assets/outline/arrow-narrow-left.svg';
import arrowNarrowRightOutline from './assets/outline/arrow-narrow-right.svg';
import arrowNarrowUpOutline from './assets/outline/arrow-narrow-up.svg';
import arrowExpandOutline from './assets/outline/arrows-expand.svg';
import userOutline from './assets/outline/user.svg';
import searchOutline from './assets/outline/search.svg';

import adjustmentsSolid from './assets/solid/adjustments.svg';
import annotationSolid from './assets/solid/annotation.svg';
import arrowCircleDownSolid from './assets/solid/arrow-circle-down.svg';
import arrowCircleLeftSolid from './assets/solid/arrow-circle-left.svg';
import arrowCircleRightSolid from './assets/solid/arrow-circle-right.svg';
import arrowCircleUpSolid from './assets/solid/arrow-circle-up.svg';
import arrowDownSolid from './assets/solid/arrow-down.svg';
import arrowLeftSolid from './assets/solid/arrow-left.svg';
import arrowRightSolid from './assets/solid/arrow-right.svg';
import arrowUpSolid from './assets/solid/arrow-up.svg';
import arrowNarrowDownSolid from './assets/solid/arrow-narrow-down.svg';
import arrowNarrowLeftSolid from './assets/solid/arrow-narrow-left.svg';
import arrowNarrowRightSolid from './assets/solid/arrow-narrow-right.svg';
import arrowNarrowUpSolid from './assets/solid/arrow-narrow-up.svg';
import arrowExpandSolid from './assets/solid/arrows-expand.svg';
import userSolid from './assets/solid/user.svg';
import searchSolid from './assets/solid/search.svg';

const custom: Record<IconTypeCustom, string> = {
  codeBrackets,
  colors,
  comments,
  direction,
  flow,
  plugin,
  repo,
  stack,
};

const outline: Record<IconTypeOutline, string> = {
  adjustmentsOutline,
  annotationOutline,
  arrowCircleDownOutline,
  arrowCircleLeftOutline,
  arrowCircleRightOutline,
  arrowCircleUpOutline,
  arrowDownOutline,
  arrowLeftOutline,
  arrowRightOutline,
  arrowUpOutline,
  arrowNarrowDownOutline,
  arrowNarrowLeftOutline,
  arrowNarrowRightOutline,
  arrowNarrowUpOutline,
  arrowExpandOutline,
  userOutline,
  searchOutline,
};

const solid: Record<IconTypeSolid, string> = {
  adjustmentsSolid,
  annotationSolid,
  arrowCircleDownSolid,
  arrowCircleLeftSolid,
  arrowCircleRightSolid,
  arrowCircleUpSolid,
  arrowDownSolid,
  arrowLeftSolid,
  arrowRightSolid,
  arrowUpSolid,
  arrowNarrowDownSolid,
  arrowNarrowLeftSolid,
  arrowNarrowRightSolid,
  arrowNarrowUpSolid,
  arrowExpandSolid,
  userSolid,
  searchSolid,
};

const icons: Record<
  IconTypeCustom | IconTypeSolid | IconTypeOutline,
  string
> = {
  ...custom,
  ...solid,
  ...outline,
};

@customElement('outline-icon')
export class OutlineIcon extends OutlineElement {
  /**
   * The icon type to display from ./assets. Takes precedence over url.
   */
  @property()
  icon: IconTypeCustom | IconTypeSolid | IconTypeOutline;
  /**
   * The url to display a remote icon
   */
  @property()
  url = '';

  render(): TemplateResult {
    const iconSrc =
      icons[this.icon] !== undefined ? icons[this.icon] : this.url;
    return html` <img src=${iconSrc} alt=${this.icon} />`;
  }
}
