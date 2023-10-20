import{x as d}from"./lit-element-411ba165.js";import{l as f}from"./if-defined-93280f6e.js";import{f as J,a as q,b as B,d as K,e as Q,c as X}from"./code-6-a390db5b.js";import"./screen-size-controller-4280a32a.js";import{b as h}from"./utils-46bce928.js";import{c as Y}from"./code-4-ecadfc72.js";import{c as Z}from"./code-7-b6dfb0c6.js";import"./property-f36ea729.js";import"./state-2a0073ff.js";import"./slots-controller-d122fba7.js";import"./class-map-aeb7fbb6.js";import"./directive-12249aa5.js";import"./static-0503aeb3.js";const ee=(a,p="Properties")=>({name:a,control:{type:"select"},options:J,table:{category:p,defaultValue:{summary:"default"}},description:"The aspect ratio to apply to an image element."}),ae=(a,p="Other Controls")=>({name:a,control:{type:"radio"},options:["slot","prop"],table:{category:p,defaultValue:{summary:"slot"}},description:"\n Which method to demonstrate when rendering the image. \n This is not an actual property on the component, but a sample configuration for Storybook testing.\n - `slot`: Use the default slot to render the image.\n - `prop`: Use properties to render the image."}),s=[a=>d` <div class="block max-w-[600px]">${a()}</div> `],fe={title:"Media/Image",component:"outline-image",tags:["docsPage"],parameters:{layout:"fullscreen",docs:{description:{component:"\nThis component renders an image with an optional caption as a `figure` element and a `figcaption` element.\n\n## Description & Usage\n\n- Providing an `image-href` attribute will create a simple image tag based on the provided URL. The `image-label` attribute is optional and will be used as the alt text for the image.\n- Providing a standard `picture` element, wrapping an `img` tag to the default slot will allow the consumer to provide the image markup, while allowing for standardized styling with property created images. \n\n## Sample Demonstrations\nThe `Image (Configurable)` story is completely testable by changing the render type, and aspect ratio. \nAdditional stories will will indicate the ratio being used, and and the method of rendering the image.\n        "}}},argTypes:{imageRatio:ee("image-ratio"),imageMode:ae("Render Method"),imageUrl:h,imageLabel:h,caption:h},args:{imageLabel:"Picture of a thing",imageMode:"slot"}},e=({imageUrl:a,imageRatio:p,imageLabel:$,imageMode:G,caption:u})=>d`
${G=="prop"?d`
<outline-image image-href="${f(a)}" image-label="${f($)}" image-ratio="${f(p)}">
  ${u?d`<div slot="caption">${u}</div>`:null}
</outline-image>
`:d`
<outline-image image-ratio="${f(p)}">
  <picture><img src="${a}" alt="${$}" /></picture>
  ${u?d`<div slot="caption">${u}</div>`:null}
</outline-image>
`}`,c=e.bind({});c.args={imageUrl:q,imageRatio:"21/9",imageMode:"slot"};c.storyName="Image (Configurable)";const i=e.bind({});i.args={imageUrl:B,imageRatio:"1/1",imageMode:"prop"};i.parameters={docs:{description:{story:"\nThe following sample is set to a `1:1` aspect ratio and is using the `prop` image display method. \n    "}}};i.decorators=s;i.storyName="Image: 1:1";const t=e.bind({});t.args={imageUrl:Y,imageRatio:"3/2",imageMode:"slot"};t.parameters={docs:{description:{story:"\nThe following sample is set to a `3:2` aspect ratio and is using the `slot` image display method. \n    "}}};t.decorators=s;t.storyName="Image: 3:2";const o=e.bind({});o.args={imageUrl:K,imageRatio:"3/4",imageMode:"prop"};o.parameters={docs:{description:{story:"\nThe following sample is set to a `3:4` aspect ratio and is using the `prop` image display method. \n    "}}};o.decorators=s;o.storyName="Image: 3:4";const n=e.bind({});n.args={imageUrl:Q,imageRatio:"4/3",imageMode:"slot"};n.parameters={docs:{description:{story:"\nThe following sample is set to a `4:3` aspect ratio and is using the `slot` image display method. \n    "}}};n.decorators=s;n.storyName="Image: 4:3";const m=e.bind({});m.args={imageUrl:Z,imageRatio:"5/4",imageMode:"prop"};m.parameters={docs:{description:{story:"\nThe following sample is set to a `5:4` aspect ratio and is using the `prop` image display method. \n    "}}};m.decorators=s;m.storyName="Image: 5:4";const r=e.bind({});r.args={imageUrl:X,imageRatio:"16/9",imageMode:"slot"};r.parameters={docs:{description:{story:"\nThe following sample is set to a `16:9` aspect ratio and is using the `slot` image display method. \n    "}}};r.decorators=s;r.storyName="Image: 16:9";const l=e.bind({});l.args={imageUrl:q,imageRatio:"9/16",imageMode:"prop"};l.parameters={docs:{description:{story:"\nThe following sample is set to a `9/16` aspect ratio and is using the `prop` image display method. \n    "}}};l.decorators=s;l.storyName="Image: 9:16";const g=e.bind({});g.args={imageUrl:B,imageRatio:"21/9",imageMode:"slot"};g.parameters={docs:{description:{story:"\nThe following sample is set to a `21:9` aspect ratio and is using the `slot` image display method. \n    "}}};g.decorators=s;g.storyName="Image: 21:9";var b,y,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:'({\n  imageUrl,\n  imageRatio,\n  imageLabel,\n  imageMode,\n  caption\n}: any): TemplateResult => html`\n${imageMode == \'prop\' ? html`\n<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n` : html`\n<outline-image image-ratio="${ifDefined(imageRatio)}">\n  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n`}`',...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var R,D,U;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:'({\n  imageUrl,\n  imageRatio,\n  imageLabel,\n  imageMode,\n  caption\n}: any): TemplateResult => html`\n${imageMode == \'prop\' ? html`\n<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n` : html`\n<outline-image image-ratio="${ifDefined(imageRatio)}">\n  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n`}`',...(U=(D=i.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var I,M,L;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:'({\n  imageUrl,\n  imageRatio,\n  imageLabel,\n  imageMode,\n  caption\n}: any): TemplateResult => html`\n${imageMode == \'prop\' ? html`\n<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n` : html`\n<outline-image image-ratio="${ifDefined(imageRatio)}">\n  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n`}`',...(L=(M=t.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var T,w,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:'({\n  imageUrl,\n  imageRatio,\n  imageLabel,\n  imageMode,\n  caption\n}: any): TemplateResult => html`\n${imageMode == \'prop\' ? html`\n<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n` : html`\n<outline-image image-ratio="${ifDefined(imageRatio)}">\n  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n`}`',...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var N,x,P;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:'({\n  imageUrl,\n  imageRatio,\n  imageLabel,\n  imageMode,\n  caption\n}: any): TemplateResult => html`\n${imageMode == \'prop\' ? html`\n<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n` : html`\n<outline-image image-ratio="${ifDefined(imageRatio)}">\n  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n`}`',...(P=(x=n.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var F,O,k;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:'({\n  imageUrl,\n  imageRatio,\n  imageLabel,\n  imageMode,\n  caption\n}: any): TemplateResult => html`\n${imageMode == \'prop\' ? html`\n<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n` : html`\n<outline-image image-ratio="${ifDefined(imageRatio)}">\n  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n`}`',...(k=(O=m.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var C,E,_;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:'({\n  imageUrl,\n  imageRatio,\n  imageLabel,\n  imageMode,\n  caption\n}: any): TemplateResult => html`\n${imageMode == \'prop\' ? html`\n<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n` : html`\n<outline-image image-ratio="${ifDefined(imageRatio)}">\n  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n`}`',...(_=(E=r.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var V,z,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:'({\n  imageUrl,\n  imageRatio,\n  imageLabel,\n  imageMode,\n  caption\n}: any): TemplateResult => html`\n${imageMode == \'prop\' ? html`\n<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n` : html`\n<outline-image image-ratio="${ifDefined(imageRatio)}">\n  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n`}`',...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var H,W,j;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:'({\n  imageUrl,\n  imageRatio,\n  imageLabel,\n  imageMode,\n  caption\n}: any): TemplateResult => html`\n${imageMode == \'prop\' ? html`\n<outline-image image-href="${ifDefined(imageUrl)}" image-label="${ifDefined(imageLabel)}" image-ratio="${ifDefined(imageRatio)}">\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n` : html`\n<outline-image image-ratio="${ifDefined(imageRatio)}">\n  <picture><img src="${imageUrl}" alt="${imageLabel}" /></picture>\n  ${caption ? html`<div slot="caption">${caption}</div>` : null}\n</outline-image>\n`}`',...(j=(W=g.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};const he=["ImageDefault","ImageOne","ImageTwo","ImageThree","ImageFour","ImageFive","ImageSix","ImageSeven","ImageEight"];export{c as ImageDefault,g as ImageEight,m as ImageFive,n as ImageFour,i as ImageOne,l as ImageSeven,r as ImageSix,o as ImageThree,t as ImageTwo,he as __namedExportsOrder,fe as default};
//# sourceMappingURL=outline-image.stories-9f05f6ac.js.map
