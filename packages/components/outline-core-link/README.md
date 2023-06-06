# outline-core-link

The Outline Core Link component

## Properties

| Property     | Attribute     | Type             | Description |
|--------------|---------------|------------------|-------------|
| `linkHref`   | `link-href`   | `string`         | Link url    |
| `linkRel`    | `link-rel`    | `LinkRelType`    | Link rel    |
| `linkTarget` | `link-target` | `LinkTargetType` | Link target |
| `linkText`   | `link-text`   | `string`         | Link text   |

## Methods

| Method             | Type                                             | Description                                      |
|--------------------|--------------------------------------------------|--------------------------------------------------|
| `isURLExternal`    | `(url: string): boolean`                         | Check to see if the link is external, pass target="_blank" and rel="external" if so. Returns true if the link is external. |
| `linkRelRender`    | `(): string \| undefined`                        | You can override Rel manually, but if not, we'll set it to "noreferrer noopener" if the link is external.<br />Tabnabbing vulnerability 🤯<br />TLDR: when a link has the attribute target="_blank", always add ref="noreferrer noopener"<br />https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#tabnabbing |
| `linkTargetRender` | `(): "_blank" \| "_self" \| "_parent" \| "_top" \| undefined` | You can override target manually, but if not, we'll set it to "_blank" if the link is external. |

## Slots

| Name | Description                        |
|------|------------------------------------|
|      | The default slot for this element. |

## CSS Custom Properties

| Property                                | Description                                      |
|-----------------------------------------|--------------------------------------------------|
| `--outline-core-link-color`             | default: The default link color.                 |
| `--outline-core-link-color-default`     | decoration: Text decoration for the default link. |
| `--outline-core-link-color-hover`       | decoration: Text decoration for the link when hovering. |
| `--outline-core-link-transition`        | property: The CSS transition property to use for the link. |
| `--outline-core-link-transition-timing` | function: The CSS transition timing function to use for the link. |
