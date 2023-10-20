import{j as e}from"./jsx-runtime-f69cb261.js";import{M as l}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as s}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function o(n){const t=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",pre:"pre",code:"code"},s(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Documentation/Guides/Component Development/Coding Guide & Standards/Slots",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(t.h2,{id:"description",children:"Description"}),e.jsx(t.p,{children:`Slots allow content to be passed into a web component.
This is useful for allowing the consumer to pass in content that will be rendered inside the component's ShadowDOM.`}),e.jsx(t.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(t.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(t.h2,{id:"declaring-slots",children:"Declaring Slots"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.a,{href:"https://lit.dev/docs/components/shadow-dom/#slots",target:"_blank",rel:"nofollow noopener noreferrer",children:"Slots"})," are a method that allows us to pass markup from the consumer into a placeholder inside the web component."]}),`
`,e.jsx(t.h3,{id:"jsdoc-for-slots",children:"JSDoc for slots"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`... 
/** 
 * The Outline Widget component 
 * @element outline-widget 
 * @slot default slot. 
 * @slot heading: for content above the default slot. 
 * @slot footer: for content below the default slot. 
 */ 
...
`})}),`
`,e.jsxs(t.h3,{id:"customelement-decorator",children:[e.jsx(t.code,{children:"@customElement"})," Decorator"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`... 
@customElement('outline-widget') 
export class OutlineWidget extends OutlineElement { 
... 
}
`})}),`
`,e.jsxs(t.h3,{id:"render-method-for-slots",children:[e.jsx(t.code,{children:"render()"})," method for slots"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`...
  render(): TemplateResult { 
    return html\`
      <slot name="heading"></slot>
      <slot></slot>
      <slot name="footer"></slot>
      <p>"Hard coded" element inside the component's ShadowDOM.</p>
    \` 
  }
...  
`})}),`
`,e.jsx(t.h3,{id:"default-placeholder-content-in-slots",children:"Default placeholder content in slots."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-typescript",children:`...
  render(): TemplateResult { 
    return html\`
      <slot name="heading">Default header content</slot>
      <slot>default content for the default slot</slot>
      <slot name="footer">default content for the footer slot</slot>
    \` 
  }
...
`})}),`
`,e.jsx("hr",{}),`
`,e.jsx(t.h2,{id:"using-slots",children:"Using Slots"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-html",children:`<!-- An example of passing content to the default slot. -->
<outline-widget>
  <p>This paragraph is content that will be passed to the default slot in the component.</p>
</outline-widget>

<!-- An example of passing content to the default slot and named slots. -->
<outline-widget>
  <p slot="heading">This is passed to the heading slot.</p>
  <p>This is passed to the default slot.</p>
  <p slot="footer">This is passed to the footer slot.</p>
</outline-widget>
`})})]})}function b(n={}){const{wrapper:t}=Object.assign({},s(),n.components);return t?e.jsx(t,Object.assign({},n,{children:e.jsx(o,n)})):o(n)}export{b as default};
//# sourceMappingURL=07-slots-7bc1f48d.js.map
