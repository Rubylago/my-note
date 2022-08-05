"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>N});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),N=l,f=u["".concat(p,".").concat(N)]||u[N]||m[N]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={title:"[SQL] JOIN Types"},o="[SQL] JOIN Types",i={unversionedId:"sql-join",id:"sql-join",title:"[SQL] JOIN Types",description:"SQL join\u5176\u5be6\u6eff\u597d\u61c2\u7684\uff0c\u4e0b\u9762\u6709\u5716\u8aaa\uff0c\u9019\u908a\u7d00\u9304\u6700\u5e38\u7528\u7684\u5e7e\u7a2eJOIN\u3002(\u6211\u89ba\u5f97stackoverflow\u4e0a\u89e3\u91cb\u7684\u82f1\u6587\u5beb\u5f97\u6bd4\u4e2d\u6587\u597d\u61c2)",source:"@site/docs/sql-join.md",sourceDirName:".",slug:"/sql-join",permalink:"/my-note/docs/sql-join",draft:!1,tags:[],version:"current",frontMatter:{title:"[SQL] JOIN Types"},sidebar:"defaultSidebar",previous:{title:"\u6b63\u5247\u8868\u9054\u5f0f RegExp",permalink:"/my-note/docs/regular-expression"},next:{title:"VS Code \u8a2d\u5b9a\u7b46\u8a18",permalink:"/my-note/docs/vscode-note/vscode-note"}},p={},c=[{value:"\u57fa\u672c\u8a9e\u6cd5",id:"\u57fa\u672c\u8a9e\u6cd5",level:2},{value:"(INNER) JOIN",id:"inner-join",level:2},{value:"LEFT (OUTER) JOIN",id:"left-outer-join",level:2},{value:"RIGHT (OUTER) JOIN",id:"right-outer-join",level:2},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2},{value:"\u53c3\u8003\u8cc7\u6599 \u8207 \u5ef6\u4f38\u95b1\u8b80",id:"\u53c3\u8003\u8cc7\u6599-\u8207-\u5ef6\u4f38\u95b1\u8b80",level:3}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sql-join-types"},"[SQL]"," JOIN Types"),(0,l.kt)("p",null,"SQL join\u5176\u5be6\u6eff\u597d\u61c2\u7684\uff0c\u4e0b\u9762\u6709\u5716\u8aaa\uff0c\u9019\u908a\u7d00\u9304\u6700\u5e38\u7528\u7684\u5e7e\u7a2eJOIN\u3002(\u6211\u89ba\u5f97",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/30358982/sql-server-replaces-left-join-for-left-outer-join-in-view-query"},"stackoverflow"),"\u4e0a\u89e3\u91cb\u7684\u82f1\u6587\u5beb\u5f97\u6bd4\u4e2d\u6587\u597d\u61c2)"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.stack.imgur.com/ObDyr.png",alt:"SQL JOIN"})),(0,l.kt)("h2",{id:"\u57fa\u672c\u8a9e\u6cd5"},"\u57fa\u672c\u8a9e\u6cd5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SQL JOIN \u7cfb\u5217\u7528\u4f86\u6bd4\u8f03\u5169\u5f35\u8868\uff0c\u53ef\u4ee5\u642d\u914d\u4e0a\u9762\u7684\u5716\u89e3\u4e00\u8d77\u770b\u3002")),(0,l.kt)("p",null,"\u7528 FROM \u8ddf JOIN \u628a\u5169\u500b\u8cc7\u6599\u8868\u95dc\u806f\u8d77\u4f86\uff0c\u4f7f\u7528 ON \u5f8c\u9762\u7684\u689d\u4ef6\u8aaa\u660e\u662f\u7528\u4ec0\u9ebc\u95dc\u4fc2\u4f86\u95dc\u806f :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT \u8981\u986f\u793a\u7684\u8cc7\u6599\u6b04\u4f4d \nFROM \u4e3b\u8981\u8868\u55ae\nJOIN \u88ab\u95dc\u806f\u8868\u55ae \nON \u5169\u8005\u95dc\u9023\u7684\u689d\u4ef6\n")),(0,l.kt)("h2",{id:"inner-join"},"(INNER) JOIN"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.w3schools.com/sql/img_innerjoin.gif",alt:"JOIN"}),"  "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"INNER JOIN aka JOIN \u5169\u500b\u90fd\u53ef\u4ee5\uff0c\u610f\u601d\u4e00\u6a23\uff0c\u4e0b\u9762\u7684OUTER JOIN\u4e5f\u662f")),(0,l.kt)("p",null,"only where both tables match.",(0,l.kt)("br",{parentName:"p"}),"\n","\u53ea\u5217\u51fa\u5169\u5f35\u8868\u6709\u4ea4\u96c6\u7684\u8cc7\u6599\u5217"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT table_column1, table_column2...\nFROM table_name1\nINNER JOIN table_name2 \nON table_name1.column_name=table_name2.column_name;\n")),(0,l.kt)("h2",{id:"left-outer-join"},"LEFT (OUTER) JOIN"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.w3schools.com/sql/img_leftjoin.gif",alt:"LEFT JOIN"}),(0,l.kt)("br",{parentName:"p"}),"\n","Returns all records from the left table, and the matched records from the right table.",(0,l.kt)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u5de6\u8868\u4e2d\u7684\u6240\u6709\u8cc7\u6599\u5217\uff0c\u4ee5\u53ca\u53f3\u8868\u4e2d\u80fd\u5920\u5339\u914d\u7684\u5217\uff0c\u6709\u7a7a\u503c\u6703\u986f\u793aNULL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT table_column1, table_column2...\nFROM table_name1\nLEFT JOIN table_name2 \nON table_name1.column_name=table_name2.column_name;\n")),(0,l.kt)("h2",{id:"right-outer-join"},"RIGHT (OUTER) JOIN"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://www.w3schools.com/sql/img_rightjoin.gif",alt:"RIGHT JOIN"}),(0,l.kt)("br",{parentName:"p"}),"\n","Returns all records from the right table, and the matched records from the left table.",(0,l.kt)("br",{parentName:"p"}),"\n","\u8fd4\u56de\u53f3\u8868\u4e2d\u7684\u6240\u6709\u8cc7\u6599\u5217\uff0c\u4ee5\u53ca\u5de6\u8868\u4e2d\u80fd\u5920\u5339\u914d\u7684\u5217\uff0c\u6709\u7a7a\u503c\u6703\u986f\u793aNULL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT table_column1, table_column2\xb7\xb7\xb7\nFROM table_name1\nRIGHT JOIN table_name2 \nON table_name1.column_name=table_name2.column_name;\n")),(0,l.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,l.kt)("p",null,"\u57fa\u672c\u4e0a\u4e3b\u8981\u8868\u55ae\u5c31\u662f\u6703\u88ab",(0,l.kt)("strong",{parentName:"p"},"\u5168\u8868\u904d\u6b77\u4e00\u8f2a"),"\u7684\u8868\u55ae\uff0c\u4f9d\u64da\u60f3\u8981\u95dc\u806f\u7684\u689d\u4ef6\uff0c\u5728\u4e3b\u8981\u8868\u55ae\u7684\u5f8c\u9762\u63a5\u4e0a\u88ab\u95dc\u806f\u8868\u55ae\u7684\u5167\u5bb9\uff0c\u5c31\u7b97\u88ab\u95dc\u806f\u8868\u55ae\u6c92\u6709\u7b26\u5408\u4e5f\u6703\u4ee5NULL\u7684\u65b9\u5f0f\u986f\u793a\u3002  "),(0,l.kt)("p",null,"\u4ee5LEFT JOIN\u8209\u4f8b\uff0c\u62c6\u958b\u4f86\u6b65\u9a5f\u5c31\u50cf\u662f:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f9e A \u8868\u770b\u7b2c\u4e00\u884c\u5167\u5bb9\u4e2d\u7684 a \u6b04\u4f4d\u5167\u5bb9"),(0,l.kt)("li",{parentName:"ol"},"\u5f9e B \u8868\u627e\u5230\u6eff\u8db3\u95dc\u806f\u689d\u4ef6\u7684\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u628a B \u8868\u4e2d\u6eff\u8db3\u689d\u4ef6\u7684\u884c\u8ddf A \u8868 a \u6b04\u4f4d\u5408\u6210\u540c\u4e00\u884c\uff0c\u5982\u679c B \u8868\u4e2d\u6c92\u6709\u6eff\u8db3\u689d\u4ef6\u7684\u884c\uff0c\u5c31\u586bNULL"),(0,l.kt)("li",{parentName:"ol"},"\u7e7c\u7e8c\u770b A \u8868\u7b2c\u4e8c\u884c\uff0c\u91cd\u8907\u4e00\u76f4\u5230 A \u8868\u90fd\u770b\u5b8c  ")),(0,l.kt)("p",null,"\u56e0\u70ba A \u8868\u6bcf\u4e00\u884c\u90fd\u6703\u88ab\u6383\u904e\u4e00\u6b21\uff0c\u6240\u4ee5\u901a\u5e38\u6703\u9078\u6bd4\u8f03\u5c0f\u7684\u90a3\u500b\u8868\u55ae\u4f86\u7576\u4e3b\u8981\u8868\u55ae",(0,l.kt)("del",{parentName:"p"},"\u7562\u7adf\u8981\u88ab\u8f2a\u4e00\u904d"),"\uff0c\u5f9e\u5c0f\u4e00\u9ede\u7684\u958b\u59cb\u6bd4\u8f03\u5feb\u3002  "),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"\u53c3\u8003\u8cc7\u6599-\u8207-\u5ef6\u4f38\u95b1\u8b80"},"\u53c3\u8003\u8cc7\u6599 \u8207 \u5ef6\u4f38\u95b1\u8b80"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.w3schools.com/sql/sql_join.asp"},"w3schools")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/30358982/sql-server-replaces-left-join-for-left-outer-join-in-view-query"},"SQL Server replaces LEFT JOIN for LEFT OUTER JOIN in view query")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.fooish.com/sql/join.html"},"JOIN \u9023\u63a5 (SQL JOIN)"))))}m.isMDXComponent=!0}}]);