import{i as d,x as u}from"./lit-element-411ba165.js";import{O as v,e as p}from"./screen-size-controller-4280a32a.js";import{n as l}from"./property-f36ea729.js";import{l as b}from"./if-defined-93280f6e.js";const g=d`
/* Apply component specific CSS */
:host{
  --outline-alert--info-background--computed:var(--outline-alert--info-background, var(--outline-white));
  --outline-alert--info-text--computed:var(--outline-alert--info-text,var( --status-info));
  --outline-alert--info-border--computed:var(--outline-alert--info-border, var(--status-info));

  --outline-alert--success-background--computed:var(--outline-alert--success-background, var(--outline-white));
  --outline-alert--success-text--computed:var(--outline-alert--success-text, var(--status-success));
  --outline-alert--success-border--computed:var(--outline-alert--success-border, var(--status-success));

  --outline-alert--warning-background--computed:var(--outline-alert--warning-background, var(--outline-white));
  --outline-alert--warning-text--computed:var(--outline-alert--warning-text, var(--status-warning));
  --outline-alert--warning-border--computed:var(--outline-alert--warning-border, var(--status-warning));

  --outline-alert--error-background--computed:var(--outline-alert--error-background, var(--outline-white));
  --outline-alert--error-text--computed:var(--outline-alert--error-text, var(--status-error));
  --outline-alert--error-border--computed:var(--outline-alert--error-border, var(--status-error));
}

.alert-body{
  display:block;
  border-width:0;
  border-left-width:8px;
  border-style:solid;
  padding:1rem;
}

.alert-header{
  font-size:var(--fs-lg);
  line-height:var(--lh-lg);
  font-weight:var(--fw-bold);
  text-transform:capitalize;
}

:host([status='info']) .alert-body{
  background-color:var(--outline-alert--info-background--computed);
  border-color:var(--outline-alert--info-border--computed);
  color:var(--outline-alert--info-text--computed);
}

:host([status='warning']) .alert-body{
  background-color:var(--outline-alert--warning-background--computed);
  border-color:var(--outline-alert--warning-border--computed);
  color:var(--outline-alert--warning-text--computed);
}

:host([status='error']) .alert-body{
  background-color:var(--outline-alert--error-background--computed);
  border-color:var(--outline-alert--error-border--computed);
  color:var(--outline-alert--error-text--computed);
}

:host([status='success']) .alert-body{
  background-color:var(--outline-alert--success-background--computed);
  border-color:var(--outline-alert--success-border--computed);
  color:var(--outline-alert--success-text--computed);
}
`;var m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,r=(c,o,s,a)=>{for(var t=a>1?void 0:a?h(o,s):o,n=c.length-1,i;n>=0;n--)(i=c[n])&&(t=(a?i(o,s,t):i(t))||t);return a&&t&&m(o,s,t),t};const k=["small","large"],S=["info","warning","error","success"];let e=class extends v{constructor(){super(...arguments),this.status="info",this.isInteractive=!1,this.shouldShowIcon=!1,this.size="large"}render(){return u`
      <div
        class="alert-body"
        role="${this.isInteractive?"alertdialog":"alert"}"
        aria-labelledby=${b(this.isInteractive?"message":void 0)}
      >
        ${this.shouldShowIcon===!0?u`
              <div class="icon">
                <!--@todo include icon when we have that ready.-->
              </div>
            `:null}
        ${this.size==="large"?u`
              <div class="alert-header">
                <slot name="header">${this.status}</slot>
              </div>
            `:null}
        <div class="message" id="message">
          <slot></slot>
        </div>
      </div>
    `}};e.styles=[g];r([l({type:String,attribute:"status"})],e.prototype,"status",2);r([l({type:Boolean,attribute:"is-interactive"})],e.prototype,"isInteractive",2);r([l({type:Boolean,attribute:"should-show-icon"})],e.prototype,"shouldShowIcon",2);r([l({type:String,attribute:"size"})],e.prototype,"size",2);e=r([p("outline-alert")],e);export{S as a,k as b};
//# sourceMappingURL=outline-alert-3efcdbe8.js.map
