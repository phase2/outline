# outline-image

The image component, with support for parallax scrolling.

## Properties

| Property         | Attribute     | Type                                             | Default                          | Description                                      |
|------------------|---------------|--------------------------------------------------|----------------------------------|--------------------------------------------------|
| `hasCaptionSlot` |               | `boolean`                                        |                                  |                                                  |
| `imageHref`      | `image-href`  | `string \| boolean`                              | false                            | Image url                                        |
| `imageLabel`     | `image-label` | `string \| boolean`                              | false                            | Image text                                       |
| `imageRatio`     | `image-ratio` | `"default" \| "1/1" \| "3/2" \| "3/4" \| "4/3" \| "5/4" \| "16/9" \| "9/16" \| "21/9"` |                                  | Image aspect ratio.<br /><br />This value can be customized per image usage.<br />It will work with the property usages of image-href and image-label.<br /><br />If using a slotted image, it will work if the structure is an<br />img tag wrapped in a picture tag. |
| `slots`          |               | `SlotController`                                 | "new SlotController(this, true)" |                                                  |

## Methods

| Method                | Type                                     |
|-----------------------|------------------------------------------|
| `captionSlotTemplate` | `(): TemplateResult<ResultType> \| null` |

## Slots

| Name      | Description                     |
|-----------|---------------------------------|
|           | The image to be presented.      |
| `caption` | The caption text for the image. |
