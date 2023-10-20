import{s as x}from"./lit-element-411ba165.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=t=>e=>typeof e=="function"?((n,s)=>(customElements.define(n,s),s))(t,e):((n,s)=>{const{kind:r,elements:l}=s;return{kind:r,elements:l,finisher(o){customElements.define(n,o)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=({finisher:t,descriptor:e})=>(n,s)=>{var r;if(s===void 0){const l=(r=n.originalKey)!==null&&r!==void 0?r:n.key,o=e!=null?{kind:"method",placement:"prototype",key:l,descriptor:e(n.key)}:{...n,key:l};return t!=null&&(o.finisher=function(i){t(i,l)}),o}{const l=n.constructor;e!==void 0&&Object.defineProperty(n,s,e(s)),t==null||t(l,s)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var p;const m=((p=window.HTMLSlotElement)===null||p===void 0?void 0:p.prototype.assignedElements)!=null?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);function b(t){const{slot:e,selector:n}=t??{};return a({descriptor:s=>({get(){var r;const l="slot"+(e?`[name=${e}]`:":not([name])"),o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(l),i=o!=null?m(o,t):[];return n?i.filter(u=>u.matches(n)):i},enumerable:!0,configurable:!0})})}var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,y=(t,e,n,s)=>{for(var r=s>1?void 0:s?v(e,n):e,l=t.length-1,o;l>=0;l--)(o=t[l])&&(r=(s?o(e,n,r):o(r))||r);return s&&r&&f(e,n,r),r};let c=class extends x{};c=y([d("outline-element")],c);const E={xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1440px",xxxl:"2160px"};new Map(Object.entries(E).map(([t,e])=>[t,parseInt(e.slice(0,-2))]).sort(([,t],[,e])=>t-e));const O={xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1440px",xxxl:"2160px"};new Map(Object.entries(O).map(([t,e])=>[t,parseInt(e.slice(0,-2))]).sort(([,t],[,e])=>t-e));export{c as O,d as e,b as l,a as o};
//# sourceMappingURL=screen-size-controller-4280a32a.js.map
