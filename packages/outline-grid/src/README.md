# outline-column

The Outline Column component

## Properties

| Property          | Attribute           | Type                                       | Default  | Description                                      |
|-------------------|---------------------|--------------------------------------------|----------|--------------------------------------------------|
| `borderGapSize`   | `border-gap-size`   | `"small" \| "large" \| "medium" \| "none"` |          | Handles the spacing around border.               |
| `colSpan2xl`      | `col-span-2xl`      | `colSpanRange`                             |          | The number of columns wide this column should be on extra extra large+ screens. |
| `colSpanDefault`  | `col-span-default`  | `colSpanRange`                             | 12       | The number of columns wide this column should be. |
| `colSpanLg`       | `col-span-lg`       | `colSpanRange`                             |          | The number of columns wide this column should be on large+ screens. |
| `colSpanMd`       | `col-span-md`       | `colSpanRange`                             |          | The number of columns wide this column should be on medium+ screens. |
| `colSpanSm`       | `col-span-sm`       | `colSpanRange`                             |          | The number of columns wide this column should be on small+ screens. |
| `colSpanXl`       | `col-span-xl`       | `colSpanRange`                             |          | The number of columns wide this column should be on extra large+ screens. |
| `contentAlign`    | `content-align`     | `"top" \| "middle" \| "bottom"`            | "middle" | The vertical placement of content inside of the column. |
| `hasLeftDivider`  | `has-left-divider`  | `boolean`                                  |          | Handles the display of a left divider.           |
| `hasRightDivider` | `has-right-divider` | `boolean`                                  |          | Handles the display of a right divider.          |
| `rowSpan`         | `row-span`          | `rowSpanRange`                             | 1        | The number of rows this column will span.        |

## Slots

| Name | Description                        |
|------|------------------------------------|
|      | The default slot for this element. |
