import { CSSResultGroup, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import {
  OutlineElement,
  MobileController,
  emit,
  watch,
  getOffset,
  scrollIntoView,
} from '@phase2/outline-core';

import { OutlineTab } from '../outline-tab/outline-tab';
import { OutlineTabPanel } from '../outline-tab-panel/outline-tab-panel';
import componentStyles from './outline-tab-group.css.lit';

/**
 * @deprecated since version 0.1.4
 * @slot - Used for grouping tab panels in the tab group.
 * @slot nav - Used for grouping tabs in the tab group.
 *
 * @event {{ name: String }} outline-tab-show - Emitted when a tab is shown.
 * @event {{ name: String }} outline-tab-hide - Emitted when a tab is hidden.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The tab group navigation container.
 * @csspart tabs - The container that wraps the slotted tabs.
 * @csspart active-tab-indicator - An element that displays the currently selected tab. This is a child of the tabs container.
 * @csspart body - The tab group body where tab panels are slotted in.
 */
@customElement('outline-tab-group')
export class OutlineTabGroup extends OutlineElement {
  static styles: CSSResultGroup = [componentStyles];

  @query('.tab-group') tabGroup: HTMLElement;
  @query('.tab-group__body') body: HTMLElement;
  @query('.tab-group__nav') nav: HTMLElement;
  @query('.tab-group__indicator') indicator: HTMLElement;

  private mobileController = new MobileController(this);
  private activeTab: OutlineTab;
  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;
  private tabs: OutlineTab[] = [];
  private panels: OutlineTabPanel[] = [];

  /** The placement of the tabs. */
  @property({ type: String, reflect: true, attribute: 'placement' }) placement:
    | 'top'
    | 'bottom'
    | 'start'
    | 'end' = 'start';

  /**
   * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   */
  @property() activation: 'auto' | 'manual' = 'auto';

  connectedCallback() {
    super.connectedCallback();

    window.addEventListener('resize', this._handleResize);

    this.resizeObserver = new ResizeObserver(() => {
      if (!this.mobileController.isMobile) {
        this.preventIndicatorTransition();
        this.repositionIndicator();
      }
    });

    this.mutationObserver = new MutationObserver(mutations => {
      // Update aria labels when the DOM changes
      if (
        mutations.some(
          m =>
            !['aria-labelledby', 'aria-controls'].includes(
              m.attributeName as string
            )
        )
      ) {
        setTimeout(() => this.setAriaLabels());
      }

      // Sync tabs when disabled states change
      if (mutations.some(m => m.attributeName === 'disabled')) {
        this.syncTabsAndPanels();
      }
    });

    if (!this.mobileController.isMobile) {
      this.updateComplete.then(() => {
        this.syncTabsAndPanels();
        this.mutationObserver.observe(this, {
          attributes: true,
          childList: true,
          subtree: true,
        });
        this.resizeObserver.observe(this.nav);

        // Set initial tab state when the tabs first become visible
        this.intersectionObserver();
      });
    }
  }

  disconnectedCallback() {
    this.mutationObserver.disconnect();
    this.resizeObserver.unobserve(this.nav);
    window.removeEventListener('resize', this._handleResize);
  }

  _handleResize = () => {
    if (!this.mobileController.isMobile) {
      this.intersectionObserver();
    }
  };

  intersectionObserver() {
    const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].intersectionRatio > 0) {
          this.setAriaLabels();
          this.setActiveTab(this.getActiveTab() || this.tabs[0], {
            emitEvents: false,
          });
          observer.unobserve(entries[0].target);
        }
      }
    );
    intersectionObserver.observe(this.tabGroup);
  }

  /** Shows the specified tab panel. */
  show(panel: string) {
    const tab = this.tabs.find(el => el.panel === panel) as OutlineTab;

    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  getAllTabs(includeDisabled = false) {
    const slot = this.shadowRoot!.querySelector(
      'slot[name="nav"]'
    ) as HTMLSlotElement;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return [...slot.assignedElements()].filter((el: any) => {
      return includeDisabled
        ? el.tagName.toLowerCase() === 'outline-tab'
        : el.tagName.toLowerCase() === 'outline-tab' && !el.disabled;
    }) as OutlineTab[];
  }

  getAllPanels() {
    const slot = this.body.querySelector('slot')!;
    return [...slot.assignedElements()].filter(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (el: any) => el.tagName.toLowerCase() === 'outline-tab-panel'
    ) as [OutlineTabPanel];
  }

  getActiveTab() {
    return this.tabs.find(el => el.active);
  }

  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('outline-tab') as OutlineTab;
    const tabGroup = tab?.closest('outline-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('outline-tab') as OutlineTab;
    const tabGroup = tab?.closest('outline-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    // Activate a tab
    if (['Enter', ' '].includes(event.key)) {
      if (tab) {
        this.setActiveTab(tab, { scrollBehavior: 'smooth' });
        event.preventDefault();
      }
    }

    // Move focus left or right
    if (
      [
        'ArrowLeft',
        'ArrowRight',
        'ArrowUp',
        'ArrowDown',
        'Home',
        'End',
      ].includes(event.key)
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const activeEl = document.activeElement as any;

      if (activeEl && activeEl.tagName.toLowerCase() === 'outline-tab') {
        let index = this.tabs.indexOf(activeEl);

        if (event.key === 'Home') {
          index = 0;
        } else if (event.key === 'End') {
          index = this.tabs.length - 1;
        } else if (
          (['top', 'bottom'].includes(this.placement) &&
            event.key === 'ArrowLeft') ||
          (['start', 'end'].includes(this.placement) && event.key === 'ArrowUp')
        ) {
          index = Math.max(0, index - 1);
        } else if (
          (['top', 'bottom'].includes(this.placement) &&
            event.key === 'ArrowRight') ||
          (['start', 'end'].includes(this.placement) &&
            event.key === 'ArrowDown')
        ) {
          index = Math.min(this.tabs.length - 1, index + 1);
        }

        this.tabs[index].focus({ preventScroll: true });

        if (this.activation === 'auto') {
          this.setActiveTab(this.tabs[index], { scrollBehavior: 'smooth' });
        }

        if (['top', 'bottom'].includes(this.placement)) {
          scrollIntoView(this.tabs[index], this.nav, 'horizontal');
        }

        event.preventDefault();
      }
    }
  }

  handleScrollToStart() {
    this.nav.scroll({
      left: this.nav.scrollLeft - this.nav.clientWidth,
      behavior: 'smooth',
    });
  }

  handleScrollToEnd() {
    this.nav.scroll({
      left: this.nav.scrollLeft + this.nav.clientWidth,
      behavior: 'smooth',
    });
  }

  setActiveTab(
    tab: OutlineTab,
    options?: { emitEvents?: boolean; scrollBehavior?: 'auto' | 'smooth' }
  ) {
    options = Object.assign(
      {
        emitEvents: true,
        scrollBehavior: 'auto',
      },
      options
    );

    if (tab && tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.activeTab = tab;

      // Sync active tab and panel
      this.tabs.map(el => (el.active = el === this.activeTab));
      this.panels.map(el => (el.active = el.name === this.activeTab.panel));
      this.syncIndicator();

      if (['top', 'bottom'].includes(this.placement)) {
        scrollIntoView(
          this.activeTab,
          this.nav,
          'horizontal',
          options.scrollBehavior
        );
      }

      // Emit events
      if (options.emitEvents) {
        if (previousTab) {
          emit(this, 'outline-tab-hide', {
            detail: { name: previousTab.panel },
          });
        }

        emit(this, 'outline-tab-show', {
          detail: { name: this.activeTab.panel },
        });
      }
    }
  }

  setAriaLabels() {
    // Link each tab with its corresponding panel
    this.tabs.map(tab => {
      const panel = this.panels.find(
        el => el.name === tab.panel
      ) as OutlineTabPanel;
      if (panel) {
        tab.setAttribute('aria-controls', panel.getAttribute('id') as string);
        panel.setAttribute('aria-labelledby', tab.getAttribute('id') as string);
      }
    });
  }

  @watch('placement')
  syncIndicator() {
    if (this.indicator) {
      const tab = this.getActiveTab();

      if (tab) {
        this.indicator.style.display = 'block';
        this.repositionIndicator();
      } else {
        this.indicator.style.display = 'none';
        return;
      }
    }
  }

  repositionIndicator() {
    const currentTab = this.getActiveTab();

    if (!currentTab) {
      return;
    }

    const width = currentTab.clientWidth;
    const height = currentTab.clientHeight;
    const offset = getOffset(currentTab, this.nav);
    const offsetTop = offset.top + this.nav.scrollTop;
    const offsetLeft = offset.left + this.nav.scrollLeft;

    switch (this.placement) {
      case 'top':
      case 'bottom':
        this.indicator.style.width = `${width}px`;
        this.indicator.style.height = 'auto';
        this.indicator.style.transform = `translateX(${offsetLeft}px)`;
        break;

      case 'start':
      case 'end':
        this.indicator.style.width = 'auto';
        this.indicator.style.height = `${height}px`;
        this.indicator.style.transform = `translateY(${offsetTop}px)`;
        break;
    }
  }

  // In some orientations, when the component is resized, the indicator's position will change causing it to animate
  // while you resize. Calling this method will prevent the transition from running on resize, which feels more natural.
  preventIndicatorTransition() {
    if (!this.mobileController.isMobile) {
      const transitionValue = this.indicator.style.transition;
      this.indicator.style.transition = 'none';

      requestAnimationFrame(() => {
        this.indicator.style.transition = transitionValue;
      });
    }
  }

  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  syncTabsAndPanels() {
    if (!this.mobileController.isMobile) {
      this.tabs = this.getAllTabs();
      this.panels = this.getAllPanels();
    }
    this.syncIndicator();
  }

  render() {
    return html`${
      this.mobileController.isMobile
        ? html`<slot name="accordion-wrapper"></slot> `
        : html`<div
          part="base"
          class=${classMap({
            'tab-group': true,
            'tab-group--top': this.placement === 'top',
            'tab-group--bottom': this.placement === 'bottom',
            'tab-group--start': this.placement === 'start',
            'tab-group--end': this.placement === 'end',
          })}
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        >
          <div class="tab-group__nav-container">
            <div part="nav" class="tab-group__nav">
              <div part="tabs" class="tab-group__tabs" role="tablist">
                <div
                  part="active-tab-indicator"
                  class="tab-group__indicator"
                ></div>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </div>
            </div>
          </div>
          <div part="body" class="tab-group__body">
            <slot @slotchange=${this.syncTabsAndPanels}></slot>
          </div>
        </div>`
    } `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'outline-tab-group': OutlineTabGroup;
  }
}
