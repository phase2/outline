import{i as y,x as f}from"./lit-element-411ba165.js";import{l as _}from"./if-defined-93280f6e.js";import{O as b,e as x}from"./screen-size-controller-4280a32a.js";import{n as D}from"./property-f36ea729.js";const V=y`
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
`;var p=Object.freeze,g=Object.defineProperty,O=Object.getOwnPropertyDescriptor,h=(e,i,s,r)=>{for(var o=r>1?void 0:r?O(i,s):i,a=e.length-1,d;a>=0;a--)(d=e[a])&&(o=(r?d(i,s,o):d(o))||o);return r&&o&&g(i,s,o),o},I=(e,i)=>p(g(e,"raw",{value:p(i||e.slice())})),l;let n=class extends b{render(){return f(l||(l=I([`
      <iframe
        src="https://player.vimeo.com/video/`,`"
        title="Vimeo video `,`"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"><\/script>
    `])),this.videoID,this.videoID)}};n.styles=[V];h([D({type:String,attribute:"video-id",reflect:!0})],n.prototype,"videoID",2);n=h([x("outline-video-vimeo")],n);const m={title:"Media/Vimeo Video",component:"outline-video-vimeo",tags:["docsPage"],argTypes:{videoID:{name:"video-id",description:"Vimeo video id",control:{type:"text"}}},args:{videoID:"432639001"},parameters:{docs:{description:{component:`
Vimeo video. Allows the embedded video to fit the space.
`},source:{code:`
<outline-video-vimeo
  video-id="{{ videoID }}"
>
</outline-video-vimeo>
        `}}}},w=(e=m.args)=>(e={...m.args,...e},f`
    <outline-video-vimeo video-id="${_(e.videoID)}">
    </outline-video-vimeo>
  `),t=w.bind({});t.parameters={axe:{skip:!0}};var c,v,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`(args = configuration.args): TemplateResult => {
  args = {
    ...configuration.args,
    ...args
  };
  return html\`
    <outline-video-vimeo video-id="\${ifDefined(args.videoID)}">
    </outline-video-vimeo>
  \`;
}`,...(u=(v=t.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const z=["VimeoVideo"];export{t as VimeoVideo,z as __namedExportsOrder,m as default};
//# sourceMappingURL=outline-video-vimeo.stories-4b01acbf.js.map
