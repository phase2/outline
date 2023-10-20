import{i as b,x as m}from"./lit-element-411ba165.js";import{l as f}from"./if-defined-93280f6e.js";import{O as g,e as y}from"./screen-size-controller-4280a32a.js";import{n as h}from"./property-f36ea729.js";const x=b`
/* Apply component specific CSS */
:host {
  position:relative;
  display:block;
  height:0px;
  padding-bottom:calc(9 / 16 * 100%)
}

iframe {
  position:absolute;
  top:0px;
  bottom:0px;
  left:0px;
  right:0px;
  display:block;
  height:100%;
  width:100%
}
`;var D=Object.defineProperty,w=Object.getOwnPropertyDescriptor,v=(o,i,n,r)=>{for(var e=r>1?void 0:r?w(i,n):i,s=o.length-1,d;s>=0;s--)(d=o[s])&&(e=(r?d(i,n,e):d(e))||e);return r&&e&&D(i,n,e),e};let u=class extends g{render(){return m`
      <iframe
        src="https://www.youtube.com/embed/${this.videoID}"
        title="YouTube video ${this.videoID}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `}};u.styles=[x];v([h({type:String,attribute:"video-id",reflect:!0})],u.prototype,"videoID",2);u=v([y("outline-video-youtube")],u);const a={title:"Media/Youtube Video",component:"outline-video-youtube",tags:["docsPage"],argTypes:{videoID:{name:"video-id",description:"Youtube video id",control:{type:"text"}}},args:{videoID:"xiqgG8HUZXE"},parameters:{docs:{description:{component:`
Responsive Youtube video.
`},source:{code:`
<outline-video-youtube
  video-id="{{ videoID }}"
>
</outline-video-youtube>
        `}}}},I=(o=a.args)=>(o={...a.args,...o},m`
    <outline-video-youtube video-id="${f(o.videoID)}">
    </outline-video-youtube>
  `),t=I.bind({});t.parameters={axe:{skip:!0}};var p,l,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`(args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args
  };
  return html\`
    <outline-video-youtube video-id="\${ifDefined(args.videoID)}">
    </outline-video-youtube>
  \`;
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const S=["YoutubeVideo"];export{t as YoutubeVideo,S as __namedExportsOrder,a as default};
//# sourceMappingURL=outline-video-youtube.stories-c50ce5a9.js.map
