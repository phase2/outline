import{i as l,x as d}from"./lit-element-411ba165.js";import{O as m,e as u}from"./screen-size-controller-4280a32a.js";import{o as g}from"./class-map-aeb7fbb6.js";import{n as e}from"./property-f36ea729.js";const f=l`
/* Apply component specific CSS */
::slotted(*){
  display:block;
}

::slotted(*:not(:only-child)){
  margin-bottom:var(--spacing-2);
}

.container{
  --container-padding:1rem;

  width:100%;
  display:block;
  margin-right:auto;
  margin-left:auto;

  padding-right:var(--container-padding);
  padding-left:var(--container-padding);
  max-width:calc(
    var(--container-max-content-width) + 2 * var(--container-padding)
  );
}

.container > *{
    margin-bottom:0;
    margin-bottom:var(--component-spacing, 0);
  }

.wide{
  --container-max-content-width:1660px;
}

.medium{
  --container-max-content-width:1088px;
}

.narrow{
  --container-max-content-width:864px;
}

.full{
  max-width:100%;
  --container-padding:0;
}

.justify-start{
  margin-left:0;
}

.justify-end{
  margin-right:0;
}
`;var y=Object.defineProperty,h=Object.getOwnPropertyDescriptor,n=(a,r,s,o)=>{for(var i=o>1?void 0:o?h(r,s):r,c=a.length-1,p;c>=0;c--)(p=a[c])&&(i=(o?p(r,s,i):p(i))||i);return o&&i&&y(r,s,i),i};let t=class extends m{constructor(){super(...arguments),this.justifyEnd=!1,this.justifyStart=!1,this.containerWidth="wide"}render(){const r={container:!0,[this.containerWidth]:!0,"justify-end":this.justifyEnd,"justify-start":this.justifyStart};return d`
      ${this.topMargin||this.bottomMargin?d` <style>
            .container {
              margin-top: var(--${this.topMargin});
              margin-bottom: var(--${this.bottomMargin});
            }
          </style>`:""}
      <div class=${g(r)}>
        <slot></slot>
      </div>
    `}};t.styles=[l`
      :host {
        --component-spacing: var(--spacing-6);
      }
    `,f];n([e({type:String,reflect:!0,attribute:"top-margin"})],t.prototype,"topMargin",2);n([e({type:String,reflect:!0,attribute:"bottom-margin"})],t.prototype,"bottomMargin",2);n([e({type:String,reflect:!0,attribute:"child-spacing"})],t.prototype,"childSpacing",2);n([e({type:Boolean,reflect:!0,attribute:"justify-end"})],t.prototype,"justifyEnd",2);n([e({type:Boolean,reflect:!0,attribute:"justify-start"})],t.prototype,"justifyStart",2);n([e({type:String,reflect:!0,attribute:"container-width"})],t.prototype,"containerWidth",2);t=n([u("outline-container")],t);
//# sourceMappingURL=outline-container-cbfed8dd.js.map
