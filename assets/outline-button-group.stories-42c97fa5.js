import{x as u}from"./lit-element-411ba165.js";import{a as d}from"./outline-list-a33c315e.js";import{e as f,O as v}from"./screen-size-controller-4280a32a.js";import{n as g}from"./property-f36ea729.js";import{l as h}from"./if-defined-93280f6e.js";import{S as y}from"./slots-controller-d122fba7.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";import"./static-0503aeb3.js";var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,p=(n,t,e,r)=>{for(var o=r>1?void 0:r?w(t,e):t,s=n.length-1,l;s>=0;s--)(l=n[s])&&(o=(r?l(t,e,o):l(o))||o);return r&&o&&x(t,e,o),o};let i=class extends v{constructor(){super(...arguments),this.slots=new y(this),this.orientation="row"}render(){return u`
      <outline-list
        nav-label="${h(this.navLabel)}"
        orientation="${this.orientation}"
      >
        <slot></slot>
      </outline-list>
    `}};p([g({type:String})],i.prototype,"orientation",2);p([g({type:String,attribute:"nav-label"})],i.prototype,"navLabel",2);i=p([f("outline-button-group")],i);const V={title:"Navigation/Button Group",component:"outline-button-group",tags:["docsPage"],argTypes:{orientation:{table:{category:"Properties",defaultValue:{summary:"row"}},description:"Sets the orientation of group of buttons.",options:d,control:{type:"select"}},itemCount:{table:{category:"Extra Controls",defaultValue:{summary:"3"}},control:{type:"range",min:1,max:12,step:1}},navLabel:{table:{category:"Properties",defaultValue:{summary:"NULL"}},description:"If set, will wrap list in a `nav` tag with the passed string set as the `aria-label`.",control:{type:"text"},name:"nav-label"}},args:{orientation:"row",itemCount:3},parameters:{docs:{description:{component:`
## The \`outline-button-group\` element

<outline-alert status="warning" size="large" class="mb-6">
  <span slot="header">Status: Experimental</span>
  <div>This component is still in an experimental stage, and has additional work to be feature complete.</div>
</outline-alert>
        `}}}},$=n=>{const t=[];for(let e=0;e<n;e++)t.push({linkHref:"/",text:`Sample Button ${e+1}`});return t},O=({navLabel:n,itemCount:t,orientation:e})=>u`
  <outline-button-group
    nav-label="${n}"
    orientation="${e}"
  >
  ${$(t).map(r=>u`
      <outline-button>
        ${r.text}
      </outline-button>
    `)}
  </outline-button-group>
  `,a=O.bind({});var m,c,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  navLabel,
  itemCount,
  orientation
}: any): TemplateResult => {
  return html\`
  <outline-button-group
    nav-label="\${navLabel}"
    orientation="\${orientation}"
  >
  \${items(itemCount).map(item => html\`
      <outline-button>
        \${item.text}
      </outline-button>
    \`)}
  </outline-button-group>
  \`;
}`,...(b=(c=a.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const j=["ButtonGroup"];export{a as ButtonGroup,j as __namedExportsOrder,V as default};
//# sourceMappingURL=outline-button-group.stories-42c97fa5.js.map
