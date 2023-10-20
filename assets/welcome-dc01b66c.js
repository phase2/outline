import{j as B}from"./jsx-runtime-f69cb261.js";import{i as ne,x as ae}from"./lit-element-411ba165.js";import{M as re}from"./chunk-S4VUQJ4A-550f3e34.js";import"./vars-link.css.lit-8fdd0acf.js";import{O as ie,e as se}from"./screen-size-controller-4280a32a.js";import{n as J}from"./property-f36ea729.js";import{i as V}from"./query-e65d3c8b.js";import{o as oe}from"./unsafe-html-3f86ca9e.js";import"./outline-icon-6c6ddb2f.js";import{u as P}from"./index-70c40187.js";import"./iframe-43601686.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-356e4a49.js";import"./if-defined-93280f6e.js";import"./directive-12249aa5.js";import"./state-2a0073ff.js";import"./class-map-aeb7fbb6.js";var le=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var a=function(t){var c=/\blang(?:uage)?-([\w-]+)\b/i,b=0,m={},y={},o={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function n(e){return e instanceof F?new F(e.type,n(e.content),e.alias):Array.isArray(e)?e.map(n):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++b}),n.__id},clone:function n(e,r){r=r||{};var i,s;switch(o.util.type(e)){case"Object":if(s=o.util.objId(e),r[s])return r[s];i={},r[s]=i;for(var g in e)e.hasOwnProperty(g)&&(i[g]=n(e[g],r));return i;case"Array":return s=o.util.objId(e),r[s]?r[s]:(i=[],r[s]=i,e.forEach(function(x,f){i[f]=n(x,r)}),i);default:return e}},getLanguage:function(n){for(;n&&!c.test(n.className);)n=n.parentElement;return n?(n.className.match(c)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var n=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(i.stack)||[])[1];if(n){var e=document.getElementsByTagName("script");for(var r in e)if(e[r].src==n)return e[r]}return null}},isActive:function(n,e,r){for(var i="no-"+e;n;){var s=n.classList;if(s.contains(e))return!0;if(s.contains(i))return!1;n=n.parentElement}return!!r}},languages:{plain:y,plaintext:y,text:y,txt:y,css:m,html:m,json:m,jsx:m,tsx:m,svg:m,xml:m,graphql:m,javascript:m,markdown:m,typescript:m,extend:function(n,e){var r=o.util.clone(o.languages[n]);for(var i in e)r[i]=e[i];return r},insertBefore:function(n,e,r,i){i=i||o.languages;var s=i[n],g={};for(var x in s)if(s.hasOwnProperty(x)){if(x==e)for(var f in r)r.hasOwnProperty(f)&&(g[f]=r[f]);r.hasOwnProperty(x)||(g[x]=s[x])}var $=i[n];return i[n]=g,o.languages.DFS(o.languages,function(S,C){C===$&&S!=n&&(this[S]=g)}),g},DFS:function n(e,r,i,s){s=s||{};var g=o.util.objId;for(var x in e)if(e.hasOwnProperty(x)){r.call(e,x,e[x],i||x);var f=e[x],$=o.util.type(f);$==="Object"&&!s[g(f)]?(s[g(f)]=!0,n(f,r,null,s)):$==="Array"&&!s[g(f)]&&(s[g(f)]=!0,n(f,r,x,s))}}},plugins:{},highlightAll:function(n,e){o.highlightAllUnder(document,n,e)},highlightAllUnder:function(n,e,r){var i={callback:r,container:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),o.hooks.run("before-all-elements-highlight",i);for(var s=0,g;g=i.elements[s++];)o.highlightElement(g,e===!0,i.callback)},highlightElement:function(n,e,r){var i=o.util.getLanguage(n),s=o.languages[i];n.className=n.className.replace(c,"").replace(/\s+/g," ")+" language-"+i;var g=n.parentElement;g&&g.nodeName.toLowerCase()==="pre"&&(g.className=g.className.replace(c,"").replace(/\s+/g," ")+" language-"+i);var x=n.textContent,f={element:n,language:i,grammar:s,code:x};function $(C){f.highlightedCode=C,o.hooks.run("before-insert",f),f.element.innerHTML=f.highlightedCode,o.hooks.run("after-highlight",f),o.hooks.run("complete",f),r&&r.call(f.element)}if(o.hooks.run("before-sanity-check",f),g=f.element.parentElement,g&&g.nodeName.toLowerCase()==="pre"&&!g.hasAttribute("tabindex")&&g.setAttribute("tabindex","0"),!f.code){o.hooks.run("complete",f),r&&r.call(f.element);return}if(o.hooks.run("before-highlight",f),!f.grammar){$(o.util.encode(f.code));return}if(e&&t.Worker){var S=new Worker(o.filename);S.onmessage=function(C){$(C.data)},S.postMessage(JSON.stringify({language:f.language,code:f.code,immediateClose:!0}))}else $(o.highlight(f.code,f.grammar,f.language))},highlight:function(n,e,r){var i={code:n,grammar:e,language:r};return o.hooks.run("before-tokenize",i),i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),F.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(n,e){var r=e.rest;if(r){for(var i in r)e[i]=r[i];delete e.rest}var s=new w;return p(s,s.head,n),v(n,s,e,s.head,0),l(s)},hooks:{all:{},add:function(n,e){var r=o.hooks.all;r[n]=r[n]||[],r[n].push(e)},run:function(n,e){var r=o.hooks.all[n];if(!(!r||!r.length))for(var i=0,s;s=r[i++];)s(e)}},Token:F};t.Prism=o;function F(n,e,r,i){this.type=n,this.content=e,this.alias=r,this.length=(i||"").length|0}F.stringify=function n(e,r){if(typeof e=="string")return e;if(Array.isArray(e)){var i="";return e.forEach(function($){i+=n($,r)}),i}var s={type:e.type,content:n(e.content,r),tag:"span",classes:["token",e.type],attributes:{},language:r},g=e.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(s.classes,g):s.classes.push(g)),o.hooks.run("wrap",s);var x="";for(var f in s.attributes)x+=" "+f+'="'+(s.attributes[f]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+x+">"+s.content+"</"+s.tag+">"};function _(n,e,r,i){n.lastIndex=e;var s=n.exec(r);if(s&&i&&s[1]){var g=s[1].length;s.index+=g,s[0]=s[0].slice(g)}return s}function v(n,e,r,i,s,g){for(var x in r)if(!(!r.hasOwnProperty(x)||!r[x])){var f=r[x];f=Array.isArray(f)?f:[f];for(var $=0;$<f.length;++$){if(g&&g.cause==x+","+$)return;var S=f[$],C=S.inside,M=!!S.lookbehind,z=!!S.greedy,L=S.alias;if(z&&!S.pattern.global){var E=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,E+"g")}for(var O=S.pattern||S,A=i.next,j=s;A!==e.tail&&!(g&&j>=g.reach);j+=A.value.length,A=A.next){var T=A.value;if(e.length>n.length)return;if(!(T instanceof F)){var Z=1,I;if(z){if(I=_(O,j,n,M),!I)break;var H=I.index,ee=I.index+I[0].length,q=j;for(q+=A.value.length;H>=q;)A=A.next,q+=A.value.length;if(q-=A.value.length,j=q,A.value instanceof F)continue;for(var N=A;N!==e.tail&&(q<ee||typeof N.value=="string");N=N.next)Z++,q+=N.value.length;Z--,T=n.slice(j,q),I.index-=j}else if(I=_(O,0,T,M),!I)continue;var H=I.index,W=I[0],U=T.slice(0,H),K=T.slice(H+W.length),X=j+T.length;g&&X>g.reach&&(g.reach=X);var G=A.prev;U&&(G=p(e,G,U),j+=U.length),d(e,G,Z);var te=new F(x,C?o.tokenize(W,C):W,L,W);if(A=p(e,G,te),K&&p(e,A,K),Z>1){var Y={cause:x+","+$,reach:X};v(n,e,r,A.prev,j,Y),g&&Y.reach>g.reach&&(g.reach=Y.reach)}}}}}}function w(){var n={value:null,prev:null,next:null},e={value:null,prev:n,next:null};n.next=e,this.head=n,this.tail=e,this.length=0}function p(n,e,r){var i=e.next,s={value:r,prev:e,next:i};return e.next=s,i.prev=s,n.length++,s}function d(n,e,r){for(var i=e.next,s=0;s<r&&i!==n.tail;s++)i=i.next;e.next=i,i.prev=e,n.length-=s}function l(n){for(var e=[],r=n.head.next;r!==n.tail;)e.push(r.value),r=r.next;return e}if(!t.document)return t.addEventListener&&(o.disableWorkerMessageHandler||t.addEventListener("message",function(n){var e=JSON.parse(n.data),r=e.language,i=e.code,s=e.immediateClose;t.postMessage(o.highlight(i,o.languages[r],r)),s&&t.close()},!1)),o;var u=o.util.currentScript();u&&(o.filename=u.src,u.hasAttribute("data-manual")&&(o.manual=!0));function k(){o.manual||o.highlightAll()}if(!o.manual){var h=document.readyState;h==="loading"||h==="interactive"&&u&&u.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return o}(le);typeof module<"u"&&module.exports&&(module.exports=a);typeof global<"u"&&(global.Prism=a);a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?\]\]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity;a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup;a.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(c,b){var m={};m["language-"+b]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[b]},m.cdata=/^<!\[CDATA\[|\]\]>$/i;var y={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:m}};y["language-"+b]={pattern:/[\s\S]+/,inside:a.languages[b]};var o={};o[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:y},a.languages.insertBefore("markup","cdata",o)}});Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(t,c){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:a.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});a.languages.html=a.languages.markup;a.languages.mathml=a.languages.markup;a.languages.svg=a.languages.markup;a.languages.xml=a.languages.extend("markup",{});a.languages.ssml=a.languages.xml;a.languages.atom=a.languages.xml;a.languages.rss=a.languages.xml;(function(t){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var b=t.languages.markup;b&&(b.tag.addInlined("style","css"),b.tag.addAttribute("style","css"))})(a);a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}});a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));a.languages.js=a.languages.javascript;a.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:a.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:true|false)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/[A-Z]\w*Input(?=!?.*$)/m,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/};a.hooks.add("after-tokenize",function(c){if(c.language!=="graphql")return;var b=c.tokens.filter(function(h){return typeof h!="string"&&h.type!=="comment"&&h.type!=="scalar"}),m=0;function y(h){return b[m+h]}function o(h,n){n=n||0;for(var e=0;e<h.length;e++){var r=y(e+n);if(!r||r.type!==h[e])return!1}return!0}function F(h,n){for(var e=1,r=m;r<b.length;r++){var i=b[r],s=i.content;if(i.type==="punctuation"&&typeof s=="string"){if(h.test(s))e++;else if(n.test(s)&&(e--,e===0))return r}}return-1}function _(h,n){var e=h.alias;e?Array.isArray(e)||(h.alias=e=[e]):h.alias=e=[],e.push(n)}for(;m<b.length;){var v=b[m++];if(v.type==="keyword"&&v.content==="mutation"){var w=[];if(o(["definition-mutation","punctuation"])&&y(1).content==="("){m+=2;var p=F(/^\($/,/^\)$/);if(p===-1)continue;for(;m<p;m++){var d=y(0);d.type==="variable"&&(_(d,"variable-input"),w.push(d.content))}m=p+1}if(o(["punctuation","property-query"])&&y(0).content==="{"&&(m++,_(y(0),"property-mutation"),w.length>0)){var l=F(/^\{$/,/^\}$/);if(l===-1)continue;for(var u=m;u<l;u++){var k=b[u];k.type==="variable"&&w.indexOf(k.content)>=0&&_(k,"variable-input")}}}}});a.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};a.languages.webmanifest=a.languages.json;(function(t){var c=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;t.languages.json5=t.languages.extend("json",{property:[{pattern:RegExp(c.source+"(?=\\s*:)"),greedy:!0},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,alias:"unquoted"}],string:{pattern:c,greedy:!0},number:/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/})})(a);(function(t){var c=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function b(p){return p=p.replace(/<inner>/g,function(){return c}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+p+")")}var m=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,y=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return m}),o=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;t.languages.markdown=t.languages.extend("markup",{}),t.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"font-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:t.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+y+o+"(?:"+y+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+y+o+")(?:"+y+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(m),inside:t.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+y+")"+o+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+y+"$"),inside:{"table-header":{pattern:RegExp(m),alias:"important",inside:t.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:b(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:b(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:b(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:b(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(p){["url","bold","italic","strike","code-snippet"].forEach(function(d){p!==d&&(t.languages.markdown[p].inside.content.inside[d]=t.languages.markdown[d])})}),t.hooks.add("after-tokenize",function(p){if(p.language!=="markdown"&&p.language!=="md")return;function d(l){if(!(!l||typeof l=="string"))for(var u=0,k=l.length;u<k;u++){var h=l[u];if(h.type!=="code"){d(h.content);continue}var n=h.content[1],e=h.content[3];if(n&&e&&n.type==="code-language"&&e.type==="code-block"&&typeof n.content=="string"){var r=n.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");r=(/[a-z][\w-]*/i.exec(r)||[""])[0].toLowerCase();var i="language-"+r;e.alias?typeof e.alias=="string"?e.alias=[e.alias,i]:e.alias.push(i):e.alias=[i]}}}d(p.tokens)}),t.hooks.add("wrap",function(p){if(p.type==="code-block"){for(var d="",l=0,u=p.classes.length;l<u;l++){var k=p.classes[l],h=/language-(.+)/.exec(k);if(h){d=h[1];break}}var n=t.languages[d];if(n)p.content=t.highlight(w(p.content),n,d);else if(d&&d!=="none"&&t.plugins.autoloader){var e="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);p.attributes.id=e,t.plugins.autoloader.loadLanguages(d,function(){var r=document.getElementById(e);r&&(r.innerHTML=t.highlight(r.textContent,t.languages[d],d))})}}});var F=RegExp(t.languages.markup.tag.pattern.source,"gi"),_={amp:"&",lt:"<",gt:">",quot:'"'},v=String.fromCodePoint||String.fromCharCode;function w(p){var d=p.replace(F,"");return d=d.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(l,u){if(u=u.toLowerCase(),u[0]==="#"){var k;return u[1]==="x"?k=parseInt(u.slice(2),16):k=Number(u.slice(1)),v(k)}else{var h=_[u];return h||l}}),d}t.languages.md=t.languages.markdown})(a);(function(t){var c=t.util.clone(t.languages.javascript),b=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,m=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,y=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(v,w){return v=v.replace(/<S>/g,function(){return b}).replace(/<BRACES>/g,function(){return m}).replace(/<SPREAD>/g,function(){return y}),RegExp(v,w)}y=o(y).source,t.languages.jsx=t.languages.extend("markup",c),t.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=c.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var F=function(v){return v?typeof v=="string"?v:typeof v.content=="string"?v.content:v.content.map(F).join(""):""},_=function(v){for(var w=[],p=0;p<v.length;p++){var d=v[p],l=!1;if(typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?w.length>0&&w[w.length-1].tagName===F(d.content[0].content[1])&&w.pop():d.content[d.content.length-1].content==="/>"||w.push({tagName:F(d.content[0].content[1]),openedBraces:0}):w.length>0&&d.type==="punctuation"&&d.content==="{"?w[w.length-1].openedBraces++:w.length>0&&w[w.length-1].openedBraces>0&&d.type==="punctuation"&&d.content==="}"?w[w.length-1].openedBraces--:l=!0),(l||typeof d=="string")&&w.length>0&&w[w.length-1].openedBraces===0){var u=F(d);p<v.length-1&&(typeof v[p+1]=="string"||v[p+1].type==="plain-text")&&(u+=F(v[p+1]),v.splice(p+1,1)),p>0&&(typeof v[p-1]=="string"||v[p-1].type==="plain-text")&&(u=F(v[p-1])+u,v.splice(p-1,1),p--),v[p]=new t.Token("plain-text",u,null,u)}d.content&&typeof d.content!="string"&&_(d.content)}};t.hooks.add("after-tokenize",function(v){v.language!=="jsx"&&v.language!=="tsx"||_(v.tokens)})})(a);(function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter;var c=t.languages.extend("typescript",{});delete c["class-name"],t.languages.typescript["class-name"].inside=c,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:c}}}}),t.languages.ts=t.languages.typescript})(a);(function(t){var c=t.util.clone(t.languages.typescript);t.languages.tsx=t.languages.extend("jsx",c);var b=t.languages.tsx.tag;b.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+b.pattern.source+")",b.pattern.flags),b.lookbehind=!0})(a);(function(t){function c(o,F){t.languages[o]&&t.languages.insertBefore(o,"comment",{"doc-comment":F})}var b=t.languages.markup.tag,m={pattern:/\/\/\/.*/,greedy:!0,alias:"comment",inside:{tag:b}},y={pattern:/'''.*/,greedy:!0,alias:"comment",inside:{tag:b}};c("csharp",m),c("fsharp",m),c("vbnet",y)})(a);(function(){if(typeof a>"u"||typeof document>"u"||!document.querySelector)return;var t="line-numbers",c="linkable-line-numbers";function b(l,u){return Array.prototype.slice.call((u||document).querySelectorAll(l))}function m(l,u){return l.classList.contains(u)}function y(l){l()}var o=function(){var l;return function(){if(typeof l>"u"){var u=document.createElement("div");u.style.fontSize="13px",u.style.lineHeight="1.5",u.style.padding="0",u.style.border="0",u.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(u),l=u.offsetHeight===38,document.body.removeChild(u)}return l}}();function F(l,u){var k=getComputedStyle(l),h=getComputedStyle(u);function n(e){return+e.substr(0,e.length-2)}return u.offsetTop+n(h.borderTopWidth)+n(h.paddingTop)-n(k.paddingTop)}function _(l){return!l||!/pre/i.test(l.nodeName)?!1:!!(l.hasAttribute("data-line")||l.id&&a.util.isActive(l,c))}var v=!0;function w(l,u,k){u=typeof u=="string"?u:l.getAttribute("data-line")||"";var h=u.replace(/\s+/g,"").split(",").filter(Boolean),n=+l.getAttribute("data-line-offset")||0,e=o()?parseInt:parseFloat,r=e(getComputedStyle(l).lineHeight),i=a.util.isActive(l,t),s=l.querySelector("code"),g=i?l:s||l,x=[],f=!s||g==s?0:F(l,s);h.forEach(function(C){var M=C.split("-"),z=+M[0],L=+M[1]||z,E=l.querySelector('.line-highlight[data-range="'+C+'"]')||document.createElement("div");if(x.push(function(){E.setAttribute("aria-hidden","true"),E.setAttribute("data-range",C),E.className=(k||"")+" line-highlight"}),i&&a.plugins.lineNumbers){var O=a.plugins.lineNumbers.getLine(l,z),A=a.plugins.lineNumbers.getLine(l,L);if(O){var j=O.offsetTop+f+"px";x.push(function(){E.style.top=j})}if(A){var T=A.offsetTop-O.offsetTop+A.offsetHeight+"px";x.push(function(){E.style.height=T})}}else x.push(function(){E.setAttribute("data-start",String(z)),L>z&&E.setAttribute("data-end",String(L)),E.style.top=(z-n-1)*r+f+"px",E.textContent=new Array(L-z+2).join(` 
`)});x.push(function(){g.appendChild(E)})});var $=l.id;if(i&&a.util.isActive(l,c)&&$){m(l,c)||x.push(function(){l.classList.add(c)});var S=parseInt(l.getAttribute("data-start")||"1");b(".line-numbers-rows > span",l).forEach(function(C,M){var z=M+S;C.onclick=function(){var L=$+"."+z;v=!1,location.hash=L,setTimeout(function(){v=!0},1)}})}return function(){x.forEach(y)}}function p(){var l=location.hash.slice(1);b(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var u=(l.match(/\.([\d,-]+)$/)||[,""])[1];if(!(!u||document.getElementById(l))){var k=l.slice(0,l.lastIndexOf(".")),h=document.getElementById(k);if(h){h.hasAttribute("data-line")||h.setAttribute("data-line","");var n=w(h,u,"temporary ");n(),v&&document.querySelector(".temporary.line-highlight").scrollIntoView()}}}var d=0;a.hooks.add("before-sanity-check",function(l){var u=l.element.parentElement;if(_(u)){var k=0;b(".line-highlight",u).forEach(function(h){k+=h.textContent.length,h.parentNode.removeChild(h)}),k&&/^(?: \n)+$/.test(l.code.slice(-k))&&(l.code=l.code.slice(0,-k))}}),a.hooks.add("complete",function l(u){var k=u.element.parentElement;if(_(k)){clearTimeout(d);var h=a.plugins.lineNumbers,n=u.plugins&&u.plugins.lineNumbers;if(m(k,t)&&h&&!n)a.hooks.add("line-numbers",l);else{var e=w(k);e(),d=setTimeout(p,1)}}}),window.addEventListener("hashchange",p),window.addEventListener("resize",function(){var l=b("pre").filter(_).map(function(u){return w(u)});l.forEach(y)})})();const ue=ne`
/* Apply component specific CSS */
:host{
  display:block;
  border-radius:0.25rem;
}

code[class*='language-'],
pre[class*='language-']{
  color:#ccc;
  background:none;
  font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size:1em;
  text-align:left;
  white-space:pre;
  word-spacing:normal;
  word-break:normal;
  word-wrap:normal;
  line-height:1.5;
  tab-size:4;

  -webkit-hyphens:none;
  hyphens:none;
}

pre[class*='language-']{
  padding:0 1rem;
  margin:0 0;
  overflow:auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-']{
  background:#2d2d2d;
  border-radius:5px;
}

:not(pre) > code[class*='language-']{
  padding:0.1em;
  border-radius:0.3em;
  white-space:normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata{
  color:#999;
}

.token.punctuation{
  color:#ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted{
  color:#e2777a;
}

.token.function-name{
  color:#6196cc;
}

.token.boolean,
.token.number,
.token.function{
  color:#f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol{
  color:#f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin{
  color:#cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable{
  color:#7ec699;
}

.token.operator,
.token.entity,
.token.url{
  color:#67cdcc;
}

.token.important,
.token.bold{
  font-weight:bold;
}

.token.italic{
  font-style:italic;
}

.token.entity{
  cursor:help;
}

.token.inserted{
  color:green;
}

pre[data-line]{
  position:relative;
  padding:1em 0 1em 3em;
}

.line-highlight{
  position:absolute;
  left:0;
  right:0;
  padding:inherit 0;
  margin-top:1em;
  background:linear-gradient(
    to right,
    hsla(24, 20%, 50%, 0.1) 70%,
    hsla(24, 20%, 50%, 0)
  );

  pointer-events:none;

  line-height:inherit;
  white-space:pre;
}

@media print{
  .line-highlight{
    -webkit-print-color-adjust:exact;
    color-adjust:exact;
  }
}

.line-highlight:before,
.line-highlight[data-end]:after{
  content:attr(data-start);
  position:absolute;
  top:0.4em;
  left:0.6em;
  min-width:1em;
  padding:0 0.5em;
  background-color:hsla(24, 20%, 50%, 0.4);
  color:hsl(24, 20%, 95%);
  font:bold 65%/1.5 sans-serif;
  text-align:center;
  vertical-align:0.3em;
  border-radius:999px;
  text-shadow:none;
  box-shadow:0 1px white;
}

.line-highlight[data-end]:after{
  content:attr(data-end);
  top:auto;
  bottom:0.4em;
}

.line-numbers .line-highlight:before,
.line-numbers .line-highlight:after{
  content:none;
}

pre[id].linkable-line-numbers span.line-numbers-rows{
  pointer-events:all;
}

pre[id].linkable-line-numbers span.line-numbers-rows > span:before{
  cursor:pointer;
}

pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before{
  background-color:rgba(128, 128, 128, 0.2);
}

pre[class*='language-'].line-numbers{
  position:relative;
  padding-left:3.8em;
  counter-reset:linenumber;
}

pre[class*='language-'].line-numbers > code{
  position:relative;
  white-space:inherit;
}

.line-numbers .line-numbers-rows{
  position:absolute;
  pointer-events:none;
  top:-0.13em;
  left:-3.8em;
  width:3em;
  border-right:1px solid #999;

  -webkit-user-select:none;
  user-select:none;
}

.line-numbers-rows > span{
  pointer-events:none;
  display:block;
  counter-increment:linenumber;
}

.line-numbers-rows > span::before{
  content:counter(linenumber);
  color:#999;
  display:block;
  padding-right:0.8em;
  text-align:right;
}

#copy-button{
  padding:4px;
  position:absolute;
  top:5px;
  right:5px;
}

.wrapper{
  display:flex;
  flex-direction:column;
}
`;var ce=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,R=(t,c,b,m)=>{for(var y=m>1?void 0:m?ge(c,b):c,o=t.length-1,F;o>=0;o--)(F=t[o])&&(y=(m?F(c,b,y):F(y))||y);return m&&y&&ce(c,b,y),y};let D=class extends ie{constructor(){super(...arguments),this.code="<p>Hello World</p>",this.language="typescript",this.formatCode=()=>this.language.toLowerCase()==="jsx"||this.language.toLowerCase()==="html"?this.innerHTML:this.textContent,this.prismCodeLookup=()=>{let t="";switch(this.language){case"css":t=a.highlight(this.code,a.languages.css,"css");break;case"graphql":t=a.highlight(this.code,a.languages.graphql,"graphql");break;case"html":t=a.highlight(this.code,a.languages.html,"html");break;case"javascript":t=a.highlight(this.code,a.languages.javascript,"javascript");break;case"json":t=a.highlight(this.code,a.languages.json,"json");break;case"markdown":t=a.highlight(this.code,a.languages.markdown,"markdown");break;case"jsx":t=a.highlight(this.code,a.languages.jsx,"jsx");break;case"tsx":t=a.highlight(this.code,a.languages.tsx,"tsx");break;case"svg":t=a.highlight(this.code,a.languages.svg,"svg");break;case"typescript":t=a.highlight(this.code,a.languages.typescript,"typescript");break;case"xml":t=a.highlight(this.code,a.languages.xml,"xml");break}return t}}connectedCallback(){super.connectedCallback()}render(){const t=this.lineNumbers?"line-numbers":"",c=`language-${this.language.toLowerCase()}`;return this.code=this.formatCode(),ae`
      <pre class="${t} ${c}" id="pre">
        <code id="code" class="${c}">
          ${oe(this.prismCodeLookup())}
        </code>
      </pre>
    `}};D.styles=[ue];R([V("slot")],D.prototype,"codeSlot",2);R([V("#code-block-template")],D.prototype,"template",2);R([J({})],D.prototype,"code",2);R([J({type:Boolean,attribute:"line-numbers"})],D.prototype,"lineNumbers",2);R([J()],D.prototype,"language",2);D=R([se("outline-code-block")],D);function Q(t){const c=Object.assign({h1:"h1",blockquote:"blockquote",p:"p"},P(),t.components);return B.jsxs(B.Fragment,{children:[B.jsx(re,{title:"Documentation/Welcome",parameters:{viewMode:"docs",previewTabs:{canvas:{hidden:!0}}}}),`
`,B.jsx(c.h1,{id:"welcome-to-your-design-system",children:"Welcome to your design system"}),`
`,B.jsxs(c.blockquote,{children:[`
`,B.jsx(c.p,{children:`This document serves as a landing page for your custom design system based on Outline.
It should be customized to meet the needs of an appropriate landing page for your project.`}),`
`]})]})}function je(t={}){const{wrapper:c}=Object.assign({},P(),t.components);return c?B.jsx(c,Object.assign({},t,{children:B.jsx(Q,t)})):Q(t)}export{je as default};
//# sourceMappingURL=welcome-dc01b66c.js.map
