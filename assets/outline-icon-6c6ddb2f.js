import{i as C,x as L}from"./lit-element-411ba165.js";import{O as z,e as A}from"./screen-size-controller-4280a32a.js";import{n as c}from"./property-f36ea729.js";import{t as j}from"./state-2a0073ff.js";import{o as I}from"./class-map-aeb7fbb6.js";import{l as y}from"./if-defined-93280f6e.js";import{e as M}from"./directive-12249aa5.js";import{e as S}from"./unsafe-html-3f86ca9e.js";function u(t,e,r){const s=new CustomEvent(e,{bubbles:!0,cancelable:!1,composed:!0,detail:{},...r});return t.dispatchEvent(s),s}function at(t,e){return new Promise(r=>{function s(i){i.target===t&&(t.removeEventListener(e,s),r())}t.addEventListener(e,s)})}function v(t,e){const r={waitUntilFirstUpdate:!1,...e};return(s,i)=>{const{update:n}=s;if(t in s){const a=t;s.update=function(h){if(h.has(a)){const b=h.get(a),w=this[a];b!==w&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[i](b,w)}n.call(this,h)}}}}const d={libraries:{bootstrap:!0,boxicons:!0,fontawesome:!0,heroicons:!0,iconoir:!0,ionicons:!0,jam:!0,lucide:!0,material:!0,remix:!0,unicons:!0},defaults:{library:"bootstrap",size:"16px",icon:"chevron-right"}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends S{}m.directiveName="unsafeSVG",m.resultType=2;const U=M(m),$={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-up":`
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
  </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},k={name:"system",resolver:t=>t in $?`data:image/svg+xml,${encodeURIComponent($[t])}`:""},E={name:"bootstrap",resolver:t=>`https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${t}.svg`},O={name:"boxicons",resolver:t=>{let e="regular";return t.substring(0,4)==="bxs-"&&(e="solid"),t.substring(0,4)==="bxl-"&&(e="logos"),`https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${e}/${t}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},B={name:"lucide",resolver:t=>`https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${t}.svg`},F={name:"heroicons",resolver:t=>`https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${t}.svg`,mutator:t=>{t.setAttribute("width","16px"),t.setAttribute("height","16px")}},P={name:"iconoir",resolver:t=>`https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${t}.svg`},_={name:"ionicons",resolver:t=>`https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${t}.svg`,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("stroke","currentColor"),[...t.querySelectorAll(".ionicon-fill-none")].map(e=>e.setAttribute("fill","none")),[...t.querySelectorAll(".ionicon-stroke-width")].map(e=>e.setAttribute("stroke-width","32px"))}},q={name:"jam",resolver:t=>`https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")},D={name:"fa",resolver:t=>{const e=t.replace(/^fa[rbs]-/,"");let r="regular";return t.substring(0,4)==="fas-"&&(r="solid"),t.substring(0,4)==="fab-"&&(r="brands"),`https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${r}/${e}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},T={name:"material",resolver:t=>{const e=t.match(/^(.*?)(_(round|sharp))?$/);return`https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${e[1]}/${e[3]||"outline"}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},H={name:"remix",resolver:t=>{const e=t.match(/^(.*?)\/(.*?)?$/);return e[1]=e[1].charAt(0).toUpperCase()+e[1].slice(1),`https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${e[1]}/${e[2]}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},V={name:"unicons",resolver:t=>{const e=t.match(/^(.*?)(-s)?$/);return`https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${e[2]==="-s"?"solid":"line"}/${e[1]}.svg`},mutator:t=>t.setAttribute("fill","currentColor")},R={name:"custom",resolver:t=>`./dist/assets/svg/custom/${t}.svg`};let G=[k,E,O,B,F,P,_,q,D,T,H,V,R],f=[];function K(t){f.push(t)}function N(t){f=f.filter(e=>e!==t)}function x(t){return G.find(e=>e.name===t)}const p=new Map;function Z(t,e="cors"){if(p.has(t))return p.get(t);const r=fetch(t,{mode:e}).then(async s=>({ok:s.ok,status:s.status,html:await s.text()}));return p.set(t,r),r}const g=new Map;async function J(t){if(g.has(t))return g.get(t);const e=await Z(t),r={ok:e.ok,status:e.status,svg:null};if(e.ok){const s=document.createElement("div");s.innerHTML=e.html;const i=s.firstElementChild;r.svg=(i==null?void 0:i.tagName.toLowerCase())==="svg"?i.outerHTML:""}return g.set(t,r),r}const Q=C`
/* Apply component specific CSS */
:host svg{
  height:inherit;
  width:inherit;
  display:flex;
}
`;var W=Object.defineProperty,X=Object.getOwnPropertyDescriptor,l=(t,e,r,s)=>{for(var i=s>1?void 0:s?X(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(i=(s?a(e,r,i):a(i))||i);return s&&i&&W(e,r,i),i};const Y=new DOMParser;let o=class extends z{constructor(){super(...arguments),this.svg="",this.label=!1,this.library=d.defaults.library,this.size=d.defaults.size}connectedCallback(){super.connectedCallback(),K(this)}firstUpdated(){this.setIcon(),this.sizeIcon()}updated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),N(this)}sizeIcon(){var t;if(this.size&&typeof this.size=="string"&&this.size!==d.defaults.size){const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".icon");e==null||e.style.setProperty("width",this.size),e==null||e.style.setProperty("height",this.size)}}getUrl(){const t=x(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var r;const t=x(this.library),e=this.getUrl();if(e)try{const s=await J(e);if(e!==this.getUrl())return;if(s.ok){const n=Y.parseFromString(s.svg,"text/html").body.querySelector("svg");n!==null?((r=t==null?void 0:t.mutator)==null||r.call(t,n),this.svg=n.outerHTML,u(this,"outline-load")):(this.svg="",u(this,"outline-error",{detail:{status:s.status}}))}else this.svg="",u(this,"outline-error",{detail:{status:s.status}})}catch{u(this,"outline-error",{detail:{status:-1}})}else this.svg.length>0&&(this.svg="")}render(){const t=typeof this.label=="string"&&this.label.length>0,e={icon:!0,[`icon-library--${this.library}`]:this.library};return L` <div
      part="base"
      class="${I(e)}"
      role=${y(t?"img":void 0)}
      aria-label=${y(t?this.label:void 0)}
    >
      ${U(this.svg)}
    </div>`}};o.styles=[Q];l([j()],o.prototype,"svg",2);l([c({type:String,reflect:!0,attribute:"name"})],o.prototype,"name",2);l([c({type:String,attribute:"src"})],o.prototype,"src",2);l([c({attribute:"label"})],o.prototype,"label",2);l([c({type:String,attribute:"library"})],o.prototype,"library",2);l([c({attribute:"size"})],o.prototype,"size",2);l([v("name"),v("src"),v("library")],o.prototype,"setIcon",1);o=l([A("outline-icon")],o);export{at as a,u as e,v as w};
//# sourceMappingURL=outline-icon-6c6ddb2f.js.map
