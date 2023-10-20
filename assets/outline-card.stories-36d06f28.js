import{i as z,x as e}from"./lit-element-411ba165.js";import{l as u}from"./if-defined-93280f6e.js";import{O as G,e as A}from"./screen-size-controller-4280a32a.js";import{b as l}from"./utils-46bce928.js";import{n as f}from"./property-f36ea729.js";import{t as y}from"./state-2a0073ff.js";import{o as v}from"./class-map-aeb7fbb6.js";import"./outline-container-cbfed8dd.js";import"./outline-heading-e5f4beef.js";import"./directive-12249aa5.js";import"./static-0503aeb3.js";import"./mobile-controller-f2865d76.js";const M=z`
/* Apply component specific CSS */
:host {

    display: block;

    overflow: hidden;
}

  :host section {

    display: flex;
}

  :host section {

    flex-direction: column;
}

  :host section {

    overflow: hidden;
}

  :host section {

    text-align: left;
}

  :host p {

    margin-bottom: 2.5rem;
}

.outline-shadow {

    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);

    box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.outline-rounded-2xl {

    border-radius: 1rem;
}

.outline-bg-primary {

    background-color: var(--outline-blue-600);
}

.outline-bg-secondary {

    background-color: var(--outline-blue-300);
}

.outline-bg-tertiary {

    background-color: var(--outline-blue-100);
}

.outline-bg-black {

    background-color: var(--outline-black);
}

.outline-bg-white {

    background-color: var(--outline-white);
}

.outline-bg-gray {

    background-color: var(--outline-gray-300);
}

.outline-bg-outline-gray-100 {

    background-color: var(--outline-gray-100);
}
`;var N=Object.defineProperty,J=Object.getOwnPropertyDescriptor,r=(o,a,s,i)=>{for(var n=i>1?void 0:i?J(a,s):a,d=o.length-1,c;d>=0;d--)(c=o[d])&&(n=(i?c(a,s,n):c(n))||n);return i&&n&&N(a,s,n),n};let t=class extends G{constructor(){super(...arguments),this.isRounded=!1,this.hasShadow=!1}connectedCallback(){super.connectedCallback(),this.hasHeaderSlot=this.querySelector('[slot="header"]')!==null,this.hasContentSlot=this.querySelector('[slot="content"]')!==null,this.hasFooterSlot=this.querySelector('[slot="footer"]')!==null}headerTemplate(o){return this.hasHeaderSlot?e` <section class="${v(o)}">
      <slot name="header"></slot>
    </section>`:null}contentTemplate(o){return this.hasContentSlot?e` <section class="${v(o)}">
      <slot name="content"></slot>
    </section>`:null}footerTemplate(o){return this.hasFooterSlot?e` <section class="${v(o)}">
      <slot name="footer"></slot>
    </section>`:null}render(){const o={card:!0,"outline-shadow":this.hasShadow,"outline-rounded-2xl":this.isRounded},a={"card-header":!0,[`outline-bg-${this.bgColorHeader}`]:this.bgColorHeader!==void 0},s={"card-content":!0,[`outline-bg-${this.bgColorContent}`]:this.bgColorContent!==void 0},i={"card-footer":!0,[`outline-bg-${this.bgColorFooter}`]:this.bgColorFooter!==void 0};return e`
      <section class="${v(o)}">
        ${this.headerTemplate(a)}
        ${this.contentTemplate(s)}
        ${this.footerTemplate(i)}
      </section>
    `}};t.styles=[M];r([f()],t.prototype,"bgColorHeader",2);r([f()],t.prototype,"bgColorContent",2);r([f()],t.prototype,"bgColorFooter",2);r([f({type:Boolean,attribute:"is-rounded"})],t.prototype,"isRounded",2);r([f({type:Boolean,attribute:"has-shadow"})],t.prototype,"hasShadow",2);r([y()],t.prototype,"hasHeaderSlot",2);r([y()],t.prototype,"hasContentSlot",2);r([y()],t.prototype,"hasFooterSlot",2);t=r([A("outline-card")],t);const K="https://github.com/phase2/outline/blob/next/src/.storybook/static/media/color/Codeworkbench_color.jpg",U=["primary","secondary","tertiary","black","white","gray","lightgray"],$={name:"Color",options:U,control:{type:"select"}},de={title:"Content/Card",component:"outline-card",tags:["docsPage"],argTypes:{bgColorHeader:{...$,name:"Background of header slot."},bgColorContent:{...$,name:"Background of content slot."},bgColorFooter:{...$,name:"Background of footer slot."},hostElement:l,hasFooterSlot:l,hasContentSlot:l,hasHeaderSlot:l,cardHeader:l,cardContent:l,cardFooter:l,isRounded:{name:"Rounded Corners",control:{type:"boolean"}},hasShadow:{name:"Has Shadow",control:{type:"boolean"}}},args:{cardContent:e`
      <div slot="content" class="p-4">
        <outline-heading level="h2" level-size="2xl" level-style="light"
          >This is a sample card. It has content in the content
          slot.</outline-heading
        >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin
          laboramus, quis est, qui alienae modum statuat industriae? Quae qui
          non vident, nihil umquam magnum ac cognitione dignum amaverunt. Res
          enim concurrent contrariae.
          Duo Reges: constructio interrete. Res
          enim concurrent contrariae. Quaesita enim virtus est, non quae
          relinqueret naturam, sed quae tueretur. Omnia contraria, quos etiam
          insanos esse vultis.
        </p>
      </div>
    `}},C=({bgColorHeader:o,bgColorContent:a,bgColorFooter:s,hasShadow:i,isRounded:n,cardHeader:d,cardContent:c,cardFooter:P})=>e`
    <outline-container>
      <outline-card
        bgcolorheader="${u(o)}"
        bgcolorcontent="${u(a)}"
        bgcolorfooter="${u(s)}"
        has-shadow=${u(i)}
        is-rounded="${u(n)}"
      >
          ${d}
          ${c}
          ${P}
        </section>
      </outline-card>
    </outline-container>
  `,m=C.bind({});m.args={cardHeader:e`
    <div slot="header">
      <div class="max-h-80 overflow-hidden object-cover">
        <outline-image>
          <img slot="multimedia" src=${K} alt="Random Image" />
        </outline-image>
      </div>
    </div>
  `,cardFooter:e`
    <div slot="footer" class="p-4 flex justify-between">
      <p class="font-semibold">02/2020</p>
      <p class="font-semibold text-blue-500 hover:text-blue-900">
        <outline-link link-href="#">Read More</outline-link>
      </p>
    </div>
  `,cardContent:e`
    <div slot="content" class="p-4">
      <outline-heading
        level="h2"
        level-size="5xl"
        level-style="semibold"
        class="mb-6"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </outline-heading>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quis istum dolorem timet? Sin laboramus,
        quis est, qui alienae modum statuat industriae? Quae qui non vident,
        nihil umquam magnum ac cognitione dignum amaverunt. Res enim concurrent
        contrariae.
        Duo Reges: constructio interrete. Res
        enim concurrent contrariae. Quaesita enim virtus est, non quae
        relinqueret naturam, sed quae tueretur. Omnia contraria, quos etiam
        insanos esse vultis.
      </p>

      <p class="">
        Sin autem est in ea, quod quidam volunt, nihil impedit hanc nostram
        comprehensionem summi boni. Quod non faceret, si in voluptate summum
        bonum poneret. Estne, quaeso, inquam, sitienti in bibendo voluptas?
        <strong>Quid ergo?</strong>
        <strong>Sed tu istuc dixti bene Latine, parum plane.</strong> Et ais, si
        una littera commota sit, fore tota ut labet disciplina. Nam si beatus
        umquam fuisset, beatam vitam usque ad illum a Cyro extructum rogum
        pertulisset. Cur iustitia laudatur? Quod autem magnum dolorem brevem,
        longinquum levem esse dicitis, id non intellego quale sit.
      </p>
    </div>
  `,bgColorFooter:"white",bgColorContent:"white",isRounded:!0,hasShadow:!0};const V=()=>e`
    <outline-container>
      <outline-card
        bgcolorheader="white"
        bgcolorcontent="white"
        bgcolorfooter="white"
        has-shadow
        is-rounded
      >
        <div slot="header">
          <outline-heading
            level="h2"
            level-size="2xl"
            level-style="normal"
            class="p-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </outline-heading>
        </div>
        <div slot="content" class="p-4 md:p-8 md:flex">
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <a href="#" target="_self">Quis istum dolorem timet?</a> Sin
            laboramus, quis est, qui alienae modum statuat industriae? Quae qui
            non vident, nihil umquam magnum ac cognitione dignum amaverunt. Res
            enim concurrent contrariae.
            <a href="#" target="_self">Duo Reges: constructio interrete.</a> Res
            enim concurrent contrariae. Quaesita enim virtus est, non quae
            relinqueret naturam, sed quae tueretur. Omnia contraria, quos etiam
            insanos esse vultis.
          </p>
        </div>
        <div slot="footer" class="p-4 flex justify-between text-xs">
          <p class="font-semibold">02/2020</p>
          <p class="font-semibold text-blue-500 hover:text-blue-900">
          <outline-link link-href="#">Read More</outline-link>
          </p>
        </div>
      </outline-card>
    </outline-container>
  `,w=V.bind({}),h=C.bind({});h.args={};const g=C.bind({});g.args={cardHeader:e`
    <div slot="header" class="p-4">
      <outline-header>Generic Header</outline-header>
    </div>
  `};const p=C.bind({});p.args={cardFooter:e`
    <div slot="footer" class="p-4">
      <outline-header>Generic Footer</outline-header>
    </div>
  `};const b=C.bind({});b.args={cardHeader:e`
    <div slot="header" class="p-4">
      <outline-header>Generic Header</outline-header>
    </div>
  `,cardFooter:e`
    <div slot="footer" class="p-4">
      <outline-header>Generic Footer</outline-header>
    </div>
  `};var S,x,H;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`({
  bgColorHeader,
  bgColorContent,
  bgColorFooter,
  hasShadow,
  isRounded,
  cardHeader,
  cardContent,
  cardFooter
}: any): TemplateResult => html\`
    <outline-container>
      <outline-card
        bgcolorheader="\${ifDefined(bgColorHeader)}"
        bgcolorcontent="\${ifDefined(bgColorContent)}"
        bgcolorfooter="\${ifDefined(bgColorFooter)}"
        has-shadow=\${ifDefined(hasShadow)}
        is-rounded="\${ifDefined(isRounded)}"
      >
          \${cardHeader}
          \${cardContent}
          \${cardFooter}
        </section>
      </outline-card>
    </outline-container>
  \``,...(H=(x=m.parameters)==null?void 0:x.docs)==null?void 0:H.source}}};var q,F,R;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`(): TemplateResult => html\`
    <outline-container>
      <outline-card
        bgcolorheader="white"
        bgcolorcontent="white"
        bgcolorfooter="white"
        has-shadow
        is-rounded
      >
        <div slot="header">
          <outline-heading
            level="h2"
            level-size="2xl"
            level-style="normal"
            class="p-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </outline-heading>
        </div>
        <div slot="content" class="p-4 md:p-8 md:flex">
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <a href="#" target="_self">Quis istum dolorem timet?</a> Sin
            laboramus, quis est, qui alienae modum statuat industriae? Quae qui
            non vident, nihil umquam magnum ac cognitione dignum amaverunt. Res
            enim concurrent contrariae.
            <a href="#" target="_self">Duo Reges: constructio interrete.</a> Res
            enim concurrent contrariae. Quaesita enim virtus est, non quae
            relinqueret naturam, sed quae tueretur. Omnia contraria, quos etiam
            insanos esse vultis.
          </p>
        </div>
        <div slot="footer" class="p-4 flex justify-between text-xs">
          <p class="font-semibold">02/2020</p>
          <p class="font-semibold text-blue-500 hover:text-blue-900">
          <outline-link link-href="#">Read More</outline-link>
          </p>
        </div>
      </outline-card>
    </outline-container>
  \``,...(R=(F=w.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var D,k,T;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`({
  bgColorHeader,
  bgColorContent,
  bgColorFooter,
  hasShadow,
  isRounded,
  cardHeader,
  cardContent,
  cardFooter
}: any): TemplateResult => html\`
    <outline-container>
      <outline-card
        bgcolorheader="\${ifDefined(bgColorHeader)}"
        bgcolorcontent="\${ifDefined(bgColorContent)}"
        bgcolorfooter="\${ifDefined(bgColorFooter)}"
        has-shadow=\${ifDefined(hasShadow)}
        is-rounded="\${ifDefined(isRounded)}"
      >
          \${cardHeader}
          \${cardContent}
          \${cardFooter}
        </section>
      </outline-card>
    </outline-container>
  \``,...(T=(k=h.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var Q,_,O;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`({
  bgColorHeader,
  bgColorContent,
  bgColorFooter,
  hasShadow,
  isRounded,
  cardHeader,
  cardContent,
  cardFooter
}: any): TemplateResult => html\`
    <outline-container>
      <outline-card
        bgcolorheader="\${ifDefined(bgColorHeader)}"
        bgcolorcontent="\${ifDefined(bgColorContent)}"
        bgcolorfooter="\${ifDefined(bgColorFooter)}"
        has-shadow=\${ifDefined(hasShadow)}
        is-rounded="\${ifDefined(isRounded)}"
      >
          \${cardHeader}
          \${cardContent}
          \${cardFooter}
        </section>
      </outline-card>
    </outline-container>
  \``,...(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var W,B,L;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`({
  bgColorHeader,
  bgColorContent,
  bgColorFooter,
  hasShadow,
  isRounded,
  cardHeader,
  cardContent,
  cardFooter
}: any): TemplateResult => html\`
    <outline-container>
      <outline-card
        bgcolorheader="\${ifDefined(bgColorHeader)}"
        bgcolorcontent="\${ifDefined(bgColorContent)}"
        bgcolorfooter="\${ifDefined(bgColorFooter)}"
        has-shadow=\${ifDefined(hasShadow)}
        is-rounded="\${ifDefined(isRounded)}"
      >
          \${cardHeader}
          \${cardContent}
          \${cardFooter}
        </section>
      </outline-card>
    </outline-container>
  \``,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var j,E,I;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`({
  bgColorHeader,
  bgColorContent,
  bgColorFooter,
  hasShadow,
  isRounded,
  cardHeader,
  cardContent,
  cardFooter
}: any): TemplateResult => html\`
    <outline-container>
      <outline-card
        bgcolorheader="\${ifDefined(bgColorHeader)}"
        bgcolorcontent="\${ifDefined(bgColorContent)}"
        bgcolorfooter="\${ifDefined(bgColorFooter)}"
        has-shadow=\${ifDefined(hasShadow)}
        is-rounded="\${ifDefined(isRounded)}"
      >
          \${cardHeader}
          \${cardContent}
          \${cardFooter}
        </section>
      </outline-card>
    </outline-container>
  \``,...(I=(E=b.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const ce=["CardWithImageHeader","CardWithTitleHeader","SimpleCard","CardWithHeader","CardWithFooter","CardWithHeaderAndFooter"];export{p as CardWithFooter,g as CardWithHeader,b as CardWithHeaderAndFooter,m as CardWithImageHeader,w as CardWithTitleHeader,h as SimpleCard,ce as __namedExportsOrder,de as default};
//# sourceMappingURL=outline-card.stories-36d06f28.js.map
