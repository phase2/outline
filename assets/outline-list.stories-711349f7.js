import{x as l}from"./lit-element-411ba165.js";import{l as c}from"./if-defined-93280f6e.js";import{o as y}from"./unsafe-html-3f86ca9e.js";import{l as h,a as f}from"./outline-list-a33c315e.js";import"./outline-heading-e5f4beef.js";import"./directive-12249aa5.js";import"./screen-size-controller-4280a32a.js";import"./property-f36ea729.js";import"./class-map-aeb7fbb6.js";import"./static-0503aeb3.js";import"./mobile-controller-f2865d76.js";const H={title:"Navigation/List",component:"outline-list",tags:["docsPage"],parameters:{docs:{source:{code:`
        const items = someLogic

          <outline-list
            listType="ol"
            navLabel="main_navigation"
            orientation="row"
          >
            items.map(item => html\`
             <li style={padding: 1rem; list-style: none}>
              <outline-link
                link-href="{item.linkHref}"
                link-text="{item.text}"
              ></outline-link>
            </li>\`
          )}

          // Alternative example

          </outline-list>
            <outline-list
            listType="ul"
            orientation="column"
            >
              <outline-heading slot="heading" level="h3" levelSize="3xl">Links List</outline-heading>
              <li style=padding: 1rem; list-style: none>
                  <outline-link link-href='#' link-text="link 1"></outline-link>
              </li>
              <li style=padding: 1rem; list-style: none>
                  <outline-link link-href='#' link-text="link 2"></outline-link>
              </li>
              <li style=padding: 1rem; list-style: none>
                  <outline-link link-href='#' link-text="link 3"></outline-link>
              </li>
            )}
            <outline-button slot="footer" @click={this.orderBy}>Order by criteria</outline-button>
            <outline-button slot="footer" @click={this.orderByOther}>Order by other criteria</outline-button>
          </outline-list>
      
    `}}},argTypes:{listType:{table:{category:"Properties",defaultValue:{summary:"div"}},description:"Determines which type of list is rendered.",options:h,control:{type:"select"},name:"list-type"},orientation:{table:{category:"Properties",defaultValue:{summary:"row"}},description:"Sets orientation of list",options:f,control:{type:"select"}},navLabel:{table:{category:"Properties",defaultValue:{summary:"NULL"}},description:"If set will wrap list in a `nav` tag with the passed string set as the `aria-label`",control:{type:"text"},name:"nav-label"},headingSlotContent:{table:{category:"Slots",defaultValue:{summary:"NULL"}},control:{type:"text"},name:"heading",description:'**slot="heading"**'},footerSlotContent:{table:{category:"Slots",defaultValue:{summary:"NULL"}},control:{type:"text"},name:"footer",description:'**slot="footer"**'},itemCount:{table:{category:"Other Controls",defaultValue:{summary:"4"}},control:{type:"range",min:0,max:30,step:1}}},args:{listType:"div",navLabel:"",orientation:"row",itemCount:4,headingSlotContent:"",footerSlotContent:""}},g=n=>{const e=[];for(let t=0;t<n;t++)e.push({linkHref:"/",text:`Sample Link ${t+1}`});return e},k=({listType:n,navLabel:e,orientation:t,itemCount:u,headingSlotContent:o,footerSlotContent:d,divider:p})=>l`
    <outline-list
      list-type="${n}"
      nav-label="${e}"
      orientation="${t}"
      .divider=${p}
    >
      ${o?l`
      <outline-heading slot="heading" level="h3" levelSize="3xl"
        >${o}</outline-heading
      >
      `:""}
      ${g(u).map(r=>l`
          <outline-link
            link-href=${r.linkHref}
            link-text=${r.text}
          ></outline-link>
        `)}
      <slot slot="footer">${c(y(d))}</slot>
    </outline-list>
  `,i=k.bind({});var a,s,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`({
  listType,
  navLabel,
  orientation,
  itemCount,
  headingSlotContent,
  footerSlotContent,
  divider
}: any): TemplateResult => {
  return html\`
    <outline-list
      list-type="\${listType}"
      nav-label="\${navLabel}"
      orientation="\${orientation}"
      .divider=\${divider}
    >
      \${headingSlotContent ? html\`
      <outline-heading slot="heading" level="h3" levelSize="3xl"
        >\${headingSlotContent}</outline-heading
      >
      \` : \`\`}
      \${items(itemCount).map(item => html\`
          <outline-link
            link-href=\${item.linkHref}
            link-text=\${item.text}
          ></outline-link>
        \`)}
      <slot slot="footer">\${ifDefined(unsafeHTML(footerSlotContent))}</slot>
    </outline-list>
  \`;
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const N=["List"];export{i as List,N as __namedExportsOrder,H as default};
//# sourceMappingURL=outline-list.stories-711349f7.js.map
