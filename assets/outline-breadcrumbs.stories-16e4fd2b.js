import{i as p,x as b}from"./lit-element-411ba165.js";import{O as v,e as g}from"./screen-size-controller-4280a32a.js";import{S as f}from"./slots-controller-d122fba7.js";import{n as h}from"./property-f36ea729.js";import"./outline-container-cbfed8dd.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";import"./if-defined-93280f6e.js";import"./static-0503aeb3.js";const k=p`
/* Apply component specific CSS */
:host{
  --outline-breadcrumb--text-color--computed:var(--outline-breadcrumb--text-color, var(--outline-gray-100));
  --outline-breadcrumb--link-color--computed:var(--outline-breadcrumb--link-color, var(--outline-white));
  --outline-breadcrumb--link-color-hover--computed:var(--outline-breadcrumb--link-color-hover, var(--outline-gray-300));
  --outline-breadcrumb--link-color-focus--computed:var(--outline-breadcrumb--link-color-focus, var(--outline-gray-300));
  --outline-breadcrumb--link-decoration--computed:var(--outline-breadcrumb--link-decoration, none);
  --outline-breadcrumb--link-decoration-hover--computed:var(--outline-breadcrumb--link-decoration-hover, underline);
  --outline-breadcrumb--link-decoration-focus--computed:var(--outline-breadcrumb--link-decoration-focus, underline);
  --outline-breadcrumb--bg-color--computed:var(--outline-breadcrumb--bg-color, var(--outline-blue-600));
  --outline-breadcrumb--bg-padding--computed:var(--outline-breadcrumb--bg-padding, var(--spacing-4) var(--spacing-4));
  --outline-breadcrumb--separator-spacing--computed:var(--outline-breadcrumb--separator-spacing, var(--spacing-2));
}

.outline-breadcrumbs{
  color:var(--outline-breadcrumb--text-color--computed);
  background:var(--outline-breadcrumb--bg-color--computed);
  padding:var(--outline-breadcrumb--bg-padding--computed);
}

a, ::slotted(a) {
  font-family: var(--ff-body);
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  -webkit-text-decoration:var(--outline-breadcrumb--link-decoration--computed);
          text-decoration:var(--outline-breadcrumb--link-decoration--computed);
  color:var(--outline-breadcrumb--link-color--computed);
}

a:hover,
::slotted(a:hover){
  -webkit-text-decoration:var(--outline-breadcrumb--link-decoration-hover--computed);
          text-decoration:var(--outline-breadcrumb--link-decoration-hover--computed);
  color:var(--outline-breadcrumb--link-color-hover--computed);
}

a:focus,
::slotted(a:focus){
  -webkit-text-decoration:var(--outline-breadcrumb--link-decoration-focus--computed);
          text-decoration:var(--outline-breadcrumb--link-decoration-focus--computed);
  outline:none;
  color:var(--outline-breadcrumb--link-color-focus--computed);
}

.separator{
  margin-left:var(--outline-breadcrumb--separator-spacing--computed);
  margin-right:var(--outline-breadcrumb--separator-spacing--computed);
}
`;var y=Object.defineProperty,x=Object.getOwnPropertyDescriptor,m=(c,o,r,t)=>{for(var e=t>1?void 0:t?x(o,r):o,i=c.length-1,u;i>=0;i--)(u=c[i])&&(e=(t?u(o,r,e):u(e))||e);return t&&e&&y(o,r,e),e};let n=class extends v{constructor(){super(...arguments),this.slots=new f(this),this.stringSeparator="/"}firstUpdated(){this.querySelectorAll("span:not(.last)").forEach(o=>{const r=document.createElement("span");r.classList.add("separator"),r.innerHTML=this.stringSeparator,o.append(r)})}render(){return b`
      <section class="outline-breadcrumbs">
        <outline-container>
          ${this.slots.renderInShadow("")}
        </outline-container>
      </section>
    `}};n.styles=[k];m([h({type:String,attribute:"string-separator"})],n.prototype,"stringSeparator",2);n=m([g("outline-breadcrumbs")],n);const H={title:"Navigation/Breadcrumb",component:"outline-breadcrumb",tags:["docsPage"],parameters:{viewMode:"docs",docs:{source:{state:"open"}}},argTypes:{},args:{}},S=()=>b`
<outline-breadcrumbs>
  <nav class="breadcrumb">
    <span>
      <a href="#">Home</a>
    </span>
    <span>
      <a href="#">About Us</a>
    </span>
    <span>
      <a href="#">Our History</a>
    </span>
    <span class="last">The current page title</span>
  </nav>
</outline-breadcrumbs>
`,a=()=>S();var l,d,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"() => Template()",...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const I=["Breadcrumb"];export{a as Breadcrumb,I as __namedExportsOrder,H as default};
//# sourceMappingURL=outline-breadcrumbs.stories-16e4fd2b.js.map
