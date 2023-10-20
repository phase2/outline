import{i as A,x as n}from"./lit-element-411ba165.js";import{l as o}from"./if-defined-93280f6e.js";import{o as H}from"./unsafe-html-3f86ca9e.js";import{O as R,e as j}from"./screen-size-controller-4280a32a.js";import{n as p}from"./property-f36ea729.js";import{t as k}from"./state-2a0073ff.js";import{i as N}from"./query-e65d3c8b.js";import{o as D}from"./class-map-aeb7fbb6.js";import{M as Y}from"./mobile-controller-f2865d76.js";import{S as G}from"./slots-controller-d122fba7.js";import{w as J,a as x,e as b}from"./outline-icon-6c6ddb2f.js";import"./outline-split-button-7c50673a.js";import"./directive-12249aa5.js";import"./static-0503aeb3.js";import"./vars-link.css.lit-8fdd0acf.js";const Q=A`
/* Apply component specific CSS */
:host{
  box-sizing:border-box;
  display:inline-flex;
}
:host *,
:host *::before,
:host *::after{
  box-sizing:inherit;
}
:host([aria-hidden='true']),
[aria-hidden='true'],
.visually-hidden{
  position:absolute !important;
  overflow:hidden;
  clip:rect(1px, 1px, 1px, 1px);
  width:1px;
  height:1px;
  word-wrap:normal;
}
.sr-only{
  position:absolute !important;
  overflow:hidden;
  clip:rect(1px, 1px, 1px, 1px);
  width:1px;
  height:1px;
  word-wrap:normal;
}
.dropdown{
  display:flex;
  position:relative;
}
.dropdown--open .btn.primary{
    background-color:var(--outline-button--primary-bg-color-hover--computed);
    color:var(--outline-button--primary-text-color-hover--computed);
    font-weight:var(--outline-button--primary-weight-hover--computed);
    box-shadow:var(--outline-button--primary-ring-hover--computed);
  }
.dropdown--open .dropdown__panel{
  margin:0;
  position:absolute;
  z-index:50;
  min-width:350px;
  border-width:2px;
  border-style:solid;
  border-color:var(--outline-gray-400);
  background-color:var(--outline-gray-200);
  color:var(--outline-black);
  padding:1rem;
  pointer-events:all;
}
outline-split-button{
}
outline-button .btn{
    padding:var(--outline-button--padding--computed);
  }
outline-button .btn.primary{
    padding:var(--outline-button--primary-padding--computed);
  }
outline-button .btn.secondary{
    padding:var(--outline-button--secondary-padding--computed);
  }
outline-button .btn.tertiary{
    padding:var(--outline-button--tertiary-padding--computed);
  }
outline-button .btn.link{
    padding:var(--outline-button--link-padding--computed);
  }
outline-button .btn.primary:hover{
  }
outline-button .icon__trigger{
    display:flex;
    margin-left:1rem;
  }
`;var X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,s=(e,t,d,a)=>{for(var l=a>1?void 0:a?Z(t,d):t,v=e.length-1,f;v>=0;v--)(f=e[v])&&(l=(a?f(t,d,l):f(l))||l);return a&&l&&X(t,d,l),l};let i=class extends R{constructor(){super(...arguments),this.mobileController=new Y(this,"lg"),this.slots=new G(this),this.isOpen=!1,this.isDisabled=!1,this.isLink=!1,this.triggerVariant="link"}connectedCallback(){super.connectedCallback(),this.hasDropdown=!!this.slots.exist("dropdown"),this.hasHeader=!!this.slots.exist("header"),this.hasFooter=!!this.slots.exist("footer"),this.handleButtonTrigger=this.handleButtonTrigger.bind(this),this.handleIconTrigger=this.handleIconTrigger.bind(this),this.handleEnterKeyDown=this.handleEnterKeyDown.bind(this),this.handleEscKeyDown=this.handleEscKeyDown.bind(this),this.handleFocusChange=this.handleFocusChange.bind(this),this.handleIconClick=this.handleIconClick.bind(this),this.containingElement||(this.containingElement=this)}updated(){this.panel&&(this.panel.hidden=!this.isOpen)}firstUpdated(){}disconnectedCallback(){this.hide()}async show(){if(!(this.isOpen||this.isDisabled))return this.panel&&(this.panel.hidden=!1),this.isOpen=!0,x(this,"outline-after-show")}async hide(){if(this.isOpen)return this.panel&&(this.panel.hidden=!0),this.isOpen=!1,x(this,"outline-after-hide")}async handleOpenChange(){if(this.isDisabled){this.isOpen=!1;return}this.isOpen?(b(this,"outline-show"),b(this,"outline-after-show")):(b(this,"outline-hide"),b(this,"outline-after-hide"))}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleEscKeyDown(e){if(e.key==="Escape"){this.hide(),this.focusOnTrigger();return}}handleFocusChange(){setTimeout(()=>{var t,d,a;const e=((t=this.containingElement)==null?void 0:t.getRootNode())instanceof ShadowRoot?(a=(d=document.activeElement)==null?void 0:d.shadowRoot)==null?void 0:a.activeElement:document.activeElement;(!this.containingElement||(e==null?void 0:e.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}handleIconClick(e){e.preventDefault(),this.isOpen?this.hide():this.show()}handleEnterKeyDown(e,t=!1){if(e.key==="Enter"){if(this.isDisabled){e.preventDefault();return}if(this.triggerUrl&&t||!this.triggerUrl){this.isOpen?this.hide():this.show(),e.preventDefault();return}if(this.triggerUrl)return}}focusOnTrigger(){var d,a,l;const e=this.trigger.querySelector("outline-split-button"),t=this.trigger.querySelector("outline-button");e&&typeof(e==null?void 0:e.focus)=="function"&&((d=e==null?void 0:e.querySelector("button"))==null||d.focus()),t&&typeof(t==null?void 0:t.focus)=="function"&&((l=(a=t==null?void 0:t.shadowRoot)==null?void 0:a.querySelector("button"))==null||l.focus())}handlePanelKeystrokes(e){this.handleEscKeyDown(e),this.handleFocusChange()}handleIconTrigger(e){this.handleEnterKeyDown(e,!0),this.handleEscKeyDown(e)}handleButtonTrigger(e){this.handleEnterKeyDown(e),this.handleEscKeyDown(e),this.handleFocusChange()}handleHoverStyles(){}render(){return n`
      <div
        id="dropdown"
        class=${D({dropdown:!0,"dropdown--open":this.isOpen})}
      >
        <div
          class="dropdown__trigger"
          @mouseenter="${this.mobileController.isMobile?null:this.show}"
          @mouseleave="${this.handleFocusChange}"
        >
          ${this.buttonTemplate()} ${this.dropdownTemplate()}
        </div>
      </div>
    `}buttonTemplate(){return this.triggerUrl?n`
          <outline-split-button
            button-variant="${o(this.triggerVariant)}"
            button-target="${o(this.triggerTarget)}"
            button-url="${o(this.triggerUrl)}"
            button-label="${o(this.triggerLabel)}"
            @mouseenter="${this.handleHoverStyles}"
            @keydown="${this.handleButtonTrigger}"
            ?is-disabled=${this.isDisabled}
          >
            <span
              class=${D({button__trigger:!0,button__has_menu:this.hasDropdown&&this.triggerVariant=="link"})}
              >${this.triggerText}</span
            >
            ${this.iconWrapperTemplate()}
          </outline-split-button>
        `:n`
          <outline-button
            button-variant="${o(this.triggerVariant)}"
            button-target="${o(this.triggerTarget)}"
            button-url="${o(this.triggerUrl)}"
            button-label="${o(this.triggerLabel)}"
            @keydown="${this.handleButtonTrigger}"
            @click="${this.handleIconClick}"
            ?is-disabled=${this.isDisabled}
          >
            <span class="button__trigger">${this.triggerText}</span>
            ${this.iconWrapperTemplate()}
          </outline-button>
        `}dropdownTemplate(){return this.hasDropdown?n`
      <div
        class="dropdown__panel"
        aria-hidden=${this.isOpen?"false":"true"}
        aria-labelledby="dropdown"
        @keydown="${this.handlePanelKeystrokes}"
      >
        ${this.headerTemplate()} ${this.slots.renderInShadow("dropdown")}
        ${this.footerTemplate()}
      </div>
    `:null}iconWrapperTemplate(){return this.hasDropdown?n`
      <span
        class=${D({icon__trigger:!0,icon__bordered:this.triggerUrl&&this.triggerVariant!=="link"})}
      >
        ${this.triggerUrl?n` <outline-button
              class="icon__button"
              button-variant="${o(this.triggerVariant)}"
              button-target="${o(this.triggerTarget)}"
              button-label="${o(this.triggerLabel)}"
              @keydown="${this.handleIconTrigger}"
              @click="${this.handleIconClick}"
              ?is-disabled=${this.isDisabled}
            >
              ${this.iconTemplate()}
              <span class="sr-only"
                >Sub-navigation for ${this.triggerText}</span
              >
            </outline-button>`:n` ${this.iconTemplate()} `}
      </span>
    `:null}iconTemplate(){return n`
      <outline-icon
        slot="right"
        name="${this.isOpen?"chevron-up":"chevron-down"}"
        library="system"
        size="1em"
        ?label="${o(this.triggerUrl)?this.triggerLabel:!1}"
      ></outline-icon>
    `}headerTemplate(){return this.hasHeader?n`${this.slots.renderInShadow("header")}`:null}footerTemplate(){return this.hasFooter?n`${this.slots.renderInShadow("footer")}`:null}};i.styles=[Q];s([N(".dropdown__trigger")],i.prototype,"trigger",2);s([N(".dropdown__panel")],i.prototype,"panel",2);s([p({type:Boolean,reflect:!0,attribute:"is-open"})],i.prototype,"isOpen",2);s([p({type:Boolean,attribute:"is-disabled"})],i.prototype,"isDisabled",2);s([p({type:Boolean,attribute:!1})],i.prototype,"isLink",2);s([p({attribute:!1})],i.prototype,"containingElement",2);s([p({type:String,attribute:"trigger-url"})],i.prototype,"triggerUrl",2);s([p({type:String,attribute:"trigger-text"})],i.prototype,"triggerText",2);s([p({type:String,attribute:"trigger-label"})],i.prototype,"triggerLabel",2);s([p({type:String,attribute:"trigger-target"})],i.prototype,"triggerTarget",2);s([p({type:String,attribute:"trigger-variant"})],i.prototype,"triggerVariant",2);s([k()],i.prototype,"hasHeader",2);s([k()],i.prototype,"hasDropdown",2);s([k()],i.prototype,"hasFooter",2);s([J("open",{waitUntilFirstUpdate:!0})],i.prototype,"handleOpenChange",1);i=s([j("outline-dropdown")],i);const ee=["link","primary","secondary","tertiary"],te=["small","medium","large"],re={title:"Navigation/Dropdown",component:"outline-dropdown",tags:["docsPage"],argTypes:{isDisabled:{name:"is-disabled",table:{category:"Properties",defaultValue:{summary:"false"}},description:"Set whether the dropdown is disabled. When disabled, the dropdown will not open.",control:{type:"boolean"}},isOpen:{name:"is-open",table:{category:"Properties",defaultValue:{summary:"false"}},description:"Set whether the dropdown is open. You can use this in lieu of the show/hide methods.",control:{type:"boolean"}},url:{name:"trigger-url",table:{category:"Properties",defaultValue:{summary:"NULL"}},description:"The url to use for a link. This will render an anchor element. Do not set this prop if you want to render a button element.",control:{type:"text"}},label:{name:"trigger-label",table:{category:"Properties",defaultValue:{summary:"NULL"}},description:"Label to be passed to `aria-label` on the link or button element. This is required for accessibility if we use a button with an icon only.",control:{type:"text"}},text:{name:"trigger-text",table:{category:"Properties",defaultValue:{summary:"NULL"}},description:"Text of the actual button/link of the trigger element.",control:{type:"text"}},variant:{name:"trigger-variant",table:{category:"Properties",defaultValue:{summary:"primary"}},description:"The button style variant to use.",options:ee,control:{type:"select"}},size:{name:"trigger-size",table:{category:"Properties",defaultValue:{summary:"medium"}},description:"The button size variant.",options:te,control:{type:"select"}},dropdownSlot:{name:"dropdown",description:"The dropdown slot.",control:{type:"text"},table:{category:"Slots",defaultValue:{summary:"NULL"}}}},args:{dropdownSlot:`
<p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
<p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
`,isDisabled:!1,isOpen:!1,text:"Dropdown",variant:"primary",size:"medium",label:"",url:"https://outline.phase2tech.com/"},parameters:{docs:{description:{component:`
## The \`outline-dropdown\` element

<outline-alert status="warning" size="large" class="mb-6">
  <span slot="header">Status: Experimental</span>
  <div>This component is still in an experimental stage, and has additional work to be feature complete.</div>
</outline-alert>
        `}}}},h=[e=>n`
<div class="relative m-12">
${e()}
</div> `],q=(e={})=>{const t={...re.args,...e};return n`
<outline-dropdown 
  ?is-disabled=${t.isDisabled} 
  ?is-open=${t.isOpen} 
  trigger-text="${o(t.text)}"
  trigger-label="${o(t.label)}"
  trigger-variant="${o(t.variant)}"
  trigger-size="${o(t.size)}"
  trigger-url="${o(t.url)}"
  class="my-4"
>  
  <div slot="dropdown">${H(t.dropdownSlot??"")}</div>
</outline-dropdown>`},g=(e={})=>q(e);g.args={isOpen:!1};g.decorators=h;const u=(e={})=>q(e);u.args={isOpen:!1,url:null};u.decorators=h;const ie=()=>n`
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Menu & Link" 
  trigger-variant="primary" 
  trigger-size="medium" 
  trigger-url="https://outline.phase2tech.com/"
>  
  <div slot="dropdown">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </div>
</outline-dropdown>
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Menu" 
  trigger-variant="primary" 
  trigger-size="medium" 
>  
  <div slot="dropdown">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </div>
</outline-dropdown>
  `,c=()=>ie();c.decorators=h;const oe=()=>n`
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Menu & Link" 
  trigger-variant="secondary" 
  trigger-size="medium" 
  trigger-url="https://outline.phase2tech.com/"
>  
  <div slot="dropdown">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </div>
</outline-dropdown>
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Link Only" 
  trigger-variant="secondary" 
  trigger-size="medium" 
  trigger-url="https://outline.phase2tech.com/" 
  is-disabled
>
</outline-dropdown>
<outline-dropdown 
  class="my-4 pr-2" 
  trigger-text="Dropdown Menu" 
  trigger-variant="secondary" 
  trigger-size="medium" 
>  
  <div slot="dropdown">
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
    </ul>
  </div>
</outline-dropdown>
  `,m=()=>oe();m.decorators=h;const r=n`
<div slot="dropdown">
  <p>This is the content of the dropdown. This is a pretend <outline-link link-href="#">link</outline-link> so we can tab in. While this is a simple <code>p</code> tag, any content can be placed in this dropdown using <code>slot="dropdown"</code> on your top level element in the dropdown panel.</p>
  <p>This dropdown panel can be styled as needed for any menus that need to extend the <code>outline-dropdown</code> component.</p>
</div>
`,ne=()=>n`
<div class="my-12">
  <outline-heading level="h4" level-size="lg">Styling variant: primary</outline-heading>  
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Link Only" 
    trigger-variant="primary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
  >
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Dropdown Only" 
    trigger-variant="primary" 
    trigger-size="medium" 
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Dropdown & Link" 
    trigger-variant="primary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Link" 
    trigger-variant="primary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
    is-disabled
  >
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Dropdown" 
    trigger-variant="primary" 
    trigger-size="medium" 
    is-disabled
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Dropdown & Link" 
    trigger-variant="primary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
    is-disabled
  >  
    ${r}
  </outline-dropdown>
</div>
<div class="my-12">
  <outline-heading level="h4" level-size="lg">Styling variant: secondary</outline-heading>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Link Only" 
    trigger-variant="secondary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
  >
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Dropdown Only" 
    trigger-variant="secondary" 
    trigger-size="medium" 
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Dropdown & Link" 
    trigger-variant="secondary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Link" 
    trigger-variant="secondary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
    is-disabled
  >
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Dropdown" 
    trigger-variant="secondary" 
    trigger-size="medium" 
    is-disabled
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Dropdown & Link" 
    trigger-variant="secondary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
    is-disabled
  >  
    ${r}
  </outline-dropdown>
</div>
<div class="my-12">
  <outline-heading level="h4" level-size="lg">Styling variant: tertiary</outline-heading>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Link Only" 
    trigger-variant="tertiary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
  >
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Dropdown Only" 
    trigger-variant="tertiary" 
    trigger-size="medium" 
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Dropdown & Link" 
    trigger-variant="tertiary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Link" 
    trigger-variant="tertiary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
    is-disabled
  >
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Dropdown" 
    trigger-variant="tertiary" 
    trigger-size="medium" 
    is-disabled
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Dropdown & Link" 
    trigger-variant="tertiary" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
    is-disabled
  >  
    ${r}
  </outline-dropdown>
</div>
<div class="my-12">
  <outline-heading level="h4" level-size="lg">Styling variant: link</outline-heading>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Link Only" 
    trigger-variant="link" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
  >
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Dropdown Only" 
    trigger-variant="link" 
    trigger-size="medium" 
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Dropdown & Link" 
    trigger-variant="link" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Link" 
    trigger-variant="link" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
    is-disabled
  >
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Dropdown" 
    trigger-variant="link" 
    trigger-size="medium" 
    is-disabled
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    class="my-4 pr-2" 
    trigger-text="Disabled Dropdown & Link" 
    trigger-variant="link" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
    is-disabled
  >  
    ${r}
  </outline-dropdown>
</div>
  `,w=()=>ne();w.decorators=h;const se=()=>n`
<div class="flex flex-row flex-wrap">
  <outline-dropdown 
    trigger-text="Dropdown Menu & Link" 
    trigger-variant="link" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
  >  
    <div slot="dropdown">
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
      </ul>
    </div>
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Disabled Link" 
    trigger-variant="link" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
    is-disabled
  >
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Link Only" 
    trigger-variant="link" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/" 
  >
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Dropdown" 
    trigger-variant="link" 
    trigger-size="medium"
  >
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Dropdown & Link" 
    trigger-variant="link" 
    trigger-size="medium" 
    trigger-url="https://outline.phase2tech.com/"
  >  
    ${r}
  </outline-dropdown>
  <outline-dropdown 
    trigger-text="Disabled Dropdown" 
    trigger-variant="link" 
    trigger-size="medium" 
    is-disabled
  >
    ${r}
  </outline-dropdown>
</div>
`,y=()=>se();y.decorators=h;var $,L,T;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:"(customArguments = {}) => DropdownTemplate(customArguments)",...(T=(L=g.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var z,S,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:"(customArguments = {}) => DropdownTemplate(customArguments)",...(O=(S=u.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var _,E,M;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:"() => MenuDropdownsTemplate()",...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var C,U,V;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"() => SecondaryMenuDropdownsTemplate()",...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var P,B,K;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:"() => MultipleButtonDropdownsTemplate()",...(K=(B=w.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var I,F,W;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:"() => MultipleLinkDropdownsTemplate()",...(W=(F=y.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const ke=["DropdownButtonWithLink","DropdownButtonWithoutLink","MenuDropdown","SecondaryMenuDropdown","MultipleButtonDropdowns","MultipleLinkDropdowns"];export{g as DropdownButtonWithLink,u as DropdownButtonWithoutLink,c as MenuDropdown,w as MultipleButtonDropdowns,y as MultipleLinkDropdowns,m as SecondaryMenuDropdown,ke as __namedExportsOrder,re as default};
//# sourceMappingURL=outline-dropdown.stories-03786273.js.map
