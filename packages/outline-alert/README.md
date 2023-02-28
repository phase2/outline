# outline-alert

The Outline Alert component

## Properties

| Property         | Attribute        | Type                                          | Default | Description                                   |
|------------------|------------------|-----------------------------------------------|---------|-----------------------------------------------|
| `isInteractive`  | `isInteractive`  | `boolean`                                     | false   | This is important context for screen readers. |
| `shouldShowIcon` | `shouldShowIcon` | `boolean`                                     | true    |                                               |
| `size`           | `size`           | `"small" \| "large"`                          | "large" |                                               |
| `statusType`     | `statusType`     | `"info" \| "warning" \| "error" \| "success"` | "info"  |                                               |

## Slots

| Name      | Description              |
|-----------|--------------------------|
| `default` | The alert contents.      |
| `header`  | The header in the alert. |

## CSS Custom Properties

| Property                   | Description                                      |
|----------------------------|--------------------------------------------------|
| `--outline-alert--error`   | background: The background color for the error alert. |
| `--outline-alert--info`    | background: The background color for the info alert. |
| `--outline-alert--success` | background: The background color for the success alert. |
| `--outline-alert--warning` | background: The background color for the warning alert. |
