import{j as e}from"./jsx-runtime-f69cb261.js";import{M as o}from"./chunk-S4VUQJ4A-550f3e34.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{u as t}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./lit-element-411ba165.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";function r(s){const n=Object.assign({h1:"h1",h2:"h2",p:"p",blockquote:"blockquote",a:"a",h3:"h3",pre:"pre",code:"code",hr:"hr",ol:"ol",li:"li",h4:"h4",ul:"ul"},t(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Documentation/Guides/Tooling & Commands/Contributing to Outline",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.h1,{id:"contributing-to-outline",children:"Contributing to Outline"}),`
`,e.jsxs("outline-container",{"container-width":"full","container-align":"left","top-margin":"spacing-2","bottom-margin":"spacing-8",children:[e.jsx(n.h2,{id:"documentation-status",children:"Documentation Status"}),e.jsxs("outline-alert",{status:"warning",size:"large",children:[e.jsx("span",{slot:"header",children:"Status: Needs Work/In Progress"}),e.jsx("p",{children:e.jsx(n.p,{children:"This documentation is in need of additional work, or is currently in progress."})})]})]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"This document serves to help understand how to setup a local Outline environment, and how to contribute to the open source Outline project For project specific details, please consult the README.md in your project."}),`
`]}),`
`,e.jsx(n.h2,{id:"code-of-conduct",children:"Code of Conduct"}),`
`,e.jsxs(n.p,{children:["We have a ",e.jsx(n.a,{href:"https://github.com/phase2/outline/blob/next/CODE_OF_CONDUCT.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"Code of Conduct"}),", please follow it in all interactions with project maintainers and fellow users."]}),`
`,e.jsx(n.h2,{id:"setup",children:"Setup"}),`
`,e.jsxs(n.p,{children:["Run the following steps to ensure your environment is installed and up to date. This assumes you are using ",e.jsx(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"nofollow noopener noreferrer",children:"NVM"})," locally to manage your NPM version(s)."]}),`
`,e.jsx(n.h3,{id:"checkout-the-repository",children:"Checkout the repository"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`git clone git@github.com:phase2/outline.git && cd outline
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"ensure-you-are-using-the-correct-version-of-npm",children:["Ensure you are using the correct version of ",e.jsx(n.code,{children:"npm"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`nvm use
`})}),`
`,e.jsxs(n.p,{children:["If you need to update your node version, see the ",e.jsx(n.a,{href:"https://github.com/nvm-sh/nvm#usage",target:"_blank",rel:"nofollow noopener noreferrer",children:"usage documentation"})," for nvm."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"install-project-dependencies",children:"Install project dependencies"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn install
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"storybook-development",children:"Storybook Development"}),`
`,e.jsxs(n.p,{children:["Primary component development is done and demonstrated via ",e.jsx(n.a,{href:"https://storybook.js.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Storybook"}),"."]}),`
`,e.jsx(n.h3,{id:"start-storybook-instance",children:"Start storybook instance."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn start
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"testing-pending",children:"Testing (pending)"}),`
`,e.jsx(n.p,{children:"All PRs require passing tests before the PR will be reviewed"}),`
`,e.jsxs(n.p,{children:["Test files should be located in a test folder in your component directory with a .test.ts extension i.e. ",e.jsx(n.code,{children:"src/components/base/outline-element/test/outline-element.test.ts"})]}),`
`,e.jsxs(n.p,{children:["Testing is handled by ",e.jsx(n.a,{href:"https://modern-web.dev/guides/test-runner/getting-started/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Web Test Runner"})," and uses ",e.jsx(n.a,{href:"https://playwright.dev/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Playwright"})," to test modern browsers locally."]}),`
`,e.jsxs(n.p,{children:[`Run tests on Chromium, Firefox, and Webkit using
`,e.jsx(n.code,{children:"yarn run test:local"})]}),`
`,e.jsxs(n.p,{children:[`You can also append one or more browsers to test on specifically i.e.
`,e.jsx(n.code,{children:"BROWSERS=firefox,chromium yarn run test"})]}),`
`,e.jsxs(n.p,{children:["Optionally you can run tests using ",e.jsx(n.a,{href:"https://www.browserstack.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"BrowserStack"}),` by running
`,e.jsx(n.code,{children:"yarn run test:browserstack"}),`
Note: You must enter your username and access key in the .env file to use BrowserStack testing`]}),`
`,e.jsxs(n.p,{children:["More info on writing tests for web components can be found at ",e.jsx(n.a,{href:"https://open-wc.org/docs/testing/helpers/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Open-WC.org"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"pull-requests",children:"Pull Requests"}),`
`,e.jsx(n.p,{children:"Pull requests are greatly appreciated! To ensure a smooth review process, please follow these steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:`Make sure there's an open issue that the PR addresses. Add "Fixes #(issue number)" to the PR description.`}),`
`,e.jsx(n.li,{children:"Please discuss the general shape of the change ahead of time and include screenshots where appropriate. This can save much time for reviewers and submitters alike. Many times there may be existing ideas on how to handle an issue that are not fully written out, and asking about it will bring out more details."}),`
`,e.jsx(n.li,{children:"All PRs that change behavior or fix bugs should have new or updated tests."}),`
`,e.jsx(n.li,{children:'Try to create a set of descriptive commits that each do one focused change. Avoid commits like "oops", and prefer commits like "Added method foo to Bar".'}),`
`,e.jsx(n.li,{children:"When addressing review comments, try to add new commits, rather than modifying previous commits. This makes it easier for reviewers to see what changed since the last review."}),`
`,e.jsxs(n.li,{children:["Please run ",e.jsx(n.code,{children:"yarn lint"})," and ",e.jsx(n.code,{children:"yarn fmt"})," before submitting PRs. PRs that don't lint and aren't formatted will fail continuous integration tests."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"commit-messages",children:"Commit messages"}),`
`,e.jsxs(n.p,{children:["Outline uses ",e.jsx(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Conventional Commits"}),"."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with ",e.jsx(n.a,{href:"https://semver.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"SemVer"}),", by describing the features, fixes, and breaking changes made in commit messages."]}),`
`]}),`
`,e.jsx(n.h3,{id:"sample-commit-messages",children:"Sample commit messages"}),`
`,e.jsx(n.h4,{id:"patch-releases",children:"Patch releases"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fix: updated Storybook packages"}),`
This will create a patch release. (1.0.0 --> 1.0.1)`]}),`
`,e.jsx(n.h4,{id:"minor-releases",children:"Minor releases"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"feat: added outline-something component"}),`
This will create a minor release (1.0.0 --> 1.1.0)`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"feat(ci): updated CI setup"}),`
This will create a minor release (1.0.0 --> 1.1.0) and uses (ci) to 'tag' this as a feature related to the continuous integration setup.`]}),`
`,e.jsx(n.h4,{id:"major-releases",children:"Major releases"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`feat: refactoring the something component

BREAKING CHANGE - Requires a rewrite of all your code.
`})}),`
`,e.jsx(n.p,{children:"This will create a major release. (1.0.0 --> 2.0.0)"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"code-cleanup",children:"Code Cleanup"}),`
`,e.jsxs(n.p,{children:["Code is not automatically formatted upon commit. As a matter of best practices, you should run ",e.jsx(n.code,{children:"yarn fmt"})," and ",e.jsx(n.code,{children:"yarn lint"})," prior to committing code in order that pipelines will not fail in the ",e.jsx(n.code,{children:"Test and Build"})," task."]}),`
`,e.jsx(n.h3,{id:"run-all-prettier-and-svg-formatting",children:"Run all Prettier and SVG formatting"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn fmt
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"run-prettier-formatting",children:"Run Prettier formatting"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn fmt.code
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"run-svgo-formatting",children:"Run svgo formatting"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn fmt.svg
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"production-builds",children:"Production builds"}),`
`,e.jsxs(n.p,{children:["Runs both ",e.jsx(n.code,{children:"tsc"})," and ",e.jsx(n.code,{children:"yarn rollup"})," to handle the following:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Packaging individual components to ",e.jsx(n.code,{children:"dist"})," directory."]}),`
`,e.jsxs(n.li,{children:["Packaging modern and legacy builds of all components to ",e.jsx(n.code,{children:"dist"})," directory."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn build
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"To only run the rollup build, which handles the component bundling into modern and legacy builds:"}),`
`]}),`
`,e.jsx(n.h3,{id:"one-time-build",children:"One time build"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn rollup
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"enable-in-watch-mode",children:"Enable in watch mode"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn rollup.watch
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"resetting-local-environment",children:"Resetting local environment"}),`
`,e.jsx(n.p,{children:"The following commands help clean a local environment."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Cleanup generated assets: ",e.jsx(n.code,{children:"yarn clean"})]}),`
`,e.jsxs(n.li,{children:["Cleanup node packages: ",e.jsx(n.code,{children:"yarn reset"})]}),`
`,e.jsxs(n.li,{children:["Full cleanup & restart: ",e.jsx(n.code,{children:"yarn reboot"})]}),`
`]})]})}function y(s={}){const{wrapper:n}=Object.assign({},t(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{y as default};
//# sourceMappingURL=99-contributing-1a9e4672.js.map
