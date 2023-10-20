import{x as i}from"./lit-element-411ba165.js";import{l as u}from"./if-defined-93280f6e.js";import"./screen-size-controller-4280a32a.js";import{a as w}from"./utils-46bce928.js";import"./outline-split-button-7c50673a.js";import"./property-f36ea729.js";import"./state-2a0073ff.js";import"./slots-controller-d122fba7.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";import"./static-0503aeb3.js";import"./vars-link.css.lit-8fdd0acf.js";const P=["link","primary","secondary","tertiary"],_=["small","medium","large"],W={title:"Navigation/Button",component:"outline-button",tags:["docsPage"],argTypes:{...w,target:{name:"button-target",description:"https://www.w3schools.com/tags/att_a_target.asp",options:[void 0,"_blank","_self","_parent","_top"],control:{type:"select"},table:{category:"Properties",defaultValue:{summary:"NULL"}}},isDisabled:{name:"is-disabled",table:{category:"Properties",defaultValue:{summary:"false"}},description:"Set whether the button is disabled. Only applies to implementations not using the url property",control:{type:"boolean"}},url:{name:"button-url",table:{category:"Properties",defaultValue:{summary:"NULL"}},description:"The url to use for a link. This will render an anchor element. Do not set this prop if you want to render a button element.",control:{type:"text"}},label:{name:"button-label",table:{category:"Properties",defaultValue:{summary:"NULL"}},description:"Label to be passed to `aria-label` on the link or button element.",control:{type:"text"}},variant:{name:"button-variant",table:{category:"Properties",defaultValue:{summary:"primary"}},description:"The button style variant to use.",options:P,control:{type:"select"}},size:{name:"button-size",table:{category:"Properties",defaultValue:{summary:"medium"}},description:"The button size variant.",options:_,control:{type:"select"}}},args:{variant:"primary",size:"medium"},parameters:{docs:{description:{component:'\n## Difference from `button` element\n\nThis is rendered as an `a` element if a link and a `button` element if not a link. This allows for consistent styling that matches the user expectation of a button while matching the browser expectation for those elements.\n\n<outline-alert status="info" size="large" class="mb-6">\n  <span slot="header">CSS Variables</span>\n  <p>Any consumer application that includes `outline.theme.css` can simply overwrite any relevant CSS Variables in a subsequent CSS include to affect change on the element styling using the following variables.</p>\n  <p>Additional documentation and references for available CSS Variables can be found in the following locations.</p>\n  <ul>\n    <li>[`outline-button/css-variables/vars-default.css`](https://github.com/phase2/outline/blob/next/src/components/base/outline-button/css-variables/vars-default.css)</li>\n    <li>[`outline-button/css-variables/vars-primary.css`](https://github.com/phase2/outline/blob/next/src/components/base/outline-button/css-variables/vars-primary.css)</li>\n    <li>[`outline-button/css-variables/vars-secondary.css`](https://github.com/phase2/outline/blob/next/src/components/base/outline-button/css-variables/vars-secondary.css)</li>\n    <li>[`outline-button/css-variables/vars-tertiary.css`](https://github.com/phase2/outline/blob/next/src/components/base/outline-button/css-variables/vars-tertiary.css)</li>\n    <li>[`outline-button/css-variables/vars-link.css`](https://github.com/phase2/outline/blob/next/src/components/base/outline-button/css-variables/vars-link.css)</li>\n  </ul>\n</outline-alert>\n        '}}}},C=({defaultSlot:S,isDisabled:p,url:f,target:x,variant:T,size:D,onClick:I,onKeyUp:$})=>i`
<outline-button
  button-url="${u(f)}"
  button-target="${u(x)}"
  button-variant="${T}"
  button-size="${D}"
  .onClick="${I}"
  .onKeyUp="${$}"
  ?is-disabled=${p}
>
  ${S}
</outline-button>
  `,t=C.bind({});t.args={defaultSlot:"Link Button",url:"https://outline.phase2tech.com",target:"_blank",variant:"primary",isDisabled:!1};const V=()=>i`
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-label="Link">Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-size="small" button-label="Small Button">Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-label="Button">Button</outline-button>
    <outline-button class="mr-2 mb-4" button-size="large" button-label="Large Button">Large Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-label="Link" is-disabled>Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2 mb-4" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-url="#" button-size="large" button-label="Large Link">
      Large Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-label="Link">
      Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-size="small" button-label="Small Link">
      Small Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-label="Button">
      Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
  </div>
`,n=V.bind({});n.parameters={docs:{description:{story:`
## The \`primary\` variant.
  
This is the primary button style variant. It is used for buttons that behave like a button, but look like a link, but is a button. Or a link.
`}}};const F=()=>i`
<outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
<div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-label="Link">Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="small" button-label="Small Button">Small Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-label="Button">Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="large" button-label="Large Button">Large Button</outline-button>
</div>
<outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>  
<div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-label="Link" is-disabled>Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-label="Button" is-disabled>Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
</div>
<outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>    
<div class="my-6">
<outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="large" button-label="Large Link">
    Large Link
    <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
  </outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-label="Link">
  Link
    <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
  </outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="small" button-label="Small Link">
    Small Link
    <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
  </outline-button> 
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="small" button-label="Small Button">
    Small Button
    <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
  </outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-label="Button">
    Button
    <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
  </outline-button>  
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="large" button-label="Large Button">
    Large Button
    <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
  </outline-button>
</div>
`,l=F.bind({});l.parameters={docs:{description:{story:`
## The \`secondary\` variant.
  
This is the secondary button style variant. It is used for buttons that behave like a button, but look like a link, but is a button. Or a link.
`}}};const H=()=>i`
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-label="Link">Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="small" button-label="Small Button">Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-label="Button">Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="large" button-label="Large Button">Large Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>    
  <div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-label="Link" is-disabled>Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>    
  <div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Link">
      Large Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-label="Link">
    Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Link">
      Small Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-label="Button">
      Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
  </div>
`,e=H.bind({});e.parameters={docs:{description:{story:`
## The \`tertiary\` variant.
  
This is the tertiary button style variant. It is used for buttons that behave like a button, but look like a link, but is a button. Or a link.
`}}};const O=()=>i`  
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-label="Link">Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="small" button-label="Small Button">Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-label="Button">Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="large" button-label="Large Button">Large Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>    
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-label="Link" is-disabled>Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>    
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="large" button-label="Large Link">
      Large Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-label="Link">
    Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="small" button-label="Small Link">
      Small Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-label="Button">
      Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
  </div>
`,o=O.bind({});o.parameters={docs:{description:{story:`
## The \`link\` variant.
  
This is the link button style variant. It is used for buttons that behave like a button, but look like a link, but is a button. Or a link.
`}}};var a,s,b;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`({
  defaultSlot,
  isDisabled,
  url,
  target,
  variant,
  size,
  onClick,
  onKeyUp
}: any): TemplateResult => html\`
<outline-button
  button-url="\${ifDefined(url)}"
  button-target="\${ifDefined(target)}"
  button-variant="\${variant}"
  button-size="\${size}"
  .onClick="\${onClick}"
  .onKeyUp="\${onKeyUp}"
  ?is-disabled=\${isDisabled}
>
  \${defaultSlot}
</outline-button>
  \``,...(b=(s=t.parameters)==null?void 0:s.docs)==null?void 0:b.source}}};var r,m,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`(): TemplateResult => html\`
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-label="Link">Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-size="small" button-label="Small Button">Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-label="Button">Button</outline-button>
    <outline-button class="mr-2 mb-4" button-size="large" button-label="Large Button">Large Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-label="Link" is-disabled>Link</outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2 mb-4" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-url="#" button-size="large" button-label="Large Link">
      Large Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-label="Link">
      Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-url="#" button-size="small" button-label="Small Link">
      Small Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-label="Button">
      Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
  </div>
\``,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,v,g;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`(): TemplateResult => html\`
<outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
<div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-label="Link">Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="small" button-label="Small Button">Small Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-label="Button">Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="large" button-label="Large Button">Large Button</outline-button>
</div>
<outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>  
<div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-label="Link" is-disabled>Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-label="Button" is-disabled>Button</outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
</div>
<outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>    
<div class="my-6">
<outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="large" button-label="Large Link">
    Large Link
    <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
  </outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-label="Link">
  Link
    <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
  </outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-url="#" button-size="small" button-label="Small Link">
    Small Link
    <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
  </outline-button> 
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="small" button-label="Small Button">
    Small Button
    <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
  </outline-button>
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-label="Button">
    Button
    <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
  </outline-button>  
  <outline-button class="mr-2 mb-4" button-variant="secondary" button-size="large" button-label="Large Button">
    Large Button
    <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
  </outline-button>
</div>
\``,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,L,k;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`(): TemplateResult => html\`
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-label="Link">Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="small" button-label="Small Button">Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-label="Button">Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="large" button-label="Large Button">Large Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>    
  <div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-label="Link" is-disabled>Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>    
  <div class="my-6">
  <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="large" button-label="Large Link">
      Large Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-label="Link">
    Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-url="#" button-size="small" button-label="Small Link">
      Small Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-label="Button">
      Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="tertiary" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
  </div>
\``,...(k=(L=e.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var h,z,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`(): TemplateResult => html\`  
  <outline-heading level-size="xl" level-style="semibold">Default, Hover & Focus States</outline-heading>  
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="large" button-label="Large Link">Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-label="Link">Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="small" button-label="Small Link">Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="small" button-label="Small Button">Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-label="Button">Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="large" button-label="Large Button">Large Button</outline-button>
  </div>
  
  <outline-heading level-size="xl" level-style="semibold">Disabled States</outline-heading>    
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="large" button-label="Large Link" is-disabled>Large Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-label="Link" is-disabled>Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="small" button-label="Small Link" is-disabled>Small Link</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="small" button-label="Small Button" is-disabled>Small Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-label="Button" is-disabled>Button</outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="large" button-label="Large Button" is-disabled>Large Button</outline-button>
  </div>

  <outline-heading level-size="xl" level-style="semibold">Including Icons</outline-heading>    
  <div class="my-6">
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="large" button-label="Large Link">
      Large Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-label="Link">
    Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-url="#" button-size="small" button-label="Small Link">
      Small Link
      <outline-icon slot="right" name="chevron-right" library="system" size="1em" class="ml-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="small" button-label="Small Button">
      Small Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
    <outline-button class="mr-2 mb-4" button-variant="link" button-label="Button">
      Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>  
    <outline-button class="mr-2 mb-4" button-variant="link" button-size="large" button-label="Large Button">
      Large Button
      <outline-icon slot="left" name="chevron-left" library="system" size="1em" class="mr-2"></outline-icon>
    </outline-button>
  </div>
\``,...(B=(z=o.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const X=["Link","PrimaryButtons","SecondaryButtons","TertiaryButtons","LinkButtons"];export{t as Link,o as LinkButtons,n as PrimaryButtons,l as SecondaryButtons,e as TertiaryButtons,X as __namedExportsOrder,W as default};
//# sourceMappingURL=outline-button.stories-43b7420e.js.map
