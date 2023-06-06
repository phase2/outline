# outline-container

The `outline-container` Web Component.

## Attributes

| Attribute           | Description                          |
|---------------------|--------------------------------------|
| `component-spacing` | Sets the spacing between components. |

## Properties

| Property           | Attribute         | Type      | Default | Description                                      |
|--------------------|-------------------|-----------|---------|--------------------------------------------------|
| `bottomMargin`     | `bottom-margin`   | `string`  |         | Sets the bottom margin of the container. Options are none, small, medium, and large. |
| `childSpacing`     | `child-spacing`   | `string`  |         |                                                  |
| `componentSpacing` |                   | `string`  |         | Sets the spacing between components.             |
| `containerWidth`   | `container-width` | `string`  | "wide"  | Sets the width of the container. Options are wide, medium, narrow, and full. |
| `justifyEnd`       | `justify-end`     | `boolean` | false   | Sets the container to justify content to the end. |
| `justifyStart`     | `justify-start`   | `boolean` | false   |                                                  |
| `topMargin`        | `top-margin`      | `string`  |         | The vertical space from the component above it (using Utopia fluid space variables defined in outline.theme.css, ie. space-3xl) |

## Slots

| Name | Description   |
|------|---------------|
|      | Default Slot. |
