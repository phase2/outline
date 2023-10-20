import{x as r}from"./lit-element-411ba165.js";import"./outline-alert-3efcdbe8.js";import"./outline-container-cbfed8dd.js";import{c as z,a as R,b as S,d as v,e as x}from"./code-6-a390db5b.js";import{c as F}from"./code-4-ecadfc72.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./if-defined-93280f6e.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";import"./state-2a0073ff.js";import"./slots-controller-d122fba7.js";import"./static-0503aeb3.js";const G={title:"Structure/Container",component:"outline-container",tags:["docsPage"],parameters:{layout:"fullscreen",previewTabs:{canvas:{hidden:!0}},controls:{hideNoControlsWarning:!0,expanded:!1,include:"/*/"},options:{showPanel:!1},docs:{description:{component:`
## Description
The \`outline-container\` component is a container/wrapper for components,
page sections or entire pages. It is used to provide a consistent layout.

## Component Status
<outline-alert status="warning" size="large" className="mb-6">
  <span slot="header">Status: Needs Work/In Progress</span>
  <p>
    The \`OutlineContainer\` class, is a wrapper component that provides the
    \`outline-container\` component, giving consistent containers for
    content spacing both horizontally and vertically.
  </p>
</outline-alert>
<br />
<outline-alert status="error" size="large" className="mb-6">
  <span slot="header">@todo</span>
  <ul>
    <li>Fix for Documentation section styling. (\`README.md\` import)</li>
  </ul>
</outline-alert>
        `}}},argTypes:{},args:{}},e=()=>r` <outline-container
    container-width="full"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="${z}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;e.storyName="Full width container";e.parameters={controls:{disabled:!0},docs:{description:{story:`
<outline-alert status="info" size="large">
  <span slot="header">Container: Full</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`full\`.
  </p>
</outline-alert>
    `}}};const n=()=>r` <outline-container
    container-width="wide"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="${R}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;n.storyName="Wide container";n.parameters={controls:{disabled:!0},docs:{description:{story:`
<outline-alert status="info" size="large">
  <span slot="header">Container: Wide</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`wide\`.
  </p>
</outline-alert>
    `}}};const t=()=>r` <outline-container
    container-width="medium"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="${S}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;t.storyName="Medium container";t.parameters={controls:{disabled:!0},docs:{description:{story:`
<outline-alert status="info" size="large">
  <span slot="header">Container: Medium</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`medium\`.
  </p>
</outline-alert>
    `}}};const i=()=>r` <outline-container
    container-width="narrow"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="${F}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;i.storyName="Narrow container";i.parameters={controls:{disabled:!0},docs:{description:{story:`
<outline-alert status="info" size="large">
  <span slot="header">Container: Narrow</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`narrow\`.
  </p>
</outline-alert>
    `}}};const o=()=>r` <outline-container
    container-width="narrow"
    top-margin="spacing-0"
    bottom-margin="spacing-0" 
    justify-start
  >
  <outline-image
    image-href="${v}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;o.storyName="Narrow container (left)";o.parameters={controls:{disabled:!0},docs:{description:{story:`
<outline-alert status="info" size="large">
  <span slot="header">Container: Narrow</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`narrow\`.
  </p>
</outline-alert>
    `}}};const a=()=>r` <outline-container
    container-width="narrow"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
    justify-end
  >
  <outline-image
    image-href="${x}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>`;a.storyName="Narrow container (right)";a.parameters={controls:{disabled:!0},docs:{description:{story:`
<outline-alert status="info" size="large">
  <span slot="header">Container: Narrow</span>
  <p>
    This \`outline-container\` component is using the \`container-width\`
    set to \`narrow\`.
  </p>
</outline-alert>
    `}}};var s,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(): TemplateResult => {
  return html\` <outline-container
    container-width="full"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="\${code1}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>\`;
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,g,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(): TemplateResult => {
  return html\` <outline-container
    container-width="wide"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="\${code2}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>\`;
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,p,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(): TemplateResult => {
  return html\` <outline-container
    container-width="medium"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="\${code3}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>\`;
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,w,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`(): TemplateResult => {
  return html\` <outline-container
    container-width="narrow"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
  >
  <outline-image
    image-href="\${code4}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>\`;
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var y,N,W;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(): TemplateResult => {
  return html\` <outline-container
    container-width="narrow"
    top-margin="spacing-0"
    bottom-margin="spacing-0" 
    justify-start
  >
  <outline-image
    image-href="\${code5}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>\`;
}`,...(W=(N=o.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var T,$,C;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`(): TemplateResult => {
  return html\` <outline-container
    container-width="narrow"
    top-margin="spacing-0"
    bottom-margin="spacing-0"
    justify-end
  >
  <outline-image
    image-href="\${code6}"
    image-label="image of code on a screen"
    image-ratio="42/9"
  ></outline-image>
</outline-container>\`;
}`,...(C=($=a.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const H=["gridFullWidth","gridWideWidth","gridMediumWidth","gridNarrowWidth","gridNarrowWidthLeft","gridNarrowWidthRight"];export{H as __namedExportsOrder,G as default,e as gridFullWidth,t as gridMediumWidth,i as gridNarrowWidth,o as gridNarrowWidthLeft,a as gridNarrowWidthRight,n as gridWideWidth};
//# sourceMappingURL=outline-container.stories-42a34b86.js.map
