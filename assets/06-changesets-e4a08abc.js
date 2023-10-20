import{j as e}from"./jsx-runtime-f69cb261.js";import{M as a}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as t}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function r(s){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code"},t(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Documentation/Guides/Tooling & Commands/Versioning with Changesets",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h1,{id:"creating-changesets",children:"Creating Changesets"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This document will outline how to use ",e.jsx(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"nofollow noopener noreferrer",children:"Changesets"})," to manage package versioning for Outline and Outline packages."]}),`
`]}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(n.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(n.h2,{id:"references",children:"References"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"nofollow noopener noreferrer",children:"github.com/changesets/changesets"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://dnlytras.com/blog/using-changesets/",target:"_blank",rel:"nofollow noopener noreferrer",children:"dnlytras.com/blog/using-changesets"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.christopherbiscardi.com/post/shipping-multipackage-repos-with-github-actions-changesets-and-lerna",target:"_blank",rel:"nofollow noopener noreferrer",children:"christopherbiscardi.com/post/shipping-multipackage-repos..."})}),`
`]}),`
`,e.jsxs(n.h2,{id:"using-changesets-ref",children:["Using Changesets (",e.jsx(n.a,{href:"https://github.com/changesets/changesets",target:"_blank",rel:"nofollow noopener noreferrer",children:"ref"}),")"]}),`
`,e.jsx(n.p,{children:"Changesets are designed to make your workflows easier, by allowing the person making contributions to make key decisions when they are making their contribution."}),`
`,e.jsx(n.p,{children:"The overall tool after initialization should lead to a loop that looks like:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Changesets added along with each change"}),`
`,e.jsx(n.li,{children:"The version command is run when a release is ready, and the changes are verified"}),`
`,e.jsx(n.li,{children:"The publish command is run afterwards."}),`
`]}),`
`,e.jsx(n.p,{children:"The second two steps can be made part of a CI process."}),`
`,e.jsx(n.h2,{id:"adding-changesets",children:"Adding changesets"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn changeset
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: You can run ",e.jsx(n.code,{children:"changeset add"})," to add a changeset if you want to, but running Changesets without any command works as well."]}),`
`]}),`
`,e.jsx(n.h2,{id:"versioning-and-publishing",children:"Versioning and publishing"}),`
`,e.jsx(n.p,{children:"Once you decide you want to do a release, you can run"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn changeset:version
`})}),`
`,e.jsx(n.p,{children:"This consumes all changesets, and updates to the most appropriate semver version based on those changesets. It also writes changelog entries for each consumed changeset."}),`
`,e.jsx(n.p,{children:"We recommend at this step reviewing both the changelog entries and the version changes for packages. Once you are confident that these are correct, and have made any necessary tweeks to changelogs, you can publish your packages:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`yarn changeset:publish
`})}),`
`,e.jsx(n.p,{children:"This will run npm publish in each package that is of a later version than the one currently listed on npm."})]})}function k(s={}){const{wrapper:n}=Object.assign({},t(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{k as default};
//# sourceMappingURL=06-changesets-e4a08abc.js.map
