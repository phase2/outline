import{i as O,x as l}from"./lit-element-411ba165.js";import{o as w}from"./unsafe-html-3f86ca9e.js";import{O as g,e as v}from"./screen-size-controller-4280a32a.js";import{n as u}from"./property-f36ea729.js";import{i as b}from"./query-e65d3c8b.js";import{o as q}from"./class-map-aeb7fbb6.js";import{M as I}from"./mobile-controller-f2865d76.js";import{w as M,e as y}from"./outline-icon-6c6ddb2f.js";import"./outline-heading-e5f4beef.js";import"./outline-accordion-panel-bd2fa9a3.js";import"./directive-12249aa5.js";import"./state-2a0073ff.js";import"./if-defined-93280f6e.js";import"./static-0503aeb3.js";import"./slots-controller-d122fba7.js";function L(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function _(e,t,i="vertical",a="smooth"){const o=L(e,t),s=o.top+t.scrollTop,r=o.left+t.scrollLeft,P=t.scrollLeft,D=t.scrollLeft+t.offsetWidth,k=t.scrollTop,E=t.scrollTop+t.offsetHeight;(i==="horizontal"||i==="both")&&(r<P?t.scrollTo({left:r,behavior:a}):r+e.clientWidth>D&&t.scrollTo({left:r-t.offsetWidth+e.clientWidth,behavior:a})),(i==="vertical"||i==="both")&&(s<k?t.scrollTo({top:s,behavior:a}):s+e.clientHeight>E&&t.scrollTo({top:s-t.offsetHeight+e.clientHeight,behavior:a}))}const B=O`
/* Apply component specific CSS */
:host {
  display: inline-block;
  cursor: pointer;
}

:host([disabled]) {
  cursor: not-allowed;
}

.tab {
  pointer-events: none;
  margin-bottom: 0.125rem;
  display: block;
  -webkit-user-select: none;
          user-select: none;
  white-space: nowrap;
  border-radius: 0.25rem;
  border-bottom-width: 2px;
  border-color: var(--outline-gray-600);
  background-repeat: no-repeat;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 9rem;
  font-family: var(--ff-body);
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  font-weight: var(--fw-medium);
  color: var(--outline-gray-600);
}

@media (min-width: 1024px) {

  .tab {
    font-size: var(--fs-2xl);
    line-height: var(--lh-2xl);
  }
}

.tab{
  background-image:url("data:image/svg+xml,%3Csvg width='12' height='22' viewBox='0 0 12 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6036 10.3964L1.4449 0.237629C1.10859 -0.0871735 0.572681 -0.0778466 0.247879 0.258463C-0.0689857 0.586538 -0.0689856 1.10663 0.247879 1.43465L9.8081 10.9949L0.247879 20.5551C-0.0826265 20.8857 -0.0826265 21.4216 0.247879 21.7521C0.578485 22.0826 1.11435 22.0826 1.4449 21.7521L11.6036 11.5934C11.9341 11.2628 11.9341 10.7269 11.6036 10.3964Z' fill='%23363739'/%3E%3C/svg%3E%0A");
  background-position:calc(100% - 24px) 50%;
}

.tab:hover:not(.tab--disabled) {
  color: var(--outline-gray-100);
}

.tab:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.tab:focus:not(.tab--disabled), .tab:focus-visible:not(.tab--disabled) {
  background-color: var(--outline-blue-100);
  color: var(--outline-blue-600);
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.tab.tab--active:not(.tab--disabled) {
  background-color: var(--outline-gray-100);
  color: var(--outline-blue-600);
  background-image:url("data:image/svg+xml,%3Csvg width='12' height='22' viewBox='0 0 12 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6036 10.3964L1.4449 0.237629C1.10859 -0.0871735 0.572681 -0.0778466 0.247879 0.258463C-0.0689857 0.586538 -0.0689856 1.10663 0.247879 1.43465L9.8081 10.9949L0.247879 20.5551C-0.0826265 20.8857 -0.0826265 21.4216 0.247879 21.7521C0.578485 22.0826 1.11435 22.0826 1.4449 21.7521L11.6036 11.5934C11.9341 11.2628 11.9341 10.7269 11.6036 10.3964Z' fill='%23056CB6'/%3E%3C/svg%3E%0A");
}

.tab.tab--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`;var N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,h=(e,t,i,a)=>{for(var o=a>1?void 0:a?R(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&N(t,i,o),o};let z=0,c=class extends g{constructor(){super(...arguments),this.componentId=`tab-${++z}`,this.panel="",this.active=!1,this.disabled=!1}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id||this.componentId,l`
      <div
        part="base"
        class=${q({tab:!0,"tab--active":this.active,"tab--disabled":this.disabled})}
        role="tab"
        aria-disabled=${this.disabled?"true":"false"}
        aria-selected=${this.active?"true":"false"}
        tabindex=${this.disabled||!this.active?"-1":"0"}
      >
        <slot> </slot>
      </div>
    `}};c.styles=[B];h([b(".tab")],c.prototype,"tab",2);h([u()],c.prototype,"panel",2);h([u({type:Boolean,reflect:!0})],c.prototype,"active",2);h([u({type:Boolean,reflect:!0})],c.prototype,"disabled",2);c=h([v("outline-tab")],c);var H=Object.defineProperty,S=Object.getOwnPropertyDescriptor,f=(e,t,i,a)=>{for(var o=a>1?void 0:a?S(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&H(t,i,o),o};let G=0,m=class extends g{constructor(){super(...arguments),this.componentId=`tab-panel-${++G}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id||this.componentId}render(){return this.style.display=this.active?"block":"none",l`
      <div
        part="base"
        class="tab-panel"
        role="tabpanel"
        aria-selected=${this.active?"true":"false"}
        aria-hidden=${this.active?"false":"true"}
      >
        <slot></slot>
      </div>
    `}};f([u()],m.prototype,"name",2);f([u({type:Boolean,reflect:!0})],m.prototype,"active",2);m=f([v("outline-tab-panel")],m);const Q=O`
/* Apply component specific CSS */
:host {
  display: block;
}

.tab-group {
  display: flex;
  border-width: 1px;
  border-color: var(--outline-transparent);
}

.tab-group .tab-group__tabs {
  position: relative;
  display: flex;
}

.tab-group .tab-group__indicator {
  position: absolute;
  left: 0px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tab-group--start {
  flex-direction: row;
}

.tab-group--start .tab-group__nav-container {
  order: 1;
  border-width: 1px;
  border-bottom-color: var(--outline-gray-100);
}

.tab-group--start .tab-group__tabs{
  flex:0 0 auto;
  flex-direction:column;
}

.tab-group--start .tab-group__indicator{
  right:calc(-1 * 2px);
  border-bottom:0;
}

.tab-group--start .tab-group__body {
  order: 2;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex:1 1 auto;
}

.tab-group--top {
  flex-direction: column;
}

.tab-group--top .tab-group__nav-container {
  order: 1;
}

.tab-group--top .tab-group__nav {
  display: flex;
  overflow-x: auto;
  scrollbar-width:none;
}

.tab-group--top .tab-group__nav::-webkit-scrollbar {
  height: 0px;
  width: 0px;
}

.tab-group--top .tab-group__tabs {
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  border-width: 1px;
  border-bottom-color: var(--outline-gray-600);
}

.tab-group--top .tab-group__tabs .tab {
  padding-right: 1.5rem;
  background-image:none;
}

.tab-group--top .tab-group__indicator{
  bottom:-2px;
}

.tab-group--top .tab-group__body {
  order: 2;
}
`;var j=Object.defineProperty,W=Object.getOwnPropertyDescriptor,p=(e,t,i,a)=>{for(var o=a>1?void 0:a?W(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(a?r(t,i,o):r(o))||o);return a&&o&&j(t,i,o),o};let n=class extends g{constructor(){super(...arguments),this.mobileController=new I(this),this.tabs=[],this.panels=[],this.placement="start",this.activation="auto",this._handleResize=()=>{this.mobileController.isMobile||this.intersectionObserver()}}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize),this.resizeObserver=new ResizeObserver(()=>{this.mobileController.isMobile||(this.preventIndicatorTransition(),this.repositionIndicator())}),this.mutationObserver=new MutationObserver(e=>{e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>t.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.mobileController.isMobile||this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),this.intersectionObserver()})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav),window.removeEventListener("resize",this._handleResize)}intersectionObserver(){new IntersectionObserver((t,i)=>{t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()||this.tabs[0],{emitEvents:!1}),i.unobserve(t[0].target))}).observe(this.tabGroup)}show(e){const t=this.tabs.find(i=>i.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}getAllTabs(e=!1){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(i=>e?i.tagName.toLowerCase()==="outline-tab":i.tagName.toLowerCase()==="outline-tab"&&!i.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(t=>t.tagName.toLowerCase()==="outline-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const i=e.target.closest("outline-tab");(i==null?void 0:i.closest("outline-tab-group"))===this&&i&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(e){const i=e.target.closest("outline-tab");if((i==null?void 0:i.closest("outline-tab-group"))===this&&(["Enter"," "].includes(e.key)&&i&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=document.activeElement;if(o&&o.tagName.toLowerCase()==="outline-tab"){let s=this.tabs.indexOf(o);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key==="ArrowLeft"||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s=Math.max(0,s-1):(["top","bottom"].includes(this.placement)&&e.key==="ArrowRight"||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&(s=Math.min(this.tabs.length-1,s+1)),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&_(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Object.assign({emitEvents:!0,scrollBehavior:"auto"},t),e&&e!==this.activeTab&&!e.disabled){const i=this.activeTab;this.activeTab=e,this.tabs.map(a=>a.active=a===this.activeTab),this.panels.map(a=>a.active=a.name===this.activeTab.panel),this.syncIndicator(),["top","bottom"].includes(this.placement)&&_(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(i&&y(this,"outline-tab-hide",{detail:{name:i.panel}}),y(this,"outline-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.map(e=>{const t=this.panels.find(i=>i.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}syncIndicator(){if(this.indicator)if(this.getActiveTab())this.indicator.style.display="block",this.repositionIndicator();else{this.indicator.style.display="none";return}}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,i=e.clientHeight,a=L(e,this.nav),o=a.top+this.nav.scrollTop,s=a.left+this.nav.scrollLeft;switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.transform=`translateX(${s}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.transform=`translateY(${o}px)`;break}}preventIndicatorTransition(){if(!this.mobileController.isMobile){const e=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=e})}}syncTabsAndPanels(){this.mobileController.isMobile||(this.tabs=this.getAllTabs(),this.panels=this.getAllPanels()),this.syncIndicator()}render(){return l`${this.mobileController.isMobile?l`<slot name="accordion-wrapper"></slot> `:l`<div
          part="base"
          class=${q({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end"})}
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        >
          <div class="tab-group__nav-container">
            <div part="nav" class="tab-group__nav">
              <div part="tabs" class="tab-group__tabs" role="tablist">
                <div
                  part="active-tab-indicator"
                  class="tab-group__indicator"
                ></div>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </div>
            </div>
          </div>
          <div part="body" class="tab-group__body">
            <slot @slotchange=${this.syncTabsAndPanels}></slot>
          </div>
        </div>`} `}};n.styles=[Q];p([b(".tab-group")],n.prototype,"tabGroup",2);p([b(".tab-group__body")],n.prototype,"body",2);p([b(".tab-group__nav")],n.prototype,"nav",2);p([b(".tab-group__indicator")],n.prototype,"indicator",2);p([u({type:String,reflect:!0,attribute:"placement"})],n.prototype,"placement",2);p([u()],n.prototype,"activation",2);p([M("placement")],n.prototype,"syncIndicator",1);n=p([v("outline-tab-group")],n);const V=["top","start"],T=e=>e.replace(/\s+/g,"-").toLowerCase(),x=[{title:"Tab Number One",content:`
      <outline-heading>Content for Tab Number One</outline-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quae cum essent dicta, discessimus. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? <a href="http://loripsum.net/" target="_blank">Hoc ipsum elegantius poni meliusque potuit.</a> Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Qua tu etiam inprudens utebare non numquam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quae est igitur causa istarum angustiarum? Dic in quovis conventu te omnia facere, ne doleas. Igitur ne dolorem quidem. </p>
    `},{title:"Tab Number Two",content:`
      <outline-heading>Content for Tab Number Two</outline-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quae cum essent dicta, discessimus. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? <a href="http://loripsum.net/" target="_blank">Hoc ipsum elegantius poni meliusque potuit.</a> Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Qua tu etiam inprudens utebare non numquam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quae est igitur causa istarum angustiarum? Dic in quovis conventu te omnia facere, ne doleas. Igitur ne dolorem quidem. </p>
    `},{title:"Tab Number Three",content:`
      <outline-heading>Content for Tab Number Three</outline-heading>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quae cum essent dicta, discessimus. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? <a href="http://loripsum.net/" target="_blank">Hoc ipsum elegantius poni meliusque potuit.</a> Duo Reges: constructio interrete. Apparet statim, quae sint officia, quae actiones. Qua tu etiam inprudens utebare non numquam. Huic mori optimum esse propter desperationem sapientiae, illi propter spem vivere. Quae est igitur causa istarum angustiarum? Dic in quovis conventu te omnia facere, ne doleas. Igitur ne dolorem quidem. </p>
    `},{title:"Disabled",content:"<p>This is a disabled tab panel.</p>",disabled:!0}],pt={title:"Navigation/Tabs",component:"outline-tab-group",tags:["docsPage"],parameters:{viewMode:"docs"},argTypes:{placement:{name:"Control Placement",options:V,control:{type:"select"},description:"The placement of the tab controls."}}},X=({placement:e})=>l`<outline-tab-group placement=${e}>
    ${x.map(t=>l`<outline-tab
          slot="nav"
          ?disabled=${t.disabled}
          panel="${T(t.title)}"
          >${t.title}</outline-tab
        >
        <outline-tab-panel name="${T(t.title)}">
          ${w(`${t.content}`)}
        </outline-tab-panel> `)}
    <div slot="accordion-wrapper">
      <outline-accordion ?clean=${!0} ?single-panel=${!0}>
        ${x.map(t=>l` <outline-accordion-panel
            ?disabled=${t.disabled}
            slot="panels"
          >
            <h5 slot="heading">${t.title}</h5>
            ${w(`${t.content}`)}
          </outline-accordion-panel>`)}
      </outline-accordion>
    </div>
  </outline-tab-group> `,d=X.bind({});d.args={placement:"start"};var $,C,A;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`({
  placement
}: any): TemplateResult => html\`<outline-tab-group placement=\${placement}>
    \${tabData.map(panel => {
  return html\`<outline-tab
          slot="nav"
          ?disabled=\${panel.disabled}
          panel="\${formatTitle(panel.title)}"
          >\${panel.title}</outline-tab
        >
        <outline-tab-panel name="\${formatTitle(panel.title)}">
          \${unsafeHTML(\`\${panel.content}\`)}
        </outline-tab-panel> \`;
})}
    <div slot="accordion-wrapper">
      <outline-accordion ?clean=\${true} ?single-panel=\${true}>
        \${tabData.map(panel => {
  return html\` <outline-accordion-panel
            ?disabled=\${panel.disabled}
            slot="panels"
          >
            <h5 slot="heading">\${panel.title}</h5>
            \${unsafeHTML(\`\${panel.content}\`)}
          </outline-accordion-panel>\`;
})}
      </outline-accordion>
    </div>
  </outline-tab-group> \``,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const ct=["TabGroup"];export{d as TabGroup,ct as __namedExportsOrder,pt as default};
//# sourceMappingURL=outline-tab-group.stories-d4b7db09.js.map
