# outline-list

The OutlineList component

## Properties

| Property      | Attribute     | Type                                | Default  | Description                                      |
|---------------|---------------|-------------------------------------|----------|--------------------------------------------------|
| `listType`    | `list-type`   | `"ol" \| "ul" \| "div"`             |          | Determines which type of list is rendered.<br />ol \| ul \| div |
| `navLabel`    | `nav-label`   | `string \| undefined`               |          | If set will wrap list in a nav tag<br />with the passed string set as the aria-label. |
| `orientation` | `orientation` | `"column" \| "row" \| "col-center"` | "column" | Sets orientation of list.<br />column \| row     |

## Methods

| Method     | Type                                      |
|------------|-------------------------------------------|
| `listCase` | `(classes: ClassInfo): TemplateResult<1>` |

## Slots

| Name | Description   |
|------|---------------|
|      | default slot. |

## CSS Custom Properties

| Property                       | Description                                      |
|--------------------------------|--------------------------------------------------|
| `--outline-list--spacing`      | The default spacing between items.               |
| `--outline-list--spacing-lg`   | The default spacing between items for large screens. |
| `--outline-list--spacing-md`   | The default spacing between items for medium screens. |
| `--outline-list--spacing-sm`   | The default spacing between items for small screens. |
| `--outline-list--spacing-xl`   | The default spacing between items for extra large screens. |
| `--outline-list--spacing-xs`   | The default spacing between items for extra small screens. |
| `--outline-list--spacing-xxl`  | The default spacing between items for extra extra large screens. |
| `--outline-list--spacing-xxxl` | The default spacing between items for extra extra extra large screens. |
