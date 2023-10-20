import{i as p,x as m}from"./lit-element-411ba165.js";import{O as v,e as k}from"./screen-size-controller-4280a32a.js";import{S as g}from"./slots-controller-d122fba7.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";import"./if-defined-93280f6e.js";import"./static-0503aeb3.js";const f=p`
/* Apply component specific CSS */
:host{
  --outline-admin-links--color--computed:var(--outline-admin-links--color, var(--outline-gray-600));
  --outline-admin-links--color-hover--computed:var(--outline-admin-links--color-hover, var(--outline-soft-black));
  --outline-admin-links--color-focus--computed:var(--outline-admin-links--color-focus, var(--outline-soft-black));
  --outline-admin-links--color-active--computed:var(--outline-admin-links--color-active,var( --outline-white));
  --outline-admin-links--bg--computed:var(--outline-admin-links--bg, var(--outline-gray-100));
  --outline-admin-links--bg-hover--computed:var(--outline-admin-links--bg-hover,var( --outline-gray-300));
  --outline-admin-links--bg-focus--computed:var(--outline-admin-links--bg-focus,var( --outline-gray-300));
  --outline-admin-links--bg-active--computed:var(--outline-admin-links--bg-active, var(--outline-blue-600));
  --outline-admin-links--spacing-y--computed:var(--outline-admin-links--spacing-y, var(--spacing-4));
  --outline-admin-links--link-spacing-y--computed:var(--outline-admin-links--link-spacing-y, var(--spacing-4));
  --outline-admin-links--link-spacing-x--computed:var(--outline-admin-links--link-spacing-x, var(--spacing-6));
}

.links{
  padding-top:var(--outline-admin-links--spacing-y--computed);
  padding-bottom:var(--outline-admin-links--spacing-y--computed);
}

ul{
  display:flex;
  list-style-type:none;
  margin:0;
  padding:0;
}

li{
  margin:0;
  padding:0;
  display:block;
}

a{
  position:relative;
  text-decoration:none;
  padding-top:var(--outline-admin-links--link-spacing-y--computed);
  padding-bottom:var(--outline-admin-links--link-spacing-y--computed);
  padding-left:var(--outline-admin-links--link-spacing-x--computed);
  padding-right:var(--outline-admin-links--link-spacing-x--computed);
  background:var(--outline-admin-links--bg--computed);
  color:var(--outline-admin-links--color--computed);
}

a:hover{
    outline:none;
    background:var(--outline-admin-links--bg-hover--computed);
    color:var(--outline-admin-links--color-hover--computed);
  }

a:focus{
    outline:none;
    background:var(--outline-admin-links--bg-focus--computed);
    color:var(--outline-admin-links--color-focus--computed);
  }

a:not(.is-active):hover::before,
  a:not(.is-active):focus::before{
    position:absolute;
    top:50%;
    left:50%;
    width:calc(100%);
    height:100%;
    content:'';
    transform:translate(-50%, -50%);
    border:solid 2px var(--outline-admin-links--color-hover--computed);
    border-radius:0.25rem;
  }

a.is-active{
    outline:solid 2px var(--outline-admin-links--color-hover--computed);
    background:var(--outline-admin-links--bg-active--computed);
    color:var(--outline-admin-links--color-active--computed);
    z-index:1;
  }

a.is-active:hover,
    a.is-active:focus{
      outline-offset:2px;
    }
`;var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,y=(r,a,o,e)=>{for(var i=e>1?void 0:e?b(a,o):a,l=r.length-1,t;l>=0;l--)(t=r[l])&&(i=(e?t(a,o,i):t(i))||i);return e&&i&&h(a,o,i),i};let s=class extends v{constructor(){super(...arguments),this.slots=new g(this)}render(){return m` <div class="links">${this.slots.renderInShadow("")}</div> `}};s.styles=[f];s=y([k("outline-admin-links")],s);const E={title:"Navigation/Administrative Links",component:"outline-admin-links",tags:["docsPage"],argTypes:{},args:{},parameters:{docs:{description:{component:`
> Typically used in a Drupal consumer to display a horizontal list of administrative actions availble to any given piece of content.
`}}}},x=()=>m`
    <outline-admin-links>
      <ul>
        <li>
          <a href="#" class="is-active">
            View<span class="visually-hidden">(active tab)</span>
          </a>
        </li>
        <li>
          <a href="#">Edit</a>
        </li>
        <li>
          <a href="#">Layout</a>
        </li>
        <li>
          <a href="#">Translate</a>
        </li>
        <li>
          <a href="#">Revisions</a>
        </li>
        <li>
          <a href="#">Lasers</a>
        </li>
      </ul>
    </outline-admin-links>
  `,n=x.bind({});n.parameters={docs:{source:{code:`
<outline-admin-links>
  <ul>
    <li>
      <a href="#" class="is-active">
        View<span class="visually-hidden">(active tab)</span>
      </a>
    </li>
    <li>
      <a href="#">Edit</a>
    </li>
    <li>
      <a href="#">Layout</a>
    </li>
    <li>
      <a href="#">Translate</a>
    </li>
    <li>
      <a href="#">Revisions</a>
    </li>
    <li>
      <a href="#">Lasers</a>
    </li>
  </ul>
</outline-admin-links>
      `}}};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`(): TemplateResult => html\`
    <outline-admin-links>
      <ul>
        <li>
          <a href="#" class="is-active">
            View<span class="visually-hidden">(active tab)</span>
          </a>
        </li>
        <li>
          <a href="#">Edit</a>
        </li>
        <li>
          <a href="#">Layout</a>
        </li>
        <li>
          <a href="#">Translate</a>
        </li>
        <li>
          <a href="#">Revisions</a>
        </li>
        <li>
          <a href="#">Lasers</a>
        </li>
      </ul>
    </outline-admin-links>
  \``,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const P=["AdministrativeLinks"];export{n as AdministrativeLinks,P as __namedExportsOrder,E as default};
//# sourceMappingURL=outline-admin-links.stories-3394564d.js.map
