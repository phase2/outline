import { CSSResultGroup, TemplateResult, html } from 'lit';
import { OutlineElement } from '@phase2/outline-core';
import {
  customElement,
  property,
  state,
  query,
} from 'lit/decorators.js';
import componentStyles from './outline-jump-nav.css.lit';

export type OutlineJumpNavJumps = { [key: string]: string };
export type OutlineJumpNavVisibility = { [key: string]: number };

/**
 * The OutlineJumpNav component
 * @element outline-jump-nav
 */
@customElement('outline-jump-nav')
export class OutlineJumpNav extends OutlineElement {
  resizeObserver: ResizeObserver;
  static styles: CSSResultGroup = [componentStyles];

  /**
   * ID of "active" element.
   */
  @property({ type: String })
  isActive: string;

  /**
   * ID or classname of hero or any scrolling element jump nav may need to start below.
   */
  @property({ type: String })
  hero: string;

  /**
   * ID or classname of navigation or any kind of sticky element the jump nav may need to remain positioned below.
   */
  @property({ type: String })
  nav: string;

  /**
   * Jump target id and their % visible on screen.
   */
  @state()
  visibility: OutlineJumpNavVisibility = {};

  /**
   * ID prefix for targeted sections.
   */
  @property({ type: String })
  slug: string;

  /**
   * Expected link IDs and their titles.
   */
  @property({ type: Object })
  jumps: OutlineJumpNavJumps = {};

  /**
   * Ref to the ul element
   */
  @query('.outline-jump-nav--list')
  ul: HTMLElement;

  /**
   * Current height of the jump-nav. Used to determine true viewable space.
   */
  navOffset: number;

  /**
   * Current height of the main-nav. Used to determine true viewable space.
   */
  headerOffset: number;

  /**
   * Height of any hero on the page/the position that the jump-nav is supposed to switch to fixed/sticky position.
   */
  triggerFixedOffset: number;

  /**
   * Wether or not the nav is in 'fixed' position.
   */
  fixed: boolean;

  /**
   * If the users browser is set to 'prefers-reduced-motion' will prevent scrolling and cleanly jump to selected section.
   */
  preventScroll: boolean;

  render(): TemplateResult {
    return html`<section class="outline-jump-nav">
      <outline-container class="outline-jump-nav--container">
        <nav class="outline-jump-nav--nav" aria-label="jump navigation">
          <ul class="outline-jump-nav--list"></ul>
        </nav>
      </outline-container>
    </section>`;
  }
  firstUpdated() {
    this.initializeJumpsAndVisibility();
    this.setOffsets();
    this.generateLinks();
    this.setReduceMotion();
    this.determineViewStatus();
    this.resizeObserver.observe(this);
  }

  updated() {
    this.setOffsets();
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.resizeObserver = new ResizeObserver(() => {
      this.setOffsets();
    });

    window.addEventListener('scroll', this.determineViewStatus);
    window.addEventListener('scroll', this.toggleFixedPosition);
  }

  disconnectedCallback(): void {
    window.removeEventListener('scroll', this.determineViewStatus);
    window.removeEventListener('scroll', this.toggleFixedPosition);
    this.resizeObserver.unobserve(this);
    super.disconnectedCallback();
  }

  setReduceMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.preventScroll = true;
    }
  }

  /**
   * Finds all elements with an id that begins with the slug, and creates the jumps object
   * { element id: link text }
   */
  initializeJumpsAndVisibility() {
    const targetedElements = document.querySelectorAll(
      `[id^="${this.slug}"]`
    );
    targetedElements?.forEach(element => {
      const name = element.id.split('--')[1];
      this.jumps[`${element.id}`] = name;
    });
    this.initializeState();
  }

  /**
   * Generates the visibility object.
   */
  initializeState() {
    Object.keys(this.jumps).forEach(key => (this.visibility[key] = 0));
  }

  /**
   * Sets the css var for the navs fixed position.
   */
  setTopVar(height: number) {
    this.style.setProperty('--top-offset', `${height}px`);
  }

  /**
   * Generates links from this.jumps object.
   */
  generateLinks() {
    Object.entries(this.jumps).forEach(jump => {
      const li = document.createElement('li');
      const anchor = document.createElement('a');

      li.classList.add('outline-jump-nav--item');
      li.addEventListener('click', this.scrollHandler);

      anchor.classList.add('outline-jump-nav--link');
      anchor.id = `${jump[0]}-jump`;
      anchor.setAttribute('href', `#${jump[0]}`);
      anchor.setAttribute('aria-label', `scroll to ${jump[1]}`);
      anchor.innerText = jump[1].toUpperCase();

      li.appendChild(anchor);
      this.ul.appendChild(li);
    });
  }

  /**
   * On click "scroll handler" to initiate scrolling when jump link is clicked.
   */
  scrollHandler(e: Event) {
    e.preventDefault();
    const host = document.querySelector('outline-jump-nav') as OutlineJumpNav;
    const target = e.target as HTMLAnchorElement;
    const targetHref = target.getAttribute('href');
    const scrollTarget = document.querySelector(`${targetHref}`) as HTMLElement;

    if (scrollTarget) {
      const correctedTop =
        scrollTarget.offsetTop - (host.headerOffset + host.navOffset);
      window.scroll({
        top: correctedTop,
        behavior: host.preventScroll ? 'auto' : 'smooth',
      });
    }
  }

  /**
   * If an element has moved in/out of view, updates the state object and calls
   * this.setActiveOnStateUpdate to determine if the active link should be changed.
   */
  updateState(id: string, percentage: number) {
    if (this.visibility[id] !== percentage) {
      this.visibility[id] = percentage;

      this.setActiveOnStateUpdate();
    }
  }

  /**
   * Called when the component reaches/exceeds triggerFixedOffset point and applies/removes is-fixed class.
   */
  toggleFixedPosition() {
    const host = document.querySelector('outline-jump-nav') as OutlineJumpNav;
    const nav = this.shadowRoot?.querySelector(
      '.outline-jump-nav'
    ) as HTMLElement;

    if (nav && window.scrollY >= host.triggerFixedOffset) {
      nav.classList.add('is-fixed');
      host.fixed = true;
    }
    if (nav && window.scrollY < host.triggerFixedOffset && host.fixed) {
      nav.classList.remove('is-fixed');
      host.fixed = false;
    }
  }

  /**
   * Determines headerOffset, topOffset, and triggerFixedOffset properties for use in calculations.
   */
  setOffsets() {
    const header = document.querySelector(this.nav);
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const hero = document.querySelector(this.hero);
    const heroHeight = hero ? hero?.getBoundingClientRect().height : 0;
    const nav = document.querySelector('outline-jump-nav');
    this.navOffset = nav ? nav.getBoundingClientRect().height : 0;
    this.headerOffset = headerHeight;
    this.triggerFixedOffset = heroHeight;
    this.setTopVar(this.headerOffset);
  }

  /**
   * Passes all present elements with jump links to this.isInView.
   */
  determineViewStatus() {
    const host = document.querySelector('outline-jump-nav') as OutlineJumpNav;
    Object.keys(host.jumps).forEach(key => {
      const element = document.querySelector(`#${key}`) as HTMLElement;
      return host.isInView(element);
    });
  }

  /**
   * Takes in an element and returns an object comprised of several positioning values used in multiple methods.
   */
  getPositioningValues(el: HTMLElement) {
    const windowTop = window.scrollY;
    const windowBottom = windowTop + window.innerHeight;
    const elRect = el.getBoundingClientRect();
    const elTop = elRect.y + windowTop - (this.navOffset + this.headerOffset);
    const elBottom = elRect.y + elRect.height + windowTop;
    const elHeight = elRect.height;

    return {
      windowTop: windowTop,
      windowBottom: windowBottom,
      elTop: elTop,
      elBottom: elBottom,
      elHeight: elHeight,
    };
  }

  /**
   * Determines if an element is in view or not.
   * If only partially in view passes the element id to this.elementXPercentInViewport.
   */
  isInView(el: HTMLElement) {
    const { elTop, elBottom, windowTop, windowBottom } =
      this.getPositioningValues(el);

    const isVis = !(elTop > windowBottom || elBottom < windowTop);
    const notVis = elTop > windowBottom || elBottom < windowTop;
    const allVis =
      (elTop >= windowTop && elBottom <= windowBottom) ||
      (elTop < windowTop && elBottom > windowBottom);

    if (notVis) {
      return this.updateState(el.id, 0);
    }

    if (allVis) {
      return this.updateState(el.id, 100);
    }

    if (isVis) {
      return this.elementXPercentInViewport(el);
    }
  }

  /**
   * Determines the percentage of the element in view.
   */
  elementXPercentInViewport(el: HTMLElement) {
    const { elTop, elBottom, elHeight, windowTop, windowBottom } =
      this.getPositioningValues(el);

    if (elBottom > windowBottom) {
      const visPx = elHeight - (elBottom - windowBottom);
      return this.updateState(el.id, Math.round((visPx / elHeight) * 100));
    }
    if (elTop < windowTop) {
      const visPx = elHeight - (windowTop - elTop);
      return this.updateState(el.id, Math.round((visPx / elHeight) * 100));
    }
  }

  /**
   * When the visibility state object is updated Compares % visible values and either passes the
   * most visible elements ID to this.setActive or if more than one have the same value
   * passes them to this.getTopPositions to determine which is the highest on the page.
   */
  setActiveOnStateUpdate() {
    const hightestPercentageVisible = Math.max(
      ...Object.values(this.visibility)
    );

    const mostVisibleElements = Object.entries(this.visibility).filter(
      ele => ele[1] === hightestPercentageVisible
    );

    if (mostVisibleElements.length > 1) {
      return this.getTopPositions(mostVisibleElements);
    } else {
      const id: string = mostVisibleElements[0][0];
      return this.setActive(id);
    }
  }

  /**
   * Sorts through multiple elements that are the same percentage in view, and passes the if of the element highest on the page to setActive.
   */
  getTopPositions(ids: [string, number][]) {
    const topPositions: { [key: string]: number } = {};
    ids.map(ele => {
      if (document.querySelector(`#${ele[0]}`)?.getBoundingClientRect().top) {
        const id = ele[0] as string;
        // @ts-expect-error - because-ts
        return (topPositions[id] = document
          .querySelector(`#${ele[0]}`)
          ?.getBoundingClientRect().top);
      } else {
        return null;
      }
    });
    const activeID = Object.keys(topPositions).find(
      key => topPositions[key] === Math.min(...Object.values(topPositions))
    )!;

    return this.setActive(activeID);
  }

  /**
   * Takes an ID and if not already the active ID, sets it as this.isActive, then handles the passing of the active-jump class to the correct link.
   */
  setActive(id: string) {
    if (this.isActive !== id) {
      this.isActive = id;
      this.shadowRoot
        ?.querySelector(`.active-jump`)
        ?.classList.remove('active-jump');
      this.shadowRoot
        ?.querySelector(`#${id}-jump`)
        ?.classList.add('active-jump');
    }
  }
}
