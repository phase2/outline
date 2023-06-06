# outline-accordion

Accordion Component

## Properties

| Property      | Attribute      | Type                      | Default                                          | Description                                      |
|---------------|----------------|---------------------------|--------------------------------------------------|--------------------------------------------------|
| `allOpen`     | `allOpen`      | `boolean`                 | false                                            | Set to 'true' to open all panels at once. Specifically for enhanced editor experience. |
| `clean`       | `clean`        | `boolean`                 | false                                            | Sets to 'clean' variant                          |
| `isMobile`    |                | `() => "mobile" \| null`  | "() => (this.mobileController.isMobile ? 'mobile' : null)" |                                                  |
| `panels`      |                | `OutlineAccordionPanel[]` |                                                  | Reference to <outline-accordion-panels> in panels slot. |
| `singlePanel` | `single-panel` | `boolean`                 | false                                            | Set to 'true' to create an accordion that can only have one panel open at a time. |
| `slots`       |                | `SlotsController`         | "new SlotsController(this)"                      |                                                  |

## Methods

| Method              | Type                           |
|---------------------|--------------------------------|
| `handleKeyboardNav` | `(event: KeyboardEvent): void` |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | label: The title text for the accordion component. |
