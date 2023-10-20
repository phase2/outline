import{i as h,x as u}from"./lit-element-411ba165.js";import{l as v,O as f,e as m}from"./screen-size-controller-4280a32a.js";import{n as s}from"./property-f36ea729.js";import{M as b}from"./mobile-controller-f2865d76.js";import{S as g}from"./slots-controller-d122fba7.js";import"./outline-icon-6c6ddb2f.js";const y=h`
/* Apply component specific CSS */
.accordion-title {
  font-family: var(--ff-display);
  font-size: var(--fs-4xl);
  line-height: var(--lh-4xl);
  color: var(--outline-soft-black);
}

.accordion-title.mobile {
  font-size: var(--fs-lg);
  line-height: var(--lh-lg);
  color: var(--outline-soft-black);
}

::slotted(outline-heading){
  margin-bottom:2.5rem;
}
`;var x=Object.defineProperty,w=Object.getOwnPropertyDescriptor,d=(e,o,t,i)=>{for(var n=i>1?void 0:i?w(o,t):o,r=e.length-1,a;r>=0;r--)(a=e[r])&&(n=(i?a(o,t,n):a(n))||n);return i&&n&&x(o,t,n),n};let l=class extends f{constructor(){super(...arguments),this.mobileController=new b(this),this.slots=new g(this),this.clean=!1,this.singlePanel=!1,this.allOpen=!1,this.isMobile=()=>this.mobileController.isMobile?"mobile":null}render(){return u`
      ${this.slots.conditionalSlot("label",!1)}

      <div class="accordion" @keydown=${this.handleKeyboardNav}>
        <slot name="panels"></slot>
      </div>
    `}handleKeyboardNav(e){var r,a;let o=0;const t=this.panels,i=Array.prototype.indexOf.call(t,e.target);if(e.key!=="ArrowDown"&&e.key!=="ArrowUp")return;e.key==="ArrowDown"&&(t!=null&&t.length&&i+1>(t==null?void 0:t.length)-1?o=0:o=i+1),e.key==="ArrowUp"&&(t!=null&&t.length&&i-1<0?o=(t==null?void 0:t.length)-1:o=i-1),(a=(r=(t==null?void 0:t[o]).shadowRoot)==null?void 0:r.querySelector("button"))==null||a.focus()}firstUpdated(){this.allOpen&&this.panels.map(e=>{e.setAttribute("active","active")})}updated(){this.clean?this.panels.map(e=>e.setAttribute("clean","clean")):this.panels.map(e=>e.removeAttribute("clean"))}};l.styles=[y];d([s({type:Boolean})],l.prototype,"clean",2);d([s({type:Boolean,attribute:"single-panel"})],l.prototype,"singlePanel",2);d([s({type:Boolean})],l.prototype,"allOpen",2);d([v({slot:"panels"})],l.prototype,"panels",2);l=d([m("outline-accordion")],l);const $=h`
/* Apply component specific CSS */
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

.accordion-button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-width: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 2rem;
  padding-right: 0px;
}

.accordion-button.mobile {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 1rem !important;
  padding-right: 0px !important;
  font-size: var(--fs-base) !important;
  line-height: 1.25rem !important;
}

.accordion-button.active {
  background-color: var(--outline-soft-black);
  color: var(--outline-white);
}

.accordion-button.inactive {
  background-color: var(--outline-white);
  color: var(--outline-soft-black);
}

.accordion-button.clean {
  border-bottom-width: 1px;
  border-style: solid;
  border-color: var(--outline-gray-300);
  padding-left: 0px;
}

.accordion-button.clean.active {
  background-color: var(--outline-white) !important;
  color: var(--outline-soft-black) !important;
}

.accordion-button.clean.inactive {
  color: var(--outline-soft-black);
}

.accordion-content {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.accordion-content.mobile {
  padding-left: 1rem;
  padding-right: 1rem;
}

.clean .accordion-content {
  padding-left: 0px;
  padding-right: 0px;
}

.accordion-label {
  text-align: left;
  max-width:75%;
}

::slotted(outline-heading){
  margin:1rem 0;
}

.accordion-heading {
  margin: 0px;
  display: flex;
}

.accordion-icon {
  display: flex;
  height: 100%;
  width: 5rem;
  align-items: center;
  justify-content: center;
}

.accordion-icon.clean {
  background-color: var(--outline-white) !important;
  color: var(--outline-soft-black) !important;
}

.accordion-icon.active {
  background-color: var(--outline-soft-black);
  color: var(--outline-white);
}

.accordion-icon.inactive {
  background-color: var(--outline-gray-600);
  color: var(--outline-white);
}

.accordion-panel {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--outline-soft-black);
}

.accordion-panel.clean {
  border-width: 0px;
}
`;var O=Object.defineProperty,A=Object.getOwnPropertyDescriptor,p=(e,o,t,i)=>{for(var n=i>1?void 0:i?A(o,t):o,r=e.length-1,a;r>=0;r--)(a=e[r])&&(n=(i?a(o,t,n):a(n))||n);return i&&n&&O(o,t,n),n};let c=class extends f{constructor(){super(...arguments),this.mobileController=new b(this),this.clean=!1,this.active=!1,this.id=Math.floor(Math.random()*1e4).toString()}render(){const e=this.mobileController.isMobile?"mobile":null,o=this.clean?"clean":null,t=this.active?"active":"inactive";return u` <div class="accordion-panel ${o}">
      <div class="accordion-heading">
        <button
          class="accordion-button ${e} ${t} ${o}"
          id="${this.id}-button"
          aria-expanded=${this.active}
          aria-controls="${this.id}-info"
          @click=${this.setActive}
        >
          <span class="accordion-label ${e}">
            <slot name="heading"> </slot>
          </span>
          <span class="accordion-icon ${e} ${t} ${o}">
            <outline-icon
              name="${this.active?"chevron-up":"chevron-down"}"
              size="24px"
            ></outline-icon>
          </span>
        </button>
      </div>
      <div
        class="accordion-content ${e}"
        role="region"
        aria-labelledby="${this.id}-button"
        id="${this.id}-info"
        aria-hidden="${!this.active}"
      >
        <slot></slot>
      </div>
    </div>`}setActive(){const e=this.parentElement;if(e.singlePanel){const t=[...e.panels].filter(i=>i.active==!0);t.length<1&&(this.active=!0),t.length>0&&t.map(i=>{i.id===this.id?this.active=!1:(i.active=!1,this.active=!0)})}else this.active=!this.active}};c.styles=[$];p([s({type:Boolean})],c.prototype,"clean",2);p([s({type:Boolean,reflect:!0,attribute:!0})],c.prototype,"active",2);p([s({type:String,reflect:!0})],c.prototype,"id",2);c=p([m("outline-accordion-panel")],c);
//# sourceMappingURL=outline-accordion-panel-bd2fa9a3.js.map
