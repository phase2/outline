import{j as n}from"./jsx-runtime-f69cb261.js";import{M as s}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as t}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function o(i){const e=Object.assign({h1:"h1",h2:"h2",p:"p",em:"em",code:"code",ul:"ul",li:"li",pre:"pre",blockquote:"blockquote"},t(),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Documentation/Guides/Tooling & Commands/Production Builds",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,n.jsx(e.h1,{id:"production-builds",children:"Production builds"}),`
`,n.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[n.jsx(e.h2,{id:"documentation-status",children:"Documentation Status"}),n.jsxs("outline-alert",{status:"warning",size:"large",children:[n.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),n.jsx("p",{children:n.jsx(e.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,n.jsx(e.h2,{id:"introduction",children:"Introduction"}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"This is handled by the GitHub Actions"})}),`
`,n.jsxs(e.p,{children:["Runs both ",n.jsx(e.code,{children:"yarn tsc"})," and ",n.jsx(e.code,{children:"yarn rollup"})," to handle the following:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Packaging individual components to ",n.jsx(e.code,{children:"dist"})," directory."]}),`
`,n.jsxs(e.li,{children:["Packaging modern and legacy builds of all components to ",n.jsx(e.code,{children:"dist"})," directory."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn build
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"To only run the rollup build, which handles the component bundling into modern and legacy builds:"}),`
`]}),`
`,n.jsx(e.h2,{id:"one-time-build",children:"One time build"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn rollup
`})}),`
`,n.jsx(e.h2,{id:"enable-in-watch-mode",children:"Enable in watch mode"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn rollup.watch
`})})]})}function w(i={}){const{wrapper:e}=Object.assign({},t(),i.components);return e?n.jsx(e,Object.assign({},i,{children:n.jsx(o,i)})):o(i)}export{w as default};
//# sourceMappingURL=04-production-builds-7c07dcbe.js.map
