import{j as e}from"./jsx-runtime-f69cb261.js";import{M as t}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as s}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function o(r){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",ul:"ul",li:"li",strong:"strong",em:"em",h3:"h3"},s(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Documentation/Guides/Tooling & Commands/Helpful Commands",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h1,{id:"helpful-commands",children:"Helpful Commands"}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(n.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(n.h2,{id:"commonly-used-commands",children:"Commonly Used Commands"}),`
`,e.jsxs(n.p,{children:["Through standard ",e.jsx(n.a,{href:"https://docs.npmjs.com/cli/v8/using-npm/scripts",target:"_blank",rel:"nofollow noopener noreferrer",children:"NPM scripts"}),", coupled with custom logic in the ",e.jsx(n.code,{children:"./scripts"})," directory, Outline provides a host of capabilities to provide an incredible developer experience."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn start"})," - Runs the local Storybook development server"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn build"})," - Compiles the system for production to the dist directory"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn test"})," - Run automated ",e.jsx(n.a,{href:"https://modern-web.dev/docs/test-runner/overview/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Web Test Runner"})," tests"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn lint"})," - Runs both ",e.jsx(n.a,{href:"https://eslint.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"eslint"})," and ",e.jsx(n.a,{href:"https://prettier.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Prettier"})," to evaluate select files for coding standards violations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn format"})," - Runs both ",e.jsx(n.a,{href:"https://github.com/svg/svgo",target:"_blank",rel:"nofollow noopener noreferrer",children:"svgo"})," and ",e.jsx(n.a,{href:"https://prettier.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Prettier"})," to format select files to meet coding standards"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn build:watch"})," - Runs ",e.jsx(n.code,{children:"yarn build"})," in watch mode. Should be ran in conjunction with ",e.jsx(n.code,{children:"yarn wds"})," described below."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn serve"})," - Runs a basic HTML consumer application with ",e.jsx(n.a,{href:"https://modern-web.dev/docs/dev-server/overview/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Web Dev Server"})," powered by the files in the ./dev directory. Allows for testing components outside of the Storybook interface. Usefully in many testing cases.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Note"}),": This ",e.jsx(n.code,{children:"yarn serve"})," can cause issues, and sometimes using ",e.jsx(n.code,{children:"yarn build:watch"})," and ",e.jsx(n.code,{children:"yarn wds"})," in separate termininals is recommended."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn:storybook:axe:dev:chromium"})," - Runs ",e.jsx(n.code,{children:"axe-core"})," CLI interface against a local Storybook instance.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Note"}),": Storybook, via ",e.jsx(n.code,{children:"yarn start"})," must be running."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"resetting-local-environment",children:"Resetting local environment"}),`
`,e.jsx(n.p,{children:"The following commands help clean a local environment."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn clean"})," - Cleanup generated assets"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn reset"})," - Clean all generated assets and re-install dependencies"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"yarn reboot"})," - Reset the local environment, then restart Storybook"]}),`
`]}),`
`,e.jsx(n.h2,{id:"coding-standards",children:"Coding standards"}),`
`,e.jsx(n.p,{children:"Code is not automatically formatted upon commit, but automated tests will fail if you don't format code according to the tooling (Prettier)."}),`
`,e.jsxs(n.p,{children:["You can run ",e.jsx(n.code,{children:"yarn format"})," or configure your IDE to run these commands for you."]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Caution: Prettier will sometimes format code in a weird way, so you may want to review its changes."})}),`
`,e.jsx(n.h3,{id:"linting",children:"Linting"}),`
`,e.jsxs(n.p,{children:["You can run ",e.jsx(n.code,{children:"yarn lint"})," to view any coding style warnings."]})]})}function w(r={}){const{wrapper:n}=Object.assign({},s(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(o,r)})):o(r)}export{w as default};
//# sourceMappingURL=02-helpful-commands-2226c91c.js.map
