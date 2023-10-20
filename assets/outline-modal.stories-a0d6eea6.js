import{i as X,x as e}from"./lit-element-411ba165.js";import{l as c}from"./if-defined-93280f6e.js";import{O as Z,e as ee}from"./screen-size-controller-4280a32a.js";import{a as te}from"./utils-46bce928.js";import{n as w}from"./property-f36ea729.js";import{t as Q}from"./state-2a0073ff.js";import{i as U}from"./query-e65d3c8b.js";const oe=X`
/* Apply component specific CSS */
#overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  --tw-bg-opacity: 0.6;
  background-color:rgb(0, 0, 0, var(--tw-bg-opacity));
}

#container {
  height: 100vh;
  max-width: 100%;
  overflow-y: auto;
  border-radius: 0.125rem;
  background-color: var(--outline-white);
}

@media (min-width: 768px) {

  #container {
    height: auto;
  }

  #container {
    max-width: 25vw;
  }
}

#container{
  min-width:320px;
}

@media (min-width: 768px) {

  #overlay.medium #container {
    max-width: 50vw;
  }
}

#overlay.full-screen #container {
  height: 100vh;
}

#overlay.full-screen #container {
  width: 100vw;
}

#overlay.full-screen #container {
  max-width: 100vw;
}

@media (min-width: 768px) {

  #overlay.full-screen #container {
    width: 100vw;
  }
}

@media (min-width: 768px) {

  #overlay.full-screen #container {
    max-width: 100vw;
  }
}

#header {
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.5rem;
}

#close {
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  border-width: 0px;
  background-color: var(--outline-transparent);
}

#close:before{
  content:'\\2715';
}

#main {
  padding: 1.5rem;
}

#accessibility-description {
  display: none;
}
`;var ne=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,a=(t,n,o,l)=>{for(var s=l>1?void 0:l?ie(n,o):n,d=t.length-1,u;d>=0;d--)(u=t[d])&&(s=(l?u(n,o,s):u(s))||s);return l&&s&&ne(n,o,s),s};const F=`
  a[href]:not([tabindex="-1"]),
  area[href]:not([tabindex="-1"]),
  input:not([disabled]):not([tabindex="-1"]),
  select:not([disabled]):not([tabindex="-1"]),
  textarea:not([disabled]):not([tabindex="-1"]),
  button:not([disabled]):not([tabindex="-1"]),
  iframe:not([tabindex="-1"]),
  [tabindex]:not([tabindex="-1"]),
  [contentEditable=true]:not([tabindex="-1"])
`;let i=class extends Z{constructor(){super(...arguments),this.isOpen=!1,this.shouldForceAction=!1,this.size="medium"}render(){return e`
      <div
        id="trigger"
        tabindex="0"
        @click="${this.open}"
        @keydown="${this._handleTriggerKeydown}"
      >
        <slot name="outline-modal--trigger"></slot>
      </div>
      ${this._overlayTemplate()}
    `}connectedCallback(){super.connectedCallback(),this._handleSlotChange()}_handleSlotChange(){this._hasHeaderSlot=this.querySelector('[slot="outline-modal--header"]')!==null,this._hasAccessibilityDescriptionSlot=this.querySelector('[slot="outline-modal--accessibility-description"]')!==null}_overlayTemplate(){let t=e``;return this.isOpen&&(t=e`
        <div
          id="overlay"
          tabindex="-1"
          class="${this.size}"
          @click="${this._handleOverlayClick}"
          @keydown="${this._handleOverlayKeydown}"
        >
          <div
            id="container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="${c(this._hasHeaderSlot?"header":void 0)}"
            aria-describedby="${c(this._hasAccessibilityDescriptionSlot?"accessibility-description":void 0)}"
          >
            <div id="header">
              <slot
                id="title"
                name="outline-modal--header"
                @slotchange="${this._handleSlotChange}"
              ></slot>
              ${this.shouldForceAction?null:e`
                    <button
                      id="close"
                      aria-label="Close modal"
                      @click="${this.close}"
                      @keydown="${this._handleCloseKeydown}"
                    ></button>
                  `}
            </div>
            <div id="main">
              <slot></slot>
            </div>
          </div>
        </div>
        <slot
          id="accessibility-description"
          name="outline-modal--accessibility-description"
          @slotchange="${this._handleSlotChange}"
        ></slot>
      `),t}async open(){this.isOpen||(this.isOpen=!0,await this.updateComplete,this._focusOnElement(),this._trapFocus(),this.dispatchEvent(new CustomEvent("opened")))}async close(){this.isOpen&&(this.isOpen=!1,await this.updateComplete,this.dispatchEvent(new CustomEvent("closed")),this.triggerElement.focus())}_handleTriggerKeydown(t){t.key==="Enter"&&(t.preventDefault(),this.open())}_handleOverlayClick(t){t.target===t.currentTarget&&this.shouldForceAction===!1&&this.close()}_handleOverlayKeydown(t){t.key==="Escape"&&this.shouldForceAction===!1&&this.close()}_handleCloseKeydown(t){t.key==="Enter"&&this.close()}_focusOnElement(){const t=this.shouldForceAction?null:this.closeElement,n=this.elementToFocusSelector!==void 0?this.querySelector(this.elementToFocusSelector):null,o=this.querySelector(F),l=n??o??t;l!==null&&l.focus()}_trapFocus(){const t=this.shouldForceAction?this.firstFocusableSlottedElement:this.closeElement;if(t!==null){const n=this.lastFocusableSlottedElement??t;n.addEventListener("keydown",o=>{o.key==="Tab"&&o.shiftKey===!1&&(o.preventDefault(),t.focus())}),t.addEventListener("keydown",o=>{o.key==="Tab"&&o.shiftKey&&(o.preventDefault(),n.focus())})}}get firstFocusableSlottedElement(){const t=this.querySelectorAll(F);return Array.from(t).slice(0)[0]??null}get lastFocusableSlottedElement(){const t=this.querySelectorAll(F);return Array.from(t).slice(-1)[0]??null}};i.styles=[oe];a([w({attribute:!1})],i.prototype,"isOpen",2);a([w({type:Boolean})],i.prototype,"shouldForceAction",2);a([w({type:String})],i.prototype,"size",2);a([Q()],i.prototype,"_hasHeaderSlot",2);a([Q()],i.prototype,"_hasAccessibilityDescriptionSlot",2);a([U("#trigger")],i.prototype,"triggerElement",2);a([U("#close")],i.prototype,"closeElement",2);a([w({type:String})],i.prototype,"elementToFocusSelector",2);i=a([ee("outline-modal")],i);const he={title:"Content/Modal",component:"outline-modal",tags:["docsPage"],argTypes:{triggerSlot:{name:'slot="outline-modal--trigger"',description:'The trigger slot. For example, an "open modal" button.',table:{category:"Slots"}},headerSlot:{name:'slot="outline-modal--header"',description:"The header slot. For example a header title.",table:{category:"Slots"}},accessibilityDescription:{name:'slot="outline-modal--accessibility-description"',description:"An description for accessibility. It is not visible.",table:{category:"Slots"}},defaultSlot:{...te.defaultSlot,table:{category:"Slots"}},shouldForceAction:{name:"shouldForceAction",description:"Force the user to take an action by removing close features. The modal contents will need to provide a way to close the modal.",control:{type:"boolean"}},elementToFocusSelector:{name:"elementToFocusSelector",description:'An element to focus on when the modal is opened. This might be a primary call to action such as "accept". If no value is provided, the modal will try to find the best thing to focus on. Should be a valid CSS selector.',control:{type:"text"}}},parameters:{docs:{description:{component:`
This component renders a trigger and modal. When the trigger is active, the modal opens.

## Triggering the modal

You can add a trigger slot to the modal \`slot="outline-modal--trigger"\`.

You can also manually trigger the modal with the \`.open()\` method. Similarly, you can close the modal with \`.close()\`.

## Triggering the modal close with Javascript

You could make a button within the modal to close it.

Example:

\`\`\`HTML
<button
  class="accept"
  onClick="
    document.querySelectorAll('outline-modal').forEach(
      (node) => {
        if(node.isOpen){
          node.close();
        }
      }
    )
  "
  onkeydown="
    if (event.key === 'Enter') {
      document.querySelectorAll('outline-modal').forEach(
        (node) => {
          if(node.isOpen){
            node.close();
          }
        }
      )
    }
  "
>Accept</button>
\`\`\`

## Variations

You can set the \`size\` to change the size of the modal.

You can force the user to take an action by setting \`shouldForceAction\`. In this situation, the modal contents will need to provide a way to close the modal since the standard close features will not be provided.

## Accessibility

Based on guidelines from [WAI-ARIA Authoring Practices 1.1: Modal Dialog Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html).

### Accessible style
- Modal uses full screen on small devices

### Optional features
- If a header is supplied as a slot, it is referenced with \`aria-labelledby\`
- If an accessibility description is supplied by a slot, it is referenced with \`aria-describedby\`
- The system will try to focus the first focusable element. If you would like, you can provide a selector with the \`elementToFocusSelector\` attribute and this will be focused.

### Keyboard navigation
- If a trigger is supplied as a slot, that element can be focused and triggered with the keyboard (\`Tab\` and \`Enter\`)
- On open, the modal will focus on the first focusable element, or the modal wrapper if none can be focused.
- The \`Escape\` button can be used to close the modal
- The close button can be focused and triggered with the keyboard (\`Tab\` and \`Enter\`)
- Focus in kept within the modal (\`Tab\`, \`Shift+Tab\`)
- When the modal is closed, the trigger is focused.

## Javascript interaction

### Events

Events are triggered by the modal.

- \`opened\`
- \`closed\`

### Properties

You can access the boolean \`isOpen\` property to determine if the modal is open.
`},source:{code:`
<outline-modal
  size="{{ size }}"
  {{ shouldForceAction }}
  elementToFocusSelector="{{ elementToFocusSelector }}"
>
  <outline-link slot="outline-modal--trigger">{{ triggerSlot}}</outline-link>
  <outline-heading slot="outline-modal--header">{{ headerSlot}}</outline-heading>
  <p slot="outline-modal--accessibility-description">{{ accessibilityDescription }}</p>
  {{ defaultSlot }}
</outline-modal>
        `}}}},r=({triggerSlot:t,headerSlot:n,accessibilityDescription:o,defaultSlot:l,size:s,shouldForceAction:d,elementToFocusSelector:u})=>e`
    <outline-modal
      size="${c(s)}"
      ?shouldForceAction="${d}"
      elementToFocusSelector="${c(u)}"
    >
      ${c(t)} ${c(n)}
      ${c(l)} ${c(o)}
    </outline-modal>
  `,h=r.bind({});h.args={triggerSlot:e`
    <outline-link slot="outline-modal--trigger">
      <p>Open small modal.</p>
    </outline-link>
  `,headerSlot:e`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,defaultSlot:e`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,size:"small"};const m=r.bind({});m.args={triggerSlot:e`
    <outline-link slot="outline-modal--trigger">
      Open medium modal
    </outline-link>
  `,headerSlot:e` <outline-heading slot="outline-modal--header">
    The modal header
  </outline-heading>`,defaultSlot:e`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,size:"medium"};const p=r.bind({});p.args={triggerSlot:e`
    <outline-link slot="outline-modal--trigger">
      Open full screen modal
    </outline-link>
  `,headerSlot:e`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,defaultSlot:e`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `,size:"full-screen"};const f=r.bind({});f.args={triggerSlot:e`
    <outline-button slot="outline-modal--trigger">
      Open modal with button trigger
    </outline-button>
  `,headerSlot:e`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,defaultSlot:e`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `};const g=r.bind({});g.args={triggerSlot:e`
    <outline-link slot="outline-modal--trigger">
      <p>Open modal without header.</p>
    </outline-link>
  `,defaultSlot:e`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `};const S=r.bind({});S.args={triggerSlot:e`
    <outline-link slot="outline-modal--trigger">
      <p>Open a modal with an accessibility description.</p>
    </outline-link>
  `,headerSlot:e`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,accessibilityDescription:e`
    <p slot="outline-modal--accessibility-description">
      This is an accessibility description about the modal.
    </p>
  `,defaultSlot:e`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
  `};const b=r.bind({});b.args={triggerSlot:e`
    <outline-link slot="outline-modal--trigger">
      <p>Open modal and focus on accept button.</p>
    </outline-link>
  `,headerSlot:e`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,defaultSlot:e`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
    <button class="cancel">Cancel</button>
    <button
      class="accept"
      onClick="
        document.querySelectorAll('outline-modal').forEach(
          (node) => {
            if(node.isOpen){
              node.close();
            }
          }
        )
      "
      onkeydown="
        if (event.key === 'Enter') {
          document.querySelectorAll('outline-modal').forEach(
            (node) => {
              if(node.isOpen){
                node.close();
              }
            }
          )
        }
      "
    >
      Accept
    </button>
  `,elementToFocusSelector:".accept"};const y=r.bind({});y.args={triggerSlot:e`
    <outline-link slot="outline-modal--trigger">
      <p>Open modal and focus on accept button automatically.</p>
    </outline-link>
  `,headerSlot:e`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,defaultSlot:e`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
    <button
      onClick="
        document.querySelectorAll('outline-modal').forEach(
          (node) => {
            if(node.isOpen){
              node.close();
            }
          }
        )
      "
      onkeydown="
        if (event.key === 'Enter') {
          document.querySelectorAll('outline-modal').forEach(
            (node) => {
              if(node.isOpen){
                node.close();
              }
            }
          )
        }
      "
    >
      Accept
    </button>
  `};const T=r.bind({});T.args={triggerSlot:e`
    <outline-link slot="outline-modal--trigger">
      <p>Open modal and force an action.</p>
    </outline-link>
  `,headerSlot:e`
    <outline-heading slot="outline-modal--header">
      The modal header
    </outline-heading>
  `,defaultSlot:e`
    <p>Here is a first line of the modal.</p>
    <p>
      This has a longer line so we can test line breaks, etc. This is going to
      be another sentence so we can see a longer paragraph. How about this?
      Thanks.
    </p>
    <button
      class="accept"
      onClick="
        document.querySelectorAll('outline-modal').forEach(
          (node) => {
            if(node.isOpen){
              node.close();
            }
          }
        )
      "
      onkeydown="
        if (event.key === 'Enter') {
          document.querySelectorAll('outline-modal').forEach(
            (node) => {
              if(node.isOpen){
                node.close();
              }
            }
          )
        }
      "
    >
      Accept
    </button>
  `,shouldForceAction:!0,elementToFocusSelector:".accept"};var D,$,A;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector
}: any): TemplateResult => {
  return html\`
    <outline-modal
      size="\${ifDefined(size)}"
      ?shouldForceAction="\${shouldForceAction}"
      elementToFocusSelector="\${ifDefined(elementToFocusSelector)}"
    >
      \${ifDefined(triggerSlot)} \${ifDefined(headerSlot)}
      \${ifDefined(defaultSlot)} \${ifDefined(accessibilityDescription)}
    </outline-modal>
  \`;
}`,...(A=($=h.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var k,v,E;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector
}: any): TemplateResult => {
  return html\`
    <outline-modal
      size="\${ifDefined(size)}"
      ?shouldForceAction="\${shouldForceAction}"
      elementToFocusSelector="\${ifDefined(elementToFocusSelector)}"
    >
      \${ifDefined(triggerSlot)} \${ifDefined(headerSlot)}
      \${ifDefined(defaultSlot)} \${ifDefined(accessibilityDescription)}
    </outline-modal>
  \`;
}`,...(E=(v=m.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var x,O,z;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector
}: any): TemplateResult => {
  return html\`
    <outline-modal
      size="\${ifDefined(size)}"
      ?shouldForceAction="\${shouldForceAction}"
      elementToFocusSelector="\${ifDefined(elementToFocusSelector)}"
    >
      \${ifDefined(triggerSlot)} \${ifDefined(headerSlot)}
      \${ifDefined(defaultSlot)} \${ifDefined(accessibilityDescription)}
    </outline-modal>
  \`;
}`,...(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var _,C,H;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector
}: any): TemplateResult => {
  return html\`
    <outline-modal
      size="\${ifDefined(size)}"
      ?shouldForceAction="\${shouldForceAction}"
      elementToFocusSelector="\${ifDefined(elementToFocusSelector)}"
    >
      \${ifDefined(triggerSlot)} \${ifDefined(headerSlot)}
      \${ifDefined(defaultSlot)} \${ifDefined(accessibilityDescription)}
    </outline-modal>
  \`;
}`,...(H=(C=f.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var q,R,I;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector
}: any): TemplateResult => {
  return html\`
    <outline-modal
      size="\${ifDefined(size)}"
      ?shouldForceAction="\${shouldForceAction}"
      elementToFocusSelector="\${ifDefined(elementToFocusSelector)}"
    >
      \${ifDefined(triggerSlot)} \${ifDefined(headerSlot)}
      \${ifDefined(defaultSlot)} \${ifDefined(accessibilityDescription)}
    </outline-modal>
  \`;
}`,...(I=(R=g.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var K,M,P;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector
}: any): TemplateResult => {
  return html\`
    <outline-modal
      size="\${ifDefined(size)}"
      ?shouldForceAction="\${shouldForceAction}"
      elementToFocusSelector="\${ifDefined(elementToFocusSelector)}"
    >
      \${ifDefined(triggerSlot)} \${ifDefined(headerSlot)}
      \${ifDefined(defaultSlot)} \${ifDefined(accessibilityDescription)}
    </outline-modal>
  \`;
}`,...(P=(M=S.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var Y,B,j;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector
}: any): TemplateResult => {
  return html\`
    <outline-modal
      size="\${ifDefined(size)}"
      ?shouldForceAction="\${shouldForceAction}"
      elementToFocusSelector="\${ifDefined(elementToFocusSelector)}"
    >
      \${ifDefined(triggerSlot)} \${ifDefined(headerSlot)}
      \${ifDefined(defaultSlot)} \${ifDefined(accessibilityDescription)}
    </outline-modal>
  \`;
}`,...(j=(B=b.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var L,W,J;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector
}: any): TemplateResult => {
  return html\`
    <outline-modal
      size="\${ifDefined(size)}"
      ?shouldForceAction="\${shouldForceAction}"
      elementToFocusSelector="\${ifDefined(elementToFocusSelector)}"
    >
      \${ifDefined(triggerSlot)} \${ifDefined(headerSlot)}
      \${ifDefined(defaultSlot)} \${ifDefined(accessibilityDescription)}
    </outline-modal>
  \`;
}`,...(J=(W=y.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var N,V,G;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`({
  triggerSlot,
  headerSlot,
  accessibilityDescription,
  defaultSlot,
  size,
  shouldForceAction,
  elementToFocusSelector
}: any): TemplateResult => {
  return html\`
    <outline-modal
      size="\${ifDefined(size)}"
      ?shouldForceAction="\${shouldForceAction}"
      elementToFocusSelector="\${ifDefined(elementToFocusSelector)}"
    >
      \${ifDefined(triggerSlot)} \${ifDefined(headerSlot)}
      \${ifDefined(defaultSlot)} \${ifDefined(accessibilityDescription)}
    </outline-modal>
  \`;
}`,...(G=(V=T.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};const me=["Small","Medium","FullScreen","ButtonTrigger","NoHeader","AccessibilityDescription","CustomFocusElement","AutoFocusedElement","ForceAction"];export{S as AccessibilityDescription,y as AutoFocusedElement,f as ButtonTrigger,b as CustomFocusElement,T as ForceAction,p as FullScreen,m as Medium,g as NoHeader,h as Small,me as __namedExportsOrder,he as default};
//# sourceMappingURL=outline-modal.stories-a0d6eea6.js.map
