import{x as c}from"./lit-element-411ba165.js";import{o as t}from"./unsafe-html-3f86ca9e.js";import"./directive-12249aa5.js";const g={title:"Content/Accordion/Single Panel",component:"outline-accordion-panel",tags:["docsPage"],argTypes:{clean:{control:{type:"boolean"},description:'Sets the panel to the "clean" variant.',table:{category:"Properties",defaultValue:{summary:"false"}}},active:{control:{type:"boolean"},description:"Sets the panel to active/open.",table:{category:"Properties",defaultValue:{summary:"false"}}},headingSlotContent:{name:"Heading slot content",control:{type:"text"},description:"Markup for the heading.",table:{category:"Slots",defaultValue:{summary:"NULL"}}},defaultSlotContent:{name:"Default slot content",control:{type:"text"},description:"Markup for the panel content.",table:{category:"Slots",defaultValue:{summary:"NULL"}}}},args:{clean:!1,active:!1,headingSlotContent:'<outline-heading level="h3" level-style="semibold" slot="heading">Accordion Panel</outline-heading>',defaultSlotContent:`<div>
        <outline-heading level="p" level-size="xl" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
        <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
      </div>`}},u=({clean:o,active:i,headingSlotContent:r,defaultSlotContent:s})=>c`
<outline-accordion-panel ?clean=${o} ?active=${i}>
  ${t(`${r}`)}
  ${t(`${s}`)}
</outline-accordion-panel>
  `,e=u.bind({});e.args={clean:!1,active:!1};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"({\n  clean,\n  active,\n  headingSlotContent,\n  defaultSlotContent\n}: any): TemplateResult => html`\n<outline-accordion-panel ?clean=${clean} ?active=${active}>\n  ${unsafeHTML(`${headingSlotContent}`)}\n  ${unsafeHTML(`${defaultSlotContent}`)}\n</outline-accordion-panel>\n  `",...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const f=["SinglePanel"];export{e as SinglePanel,f as __namedExportsOrder,g as default};
//# sourceMappingURL=outline-accordion-panel.stories-9d8bc6ea.js.map
