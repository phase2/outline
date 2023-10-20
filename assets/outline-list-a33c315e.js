import{i as g,x as s}from"./lit-element-411ba165.js";import{O as m,e as d}from"./screen-size-controller-4280a32a.js";import{n as u}from"./property-f36ea729.js";import{o as c}from"./class-map-aeb7fbb6.js";const v=g`
/* Apply component specific CSS */
:host{
  --outline-list--spacing--computed:var(--outline-list--spacing, var(--spacing-4));
  --outline-list--spacing-xs--computed:var(--outline-list--spacing-xs, var(--outline-list--spacing, var(--spacing-4)));
  --outline-list--spacing-sm--computed:var(--outline-list--spacing-sm, var(--outline-list--spacing, var(--spacing-4)));
  --outline-list--spacing-md--computed:var(--outline--list--spacing-md, var(--outline-list--spacing, var(--spacing-4)));
  --outline-list--spacing-lg--computed:var(--outline--list--spacing-lg, var(--outline-list--spacing, var(--spacing-4)));
  --outline-list--spacing-xl--computed:var(--outline--list--spacing-xl, var(--outline-list--spacing, var(--spacing-4)));
  --outline-list--spacing-xxl--computed:var(--outline--list--spacing-xxl, var(--outline-list--spacing, var(--spacing-4)));
  --outline-list--spacing-xxxl--computed:var(--outline--list--spacing-xxxl, var(--outline-list--spacing, var(--spacing-4)));
}

.list{
  border:unset;
  margin:0;
  padding:0;
  display:flex;
  flex-wrap:wrap;
}

ul.list,
ul.grid{
  list-style-type:none;
}

ul.list > ::slotted(li),
ol.list > ::slotted(li),
ul.grid > ::slotted(li),
ol.grid > ::slotted(li){
  display:flex;
  align-items:center;
  white-space:nowrap;
}

.list.row ::slotted(*:not(:last-of-type)){
  margin-right:var(--outline-list--spacing--computed);
}

.list.column ::slotted(*:not(:last-of-type)),
.list.col-center ::slotted(*:not(:last-of-type)){
  margin-bottom:var(--outline-list--spacing--computed);
}

.columns--2,
.columns--3,
.columns--4,
.columns--5,
.columns--6{
  display:flex;
  flex-direction:column;
}

.row{
  display:flex;
  flex-direction:row;
}

.column{
  display:flex;
  flex-direction:column;
}

.col-center{
  display:flex;
  flex-direction:column;
  align-items:center;
}
`;var x=Object.defineProperty,f=Object.getOwnPropertyDescriptor,o=(t,e,a,n)=>{for(var l=n>1?void 0:n?f(e,a):e,r=t.length-1,p;r>=0;r--)(p=t[r])&&(l=(n?p(e,a,l):p(l))||l);return n&&l&&x(e,a,l),l};const O=["ol","ul","div"],$=["column","row","col-center"];let i=class extends m{constructor(){super(...arguments),this.orientation="column"}render(){const t={list:!0,[`${this.orientation}`]:this.orientation};return this.navLabel?s`
          <slot name="heading"></slot>
          <nav role="navigation" aria-label="${this.navLabel}">
            ${this.listCase(t)}
          </nav>
          <slot name="footer"></slot>
        `:s`<slot name="heading"></slot>
          ${this.listCase(t)}
          <slot name="footer"></slot>`}listCase(t){switch(this.listType){case"ol":return s`
          <ol class=${c(t)}>
            <slot></slot>
          </ol>
        `;case"ul":return s`
          <ul class=${c(t)}>
            <slot></slot>
          </ul>
        `;default:return s`
          <div class=${c(t)}>
            <slot></slot>
          </div>
        `}}};i.styles=[v];o([u({type:String,attribute:"list-type"})],i.prototype,"listType",2);o([u({type:String})],i.prototype,"orientation",2);o([u({type:String,attribute:"nav-label"})],i.prototype,"navLabel",2);i=o([d("outline-list")],i);export{$ as a,O as l};
//# sourceMappingURL=outline-list-a33c315e.js.map
