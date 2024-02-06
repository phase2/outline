# outline-accordion-panel

The OutlineAccordionPanel component

## Properties

| Property | Attribute | Type      | Default                                        | Description                                      |
|----------|-----------|-----------|------------------------------------------------|--------------------------------------------------|
| `active` | `active`  | `boolean` | false                                          | Wether the panel is active/open.<br />Controlled by parent accordion component. |
| `clean`  | `clean`   | `boolean` | false                                          | Sets to 'clean' variant.<br />Controlled by parent accordion component. |
| `id`     | `id`      | `string`  | "Math.floor(Math.random() * 10000).toString()" | Used to provided a unique ID<br />for accordion component and accessibility purposes. |

## Methods

| Method      | Type       |
|-------------|------------|
| `setActive` | `(): void` |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | heading: The title text for the panel component. |
