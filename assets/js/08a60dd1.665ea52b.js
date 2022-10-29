/*! For license information please see 08a60dd1.665ea52b.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[961],{7870:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(5893),o=n(7294);function a({id:e,host:t,repo:a,repoId:i,category:l,categoryId:p,mapping:c,term:s,strict:u,reactionsEnabled:m,emitMetadata:f,inputPosition:d,theme:k,lang:v,loading:y}){const[b,g]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{b||(n.e(891).then(n.bind(n,2891)),g(!0))}),[]),b?(0,r.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:i,category:l,categoryid:p,mapping:c,term:s,strict:u,reactionsenabled:m,emitmetadata:f,inputposition:d,theme:k,lang:v,loading:y}):null}},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905)),a=n(7870);const i={sidebar_position:8,slug:"var-let-const",title:"[JS] var, let, const \u7684 block scope"},l="[JS] var, let, const \u7684 block scope",p={unversionedId:"var-let-const",id:"var-let-const",title:"[JS] var, let, const \u7684 block scope",description:"",source:"@site/docs/var-let-const.mdx",sourceDirName:".",slug:"/var-let-const",permalink:"/my-note/docs/var-let-const",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"var-let-const",title:"[JS] var, let, const \u7684 block scope"},sidebar:"defaultSidebar",previous:{title:"[JS] Event Loop",permalink:"/my-note/docs/Event-Loop"},next:{title:"[JS] \u6309\u503c\u9084\u662f\u6309\u5740? by value & by reference",permalink:"/my-note/docs/by-value-by-reference"}},c={},s=[{value:"\u53c3\u8003\u8cc7\u6599 \u8207 \u5ef6\u4f38\u95b1\u8b80",id:"\u53c3\u8003\u8cc7\u6599-\u8207-\u5ef6\u4f38\u95b1\u8b80",level:3}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"js-var-let-const-\u7684-block-scope"},"[JS]"," var, let, const \u7684 block scope"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u89e3\u5230\u4e00\u500bsetTimeout\u89c0\u5ff5\u984c\uff0c\u56de\u982d\u6aa2\u8996\u4e86\u4e00\u4e0b\u81ea\u5df1\u5c0dscope\u7684\u7406\u89e3  ")),(0,o.kt)("p",null,"Q: \u4e0b\u65b9console.log\u6703\u8f38\u51fa\u4ec0\u9ebc?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"for(var i = 0; i < 5; i++){\n  setTimeout(function(){\n    console.log(i);\n  },1000);\n}\n")),(0,o.kt)("p",null,"A: 55555"),(0,o.kt)("p",null,"\u70ba\u4ec0\u9ebc\u4e0d\u662f 01234 ??"),(0,o.kt)("p",null,"\u4e3b\u8981\u554f\u984c\u51fa\u5728 \u8b8a\u6578 i \u7684\u5ba3\u544a\u65b9\u5f0f: var"),(0,o.kt)("p",null,"var \u662f\u5168\u57df\u8b8a\u6578\uff0c\u5728\u6c92\u6709\u88ab\u9589\u5305\u9694\u96e2\u7684\u60c5\u6cc1\u4e0b\u662f\u53ef\u4ee5\u5411\u5916\u5f71\u97ff\u7684\u3002  "),(0,o.kt)("p",null,"\u7576setTimeout\u88ab\u653e\u5230\u5132\u5217\u4e2d\u6392\u968a\u6642\uff0cfor\u8ff4\u5708\u5167\u7684 i \u503c \u4e0d\u505c\u5730\u88abvar\u66f4\u65b0\uff0c\u4e5f\u5c31\u662f\u8aaa\u7576for\u8ff4\u5708\u90fd\u8dd1\u5b8c\u4e86\uff0c\u5132\u5217\u4e2d\u6392\u4e864\u500bsetTimeout\u7684\u6642\u5019\uff0c\u6240\u6709\u7684i\u503c\u90fd\u5df2\u7d93\u88abvar\u5168\u57df\u8b8a\u6578\u6539\u8b8a\u6210\u6700\u5f8c\u7684i\u503c\u3002"),(0,o.kt)("p",null,"\u4e5f\u5c31\u662f\u8aaa\uff0c\u6392\u7a0b\u4e0a\u96d6\u7136\u67094\u500bconsole.log(i)\uff0c\u4f46\u662f\u6bcf\u500bi\u90fd\u6703\u56e0\u70ba\u8dd1\u4e86\u4e0b\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"for(var i = 0; i < 5; i++)")," \u88ab\u9019\u884c\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"i++")," \u7d66\u8986\u84cb\u6389  "),(0,o.kt)("p",null,"\u4ee5\u81f3\u65bc\u5728\u57f7\u884c\u5230\u6700\u5f8c\u4e00\u500bfor\u7684\u6642\u5019 ",(0,o.kt)("inlineCode",{parentName:"p"},"var i = 5; i<5")," \u6b64\u6642if\u689d\u4ef6\u4e0d\u6210\u7acb \uff0c\u7a0b\u5f0f\u505c\u6b62\uff0ci\u7684\u503c\u505c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"i = 5"),"  "),(0,o.kt)("p",null,"\u65bc\u662f\u6240\u6709\u6392\u5217\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(i)")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," \u503c\u5c31\u90fd\u8b8a\u6210\u6700\u5f8c\u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},"var i = 5")," \u7684\u503c!  "),(0,o.kt)("p",null,"\u6b64\u6642if\u8ff4\u5708\u57f7\u884c\u5b8c\u7562\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," \u958b\u59cb\u57f7\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(i)"),"\uff0c\u800c\u6bcf\u4e00\u500b",(0,o.kt)("inlineCode",{parentName:"p"},"i"),"\u90fd\u662f\u5168\u57df\u8b8a\u6578\uff0c\u56e0\u6b64\u6240\u6709\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"i"),"\u90fd\u662f\u540c\u4e00\u500b\u503c\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"i = 5")," \uff0c\u65bc\u662f\u5370\u51fa 5555  "),(0,o.kt)("p",null,"\u9019\u500b\u6642\u5019\u53ea\u8981\u628avar\u6539\u6210let\u5c31\u53ef\u4ee5\u4e86\uff0c\u56e0\u70balet\u6709 ",(0,o.kt)("strong",{parentName:"p"},"block scope{}")," \u7684\u7279\u6027\uff0c\u6240\u4ee5\u5728if\u5224\u65b7\u5f0f\u5167\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"let i")," \u7684\u503c\uff0c\u6bcf\u4e00\u6b21\u90fd\u662f\u7368\u7acb\u5b58\u5728\u4e0d\u6703\u88ab\u5176\u4ed6 if \u5224\u65b7\u5f0f\u5f71\u97ff\uff0c\u81ea\u7136\u5c31\u53ef\u4ee5\u5370\u51fa 01234\u5566 \u3002"),(0,o.kt)("p",null,"\u53e6\u5916\u4e00\u7a2e\u6bd4\u8f03\u8907\u96dc(?)\u7684\u65b9\u5f0f\uff0c\u662f\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," \u7528\u9589\u5305\u5305\u8d77\u4f86\u518d\u7528 IIFE \u7acb\u5373\u8abf\u7528\uff0c\u4e5f\u53ef\u4ee5\u5370\u51fa 01234"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"for( var i = 0; i < 5; i++ ) {\n  (function(i){\n    window.setTimeout(function() {\n     console.log(i)\n   }, 1000)\n})(i)}\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599-\u8207-\u5ef6\u4f38\u95b1\u8b80"},"\u53c3\u8003\u8cc7\u6599 \u8207 \u5ef6\u4f38\u95b1\u8b80"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kuro.tw/posts/2019/02/23/%E8%AB%87%E8%AB%87-JavaScript-%E7%9A%84-setTimeout-%E8%88%87-setInterval/"},"\u8ac7\u8ac7 JavaScript \u7684 setTimeout \u8207 setInterval")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10191549"},"\u91cd\u65b0\u8a8d\u8b58 JavaScript: Day 10 \u51fd\u5f0f Functions \u7684\u57fa\u672c\u6982\u5ff5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://askie.today/differences-among-var-let-const/"},"\u5728 JavaScript \u4e2d\uff0cVar\u3001Let\u3001Const \u7684\u5dee\u7570"))),(0,o.kt)(a.Z,{id:"comments",repo:"Rubylago/my-note",repoId:"R_kgDOHo7cKQ",category:"Announcements",categoryId:"DIC_kwDOHo7cKc4CSRCM",mapping:"title",term:"Comments",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"preferred_color_scheme",lang:"zh-TW",loading:"lazy",mdxType:"Giscus"}))}m.isMDXComponent=!0},5251:(e,t,n)=>{n(7418);var r=n(7294),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,s=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)l.call(t,r)&&!p.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:s,props:a,_owner:i.current}}t.jsx=c},5893:(e,t,n)=>{e.exports=n(5251)}}]);