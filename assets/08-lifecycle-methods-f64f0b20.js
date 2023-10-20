import{j as e}from"./jsx-runtime-f69cb261.js";import{M as s}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as r}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function o(t){const n=Object.assign({h2:"h2",p:"p",a:"a",pre:"pre",code:"code"},r(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/Guides/Component Development/Coding Guide & Standards/Lifecycle",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h2,{id:"description",children:"Description"}),e.jsxs(n.p,{children:["Lit components use the standard custom element ",e.jsx(n.a,{href:"https://lit.dev/docs/components/lifecycle/",target:"_blank",rel:"nofollow noopener noreferrer",children:"lifecycle"})," methods. In addition Lit introduces a reactive update cycle that renders changes to DOM when reactive properties change."]}),e.jsx(n.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(n.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(n.h2,{id:"lifecycle-methods",children:"Lifecycle Methods"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// Called when an element is created. Also, it’s invoked when an existing
// element is upgraded, which happens when the definition for a custom 
// element is loaded after the element is already in the DOM. 
constructor() {
  super(); 
};

// Invoked when a component is added to the document's DOM.
connectedCallback() { 
  super.connectedCallback() 
};

// Called to determine whether an update cycle is required.
shouldUpdate() {};

// Called before update() to compute values needed during the update.
willUpdate() {};

// Called after the component's DOM has been updated the first time, 
// immediately before updated() is called. 
firstUpdated() {};

// Called to update the component's DOM. 
update(){ 
  super.update(); 
};

// Called to update the component's DOM. 
updated() {};

// Invoked when a component is removed from the document's DOM.
disconnectedCallback() { 
  super.disconnectedCallback() 
}; 

// Called by \`update()\` and should be implemented to return a renderable result 
// (such as a \`TemplateResult\`) used to render the component's DOM. 
render() {};
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://lit.dev/docs/components/lifecycle/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Lifecycle Methods"})," should be placed in approximate chronological order. The render function is placed at the bottom of these. Note that some lifecycle methods require ",e.jsx(n.code,{children:"super"})," to be called."]})]})}function M(t={}){const{wrapper:n}=Object.assign({},r(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(o,t)})):o(t)}export{M as default};
//# sourceMappingURL=08-lifecycle-methods-f64f0b20.js.map
