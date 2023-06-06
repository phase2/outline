# outline-dropdown

## Properties

| Property            | Attribute         | Type                       | Default                     | Description                                      |
|---------------------|-------------------|----------------------------|-----------------------------|--------------------------------------------------|
| `containingElement` |                   | `HTMLElement \| undefined` |                             | The dropdown will close when the user interacts outside of this element (e.g. clicking). |
| `hasDropdown`       |                   | `boolean`                  |                             |                                                  |
| `hasFooter`         |                   | `boolean`                  |                             |                                                  |
| `hasHeader`         |                   | `boolean`                  |                             |                                                  |
| `isDisabled`        | `is-disabled`     | `boolean`                  | false                       | Disables the dropdown so the panel will not open. |
| `isLink`            |                   | `boolean`                  | false                       | Determines if the dropdown trigger is a link or not. |
| `isOpen`            | `is-open`         | `boolean`                  | false                       | Indicates whether or not the dropdown is open.<br />You can use this in lieu of the show/hide methods. |
| `panel`             |                   | `HTMLElement`              |                             |                                                  |
| `slots`             |                   | `SlotsController`          | "new SlotsController(this)" |                                                  |
| `trigger`           |                   | `HTMLElement`              |                             |                                                  |
| `triggerLabel`      | `trigger-label`   | `string`                   |                             | ARIA label attribute to pass down to the resulting button or a<br />element. This is required for accessibility if we use a button<br />with an icon only. |
| `triggerTarget`     | `trigger-target`  | `LinkTargetType`           |                             | The target to use for a link, used in conjunction with the url attribute. |
| `triggerText`       | `trigger-text`    | `string`                   |                             | Visible text for the button/link of the trigger element. |
| `triggerUrl`        | `trigger-url`     | `string`                   |                             | The url to use for a link. This will render an anchor element.<br />Do not set this prop if you want to render a button element. |
| `triggerVariant`    | `trigger-variant` | `ButtonVariant`            | "link"                      | The button style variant to use.                 |

## Methods

| Method                    | Type                                             | Description                                  |
|---------------------------|--------------------------------------------------|----------------------------------------------|
| `buttonTemplate`          | `(): TemplateResult<ResultType> \| null`         | Template partial for the "button" rendering. |
| `dropdownTemplate`        | `(): TemplateResult<ResultType> \| null`         | Template partial for the dropdown rendering. |
| `focusOnTrigger`          | `(): void`                                       |                                              |
| `footerTemplate`          | `(): TemplateResult<ResultType> \| null`         | Template partial for the footer rendering.   |
| `handleButtonTrigger`     | `(event: KeyboardEvent): void`                   |                                              |
| `handleDocumentMouseDown` | `(event: MouseEvent): void`                      |                                              |
| `handleEnterKeyDown`      | `(event: KeyboardEvent, isIcon?: boolean): void` |                                              |
| `handleEscKeyDown`        | `(event: KeyboardEvent): void`                   |                                              |
| `handleFocusChange`       | `(): void`                                       |                                              |
| `handleHoverStyles`       | `(): void`                                       |                                              |
| `handleIconClick`         | `(event: MouseEvent): void`                      |                                              |
| `handleIconTrigger`       | `(event: KeyboardEvent): void`                   |                                              |
| `handleOpenChange`        | `(): Promise<void>`                              |                                              |
| `handlePanelKeystrokes`   | `(event: KeyboardEvent): void`                   |                                              |
| `headerTemplate`          | `(): TemplateResult<ResultType> \| null`         | Template partial for the header rendering.   |
| `hide`                    | `(): Promise<void>`                              | Hides the dropdown panel.                    |
| `iconTemplate`            | `(): TemplateResult<ResultType> \| null`         | Template partial for the icon rendering.     |
| `iconWrapperTemplate`     | `(): TemplateResult<ResultType> \| null`         | Template partial for the icon rendering.     |
| `show`                    | `(): Promise<void>`                              | Shows the dropdown panel.                    |

## Events

| Event                | Description                                      |
|----------------------|--------------------------------------------------|
| `outline-after-hide` | Emitted after the dropdown closes and all animations are complete. |
| `outline-after-show` | Emitted after the dropdown opens and all animations are complete. |
| `outline-hide`       | Emitted when the dropdown closes.                |
| `outline-show`       | Emitted when the dropdown opens.                 |

## Slots

| Name       | Description                                      |
|------------|--------------------------------------------------|
| `dropdown` | Content to be rendered in the dropdown.          |
| `footer`   | Content to be rendered in the footer of the dropdown. |
| `header`   | Content to be rendered in the header of the dropdown. |

## CSS Shadow Parts

| Part      | Description                                      |
|-----------|--------------------------------------------------|
| `base`    | The component's base wrapper.                    |
| `panel`   | The panel that gets shown when the dropdown is open. |
| `trigger` | The container that wraps the trigger.            |
