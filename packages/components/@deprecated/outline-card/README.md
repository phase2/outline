# outline-card

The Card component.

## Properties

| Property         | Attribute        | Type            | Default | Description                                      |
|------------------|------------------|-----------------|---------|--------------------------------------------------|
| `bgColorContent` | `bgColorContent` | `AllowedColors` |         | The color class to apply to the content slot.    |
| `bgColorFooter`  | `bgColorFooter`  | `AllowedColors` |         | The color class to apply to the footer slot.     |
| `bgColorHeader`  | `bgColorHeader`  | `AllowedColors` |         | The color class to apply to the header slot.     |
| `hasContentSlot` |                  | `boolean`       |         |                                                  |
| `hasFooterSlot`  |                  | `boolean`       |         |                                                  |
| `hasHeaderSlot`  |                  | `boolean`       |         |                                                  |
| `hasShadow`      | `has-shadow`     | `boolean`       | false   | Whether or not this card has a shadow.           |
| `isRounded`      | `is-rounded`     | `boolean`       | false   | Whether or not this is a nested container. If it's nested, remove padding. |

## Methods

| Method            | Type                                             |
|-------------------|--------------------------------------------------|
| `contentTemplate` | `(contentBackgroundClasses: ClassInfo): TemplateResult<ResultType> \| null` |
| `footerTemplate`  | `(footerBackgroundClasses: ClassInfo): TemplateResult<ResultType> \| null` |
| `headerTemplate`  | `(headerBackgroundClasses: ClassInfo): TemplateResult<ResultType> \| null` |

## Slots

| Name      | Description                                  |
|-----------|----------------------------------------------|
| `content` | The primary slot to render the card content. |
| `footer`  | The footer slot.                             |
| `header`  | The header slot.                             |
