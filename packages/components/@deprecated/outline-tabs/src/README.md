# outline-tab-group

## Properties

| Property     | Attribute    | Type                                    | Default | Description                                      |
|--------------|--------------|-----------------------------------------|---------|--------------------------------------------------|
| `activation` | `activation` | `"auto" \| "manual"`                    | "auto"  | When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to<br />manual, the tab will receive focus but will not show until the user presses spacebar or enter. |
| `body`       |              | `HTMLElement`                           |         |                                                  |
| `indicator`  |              | `HTMLElement`                           |         |                                                  |
| `nav`        |              | `HTMLElement`                           |         |                                                  |
| `placement`  | `placement`  | `"top" \| "bottom" \| "start" \| "end"` | "start" | The placement of the tabs.                       |
| `tabGroup`   |              | `HTMLElement`                           |         |                                                  |

## Methods

| Method                       | Type                                             | Description                    |
|------------------------------|--------------------------------------------------|--------------------------------|
| `getActiveTab`               | `(): OutlineTab \| undefined`                    |                                |
| `getAllPanels`               | `(): [OutlineTabPanel]`                          |                                |
| `getAllTabs`                 | `(includeDisabled?: boolean): OutlineTab[]`      |                                |
| `handleClick`                | `(event: MouseEvent): void`                      |                                |
| `handleKeyDown`              | `(event: KeyboardEvent): void`                   |                                |
| `handleScrollToEnd`          | `(): void`                                       |                                |
| `handleScrollToStart`        | `(): void`                                       |                                |
| `intersectionObserver`       | `(): void`                                       |                                |
| `preventIndicatorTransition` | `(): void`                                       |                                |
| `repositionIndicator`        | `(): void`                                       |                                |
| `setActiveTab`               | `(tab: OutlineTab, options?: { emitEvents?: boolean \| undefined; scrollBehavior?: "auto" \| "smooth" \| undefined; } \| undefined): void` |                                |
| `setAriaLabels`              | `(): void`                                       |                                |
| `show`                       | `(panel: string): void`                          | Shows the specified tab panel. |
| `syncIndicator`              | `(): void`                                       |                                |
| `syncTabsAndPanels`          | `(): void`                                       |                                |

## Events

| Event              | Type               | Description                   |
|--------------------|--------------------|-------------------------------|
| `outline-tab-hide` | `{ name: String }` | Emitted when a tab is hidden. |
| `outline-tab-show` | `{ name: String }` | Emitted when a tab is shown.  |

## Slots

| Name  | Description                                    |
|-------|------------------------------------------------|
|       | Used for grouping tab panels in the tab group. |
| `nav` | Used for grouping tabs in the tab group.       |

## CSS Shadow Parts

| Part                   | Description                                      |
|------------------------|--------------------------------------------------|
| `active-tab-indicator` | An element that displays the currently selected tab. This is a child of the tabs container. |
| `base`                 | The component's base wrapper.                    |
| `body`                 | The tab group body where tab panels are slotted in. |
| `nav`                  | The tab group navigation container.              |
| `tabs`                 | The container that wraps the slotted tabs.       |


# outline-tab-panel

## Properties

| Property | Attribute | Type      | Default | Description                             |
|----------|-----------|-----------|---------|-----------------------------------------|
| `active` | `active`  | `boolean` | false   | When true, the tab panel will be shown. |
| `name`   | `name`    | `string`  | ""      | The tab panel's name.                   |

## Slots

| Name | Description              |
|------|--------------------------|
|      | The tab panel's content. |

## CSS Shadow Parts

| Part   | Description                   |
|--------|-------------------------------|
| `base` | The component's base wrapper. |


# outline-tab

## Properties

| Property   | Attribute  | Type          | Default | Description                                      |
|------------|------------|---------------|---------|--------------------------------------------------|
| `active`   | `active`   | `boolean`     | false   | Draws the tab in an active state.                |
| `disabled` | `disabled` | `boolean`     | false   | Draws the tab in a disabled state.               |
| `panel`    | `panel`    | `string`      | ""      | The name of the tab panel the tab will control. The panel must be located in the same tab group. |
| `tab`      |            | `HTMLElement` |         |                                                  |

## Methods

| Method  | Type                                          | Description                 |
|---------|-----------------------------------------------|-----------------------------|
| `blur`  | `(): void`                                    | Removes focus from the tab. |
| `focus` | `(options?: FocusOptions \| undefined): void` | Sets focus to the tab.      |

## Slots

| Name | Description      |
|------|------------------|
|      | The tab's label. |

## CSS Shadow Parts

| Part   | Description                   |
|--------|-------------------------------|
| `base` | The component's base wrapper. |
