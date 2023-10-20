import{j as e}from"./jsx-runtime-f69cb261.js";import{M as r}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as o}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function i(n){const t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",a:"a",pre:"pre",code:"code"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Documentation/Guides/Component Development/Coding Guide & Standards/Controllers",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(t.h2,{id:"description",children:"Description"}),e.jsx(t.p,{children:`Building web components with Outline and Lit2 is a straightforward process thanks to the many tools and extensive documentation we have at the ready.
The following section will go over some of the basics as well as reference related resources where appropriate to serve as a basis of how things are, and will be built in your Outline design system.`}),e.jsx(t.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(t.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(t.h2,{id:"implementation-standards",children:"Implementation Standards"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.a,{href:"https://lit.dev/docs/composition/controllers/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Reactive Controllers"})," should be instantiated immediately below the style definition."]}),`
`]}),`
`,e.jsx(t.h2,{id:"reactive-controllers",children:"Reactive Controllers"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`import { reactiveController } from './reactive-controller'; 
...

/** 
 * The Outline Widget component 
 * @element outline-widget 
 */ 

@customElement('outline-widget')

export class OutlineWidget extends OutlineElement { 
  static styles: CSSResultGroup = [componentStyles]; 
  const reactiveController = new ReactiveController(this); 
  ... 
}
`})})]})}function b(n={}){const{wrapper:t}=Object.assign({},o(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(i,n)})):i(n)}export{b as default};
//# sourceMappingURL=04-controllers-e5e857d1.js.map
