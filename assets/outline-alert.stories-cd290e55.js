import{x as e}from"./lit-element-411ba165.js";import{l as c}from"./if-defined-93280f6e.js";import"./screen-size-controller-4280a32a.js";import{a as V}from"./utils-46bce928.js";import{a as j,b as q}from"./outline-alert-3efcdbe8.js";import"./vars-link.css.lit-8fdd0acf.js";import"./property-f36ea729.js";const U={title:"Content/Alert",component:"outline-alert",tags:["docsPage"],argTypes:{headerSlot:{name:'slot="outline-alert--header"',description:"The header slot. For example a header title.",table:{category:"Slots"}},defaultSlot:{...V.defaultSlot,table:{category:"Slots"}},statusType:{description:"The status type of the alert. Such as `information` or `warning`.",options:j,control:{type:"select"}},size:{description:"The size of the alert.",options:q,control:{type:"select"}},shouldShowIcon:{description:"(not yet implemented) Should we show the icon",control:{type:"boolean"}},isInteractive:{description:"Is there an interaction in the alert, such as a button.",control:{type:"boolean"}}},args:{statusType:"info"},parameters:{docs:{description:{component:"\nThis component renders an alert.\n\n## Variation\n\nYou can set the type of alert with `statusType`.\n\nYou can use a smaller alert with `size` of `small`.\n\nYou can remove the icon with `shouldShowIcon` set to `false`.\n\nYou can customize the header by adding a `outline-alert--header` slot.\n\n## Accessibility\n\nIf the alert has an interaction, you should indicate this with `isInteractive` set to `true`.\n"},source:{state:"open",code:`
<outline-alert
  status="{{ statusType }}"
  size="{{ size }}"
  {{ shouldShowIcon }}
  {{ isInteractive }}
>
  <span slot="outline-alert--header">{{ headerSlot }}</span>
  {{ defaultSlot }}
</outline-alert>
        `}}}},t=({headerSlot:_,defaultSlot:N,statusType:W,size:F,shouldShowIcon:O,isInteractive:P})=>e`
    <outline-alert
      status="${c(W)}"
      size="${c(F)}"
      ?should-show-icon="${O}"
      ?is-interactive="${P}"
    >
      ${c(_)} ${c(N)}
    </outline-alert>
  `,n=t.bind({});n.args={defaultSlot:e`Here is an informational message.`,statusType:"info"};const s=t.bind({});s.args={defaultSlot:e`Here is a warning message.`,statusType:"warning"};const a=t.bind({});a.args={defaultSlot:e`Here is an error message.`,statusType:"error"};const o=t.bind({});o.args={defaultSlot:e`Here is a success message.`,statusType:"success"};const i=t.bind({});i.args={defaultSlot:e`Here is a small alert message.`,size:"small"};const r=t.bind({});r.args={headerSlot:e`
    <span slot="outline-alert--header">
      Here is an alert with a custom header.
    </span>
  `,defaultSlot:e` Here is a message. `};const l=t.bind({});l.args={defaultSlot:e`Here is an alert with no icon.`,shouldShowIcon:!1};const u=t.bind({});u.args={defaultSlot:e`
    Here is an alert with an interaction.
    <outline-link link-href="#">Click here</outline-link>
  `,isInteractive:!0};var d,h,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`({
  headerSlot,
  defaultSlot,
  statusType,
  size,
  shouldShowIcon,
  isInteractive
}: any): TemplateResult => {
  return html\`
    <outline-alert
      status="\${ifDefined(statusType)}"
      size="\${ifDefined(size)}"
      ?should-show-icon="\${shouldShowIcon}"
      ?is-interactive="\${isInteractive}"
    >
      \${ifDefined(headerSlot)} \${ifDefined(defaultSlot)}
    </outline-alert>
  \`;
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var p,m,S;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`({
  headerSlot,
  defaultSlot,
  statusType,
  size,
  shouldShowIcon,
  isInteractive
}: any): TemplateResult => {
  return html\`
    <outline-alert
      status="\${ifDefined(statusType)}"
      size="\${ifDefined(size)}"
      ?should-show-icon="\${shouldShowIcon}"
      ?is-interactive="\${isInteractive}"
    >
      \${ifDefined(headerSlot)} \${ifDefined(defaultSlot)}
    </outline-alert>
  \`;
}`,...(S=(m=s.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var $,I,y;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`({
  headerSlot,
  defaultSlot,
  statusType,
  size,
  shouldShowIcon,
  isInteractive
}: any): TemplateResult => {
  return html\`
    <outline-alert
      status="\${ifDefined(statusType)}"
      size="\${ifDefined(size)}"
      ?should-show-icon="\${shouldShowIcon}"
      ?is-interactive="\${isInteractive}"
    >
      \${ifDefined(headerSlot)} \${ifDefined(defaultSlot)}
    </outline-alert>
  \`;
}`,...(y=(I=a.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var w,T,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`({
  headerSlot,
  defaultSlot,
  statusType,
  size,
  shouldShowIcon,
  isInteractive
}: any): TemplateResult => {
  return html\`
    <outline-alert
      status="\${ifDefined(statusType)}"
      size="\${ifDefined(size)}"
      ?should-show-icon="\${shouldShowIcon}"
      ?is-interactive="\${isInteractive}"
    >
      \${ifDefined(headerSlot)} \${ifDefined(defaultSlot)}
    </outline-alert>
  \`;
}`,...(g=(T=o.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var z,v,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`({
  headerSlot,
  defaultSlot,
  statusType,
  size,
  shouldShowIcon,
  isInteractive
}: any): TemplateResult => {
  return html\`
    <outline-alert
      status="\${ifDefined(statusType)}"
      size="\${ifDefined(size)}"
      ?should-show-icon="\${shouldShowIcon}"
      ?is-interactive="\${isInteractive}"
    >
      \${ifDefined(headerSlot)} \${ifDefined(defaultSlot)}
    </outline-alert>
  \`;
}`,...(D=(v=i.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var b,H,R;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`({
  headerSlot,
  defaultSlot,
  statusType,
  size,
  shouldShowIcon,
  isInteractive
}: any): TemplateResult => {
  return html\`
    <outline-alert
      status="\${ifDefined(statusType)}"
      size="\${ifDefined(size)}"
      ?should-show-icon="\${shouldShowIcon}"
      ?is-interactive="\${isInteractive}"
    >
      \${ifDefined(headerSlot)} \${ifDefined(defaultSlot)}
    </outline-alert>
  \`;
}`,...(R=(H=r.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var A,k,x;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`({
  headerSlot,
  defaultSlot,
  statusType,
  size,
  shouldShowIcon,
  isInteractive
}: any): TemplateResult => {
  return html\`
    <outline-alert
      status="\${ifDefined(statusType)}"
      size="\${ifDefined(size)}"
      ?should-show-icon="\${shouldShowIcon}"
      ?is-interactive="\${isInteractive}"
    >
      \${ifDefined(headerSlot)} \${ifDefined(defaultSlot)}
    </outline-alert>
  \`;
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var Y,C,E;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  headerSlot,
  defaultSlot,
  statusType,
  size,
  shouldShowIcon,
  isInteractive
}: any): TemplateResult => {
  return html\`
    <outline-alert
      status="\${ifDefined(statusType)}"
      size="\${ifDefined(size)}"
      ?should-show-icon="\${shouldShowIcon}"
      ?is-interactive="\${isInteractive}"
    >
      \${ifDefined(headerSlot)} \${ifDefined(defaultSlot)}
    </outline-alert>
  \`;
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const X=["Information","Warning","Error","Success","Small","Header","NoIcon","InteractiveAlert"];export{a as Error,r as Header,n as Information,u as InteractiveAlert,l as NoIcon,i as Small,o as Success,s as Warning,X as __namedExportsOrder,U as default};
//# sourceMappingURL=outline-alert.stories-cd290e55.js.map
