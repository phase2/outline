import{x as l}from"./lit-element-411ba165.js";import{l as a}from"./if-defined-93280f6e.js";import"./screen-size-controller-4280a32a.js";import{a as y}from"./utils-46bce928.js";import"./outline-heading-e5f4beef.js";import"./outline-container-cbfed8dd.js";import"./static-0503aeb3.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";import"./property-f36ea729.js";import"./mobile-controller-f2865d76.js";const T=["xs","sm","base","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl"],S=["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],H=["h1","h2","h3","h4","h5","h6"],R={title:"Content/Heading",component:"outline-heading",tags:["docsPage"],argTypes:{level:{description:"HTML level. Used by screen readers.",options:H,control:{type:"select"},table:{category:"Properties",defaultValue:{summary:"h2"}}},levelSize:{description:"Presentation level. Used for styling.",options:T,control:{type:"select"},table:{category:"Properties",defaultValue:{summary:"NULL"}}},levelStyle:{description:"Presentation style. Font weight variation.",options:S,control:{type:"select"},table:{category:"Properties",defaultValue:{summary:"bold"}}},...y},args:{defaultSlot:"Sample heading text that should take up multiple lines so we can test for proper size and leading."},parameters:{docs:{description:{component:`
This component renders a heading.

## Difference from \`h1\`, \`h2\`, etc elements

This is rendered as various \`h1\`, etc elements, but is styled based on the \`level-size\`. This allows screen readers to properly read the structure of a page even when this diverges from the visual presentation of these headers.

## Variation

You can also set the font weight using the \`level-style\` attribute.

        `},source:{code:`
<outline-heading
  level="{{ level }}"
  level-size="{{ level-size }}"
  level-style="{{ levelStyle }}"
>
  {{ defaultSlot}
</outline-heading>
        `}}}},x=({level:m,levelSize:c,levelStyle:v,defaultSlot:f})=>l`
    <outline-container>
      <outline-heading
        level="${a(m)}"
        level-size="${a(c)}"
        level-style="${a(v)}"
      >
        ${f}
      </outline-heading>
    </outline-container>
  `,t=x.bind({});t.args={level:"h1",levelSize:"3xl",levelStyle:"semibold"};const b=()=>l`
<outline-heading level="h1">This is a standard Heading 1.</outline-heading>
<outline-heading level="h2">This is a standard Heading 2.</outline-heading>
<outline-heading level="h3">This is a standard Heading 3.</outline-heading>
<outline-heading level="h4">This is a standard Heading 4.</outline-heading>
<outline-heading level="h5">This is a standard Heading 5.</outline-heading>
<outline-heading level="h6">This is a standard Heading 6.</outline-heading>
`,n=()=>b();n.parameters={docs:{description:{story:`This example shows the standard heading elements. 
      This uses only the \`level\` attribute to declare the semantic level of the heading element.
      This also allows us to show the default shift of sizes between smaller and larger breakpoints.
      `},source:{code:`
<outline-heading level="h1">This is a standard Heading 1 element.</outline-heading>
<outline-heading level="h2">This is a standard Heading 2 element.</outline-heading>
<outline-heading level="h3">This is a standard Heading 3 element.</outline-heading>
<outline-heading level="h4">This is a standard Heading 4 element.</outline-heading>
<outline-heading level="h5">This is a standard Heading 5 element.</outline-heading>
<outline-heading level="h6">This is a standard Heading 6 element.</outline-heading>
`}}};const z=()=>l`
<outline-heading>Sample heading text that should take up multiple lines so we can test for proper size and leading.</outline-heading>
`,e=z.bind({});e.args={};e.parameters={docs:{description:{story:`This example shows an <code>outline-heading</code> element with no attributes being rendered.
      `},source:{code:`
<outline-heading>Sample heading text that should take up multiple lines so we can test for proper size and leading.</outline-heading>
`}}};var i,s,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`({
  level,
  levelSize,
  levelStyle,
  defaultSlot
}: any): TemplateResult => html\`
    <outline-container>
      <outline-heading
        level="\${ifDefined(level)}"
        level-size="\${ifDefined(levelSize)}"
        level-style="\${ifDefined(levelStyle)}"
      >
        \${defaultSlot}
      </outline-heading>
    </outline-container>
  \``,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,r,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"() => StandardHeadingsTemplate()",...(h=(r=n.parameters)==null?void 0:r.docs)==null?void 0:h.source}}};var u,g,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`(): TemplateResult => {
  return html\`
<outline-heading>Sample heading text that should take up multiple lines so we can test for proper size and leading.</outline-heading>
\`;
}`,...(p=(g=e.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const E=["Heading","StandardHeadings","DefaultHeading"];export{e as DefaultHeading,t as Heading,n as StandardHeadings,E as __namedExportsOrder,R as default};
//# sourceMappingURL=outline-heading.stories-4af6301e.js.map
