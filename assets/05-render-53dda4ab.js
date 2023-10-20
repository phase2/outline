import{j as e}from"./jsx-runtime-f69cb261.js";import{M as i}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as o}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function r(t){const n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},o(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Guides/Component Development/Coding Guide & Standards/Render",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h2,{id:"description",children:"Description"}),e.jsxs(n.p,{children:["The Lit ",e.jsx(n.code,{children:"render"}),` method is what allows us to compose and return any markup required for our component.
In this simple example, this render function is simply returning hard coded HTML markup. Most web components
we develop would never contain just hard coded HTML, as the components are designed to be flexible and reusable,
which calls for a more dynamic `,e.jsx(n.code,{children:"render"})," method. Yet, there’s absolutely nothing wrong with returning simple HTML markup exactly as shown below."]}),e.jsx(n.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(n.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(n.h2,{id:"render-method",children:"Render Method"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`...  
  render(): TemplateResult { 
    return html\`
      <div>
        <p>
          Simple "hard coded" paragraph/element inside the component's
          ShadowDOM.
        </p>
      </div>
    \`;
  }
  ...
}
`})}),`
`,e.jsx("hr",{}),`
`,e.jsx(n.h2,{id:"partial-templates",children:"Partial Templates"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`...  
  render(): TemplateResult { 
    return html\`\${headerTemplate}\`;
  } 
  
  /* Example usage of a partial template, implemented above * in the render() function. */ 
    
  headerTemplate(): TemplateResult { 
    if (boolProperty) { 
      return html\`
        <h1>Hello World</h1>
      \`;
    } 
    else { 
      return html\`
        <h1>Hola Mundo</h1>
      \`;
    } 
  }
  ...
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://lit.dev/docs/components/rendering/#composing-templates",target:"_blank",rel:"nofollow noopener noreferrer",children:"Partial Templates"})," are used to break up the render function into smaller chunks and allows for overriding of pieces of the template in subclasses. This is also great for extracting conditional logic from the render function."]})]})}function M(t={}){const{wrapper:n}=Object.assign({},o(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{M as default};
//# sourceMappingURL=05-render-53dda4ab.js.map
