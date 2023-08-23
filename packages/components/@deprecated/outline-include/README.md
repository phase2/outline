# outline-include

## Properties

| Property       | Attribute       | Type                                   | Default | Description                                      |
|----------------|-----------------|----------------------------------------|---------|--------------------------------------------------|
| `allowScripts` | `allow-scripts` | `boolean`                              | false   | Allows included scripts to be executed. You must ensure the content you're including is trusted, otherwise this<br />option can lead to XSS vulnerabilities in your app! |
| `mode`         | `mode`          | `"cors" \| "no-cors" \| "same-origin"` | "cors"  | The fetch mode to use.                           |
| `src`          | `src`           | `string`                               |         | The location of the HTML file to include.<br /><br />WARNING: Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks. |

## Methods

| Method            | Type                                |
|-------------------|-------------------------------------|
| `executeScript`   | `(script: HTMLScriptElement): void` |
| `handleSrcChange` | `(): Promise<void>`                 |

## Events

| Event           | Type                 | Description                                      |
|-----------------|----------------------|--------------------------------------------------|
| `outline-error` | `{ status: number }` | Emitted when the included file fails to load due to an error. |
| `outline-load`  |                      | Emitted when the included file is loaded.        |
