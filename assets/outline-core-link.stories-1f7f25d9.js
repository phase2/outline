import{i as k,x as s}from"./lit-element-411ba165.js";import{M as g}from"./chunk-S4VUQJ4A-550f3e34.js";import{O as f,e as y}from"./screen-size-controller-4280a32a.js";import{n as a}from"./property-f36ea729.js";import{l as x}from"./if-defined-93280f6e.js";import"./outline-alert-3efcdbe8.js";import{j as e}from"./jsx-runtime-f69cb261.js";import{u as j}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";const v=k`
/* Apply component specific CSS */
:host{
  --outline-core-link--color--computed:var(--outline-core-link--color, var(--outline-blue-600));
  --outline-core-link--text-decoration--computed:var(--outline-core-link--text-decoration, none);
  --outline-core-link--color-hover--computed:var(--outline-core-link--color-hover, var(--outline-gray-600));
  --outline-core-link--text-decoration-hover--computed:var(--outline-core-link--text-decoration-hover, underline);
  --outline-core-link--color-focus--computed:var(--outline-core-link--color-focus, var(--outline-gray-600));
  --outline-core-link--text-decoration-focus--computed:var(--outline-core-link--text-decoration-focus, underline);
  --outline-core-link--transition-property--computed:var(--outline-core-link--transition-property, color, background-color, border-color, text-decoration-color, fill, stroke);
  --outline-core-link--transition-duration--computed:var(--outline-core-link--transition-duration, 150ms);
  --outline-core-link--transition-timing-function--computed:var(--outline-core-link--transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
}

a,
::slotted(a){
  font-family:var(--ff-body) !important;
  -webkit-text-decoration:var(
    --outline-core-link--text-decoration--computed
  ) !important;
          text-decoration:var(
    --outline-core-link--text-decoration--computed
  ) !important;
  color:var(--outline-core-link--color--computed) !important;
  transition-property:var(
    --outline-core-link--transition-property--computed
  ) !important;
  transition-timing-function:var(
    --outline-core-link--transition-timing-function--computed
  ) !important;
  transition-duration:var(
    --outline-core-link--transition-duration--computed
  ) !important;
}

a:hover,
::slotted(a:hover){
  -webkit-text-decoration:var(
    --outline-core-link--text-decoration-hover--computed
  ) !important;
          text-decoration:var(
    --outline-core-link--text-decoration-hover--computed
  ) !important;
  color:var(--outline-core-link--color-hover--computed) !important;
}

a:focus,
::slotted(a:focus){
  -webkit-text-decoration:var(
    --outline-core-link--text-decoration-focus--computed
  ) !important;
          text-decoration:var(
    --outline-core-link--text-decoration-focus--computed
  ) !important;
  color:var(--outline-core-link--color-focus--computed) !important;
}
`;var b=Object.defineProperty,w=Object.getOwnPropertyDescriptor,r=(t,n,d,l)=>{for(var o=l>1?void 0:l?w(n,d):n,h=t.length-1,u;h>=0;h--)(u=t[h])&&(o=(l?u(n,d,o):u(o))||o);return l&&o&&b(n,d,o),o};const p="outline-core-link";let i=class extends f{isURLExternal(t){return new URL(t,window.location.href).hostname!==window.location.hostname}linkRelRender(){return this.linkRel?this.linkRel:this.isURLExternal(this.linkHref)?"noreferrer noopener":void 0}linkTargetRender(){return this.linkTarget?this.linkTarget:this.isURLExternal(this.linkHref)?"_blank":void 0}generateLink(){return s` <a
      href=${this.linkHref}
      rel="${x(this.linkRelRender())}"
      target="${x(this.linkTargetRender())}"
    >
      ${this.linkText?s`${this.linkText}`:s`<slot></slot>`}
    </a>`}getSlottedContent(){return this.querySelectorAll("*")}isValidTopLevelSlottedLink(){const t=this.getSlottedContent();return t.length===1&&t[0].nodeName==="A"}debugSlottedContent(){console.group(p),console.error(`${p} must have a single <a> tag as a child of the default slot.`),console.log(this.getSlottedContent()),console.groupEnd()}adjustSlottedContent(){const t=this.querySelector("a");this.linkTarget&&(t==null||t.setAttribute("target",this.linkTarget)),this.linkRel&&(t==null||t.setAttribute("rel",this.linkRel))}fullMarkupInSlot(){return this.isValidTopLevelSlottedLink()?this.adjustSlottedContent():this.debugSlottedContent(),s` <slot></slot> `}render(){return this.linkHref?this.generateLink():this.fullMarkupInSlot()}};i.styles=[v];r([a({type:String,attribute:"link-href"})],i.prototype,"linkHref",2);r([a({type:String,attribute:"link-text"})],i.prototype,"linkText",2);r([a({type:String,attribute:"link-target"})],i.prototype,"linkTarget",2);r([a({type:String,attribute:"link-rel"})],i.prototype,"linkRel",2);i=r([y(p)],i);k`
/* Apply CSS Variables to the host element. */
:host{
  --outline-core-link--color--computed:var(--outline-core-link--color, var(--outline-blue-600));
  --outline-core-link--text-decoration--computed:var(--outline-core-link--text-decoration, none);
  --outline-core-link--color-hover--computed:var(--outline-core-link--color-hover, var(--outline-gray-600));
  --outline-core-link--text-decoration-hover--computed:var(--outline-core-link--text-decoration-hover, underline);
  --outline-core-link--color-focus--computed:var(--outline-core-link--color-focus, var(--outline-gray-600));
  --outline-core-link--text-decoration-focus--computed:var(--outline-core-link--text-decoration-focus, underline);
  --outline-core-link--transition-property--computed:var(--outline-core-link--transition-property, color, background-color, border-color, text-decoration-color, fill, stroke);
  --outline-core-link--transition-duration--computed:var(--outline-core-link--transition-duration, 150ms);
  --outline-core-link--transition-timing-function--computed:var(--outline-core-link--transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1));
}
`;function m(t){const n=Object.assign({p:"p",a:"a",img:"img",h1:"h1",code:"code",strong:"strong",h2:"h2",blockquote:"blockquote",em:"em",hr:"hr",pre:"pre",h3:"h3",ul:"ul",li:"li",h4:"h4"},j(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Navigation/Link",component:"outline-core-link",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://www.npmjs.com/package/@phase2/outline-core-link",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://img.shields.io/npm/v/@phase2/outline-core-link",alt:"Latest version for outline-core-link"})})}),`
`,e.jsxs(n.h1,{id:"outline-core-link-outlinecorelink",children:[e.jsx(n.code,{children:"<outline-core-link>"})," ",e.jsx(n.code,{children:"OutlineCoreLink"})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"outline-core-link"})," component allows complete flexibility in how you choose to render a link element across a single or multiple applications."]}),`
`,e.jsxs("outline-alert",{status:"success",size:"large",children:[e.jsx("span",{slot:"header",children:"Documentation Status: Accurate-ish"}),e.jsx("p",{children:"This documentation is accurate, though the inclusion of several of the following topics or examples would be ideal."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(n.strong,{children:"@todo:"})," Include example linked images when ",e.jsx(n.code,{children:"outline-core-image"})," is complete."]}),e.jsxs("li",{children:[e.jsx(n.strong,{children:"@todo:"})," Include example linked icons when ",e.jsx(n.code,{children:"outline-core-icon"})," is complete."]}),e.jsxs("li",{children:[e.jsx(n.strong,{children:"@todo:"})," Include example linked headings when ",e.jsx(n.code,{children:"outline-core-heading"})," is complete."]}),e.jsxs("li",{children:[e.jsx(n.strong,{children:"@todo:"})," Include multiple examples of utilizing and modifying the CSS variables avaiable to ",e.jsx(n.code,{children:"outline-core-link"})]})]})]}),`
`,e.jsx("br",{}),`
`,e.jsxs(n.h2,{id:"introduction-to-the-outline-core-link-component",children:["Introduction to the ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"outline-core-link"})})," component"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"outline-core-link"}),` component allows for two distinct types of usages.
We will call these usages `,e.jsx(n.strong,{children:"Consumer Links"})," and ",e.jsx(n.strong,{children:"Component Links"}),". The former is the consumer application providing the ",e.jsx(n.code,{children:"a"}),", and the latter is the web component itself generating the ",e.jsx(n.code,{children:"a"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"The default reccomendation"})," is to use the ",e.jsx(n.strong,{children:"Consumer Links"}),` option as it is the most flexible, allows for the most control over the link element.
Additionally, the `,e.jsx(n.strong,{children:"Consumer Links"})," method avoids any issues with tools that are still unable to penetrate the Shadow DOM, and are only able to accurately scan and/or operate on the Light DOM."]}),`
`,e.jsxs(n.p,{children:["As links are a foundational component, utilized across the board in a variety of component and consumer usages, it is imporant the ",e.jsx(n.code,{children:"outline-core-link"})," component is as flexible as possible allowing for a variety of consumer needs up front to ensure that our core components are ready for whatever may be thrown their way."]}),`
`,e.jsx(n.h2,{id:"consumer-links",children:"Consumer Links"}),`
`,e.jsxs(n.p,{children:["Consumer Links are links that are created by a consumer application that uses the ",e.jsx(n.code,{children:"outline-core-link"})," component as a wrapper for links generated by another backend/frontend system using the component."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["If you would like to render your link via properties, you should use the ",e.jsx(n.strong,{children:"Component Link"})," method described below."]})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("p",{children:e.jsx("outline-core-link",{children:e.jsx("a",{href:"https://www.phase2technology.com",className:"sb-unstyled",target:"_blank",children:"Consumer Link"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<outline-core-link>
  <a href="https://www.phase2technology.com" target="_blank">
    Consumer Link
  </a>
</outline-core-link>
`})}),`
`,e.jsxs(n.p,{children:["The above example simply shows how a consumer application can pass in a valid ",e.jsx(n.code,{children:"a"})," tag via the default slot, and the ",e.jsx(n.code,{children:"outline-core-link"})," component will ensure proper markup and styling."]}),`
`,e.jsx(n.h3,{id:"breaking-a-consumer-link",children:e.jsx(n.strong,{children:"Breaking a Consumer Link"})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Consumer Links"})," that are attempting to wrap the ",e.jsx(n.code,{children:"a"})," tag provided to the ",e.jsx(n.code,{children:"slot"})," will see an error in the console, and likely see broken styling."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("p",{children:e.jsx("outline-core-link",{children:e.jsx("span",{children:e.jsx("a",{href:"https://www.phase2technology.com",className:"sb-unstyled",target:"_blank",children:'"Broken" Consumer Link'})})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<outline-core-link>
  <span>
    <a href="https://www.phase2technology.com" target="_blank">
      "Broken" Consumer Link
    </a>
  </span>
</outline-core-link>
`})}),`
`,e.jsxs(n.p,{children:["In the above example, because we wrapped our ",e.jsx(n.code,{children:"a"})," inside a ",e.jsx(n.code,{children:"span"})," tag, the default styling provided by the component is visually broken."]}),`
`,e.jsx(n.h3,{id:"overriding-a-consumer-link",children:e.jsx(n.strong,{children:"Overriding a Consumer Link"})}),`
`,e.jsxs(n.p,{children:["With the flexible implementation of ",e.jsx(n.code,{children:"outline-core-link"}),", it is possible to override the ",e.jsx(n.code,{children:"a"})," tag provided to the ",e.jsx(n.code,{children:"slot"})," by passing attributes to the ",e.jsx(n.code,{children:"outline-core-link"}),` component itself.
What this means is that if you create an `,e.jsx(n.code,{children:"a"})," tag, that includes a ",e.jsx(n.code,{children:"target"})," attribute, but also add a ",e.jsx(n.code,{children:"link-target"})," to your ",e.jsx(n.code,{children:"outline-core-link"})," wrapper, the value from ",e.jsx(n.code,{children:"outline-core-link"})," will override the value of the ",e.jsx(n.code,{children:"target"})," attribute on the slotted ",e.jsx(n.code,{children:"a"})," tag."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("p",{children:e.jsx("outline-core-link",{"link-target":"_blank",children:e.jsx("a",{href:"https://www.phase2technology.com",className:"sb-unstyled",target:"_self",children:"Overriding target attribute"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<outline-core-link link-target="_blank">
  <a 
    href="https://www.phase2technology.com"    
    target="_self"
  >
    Overriding target attribute
  </a>
</outline-core-link>
`})}),`
`,e.jsxs(n.p,{children:["In the above example, the ",e.jsx(n.code,{children:"target"})," was set originally by the consumer application as ",e.jsx(n.code,{children:"_self"}),", however, we were able to override it by simply using the ",e.jsx(n.code,{children:"link-target"})," attribute on the ",e.jsx(n.code,{children:"outline-core-link"})," component."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("p",{children:e.jsx("outline-core-link",{"link-rel":"noreferrer noopener alternate",children:e.jsx("a",{href:"https://www.phase2technology.com",className:"sb-unstyled",rel:"alternate",target:"_blank",children:"Overriding rel attribute"})})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<outline-core-link link-rel="noreferrer noopener alternate">
  <a 
    href="https://www.phase2technology.com"
    target="_blank"
    rel="alternate"
  >
    Overriding rel attribute
  </a>
</outline-core-link>
`})}),`
`,e.jsxs(n.p,{children:["In the above example, the ",e.jsx(n.code,{children:"target"})," was set originally by the consumer application as ",e.jsx(n.code,{children:"_self"}),", however, we were able to override it by simply using the ",e.jsx(n.code,{children:"link-target"})," attribute on the ",e.jsx(n.code,{children:"outline-core-link"})," component."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h3,{id:"when-to-use-outline-core-link-in-consumer-link-mode",children:["When to use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"outline-core-link"})})," in ",e.jsx(n.strong,{children:'"Consumer Link"'})," mode"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"outline-core-link"})," component should be used in ",e.jsx(n.strong,{children:"Consumer Link"})," mode when you need to create a link that is provided by a consumer application, and you need to create a link that is rendered in the Light DOM."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When the ability for a consumer application to be able to manipulate the link is of paramount importance.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"This can be when certain tools a client may use or require aren't able to penetrate the Shadow DOM."}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:"When you want to allow a consumer application the future ability to modify the content and possibly some functionality of the link without requiring changes to the deisgn system."}),`
`]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Common Scenario:"})}),`
`,e.jsxs(n.p,{children:["Drupal project has the ability to provide ",e.jsx(n.code,{children:"content.field_link"}),` or similar through a field level template.
Drupal provides the ability to extend this link with additional attributes like `,e.jsx(n.code,{children:"rel"}),", ",e.jsx(n.code,{children:"target"}),`, etc. through core and contributed modules
This allows for flexibilty for the CMS to decide what is being sent to the design system, and allows the design system to focus on styling, fail-safes and final functionality enhancements.`]}),`
`]}),`
`,e.jsx(n.h4,{id:"usage-details",children:e.jsx(n.strong,{children:"Usage Details"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You must provide a valid ",e.jsx(n.code,{children:"a"})," tag to the default slot.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"a"})," tag provided must NOT be wrapped by ANY other markup.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The component will throw an error in the console."}),`
`,e.jsx(n.li,{children:"The component styling will likely be broken."}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Assuming your ",e.jsx(n.code,{children:"a"})," tag includes attributes already like ",e.jsx(n.code,{children:"rel"}),", ",e.jsx(n.code,{children:"target"}),", etc, you do not need to set any additional properties on the ",e.jsx(n.code,{children:"outline-core-link"})," component.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You can optionally set the ",e.jsx(n.code,{children:"link-target"})," property to a valid target value on ",e.jsx(n.code,{children:"outline-core-link"}),", and it will be added to the ",e.jsx(n.code,{children:"a"})," supplied via the slot.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the link already had a ",e.jsx(n.code,{children:"target"})," attribute, the value from ",e.jsx(n.code,{children:"link-target"})," would overwrite it."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["You can optionally set the ",e.jsx(n.code,{children:"link-rel"})," property to a valid rel value.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["If the link already had a ",e.jsx(n.code,{children:"rel"})," attribute, the value from ",e.jsx(n.code,{children:"link-rel"})," would be appended to it."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["If the link is external, the component will automatically add ",e.jsx(n.code,{children:'rel="noopener noreferrer"'})," to the link and open the link in a new tab."]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-links",children:"Component Links"}),`
`,e.jsxs(n.p,{children:["Component Links are links that are created by the ",e.jsx(n.code,{children:"outline-core-link"}),` component itself, and part, if not all of the link is rendered in the Shadow DOM.
These links are created by setting the `,e.jsx(n.code,{children:"link-href"})," property to a valid URL."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["If you would like to put a full, pre-generated link in a slot, you should use ",e.jsx(n.strong,{children:"Consumer Link"})," method described above."]})}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("p",{children:e.jsx("outline-core-link",{"link-href":"https://www.phase2technology.com","link-target":"_blank",children:"Component link using default slot for link text"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- This example shows the link text being provided via the default slot -->
<outline-core-link 
  link-href="https://www.phase2technology.com" 
  link-target="_blank"
>
  Component link using default slot for link text
</outline-core-link>
`})}),`
`,e.jsx(n.p,{children:"In the above example, the link itself is rendered in the Shadow DOM, and the link text is rendered in the Light DOM via the default slot."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("p",{children:e.jsx("outline-core-link",{"link-href":"https://www.phase2technology.com","link-target":"_blank","link-text":"Component link using only properties"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<!-- This example shows the link text being provided via the link-text property -->
<outline-core-link 
  link-href="https://www.phase2technology.com" 
  link-target="_blank" 
  link-text="Component link using only properties"
>
</outline-core-link>
`})}),`
`,e.jsxs(n.p,{children:["In the above example, the link itself is rendered in the Shadow DOM, and the link text is rendered in the Shadow DOM as well because of the usage of the ",e.jsx(n.code,{children:"link-text"})," property."]}),`
`,e.jsxs(n.h3,{id:"when-to-use-outline-core-link-in-component-link-mode",children:["When to use ",e.jsx(n.strong,{children:e.jsx(n.code,{children:"outline-core-link"})})," in ",e.jsx(n.strong,{children:'"Component Link"'})," mode"]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"outline-core-link"})," component should be used in ",e.jsx(n.strong,{children:"Component Link"})," mode when you need to create a link that is not provided by a consumer application, and you need to create a link that is rendered in the Shadow DOM."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"When component encapsulation is of paramount importance."}),`
`,e.jsx(n.li,{children:"When you need to create a link that is not provided by a consumer application."}),`
`,e.jsx(n.li,{children:"When you need to create a link that is rendered in the Shadow DOM."}),`
`,e.jsx(n.li,{children:"When control over the markup, functionality, and styling of the link should be completely controlled by the design system, dissallowing any consumer application from modifying the link."}),`
`]}),`
`,e.jsx(n.h4,{id:"usage-details-1",children:e.jsx(n.strong,{children:"Usage Details"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["You must provide and set the ",e.jsx(n.code,{children:"link-href"})," property to a valid URL."]}),`
`,e.jsxs(n.li,{children:["You can optionally set the ",e.jsx(n.code,{children:"link-target"})," property to a valid target value."]}),`
`,e.jsxs(n.li,{children:["You can optionally set the ",e.jsx(n.code,{children:"link-text"})," property to a valid text value."]}),`
`,e.jsxs(n.li,{children:["You can optionally set the ",e.jsx(n.code,{children:"link-rel"})," property to a valid rel value."]}),`
`,e.jsxs(n.li,{children:["If the link is external, the component will automatically add ",e.jsx(n.code,{children:'rel="noopener noreferrer"'})," to the link and open the link in a new tab."]}),`
`]}),`
`,e.jsx(n.h2,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsxs(n.p,{children:["The primary styling of the ",e.jsx(n.code,{children:"outline-core-link"})," component is handled by the following CSS Variables."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Any consumer application can simply overwrite any relevant CSS Variables in a subsequent CSS include to affect change on the element styling using the following variables."}),`
`]}),`
`,e.jsxs(n.p,{children:["Additional documentation and references for these CSS Variables can be found in ",e.jsx(n.code,{children:"outline-core-link/css-variables/vars-link.css"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--outline-core-link-transition-property"}),": The CSS transition property to use for the link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--outline-core-link-transition-duration"}),": The CSS transition duration to use for the link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--outline-core-link-transition-timing-function"}),": The CSS transition timing function to use for the link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--outline-core-link-color-default"}),": The default link color."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--outline-core-link-color-default-decoration"}),": Text decoration for the default link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--outline-core-link-color-hover"}),": The link color when hovering on the link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--outline-core-link-color-hover-decoration"}),": Text decoration for the link when hovering."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--outline-core-link-color-focus"}),": The link color when focusing on the link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"--outline-core-link-color-focus-decoration"}),": Text decoration for the link when focusing."]}),`
`]})]})}function S(t={}){const{wrapper:n}=Object.assign({},j(),t.components);return n?e.jsx(n,{...t,children:e.jsx(m,{...t})}):m(t)}const C=()=>{throw new Error("Docs-only story")};C.parameters={docsOnly:!0};const c={title:"Navigation/Link",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:S};const E=["__page"];export{E as __namedExportsOrder,C as __page,c as default};
//# sourceMappingURL=outline-core-link.stories-1f7f25d9.js.map
