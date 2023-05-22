# outline-breadcrumbs

The Outline  Breadcrumbs component

## Properties

| Property          | Attribute          | Type             | Default                                          | Description                                    |
|-------------------|--------------------|------------------|--------------------------------------------------|------------------------------------------------|
| `slots`           |                    | `SlotController` | "new SlotController(\n    this, // This, the host element.\n    true // To shift or not to shift LightDom nodes to ShadowDOM.\n  )" |                                                |
| `stringSeparator` | `string-separator` | `string`         | "/"                                              | Property to define the value of the separator. |

## Slots

| Name | Description                        |
|------|------------------------------------|
|      | The default slot for this element. |

## CSS Custom Properties

| Property                                | Description                                      |
|-----------------------------------------|--------------------------------------------------|
| `--outline-breadcrumb--bg`              | color: The background color for the breadcrumbs. |
| `--outline-breadcrumb--link-color`      | default: The default link color for the breadcrumbs. |
| `--outline-breadcrumb--link-decoration` | default: The default text decoration for the breadcrumb links. |
| `--outline-breadcrumb--separator`       | spacing: The spacing between the breadcrumbs.    |
| `--outline-breadcrumb--text-color`      | default: The default text color for the breadcrumbs. |
