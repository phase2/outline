# outline-icon

## Properties

| Property  | Attribute | Type                  | Default   | Description                                      |
|-----------|-----------|-----------------------|-----------|--------------------------------------------------|
| `label`   | `label`   | `string \| boolean`   | false     |                                                  |
| `library` | `library` | `string`              | "library" | The name of a registered custom icon library.    |
| `name`    | `name`    | `string \| undefined` |           | The name of the icon to draw.                    |
| `size`    | `size`    | `string \| boolean`   | "32px"    | The width and height of the icon.                |
| `src`     | `src`     | `string \| undefined` |           | An external URL of an SVG file.<br /><br />WARNING: Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks. |

## Methods

| Method    | Type                |
|-----------|---------------------|
| `redraw`  | `(): void`          |
| `setIcon` | `(): Promise<void>` |

## Events

| Event           | Description                                      |
|-----------------|--------------------------------------------------|
| `outline-error` | Emitted when the icon fails to load due to an error. |
| `outline-load`  | Emitted when the icon has loaded.                |

## CSS Shadow Parts

| Part   | Description                   |
|--------|-------------------------------|
| `base` | The component's base wrapper. |
