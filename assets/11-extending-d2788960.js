import{j as e}from"./jsx-runtime-f69cb261.js";import{M as s}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as o}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function i(t){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3",h4:"h4"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/Guides/Component Development/Coding Guide & Standards/Extending Components",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h2,{id:"description",children:"Description"}),e.jsx(n.p,{children:`This section will provide an in-depth overview of extending components with Lit and Outline.
The abiilty to extend components is one of, if not the core reason we utilize Lit as the standard for Outine component development.`}),e.jsx(n.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(n.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:["Whenever a ",e.jsx(n.code,{children:".ts"}),` file requires an update, it is recommended to extend that element to a specific element of your design system.
ie. when customizing the button component functionality beyond CSS styling, extend `,e.jsx(n.code,{children:"outline-button"})," to ",e.jsx(n.code,{children:"acme-button"}),"."]}),`
`,e.jsx(n.h2,{id:"extending-components-in-outline",children:"Extending Components in Outline"}),`
`,e.jsxs(n.p,{children:["Lit gives us the ability to extend the base ",e.jsx(n.code,{children:"LitElement"}),` component class as well as our own custom component classes.
In all of the previous examples, including the one below, you will notice the sample `,e.jsx(n.code,{children:"OutlineWidget"}),`
class extends `,e.jsx(n.code,{children:"OutlineElement"})," instead of ",e.jsx(n.code,{children:"LitElement"}),". ",e.jsx(n.code,{children:"OutlineElement"}),`
is our custom default class that already extends `,e.jsx(n.code,{children:"LitElement"}),`, and provides
some additional structure and functionality that can be utilized by any component
with `,e.jsx(n.code,{children:"OutlineElement"})," in its chain."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`... 
/** 
 * The Outline Widget component * @element outline-widget 
 */
@customElement('outline-widget') 
export class OutlineWidget extends OutlineElement { 
  ... 
}
`})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"overriding-styles",children:"Overriding Styles"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import componentStyles from './outline-widget.css.lit'; 
... 
/** 
 * The Outline Widget component * @element outline-widget 
 */
@customElement('outline-widget') 
export class OutlineWidget extends OutlineElement { 
  static styles: CSSResultGroup = [componentStyles]; 
  ...
}
`})}),`
`,e.jsx(n.p,{children:`The above example, one we have seen previously in the styles section,
already provides an example of overriding an element of a superclass.
This example shows us how to extend a component and override the styles
applied to the new component.`}),`
`,e.jsx(n.p,{children:`This scenario is common when the styling for a component is drastically different from
the defaults provided by the original component. Sometimes it is easier to start your
new components CSS from scratch, but retain all the functionality of the component.`}),`
`,e.jsx(n.h3,{id:"overriding-properties",children:"Overriding Properties"}),`
`,e.jsxs(n.p,{children:["In this example, we will declare ",e.jsx(n.code,{children:"OutlineWidget"}),", and create a property, ",e.jsx(n.code,{children:"booleanProperty"}),", which defaults to ",e.jsx(n.code,{children:"false"}),`.
Then we create an `,e.jsx(n.code,{children:"ExtendingOutlineWidget"})," component, and override the property by setting ",e.jsx(n.code,{children:"booleanProperty"})," to ",e.jsx(n.code,{children:"true"}),"."]}),`
`,e.jsxs(n.h4,{id:"class-outlinewidget",children:["Class ",e.jsx(n.code,{children:"OutlineWidget"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { OutlineElement } from '@phase2/outline-core'; 
... 
/** 
 * The Outline Widget component * @element outline-widget 
 */
@customElement('outline-widget') 
export class OutlineWidget extends OutlineElement { 
  /** 
   * This is our boolean property in our new component. 
   */ 
  @property({
    type: Boolean, 
    attribute: 'boolean-property'
  })
booleanProperty = false 
... 
}
`})}),`
`,e.jsxs(n.h4,{id:"class-extendingoutlinewidget",children:["Class ",e.jsx(n.code,{children:"ExtendingOutlineWidget"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { OutlineWidget } from 'path/to/outline-widget'; 
... 
/** 
 * The Extending Outline Widget component 
 * @element extending-outline-widget 
 */
@customElement('outline-widget') 
export class ExtendingOutlineWidget extends OutlineWidget { 
  /** 
   * This is our new component changing the default value of a property. 
   * It was originaly false inside of OutlineWidget. 
   */ 
  booleanProperty = true 
  ... 
}
`})})]})}function O(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(i,t)})):i(t)}export{O as default};
//# sourceMappingURL=11-extending-d2788960.js.map
