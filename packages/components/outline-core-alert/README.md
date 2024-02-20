# outline-core-alert

The Outline Core Alert component

## Properties

| Property             | Attribute        | Type                                          | Default | Description                                   |
|----------------------|------------------|-----------------------------------------------|---------|-----------------------------------------------|
| `adoptedStylesheets` |                  | `AdoptedStylesheets`                          |         |                                               |
| `debug`              |                  | `boolean`                                     | false   |                                               |
| `isInteractive`      | `is-interactive` | `boolean`                                     | false   | This is important context for screen readers. |
| `status`             | `status`         | `"info" \| "warning" \| "error" \| "success"` | "info"  |                                               |

## Slots

| Name         | Description                                    |
|--------------|------------------------------------------------|
| `default`    | The alert contents.                            |
| `header`     | The header in the alert.                       |
| `icon-end`   | The icon to display at the end of the alert.   |
| `icon-start` | The icon to display at the start of the alert. |

## CSS Custom Properties

| Property                   | Description                                      |
|----------------------------|--------------------------------------------------|
| `--outline-alert--error`   | background: The background color for the error alert. |
| `--outline-alert--info`    | background: The background color for the info alert. |
| `--outline-alert--success` | background: The background color for the success alert. |
| `--outline-alert--warning` | background: The background color for the warning alert. |
