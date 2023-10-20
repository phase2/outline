import{i as p,x as e}from"./lit-element-411ba165.js";import{O as k,e as v}from"./screen-size-controller-4280a32a.js";import{n as l}from"./property-f36ea729.js";import{l as d}from"./if-defined-93280f6e.js";const m=p`
/* Apply component specific CSS */
:host{
  --outline-link--color--computed:var(--outline-link--color, var(--outline-blue-600));
  --outline-link--text-decoration--computed:var(--outline-link--text-decoration, none);
  --outline-link--color-hover--computed:var(--outline-link--color-hover, var(--outline-gray-600));
  --outline-link--text-decoration-hover--computed:var(--outline-link--text-decoration-hover, underline);
  --outline-link--color-focus--computed:var(--outline-link--color-focus, var(--outline-gray-600));
  --outline-link--text-decoration-focus--computed:var(--outline-link--text-decoration-focus, underline);
  --outline-link--transition-property--computed:var(--outline-link--transition-property, color, background-color, border-color, text-decoration-color, fill, stroke);
  --outline-link--transition-duration--computed:var(--outline-link--transition-duration, 150ms);
  --outline-link--transition-timing-function--computed:var(--outline-link--transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
}

a,
::slotted(a){
  font-family:var(--ff-body);
  -webkit-text-decoration:var(--outline-link--text-decoration--computed);
          text-decoration:var(--outline-link--text-decoration--computed);
  color:var(--outline-link--color--computed);
  transition-property:var(--outline-link--transition-property--computed);
  transition-timing-function:var(
    --outline-link--transition-timing-function--computed
  );
  transition-duration:var(--outline-link--transition-duration--computed);
}

a:hover,
::slotted(a:hover){
  -webkit-text-decoration:var(--outline-link--text-decoration-hover--computed);
          text-decoration:var(--outline-link--text-decoration-hover--computed);
  color:var(--outline-link--color-hover--computed);
}

a:focus,
::slotted(a:focus){
  -webkit-text-decoration:var(--outline-link--text-decoration-focus--computed);
          text-decoration:var(--outline-link--text-decoration-focus--computed);
  color:var(--outline-link--color-focus--computed);
  outline:none;
}
`;var f=Object.defineProperty,x=Object.getOwnPropertyDescriptor,i=(s,n,u,r)=>{for(var t=r>1?void 0:r?x(n,u):n,a=s.length-1,c;a>=0;a--)(c=s[a])&&(t=(r?c(n,u,t):c(t))||t);return r&&t&&f(n,u,t),t};let o=class extends k{constructor(){super(...arguments),this.linkHref=!1,this.linkText=!1}render(){return e`${this.linkHref?e` <a
          href=${this.linkHref}
          rel="${d(this.linkRel)}"
          target="${d(this.linkTarget)}"
        >
          ${this.linkText?e`${this.linkText}`:e`<slot></slot>`}
        </a>`:e`<slot></slot>`}`}};o.styles=[m];i([l({type:String,attribute:"link-href"})],o.prototype,"linkHref",2);i([l({type:String,attribute:"link-text"})],o.prototype,"linkText",2);i([l({type:String,attribute:"link-target"})],o.prototype,"linkTarget",2);i([l({type:String,attribute:"link-rel"})],o.prototype,"linkRel",2);o=i([v("outline-link")],o);const S=p`
/* Apply CSS Variables to the host element. */
:host{
  --outline-link--color--computed:var(--outline-link--color, var(--outline-blue-600));
  --outline-link--text-decoration--computed:var(--outline-link--text-decoration, none);
  --outline-link--color-hover--computed:var(--outline-link--color-hover, var(--outline-gray-600));
  --outline-link--text-decoration-hover--computed:var(--outline-link--text-decoration-hover, underline);
  --outline-link--color-focus--computed:var(--outline-link--color-focus, var(--outline-gray-600));
  --outline-link--text-decoration-focus--computed:var(--outline-link--text-decoration-focus, underline);
  --outline-link--transition-property--computed:var(--outline-link--transition-property, color, background-color, border-color, text-decoration-color, fill, stroke);
  --outline-link--transition-duration--computed:var(--outline-link--transition-duration, 150ms);
  --outline-link--transition-timing-function--computed:var(--outline-link--transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
}
`;export{S as l};
//# sourceMappingURL=vars-link.css.lit-8fdd0acf.js.map
