# outline-button

The Outline Button component

## Properties

| Property        | Attribute        | Type             | Default                                          | Description                                      |
|-----------------|------------------|------------------|--------------------------------------------------|--------------------------------------------------|
| `buttonLabel`   | `button-label`   | `string`         |                                                  | ARIA label attribute to pass down to the resulting button or a<br />element. This is required for accessibility if we use a button<br />with an icon only. |
| `buttonSize`    | `button-size`    | `string`         | "medium"                                         | The button size to use.                          |
| `buttonTarget`  | `button-target`  | `string`         |                                                  | The target to use for a link, used in conjunction with the url attribute. |
| `buttonUrl`     | `button-url`     | `string`         |                                                  | The url to use for a link. This will render an anchor element.<br />Do not set this prop if you want to render a button element. |
| `buttonVariant` | `button-variant` | `string`         | "primary"                                        | The button style variant to use.                 |
| `hasLeftIcon`   |                  | `boolean`        |                                                  |                                                  |
| `hasRightIcon`  |                  | `boolean`        |                                                  |                                                  |
| `isDisabled`    | `is-disabled`    | `boolean`        | false                                            | Whether the button is disabled. Only applies to<br />implementations not using the url property |
| `onClick`       | `onClick`        | `() => void`     |                                                  | A click handler to be passed only to onClick. DO NOT USE @click on this component. |
| `onKeyUp`       | `onKeyUp`        | `() => void`     |                                                  | A keyUp handler to be passed to the onKeyUp. DO NOT USE @keyup on this component. |
| `slots`         |                  | `SlotController` | "new SlotController(\n    this, // This, the host element.\n    false // To shift or not to shift LightDom nodes to ShadowDOM.\n  )" |                                                  |

## Methods

| Method         | Type                                             | Description                                      |
|----------------|--------------------------------------------------|--------------------------------------------------|
| `iconTemplate` | `(exists: boolean, slot: string): TemplateResult<ResultType> \| null` | Icon template<br /><br />**exists**: Whether the icon slot exists.<br />**slot**: The slot name to use. |

## Slots

| Name    | Description                         |
|---------|-------------------------------------|
|         | default slot, used for button text. |
| `left`  | slot used for left side icon.       |
| `right` | slot used for right side icon.      |
