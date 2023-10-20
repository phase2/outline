import{j as e}from"./jsx-runtime-f69cb261.js";import{M as o}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as i}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function n(t){const r=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Documentation/Guides/Component Development/Coding Guide & Standards/Properties",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(r.h2,{id:"description",children:"Description"}),e.jsx(r.p,{children:"Lit components receive input and store their state as JavaScript class fields or properties."}),e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://lit.dev/docs/components/properties/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Reactive properties"})," are properties that can trigger the reactive update cycle when changed, re-rendering the component, and optionally be read or written to attributes."]}),e.jsx(r.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(r.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(r.h3,{id:"property-usage-basics",children:"Property usage basics"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Properties should be commented using ",e.jsx(r.a,{href:"https://github.com/jsdoc/jsdoc",target:"_blank",rel:"nofollow noopener noreferrer",children:"JSDoc"}),"."]}),`
`,e.jsx(r.li,{children:"Each property should provide a comment including a description of the attribute functionality or purpose."}),`
`,e.jsxs(r.li,{children:["Pass to ",e.jsx(r.code,{children:"type"})," the appropriate ",e.jsx(r.a,{href:"https://lit.dev/docs/components/properties/#conversion-type",target:"_blank",rel:"nofollow noopener noreferrer",children:"converter"})," (",e.jsx(r.code,{children:"String"}),", ",e.jsx(r.code,{children:"Boolean"}),", etc.)."]}),`
`,e.jsxs(r.li,{children:["Pass to ",e.jsx(r.code,{children:"attribute"})," an attribute name in kebab-case."]}),`
`,e.jsxs(r.li,{children:["Attribute names must not collide with HTML standard ones ",e.jsx(r.code,{children:"title"}),", ",e.jsx(r.code,{children:"href"}),", etc.",`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["This means it is best to name properties more like ",e.jsx(r.code,{children:"link-title"}),", ",e.jsx(r.code,{children:"link-href"}),", etc."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(r.h3,{id:"property-with-default-value",children:"Property with default value"}),`
`,e.jsxs(r.p,{children:["The below sample uses the ",e.jsx(r.code,{children:"stringProperty = ''"})," to provide a default value to the property if it is not supplied or calculated by the component itself."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`@property({
  type: String,
  attribute: 'string-property'
}) 
stringProperty = 'Default Property Value'
`})}),`
`,e.jsx(r.h3,{id:"property-without-default-value",children:"Property without default value"}),`
`,e.jsxs(r.p,{children:["The below sample simply uses the variable name ",e.jsx(r.code,{children:"stringProperty"})," after the ",e.jsx(r.code,{children:"@property"})," decorator to not supply a default value, thus making it ",e.jsx(r.code,{children:"NULL"})," by default."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`@property({
  type: String,
  attribute: 'string-property'
})
stringProperty
`})}),`
`,e.jsx(r.h2,{id:"property-types",children:"Property Types"}),`
`,e.jsx(r.h3,{id:"string",children:"String"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`@property({
  type: String, 
  attribute: 'string-property'
}) 
stringProperty = 'Default string value'
`})}),`
`,e.jsx(r.h3,{id:"number",children:"Number"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`@property({
  type: Number, 
  attribute: 'number-property'
}) 
numberProperty = 42
`})}),`
`,e.jsx(r.h3,{id:"boolean",children:"Boolean"}),`
`,e.jsxs(r.p,{children:["Boolean properties are a special case, and should always default to a value of ",e.jsx(r.code,{children:"false"}),`.
This is so that the property can be accurately passed via HTML markup, which only passes a string value which returns as truthy.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`@property({
  type: Boolean, 
  attribute: 'boolean-property'
}) 
booleanProperty = false
`})}),`
`,e.jsxs(r.p,{children:["In the above example, a usage of this component would look like ",e.jsx(r.code,{children:"<my-component boolean-property>"})," means the value of ",e.jsx(r.code,{children:"booleanProperty"})," is ",e.jsx(r.code,{children:"true"}),`.
The simple exclusion of the attribute on the HTML element would then represent the default value of `,e.jsx(r.code,{children:"false"}),"."]}),`
`,e.jsx(r.h3,{id:"object",children:"Object"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`@property({
  type: Object, 
  attribute: 'object-property'
}) 
objectProperty = { 
  thingOne: 'value', 
  thingTwo: 'value' 
}
`})}),`
`,e.jsx(r.h3,{id:"array",children:"Array"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`@property({
  type: Array,
  attribute: 'array-property'
}) 
arrayProperty = [ 
  { thing: 'value' }, 
  { thing: 'value' } 
]
`})})]})}function v(t={}){const{wrapper:r}=Object.assign({},i(),t.components);return r?e.jsx(r,Object.assign({},t,{children:e.jsx(n,t)})):n(t)}export{v as default};
//# sourceMappingURL=06-properties-5104907c.js.map
