import{x as i}from"./lit-element-411ba165.js";import{o as r}from"./unsafe-html-3f86ca9e.js";import"./screen-size-controller-4280a32a.js";import{b as d}from"./utils-46bce928.js";import"./outline-accordion-panel-bd2fa9a3.js";import"./outline-heading-e5f4beef.js";import"./directive-12249aa5.js";import"./property-f36ea729.js";import"./mobile-controller-f2865d76.js";import"./slots-controller-d122fba7.js";import"./class-map-aeb7fbb6.js";import"./if-defined-93280f6e.js";import"./static-0503aeb3.js";import"./outline-icon-6c6ddb2f.js";import"./state-2a0073ff.js";const N={title:"Content/Accordion/Accordion",component:"outline-accordion",tags:["docsPage"],argTypes:{label:{control:{type:"text"},description:"Markup to be used as heading for the accordion. If not provided, the accordion will not have a heading.",table:{category:"Slots",defaultValue:{summary:"NULL"}}},allOpen:{description:"Attribute that determines if all the accordion panels start open. Currently just for the editor experience. Defaults to false.",control:{type:"boolean"},name:"all open",table:{category:"Properties",defaultValue:{summary:"false"}}},singlePanel:{description:"Attribute that determines if the accordion can have multiple panels one at one time.",control:{type:"boolean"},name:"single-panel",table:{category:"Properties",defaultValue:{summary:"false"}}},clean:{control:{type:"boolean"},description:'**`Boolean`**:<br> Sets the accordion to the "clean" variant.',table:{category:"Properties",defaultValue:{summary:"false"}}},PanelsSlotContent:d},args:{singlePanel:!0,clean:!1,allOpen:!1,label:'<outline-heading level="h2" level-style="semibold" slot="label">Accordion Items</outline-heading>'}},c=({clean:o,singlePanel:s,allOpen:u,label:l})=>i`
<outline-accordion
  ?clean=${o}
  ?single-panel=${s}
  ?allOpen=${u}
>
  ${l?i`${r(l)}`:null}
  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 1</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>

  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 2</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>
  
  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 3</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
    </div>
  </outline-accordion-panel>

  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 4</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>

  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 5</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>
</outline-accordion>
`,e=c.bind({});e.args={singlePanel:!0,clean:!1,allOpen:!1};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`({
  clean,
  singlePanel,
  allOpen,
  label
}: any): TemplateResult => html\`
<outline-accordion
  ?clean=\${clean}
  ?single-panel=\${singlePanel}
  ?allOpen=\${allOpen}
>
  \${label ? html\`\${unsafeHTML(label)}\` : null}
  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 1</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>

  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 2</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>
  
  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 3</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
    </div>
  </outline-accordion-panel>

  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 4</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>

  <outline-accordion-panel slot="panels">
    <outline-heading level="h3" level-style="semibold" slot="heading">Accordion Item 5</outline-heading>
    <div>
      <outline-heading level="h4" level-style="semibold">Etiam ut purus mattis mauris</outline-heading>
      <p>Suspendisse eu ligula. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Maecenas ullamcorper dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Nam at tortor in tellus interdum sagittis..</p>
    </div>
  </outline-accordion-panel>
</outline-accordion>
\``,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const q=["Accordion"];export{e as Accordion,q as __namedExportsOrder,N as default};
//# sourceMappingURL=outline-accordion.stories-0e976170.js.map
