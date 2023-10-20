import{j as e}from"./jsx-runtime-f69cb261.js";import{M as i}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as s}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function r(t){const n=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Guides/Component Development/Coding Guide & Standards/Event Handlers",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h2,{id:"description",children:"Description"}),e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://lit.dev/docs/components/events/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Events"}),` are the standard way that elements communicate changes.
These changes typically occur due to user interaction.
For example, a button dispatches a click event when a user clicks on it;
an input dispatches a change event when the user enters a value in it.`]}),e.jsx(n.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(n.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(n.h2,{id:"event-handlers",children:"Event Handlers"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`eventHandler = (e: Event) => { 
  e.preventDefault()   
  console.log('eventhandler fired')
}
`})}),`
`,e.jsx(n.p,{children:"Event handlers are placed below the template partials."})]})}function b(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{b as default};
//# sourceMappingURL=09-events-9ed82897.js.map
