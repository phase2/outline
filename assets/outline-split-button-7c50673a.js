import{O as m,e as p}from"./screen-size-controller-4280a32a.js";import{i as v,x as b}from"./lit-element-411ba165.js";import{n as i}from"./property-f36ea729.js";import{t as g}from"./state-2a0073ff.js";import{l as c}from"./if-defined-93280f6e.js";import{S as h}from"./slots-controller-d122fba7.js";import{l as y}from"./vars-link.css.lit-8fdd0acf.js";const f=v`
/* Apply component specific CSS */
:host{
  --outline-button--family--computed:var(--outline-button--family, var(--ff-body));
  --outline-button--weight--computed:var(--outline-button--weight, var(--fw-semibold));
  --outline-button--padding--computed:var(--outline-button--padding, var(--spacing-2) var(--spacing-4));
  --outline-button--radius--computed:var(--outline-button--radius, var(--spacing-2));
}

:host{
  --outline-button--link-padding--computed:var(--outline-button--link-padding, var(--outline-button--padding--computed));
  --outline-button--link-radius--computed:var(--outline-button--link-radius, var(--outline-button--radius--computed));
  --outline-button--link-bg-color--computed:var(--outline-button--link-bg-color, var(--outline-transparent));
  --outline-button--link-color--computed:var(--outline-button--link-color, var(--outline-link--color--computed));
  --outline-button--link-decoration--computed:var(--outline-button--link-decoration,  var(--outline-link--decoration--computed));
  --outline-button--link-weight--computed:var(--outline-button--link-weight, var(--outline-button--weight--computed));
  --outline-button--link-ring--computed:var(--outline-button--link-ring, none);
  --outline-button--link-bg-color-hover--computed:var(--outline-button--link-bg-color-hover, var(--outline-transparent));
  --outline-button--link-color-hover--computed:var(--outline-button--link-color-hover, var(--outline-link--color-hover--computed));
  --outline-button--link-decoration-hover--computed:var(--outline-button--link-decoration-hover, underline);
  --outline-button--link-weight-hover--computed:var(--outline-button--link-weight-hover, var(--outline-button--weight--computed));
  --outline-button--link-ring-hover--computed:var(--outline-button--link-ring-hover, none);
  --outline-button--link-bg-color-focus--computed:var(--outline-button--link-bg-color-focus, var(--outline-transparent));
  --outline-button--link-color-focus--computed:var(--outline-button--link-color-focus, var(--outline-link--color-focus--computed));
  --outline-button--link-decoration-focus--computed:var(--outline-button--link-decoration-focus, underline);
  --outline-button--link-weight-focus--computed:var(--outline-button--link-weight-focus, var(--outline-button--weight--computed));
  --outline-button--link-ring-focus--computed:var(--outline-button--link-ring-focus, none);
  --outline-button--link-disabled-bg-color--computed:var(--outline-button--link-disabled-bg-color, var(--outline-transparent));
  --outline-button--link-disabled-color--computed:var(--outline-button--link-disabled-color, var(--outline-gray-500));
  --outline-button--link-disabled-decoration--computed:var(--outline-button--link-disabled-decoration, none);
  --outline-button--link-disabled-weight--computed:var(--outline-button--link-disabled-weight, var(--outline-button--weight--computed));
  --outline-button--link-disabled-ring--computed:var(--outline-button--link-disabled-ring, none);
  --outline-button--link-disabled-bg-color-focus--computed:var(--outline-button--link-disabled-bg-color-focus, var(--outline-transparent));
  --outline-button--link-disabled-color-focus--computed:var(--outline-button--link-disabled-color-focus, var(--outline-gray-500));
  --outline-button--link-disabled-decoration-focus--computed:var(--outline-button--link-disabled-decoration-focus, none);
  --outline-button--link-disabled-weight-focus--computed:var(--outline-button--link-disabled-weight-focus, var(--outline-button--weight--computed));
  --outline-button--link-disabled-ring-focus--computed:var(--outline-button--link-disabled-ring-focus, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-500));
}

:host{
  --outline-button--primary-padding--computed:var(--outline-button--primary-padding, var(--outline-button--padding--computed));
  --outline-button--primary-radius--computed:var(--outline-button--primary-radius, var(--outline-button--radius--computed));
  --outline-button--primary-bg-color--computed:var(--outline-button--primary-bg-color, var(--outline-blue-600));
  --outline-button--primary-color--computed:var(--outline-button--primary-color, var(--outline-white));
  --outline-button--primary-weight--computed:var(--outline-button--primary-weight, var(--outline-button--weight--computed));
  --outline-button--primary-ring--computed:var(--outline-button--primary-ring, none);
  --outline-button--primary-bg-color-hover--computed:var(--outline-button--primary-bg-color-hover, var(--outline-white));
  --outline-button--primary-color-hover--computed:var(--outline-button--primary-color-hover, var(--outline-blue-600));
  --outline-button--primary-weight-hover--computed:var(--outline-button--primary-weight-hover, var(--outline-button--weight--computed));
  --outline-button--primary-ring-hover--computed:var(--outline-button--primary-ring-hover, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-blue-600));
  --outline-button--primary-bg-color-focus--computed:var(--outline-button--primary-bg-color-focus, var(--outline-white));
  --outline-button--primary-color-focus--computed:var(--outline-button--primary-color-focus, var(--outline-blue-600));
  --outline-button--primary-weight-focus--computed:var(--outline-button--primary-weight-focus, var(--outline-button--weight--computed));
  --outline-button--primary-ring-focus--computed:var(--outline-button--primary-ring-focus, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-blue-600));
  --outline-button--primary-disabled-bg-color--computed:var(--outline-button--primary-disabled-bg-color, var(--outline-white));
  --outline-button--primary-disabled-color--computed:var(--outline-button--primary-disabled-color, var(--outline-gray-400));
  --outline-button--primary-disabled-weight--computed:var(--outline-button--primary-disabled-weight, var(--outline-button--weight--computed));
  --outline-button--primary-disabled-ring--computed:var(--outline-button--primary-disabled-ring, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-300));
  --outline-button--primary-disabled-bg-color-focus--computed:var(--outline-button--primary-disabled-bg-color-focus, var(--outline-white));
  --outline-button--primary-disabled-color-focus--computed:var(--outline-button--primary-disabled-color-focus, var(--outline-gray-400));
  --outline-button--primary-disabled-weight-focus--computed:var(--outline-button--primary-disabled-weight-focus, var(--outline-button--weight--computed));
  --outline-button--primary-disabled-ring-focus--computed:var(--outline-button--primary-disabled-ring-focus, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-400));
}

:host{
  --outline-button--secondary-padding--computed:var(--outline-button--secondary-padding, var(--outline-button--padding--computed));
  --outline-button--secondary-radius--computed:var(--outline-button--secondary-radius, var(--outline-button--radius--computed));
  --outline-button--secondary-bg-color--computed:var(--outline-button--secondary-bg-color, var(--outline-white));
  --outline-button--secondary-color--computed:var(--outline-button--secondary-color, var(--outline-blue-600));
  --outline-button--secondary-weight--computed:var(--outline-button--secondary-weight, var(--outline-button--weight--computed));
  --outline-button--secondary-ring--computed:var(--outline-button--secondary-ring, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-blue-600));
  --outline-button--secondary-bg-color-hover--computed:var(--outline-button--secondary-bg-color-hover, var(--outline-blue-600));
  --outline-button--secondary-color-hover--computed:var(--outline-button--secondary-color-hover, var(--outline-white));
  --outline-button--secondary-weight-hover--computed:var(--outline-button--secondary-weight-hover, var(--outline-button--weight--computed));
  --outline-button--secondary-ring-hover--computed:var(--outline-button--secondary-ring-hover, none);
  --outline-button--secondary-bg-color-focus--computed:var(--outline-button--secondary-bg-color-focus, var(--outline-blue-600));
  --outline-button--secondary-color-focus--computed:var(--outline-button--secondary-color-focus, var(--outline-white));
  --outline-button--secondary-weight-focus--computed:var(--outline-button--secondary-weight-focus, var(--outline-button--weight--computed));
  --outline-button--secondary-ring-focus--computed:var(--outline-button--secondary-ring-focus, none);
  --outline-button--secondary-disabled-bg-color--computed:var(--outline-button--secondary-disabled-bg-color, var(--outline-white));
  --outline-button--secondary-disabled-color--computed:var(--outline-button--secondary-disabled-color, var(--outline-gray-400));
  --outline-button--secondary-disabled-weight--computed:var(--outline-button--secondary-disabled-weight, var(--outline-button--weight--computed));
  --outline-button--secondary-disabled-ring--computed:var(--outline-button--secondary-disabled-ring, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-300));
  --outline-button--secondary-disabled-bg-color-focus--computed:var(--outline-button--secondary-disabled-bg-color-focus, var(--outline-white));
  --outline-button--secondary-disabled-color-focus--computed:var(--outline-button--secondary-disabled-color-focus, var(--outline-gray-400));
  --outline-button--secondary-disabled-weight-focus--computed:var(--outline-button--secondary-disabled-weight-focus, var(--outline-button--weight--computed));
  --outline-button--secondary-disabled-ring-focus--computed:var(--outline-button--secondary-disabled-ring-focus, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-400));
}

:host{
  --outline-button--tertiary-padding--computed:var(--outline-button--tertiary-padding, var(--outline-button--padding--computed));
  --outline-button--tertiary-radius--computed:var(--outline-button--tertiary-radius, var(--outline-button--radius--computed));
  --outline-button--tertiary-bg-color--computed:var(--outline-button--tertiary-bg-color, var(--outline-soft-black));
  --outline-button--tertiary-color--computed:var(--outline-button--tertiary-color, var(--outline-white));
  --outline-button--tertiary-weight--computed:var(--outline-button--tertiary-weight, var(--outline-button--weight--computed));
  --outline-button--tertiary-ring--computed:var(--outline-button--tertiary-ring, none);
  --outline-button--tertiary-bg-color-hover--computed:var(--outline-button--tertiary-bg-color-hover, var(--outline-white));
  --outline-button--tertiary-color-hover--computed:var(--outline-button--tertiary-color-hover, var(--outline-soft-black));
  --outline-button--tertiary-weight-hover--computed:var(--outline-button--tertiary-weight-hover, var(--outline-button--weight--computed));
  --outline-button--tertiary-ring-hover--computed:var(--outline-button--tertiary-ring-hover, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-soft-black));
  --outline-button--tertiary-bg-color-focus--computed:var(--outline-button--tertiary-bg-color-focus, var(--white));
  --outline-button--tertiary-color-focus--computed:var(--outline-button--tertiary-color-focus, var(--outline-soft-black));
  --outline-button--tertiary-weight-focus--computed:var(--outline-button--tertiary-weight-focus, var(--outline-button--weight--computed));
  --outline-button--tertiary-ring-focus--computed:var(--outline-button--tertiary-ring-focus, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-soft-black));
  --outline-button--tertiary-disabled-bg-color--computed:var(--outline-button--tertiary-disabled-bg-color, var(--outline-white));
  --outline-button--tertiary-disabled-color--computed:var(--outline-button--tertiary-disabled-color, var(--outline-gray-400));
  --outline-button--tertiary-disabled-weight--computed:var(--outline-button--tertiary-disabled-weight, var(--outline-button--weight--computed));
  --outline-button--tertiary-disabled-ring--computed:var(--outline-button--tertiary-disabled-ring, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-300));
  --outline-button--tertiary-disabled-bg-color-focus--computed:var(--outline-button--tertiary-disabled-bg-color-focus, var(--outline-white));
  --outline-button--tertiary-disabled-color-focus--computed:var(--outline-button--tertiary-disabled-color-focus, var(--outline-gray-400));
  --outline-button--tertiary-disabled-weight-focus--computed:var(--outline-button--tertiary-disabled-weight-focus, var(--outline-button--weight--computed));
  --outline-button--tertiary-disabled-ring-focus--computed:var(--outline-button--tertiary-disabled-ring-focus, var(--outline-ring-inset) 0 0 0 var(--outline-ring-offset-width) var(--outline-gray-400));

  display:inline-flex;

  vertical-align:middle;
}

.btn{
  display:flex;
  flex-wrap:nowrap;
  align-items:center;
  cursor:pointer;
  transition-property:color, background-color, border-color,
    fill, stroke, outline, outline-color, -webkit-text-decoration-color;
  transition-property:color, background-color, border-color,
    text-decoration-color, fill, stroke, outline, outline-color;
  transition-property:color, background-color, border-color,
    text-decoration-color, fill, stroke, outline, outline-color, -webkit-text-decoration-color;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:300ms;
  -webkit-text-decoration-line:none;
          text-decoration-line:none;
  outline:none;
  border:none;

  line-height:1.5;

  border-radius:var(--outline-button--radius--computed);
  font-family:var(--outline-button--family--computed);
  font-weight:var(--outline-button--weight--computed);
  padding:var(--outline-button--padding--computed);
}

.btn[aria-disabled='true']{
  pointer-events:none;
  cursor:not-allowed;
  -webkit-user-select:none;
          user-select:none;
}

.btn.primary{
  padding:var(--outline-button--primary-padding--computed);
  border-radius:var(--outline-button--primary-radius--computed);
  background-color:var(--outline-button--primary-bg-color--computed);
  color:var(--outline-button--primary-color--computed);
  font-weight:var(--outline-button--primary-weight--computed);
  box-shadow:var(--outline-button--primary-ring--computed);
}

.btn.primary:hover{
    background-color:var(--outline-button--primary-bg-color-hover--computed);
    color:var(--outline-button--primary-color-hover--computed);
    font-weight:var(--outline-button--primary-weight-hover--computed);
    box-shadow:var(--outline-button--primary-ring-hover--computed);
  }

.btn.primary:focus{
    background-color:var(--outline-button--primary-bg-color-focus--computed);
    color:var(--outline-button--primary-color-focus--computed);
    font-weight:var(--outline-button--primary-weight-focus--computed);
    box-shadow:var(--outline-button--primary-ring-focus--computed);
  }

.btn.primary[aria-disabled='true']{
  background-color:var(--outline-button--primary-disabled-bg-color--computed);
  color:var(--outline-button--primary-disabled-color--computed);
  font-weight:var(--outline-button--primary-disabled-weight--computed);
  box-shadow:var(--outline-button--primary-disabled-ring--computed);
}

.btn.primary[aria-disabled='true']:focus{
    background-color:var(
      --outline-button--primary-disabled-bg-color-focus--computed
    );
    color:var(--outline-button--primary-disabled-color-focus--computed);
    font-weight:var(--outline-button--primary-disabled-weight-focus--computed);
    box-shadow:var(--outline-button--primary-disabled-ring-focus--computed);
  }

.btn.secondary{
  padding:var(--outline-button--secondary-padding--computed);
  border-radius:var(--outline-button--secondary-radius--computed);

  background-color:var(--outline-button--secondary-bg-color--computed);
  color:var(--outline-button--secondary-color--computed);
  font-weight:var(--outline-button--secondary-weight--computed);
  box-shadow:var(--outline-button--secondary-ring--computed);
}

.btn.secondary:hover{
    background-color:var(--outline-button--secondary-bg-color-hover--computed);
    color:var(--outline-button--secondary-color-hover--computed);
    font-weight:var(--outline-button--secondary-weight-hover--computed);
    box-shadow:var(--outline-button--secondary-ring-hover--computed);
  }

.btn.secondary:focus{
    background-color:var(--outline-button--secondary-bg-color-focus--computed);
    color:var(--outline-button--secondary-color-focus--computed);
    font-weight:var(--outline-button--secondary-weight-focus--computed);
    box-shadow:var(--outline-button--secondary-ring-focus--computed);
  }

.btn.secondary[aria-disabled='true']{
  background-color:var(
    --outline-button--secondary-disabled-bg-color--computed
  );
  color:var(--outline-button--secondary-disabled-color--computed);
  font-weight:var(--outline-button--secondary-disabled-weight--computed);
  box-shadow:var(--outline-button--secondary-disabled-ring--computed);
}

.btn.secondary[aria-disabled='true']:focus{
    background-color:var(
      --outline-button--secondary-disabled-bg-color-focus--computed
    );
    color:var(--outline-button--secondary-disabled-color-focus--computed);
    font-weight:var(
      --outline-button--secondary-disabled-weight-focus--computed
    );
    box-shadow:var(--outline-button--secondary-disabled-ring-focus--computed);
  }

.btn.tertiary{
  padding:var(--outline-button--tertiary-padding--computed);
  border-radius:var(--outline-button--tertiary-radius--computed);

  background-color:var(--outline-button--tertiary-bg-color--computed);
  color:var(--outline-button--tertiary-color--computed);
  font-weight:var(--outline-button--tertiary-weight-default--computed);
  box-shadow:var(--outline-button--tertiary-ring-default--computed);
}

.btn.tertiary:hover{
    background-color:var(--outline-button--tertiary-bg-color-hover--computed);
    color:var(--outline-button--tertiary-color-hover--computed);
    font-weight:var(--outline-button--tertiary-weight-hover--computed);
    box-shadow:var(--outline-button--tertiary-ring-hover--computed);
  }

.btn.tertiary:focus{
    background-color:var(--outline-button--tertiary-bg-color-focus--computed);
    color:var(--outline-button--tertiary-color-focus--computed);
    font-weight:var(--outline-button--tertiary-weight-focus--computed);
    box-shadow:var(--outline-button--tertiary-ring-focus--computed);
  }

.btn.tertiary[aria-disabled='true']{
  background-color:var(--outline-button--tertiary-disabled-bg-color--computed);
  color:var(--outline-button--tertiary-disabled-color--computed);
  font-weight:var(--outline-button--tertiary-disabled-weight--computed);
  box-shadow:var(--outline-button--tertiary-disabled-ring--computed);
}

.btn.tertiary[aria-disabled='true']:focus{
    background-color:var(
      --outline-button--tertiary-disabled-bg-color-focus--computed
    );
    color:var(--outline-button--tertiary-disabled-color-focus--computed);
    font-weight:var(
      --outline-button--tertiary-disabled-weight-focus--computed
    );
    box-shadow:var(--outline-button--tertiary-disabled-ring-focus--computed);
  }

.btn.link{
  padding:var(--outline-button--link-padding--computed);
  border-radius:var(--outline-button--link-radius--computed);

  background-color:var(--outline-button--link-bg-color--computed);
  color:var(--outline-button--link-color--computed);
  font-weight:var(--outline-button--link-weight--computed);
  -webkit-text-decoration:var(--outline-button--link-decoration--computed);
          text-decoration:var(--outline-button--link-decoration--computed);
  box-shadow:var(--outline-button--link-ring--computed);
}

.btn.link:hover{
    background-color:var(--outline-button--link-bg-color-hover--computed);
    color:var(--outline-button--link-color-hover--computed);
    font-weight:var(--outline-button--link-weight-hover--computed);
    -webkit-text-decoration:var(--outline-button--link-decoration-hover--computed);
            text-decoration:var(--outline-button--link-decoration-hover--computed);
    box-shadow:var(--outline-button--link-ring-hover--computed);
  }

.btn.link:focus{
    background-color:var(--outline-button--link-bg-color-focus--computed);
    color:var(--outline-button--link-color-focus--computed);
    font-weight:var(--outline-button--link-weight-focus--computed);
    -webkit-text-decoration:var(--outline-button--link-decoration-focus--computed);
            text-decoration:var(--outline-button--link-decoration-focus--computed);
    box-shadow:var(--outline-button--link-ring-focus--computed);
  }

.btn.link[aria-disabled='true']{
  background-color:var(--outline-button--link-disabled-bg-color--computed);
  color:var(--outline-button--link-disabled-color--computed);
  font-weight:var(--outline-button--link-disabled-weight--computed);
  -webkit-text-decoration:var(--outline-button--link-disabled-decoration--computed);
          text-decoration:var(--outline-button--link-disabled-decoration--computed);
  box-shadow:var(--outline-button--link-disabled-ring--computed);
}

.btn.link[aria-disabled='true']:focus{
    background-color:var(
      --outline-button--link-disabled-bg-color-focus--computed
    );
    color:var(--outline-button--link-disabled-color-focus--computed);
    font-weight:var(--outline-button--link-disabled-weight-focus--computed);
    -webkit-text-decoration:var(
      --outline-button--link-disabled-decoration-focus--computed
    );
            text-decoration:var(
      --outline-button--link-disabled-decoration-focus--computed
    );
    box-shadow:var(--outline-button--link-disabled-ring-focus--computed);
  }

:host(.icon__button) .btn.primary{
    border-top-left-radius:0px !important;
    border-bottom-left-radius:0px !important;
  }

:host(.icon__button) .btn.secondary{
    border-top-left-radius:0px !important;
    border-bottom-left-radius:0px !important;
  }

:host(.icon__button) .btn.tertiary{
    border-top-left-radius:0px !important;
    border-bottom-left-radius:0px !important;
  }

:host(.icon__button) .btn.link{
    border:0 !important;
    margin-right:0 !important;
  }

.btn.small{
  font-size:var(--fs-sm);
  line-height:var(--lh-sm);
}

.btn.medium{
  font-size:var(--fs-base);
  line-height:var(--lh-base);
}

.btn.large{
  font-size:var(--fs-lg);
  line-height:var(--lh-lg);
}
`;var w=Object.defineProperty,k=Object.getOwnPropertyDescriptor,n=(u,e,a,r)=>{for(var t=r>1?void 0:r?k(e,a):e,l=u.length-1,d;l>=0;l--)(d=u[l])&&(t=(r?d(e,a,t):d(t))||t);return r&&t&&w(e,a,t),t};let o=class extends m{constructor(){super(...arguments),this.slots=new h(this),this.buttonVariant="primary",this.buttonSize="medium",this.isDisabled=!1}firstUpdated(){this.hasLeftIcon=!!this.slots.exist("left"),this.hasRightIcon=!!this.slots.exist("right")}render(){return this.buttonUrl?b` <a
          class="btn ${this.buttonVariant} ${this.buttonSize}"
          href=${this.buttonUrl}
          target=${c(this.buttonTarget)}
          aria-label="${c(this.buttonLabel)}"
          aria-disabled="${c(this.isDisabled)}"
        >
          ${this.iconTemplate(this.hasLeftIcon,"left")}
          <slot></slot>
          ${this.iconTemplate(this.hasRightIcon,"right")}
        </a>`:b`<button
          class="btn ${this.buttonVariant} ${this.buttonSize}"
          aria-label="${c(this.buttonLabel)}"
          aria-disabled="${c(this.isDisabled)}"
          .onclick="${this.onClick}"
          .onkeyup="${this.onKeyUp}"
        >
          ${this.iconTemplate(this.hasLeftIcon,"left")}
          <slot></slot>
          ${this.iconTemplate(this.hasRightIcon,"right")}
        </button> `}iconTemplate(u,e){return u?b`<slot name="${e}"></slot>`:null}updated(){this.hasAttribute("is-disabled")?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}};o.styles=[y,f];n([i({type:String,attribute:"button-url"})],o.prototype,"buttonUrl",2);n([i({type:String,attribute:"button-label"})],o.prototype,"buttonLabel",2);n([i({type:String,attribute:"button-target"})],o.prototype,"buttonTarget",2);n([i({type:String,attribute:"button-variant"})],o.prototype,"buttonVariant",2);n([i({type:String,attribute:"button-size"})],o.prototype,"buttonSize",2);n([i({type:Boolean,attribute:"is-disabled"})],o.prototype,"isDisabled",2);n([i()],o.prototype,"onClick",2);n([i()],o.prototype,"onKeyUp",2);n([g()],o.prototype,"hasLeftIcon",2);n([g()],o.prototype,"hasRightIcon",2);o=n([p("outline-button")],o);const x=v`
/* Apply component specific CSS */
:host{
  display:inline-flex;
  vertical-align:middle;
}

.btn{
  padding:0 !important;
}

::slotted(.button__trigger){
  display:flex;
  padding:var(--outline-button--padding--computed);
}

[trigger-variant='primary'] ::slotted(.button__trigger){
  padding:var(--outline-button--primary-padding--computed);
}

[trigger-variant='primary']:hover ::slotted(.icon__trigger) .btn.primary{
  background-color:var(--outline-button--primary-bg-color-hover--computed);
  color:var(--outline-button--primary-text-color-hover--computed);
  font-weight:var(--outline-button--primary-weight-hover--computed);
  box-shadow:var(--outline-button--primary-ring-hover--computed);
}

[trigger-variant='secondary'] ::slotted(.button__trigger){
  padding:var(--outline-button--secondary-padding--computed);
}

[trigger-variant='tertiary'] ::slotted(.button__trigger){
  padding:var(--outline-button--tertiary-padding--computed);
}

[trigger-variant='link'] ::slotted(.button__trigger){
  padding:var(--outline-button--link-padding--computed);
}

::slotted(.icon__trigger){
  display:flex;
  height:100%;
}

::slotted(.icon__bordered){
  border-left:1px solid currentColor;
}

:host([button-variant='link']) ::slotted(.icon__bordered){
  border-left-width:0px !important;
}

:host([button-variant='link']) ::slotted(.button__trigger){
  //padding-right:var(--spacing-2);
}
`;var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,S=(u,e,a,r)=>{for(var t=r>1?void 0:r?$(e,a):e,l=u.length-1,d;l>=0;l--)(d=u[l])&&(t=(r?d(e,a,t):d(t))||t);return r&&t&&_(e,a,t),t};let s=class extends o{};s.styles=[o.styles,x];s=S([p("outline-split-button")],s);
//# sourceMappingURL=outline-split-button-7c50673a.js.map
