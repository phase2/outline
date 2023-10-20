import{j as e}from"./jsx-runtime-f69cb261.js";import{M as o}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as s}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function r(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",pre:"pre",code:"code",h3:"h3"},s(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Documentation/Guides/Tooling & Commands/Unit Testing",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h1,{id:"unit-testing",children:"Unit Testing"}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(n.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:["Testing is handled by ",e.jsx(n.a,{href:"https://modern-web.dev/guides/test-runner/getting-started/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Web Test Runner"})," and uses ",e.jsx(n.a,{href:"https://playwright.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Playwright"})," to test modern browsers locally."]}),`
`,e.jsx(n.h2,{id:"running-tests",children:"Running tests"}),`
`,e.jsx(n.p,{children:"Run tests on Chromium, Firefox, and Webkit"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn run test
`})}),`
`,e.jsxs(n.p,{children:[`You can also append one or more browsers to test on specifically i.e.
`,e.jsx(n.code,{children:"BROWSERS=firefox,chromium yarn run test"})]}),`
`,e.jsx(n.h3,{id:"interactive-mode",children:"Interactive mode"}),`
`,e.jsx(n.p,{children:"You can run the TypeScript compiler in one terminal and the interactive Web Test Runner in another to automatically re-run your tests and open tests in a browser for debugging."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn tsc --watch

yarn wtr --watch
`})}),`
`,e.jsx(n.h3,{id:"browserstack-mode",children:"BrowserStack mode"}),`
`,e.jsxs(n.p,{children:["Optionally you can run tests using ",e.jsx(n.a,{href:"https://www.browserstack.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"BrowserStack"}),` by running
`,e.jsx(n.code,{children:"yarn run test:browserstack"}),`
Note: You must enter your username and access key in the .env file to use BrowserStack testing`]}),`
`,e.jsx(n.h2,{id:"developing-tests",children:"Developing tests"}),`
`,e.jsxs(n.p,{children:["Test files should be located in a test folder in your component directory with a ",e.jsx(n.code,{children:".test.ts"})," extension i.e. ",e.jsx(n.code,{children:"src/components/base/outline-example/test/outline-example.test.ts"})]}),`
`,e.jsxs(n.p,{children:["More info on writing tests for web components can be found at ",e.jsx(n.a,{href:"https://open-wc.org/docs/testing/helpers/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Open-WC.org"})]})]})}function y(t={}){const{wrapper:n}=Object.assign({},s(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,t)})):r(t)}export{y as default};
//# sourceMappingURL=05-unit-testing-2bccca8f.js.map
