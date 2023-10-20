import{i as n,x as r}from"./lit-element-411ba165.js";import{O as h,e as f}from"./screen-size-controller-4280a32a.js";import{n as l}from"./property-f36ea729.js";import{t as g}from"./state-2a0073ff.js";import{l as u}from"./if-defined-93280f6e.js";import{S as d}from"./slots-controller-d122fba7.js";const b=n`
/* Apply component specific CSS */
:host{
  display:block;
}

  :host figure{
    margin:0;
    display:block;
    height:auto;
  }

figure{
  width:100%;
  height:100%;
  display:flex;
}

picture{
  aspect-ratio:default;
  overflow:hidden;
  display:flex;
}

img{
  object-fit:cover;
  height:auto;
  min-width:100%;
}

:host([image-ratio='1/1']) picture{
  aspect-ratio:1 / 1;
}

:host([image-ratio='3/2']) picture{
  aspect-ratio:3 / 2;
}

:host([image-ratio='3/4']) picture{
  aspect-ratio:3 / 4;
}

:host([image-ratio='4/3']) picture{
  aspect-ratio:4 / 3;
}

:host([image-ratio='5/4']) picture{
  aspect-ratio:5 / 4;
}

:host([image-ratio='16/9']) picture{
  aspect-ratio:16 / 9;
}

:host([image-ratio='9/16']) picture{
  aspect-ratio:9 / 16;
}

:host([image-ratio='21/9']) picture{
  aspect-ratio:21 / 9;
}

:host([image-ratio='42/9']) picture{
  aspect-ratio:42 / 9;
}
`;var S=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(m,o,s,a)=>{for(var t=a>1?void 0:a?y(o,s):o,p=m.length-1,c;p>=0;p--)(c=m[p])&&(t=(a?c(o,s,t):c(t))||t);return a&&t&&S(o,s,t),t};const $=["default","1/1","3/2","3/4","4/3","5/4","16/9","9/16","21/9","42/9"];let e=class extends h{constructor(){super(...arguments),this.slots=new d(this),this.imageHref=!1,this.imageLabel=!1}firstUpdated(){this.hasCaptionSlot=!!this.slots.exist("caption")}captionSlotTemplate(){return this.hasCaptionSlot?r`<figcaption>${this.slots.renderInShadow("caption")}</figcaption>`:null}render(){return r`${this.imageHref?r` <figure>
          <picture>
            <img src=${this.imageHref} alt="${u(this.imageLabel)}" />
          </picture>
          ${this.captionSlotTemplate()}
        </figure>`:r`<figure>
          ${this.slots.renderInShadow("")}${this.captionSlotTemplate()}
        </figure>`} `}};e.styles=[b];i([g()],e.prototype,"hasCaptionSlot",2);i([l({type:String,attribute:"image-href"})],e.prototype,"imageHref",2);i([l({type:String,attribute:"image-label"})],e.prototype,"imageLabel",2);i([l({type:String,attribute:"image-ratio",reflect:!0})],e.prototype,"imageRatio",2);e=i([f("outline-image")],e);const x=""+new URL("code-1-3cafbf41.jpg",import.meta.url).href,C=""+new URL("code-2-65a67827.jpg",import.meta.url).href,U=""+new URL("code-3-b81ba4ec.jpg",import.meta.url).href,_=""+new URL("code-5-cd484fb9.jpg",import.meta.url).href,H=""+new URL("code-6-8f259a2e.jpg",import.meta.url).href;export{C as a,U as b,x as c,_ as d,H as e,$ as f};
//# sourceMappingURL=code-6-a390db5b.js.map
