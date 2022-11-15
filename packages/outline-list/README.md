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

| Property                              | Description                                      |
|---------------------------------------|--------------------------------------------------|
| `--outline-list-default-spacing`      | The default spacing between items.               |
| `--outline-list-default-spacing-lg`   | The default spacing between items for large screens. |
| `--outline-list-default-spacing-md`   | The default spacing between items for medium screens. |
| `--outline-list-default-spacing-sm`   | The default spacing between items for small screens. |
| `--outline-list-default-spacing-xl`   | The default spacing between items for extra large screens. |
| `--outline-list-default-spacing-xs`   | The default spacing between items for extra small screens. |
| `--outline-list-default-spacing-xxl`  | The default spacing between items for extra extra large screens. |
| `--outline-list-default-spacing-xxxl` | The default spacing between items for extra extra extra large screens. |
