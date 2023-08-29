# outline-link

The Outline  Link component

## Properties

| Property     | Attribute     | Type                | Default | Description |
|--------------|---------------|---------------------|---------|-------------|
| `linkHref`   | `link-href`   | `string \| boolean` | false   | Link url    |
| `linkRel`    | `link-rel`    | `LinkRelType`       |         | Link rel    |
| `linkTarget` | `link-target` | `LinkTargetType`    |         | Link target |
| `linkText`   | `link-text`   | `string \| boolean` | false   | Link text   |

## Slots

| Name | Description                        |
|------|------------------------------------|
|      | The default slot for this element. |

## CSS Custom Properties

| Property                           | Description                                      |
|------------------------------------|--------------------------------------------------|
| `--outline-link-color`             | default: The default link color.                 |
| `--outline-link-color-default`     | decoration: Text decoration for the default link. |
| `--outline-link-color-hover`       | decoration: Text decoration for the link when hovering. |
| `--outline-link-transition`        | property: The CSS transition property to use for the link. |
| `--outline-link-transition-timing` | function: The CSS transition timing function to use for the link. |
