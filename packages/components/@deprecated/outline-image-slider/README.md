# outline-image-slider

The Image Slider component

## Properties

| Property            | Type                                 | Default                                          |
|---------------------|--------------------------------------|--------------------------------------------------|
| `imageListTemplate` | `() => TemplateResult<ResultType>[]` | "(): TemplateResult[] => {\n    let counter = 0;\n    const templateArr: TemplateResult[] = [];\n\n    while (counter < this.childElementCount) {\n      templateArr.push(\n        html` <div\n          class=\"splide__slide\"\n          role=\"group\"\n          aria-label=\"slide ${counter + 1} of ${this.childElementCount}\"\n        >\n          <slot name=\"image-${counter + 1}\"></slot>\n          <div aria-hidden=\"true\" class=\"slide-count\">\n            <span>${counter + 1} / ${this.childElementCount}</span>\n          </div>\n        </div>`\n      );\n\n      counter++;\n    }\n\n    return templateArr;\n  }" |
| `nextBtn`           | `HTMLElement`                        |                                                  |
| `observer`          | `MutationObserver`                   |                                                  |
| `prevBtn`           | `HTMLElement`                        |                                                  |
| `setSlots`          | `() => void`                         | "() => {\n    let counter = 0;\n    while (counter <= this.childElementCount) {\n      if (this.children[counter]) {\n        this.children[counter].setAttribute('slot', `image-${counter + 1}`);\n      }\n      counter++;\n    }\n    this.requestUpdate();\n  }" |
| `splide`            | `Splide`                             |                                                  |
| `splideEl`          | `HTMLElement`                        |                                                  |

## Slots

| Name             | Description                                      |
|------------------|--------------------------------------------------|
| `image-<number>` | slots are generated in code, component accepts stack of desired elements to display |
