# outline-section-link

The Outline Section Link component

## Properties

| Property | Type             | Default                                          |
|----------|------------------|--------------------------------------------------|
| `slots`  | `SlotController` | "new SlotController(\n    this, // This, the host element.\n    false // To shift or not to shift LightDom nodes to ShadowDOM.\n  )" |

## Slots

| Name    | Description     |
|---------|-----------------|
| `badge` | Slot for badge. |
| `link`  | Slot for link.  |


# outline-swatch-set

Color swatch set

## Properties

| Property | Attribute | Type        | Default   |
|----------|-----------|-------------|-----------|
| `set`    | `set`     | `SwatchSet` | "outline" |


# outline-swatch

Color swatch

## Properties

| Property | Attribute | Type               | Default |
|----------|-----------|--------------------|---------|
| `color`  | `color`   | `string`           | "blue"  |
| `set`    | `set`     | `OutlineSwatchSet` | "brand" |
