# outline-core-heading

## Properties

| Property            | Attribute            | Type                    | Description                                      |
|---------------------|----------------------|-------------------------|--------------------------------------------------|
| `additionalClasses` | `additional-classes` | `string`                | Additional CSS classes to apply to the heading element. |
| `level`             | `level`              | `string \| undefined`   | The tag to apply: h1 \| h2 \| h3 \| h4 \| h5 \| h6 |
| `size`              | `size`               | `AllowedHeadingSizes`   | The size of the heading.                         |
| `weight`            | `weight`             | `AllowedHeadingWeights` | The weight of the heading.                       |

## Methods

| Method             | Type                                             |
|--------------------|--------------------------------------------------|
| `fullMarkupInSlot` | `(classes: { [key: string]: string \| boolean; }): TemplateResult<ResultType>` |
| `generateHeading`  | `(classes: { [key: string]: string \| boolean; }): TemplateResult<ResultType>` |
