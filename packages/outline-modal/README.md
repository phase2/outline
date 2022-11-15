# outline-modal

The Outline Modal component

## Properties

| Property                 | Attribute                | Type                                             | Default  | Description                                      |
|--------------------------|--------------------------|--------------------------------------------------|----------|--------------------------------------------------|
| `close`                  |                          | `() => void`                                     |          |                                                  |
| `elementToFocusSelector` | `elementToFocusSelector` | `string \| undefined`                            |          |                                                  |
| `isOpen`                 |                          | `boolean`                                        | false    |                                                  |
| `open`                   |                          | `() => void`                                     |          |                                                  |
| `shouldForceAction`      | `shouldForceAction`      | `boolean`                                        | false    | If we force the user to take an action, the consumer must provide a way to close the modal on their own. |
| `size`                   | `size`                   | `"small" \| "medium" \| "full-screen" \| undefined` | "medium" |                                                  |

## Methods

| Method  | Type                |
|---------|---------------------|
| `close` | `(): Promise<void>` |
| `open`  | `(): Promise<void>` |

## Events

| Event    |
|----------|
| `closed` |
| `opened` |

## Slots

| Name                                       | Description                                      |
|--------------------------------------------|--------------------------------------------------|
| `default`                                  | The modal contents                               |
| `outline-modal--accessibility-description` | The accessibility description which is used by screen readers. |
| `outline-modal--header`                    | The header in the modal                          |
| `outline-modal--trigger`                   | The trigger for the modal                        |
