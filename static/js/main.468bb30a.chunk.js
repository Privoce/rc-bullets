(this["webpackJsonprc-bullets-example"]=this["webpackJsonprc-bullets-example"]||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),o=a.n(l),c=a(145),i=a(74),s=a(146),m=a(20),u=a(137),g=a(134),b=a(61),d=a(64),h=a(65),p=a(63),f=a(62);function E(e){var t=e.screen,a=Object(n.useState)(!1),l=Object(m.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)(!0),s=Object(m.a)(i,2),E=s[0],v=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("aside",{style:{position:"fixed",left:0,top:0,zIndex:999}},r.a.createElement(g.a,{title:"\u6e05\u5c4f",arrow:!0},r.a.createElement(u.a,{onClick:function(){t.clear()}},r.a.createElement(b.a,{color:"error"}))),r.a.createElement(g.a,{title:E?"\u9690\u85cf":"\u663e\u793a",arrow:!0},r.a.createElement(u.a,{onClick:function(){E?t.hide():t.show(),v(!E)}},E?r.a.createElement(f.a,{color:"secondary"}):r.a.createElement(p.a,{color:"secondary"}))),r.a.createElement(g.a,{title:o?"\u5f00\u59cb":"\u6682\u505c",arrow:!0},r.a.createElement(u.a,{onClick:function(){o?t.resume():t.pause(),c(!o)}},o?r.a.createElement(d.a,{color:"secondary"}):r.a.createElement(h.a,{color:"secondary"})))),r.a.createElement("section",{style:{height:"100vh"},className:"screen"}))}var v=a(12),j=a(2),A=a(46),O=a(28),C=a(49),w=a(144),k=a(149),y=a(148),x=a(147),z=a(150),F=a(104),X=a(139),S=a(140),D=a(143),M=a(138),B=a(69),N=a(68),R=[{title:"\u5965\u7279\u66fc",path:"assets/img/heads/aotuman.jpg"},{title:"\u718a\u5b69\u5b50",path:"assets/img/heads/bear.jpg"},{title:"\u5361\u901a\u5973\u5b69",path:"assets/img/heads/carton.girl.jpg"},{title:"\u5361\u901a\u7537\u5b69",path:"assets/img/heads/carton.jpg"},{title:"QQ\u5934\u50cf",path:"assets/img/heads/carton2.jpg"},{title:"\u732b\u54aa",path:"assets/img/heads/cat.jpg"},{title:"\u5c0f\u8001\u5f1f",path:"assets/img/heads/dog.jpg"},{title:"\u53ef\u7231",path:"assets/img/heads/girl.jpg"},{title:"\u8721\u7b14\u5c0f\u65b0",path:"assets/img/heads/xiaoxin.jpg"},{title:"\u52a8\u56fe",path:"assets/img/heads/xiongmao.jpg"},{title:"\u7f8e\u5973",path:"assets/img/heads/nv.jpg"},{title:"\u6c14\u8d28\u7f8e\u5973",path:"assets/img/heads/nv2.jpg"},{title:"\u52a8\u56fe",path:"assets/img/heads/xiongmao.gif"}],q={yingbai:{title:"\u83b9\u767d",color:"rgb(22,22,2)",bgColor:"rgba(227,249,253,.8)"},chabai:{title:"\u8336\u767d",color:"rgb(22,22,2)",bgColor:"rgba(243,249,241,.8)"},weilan:{title:"\u851a\u84dd",color:"rgb(22,22,2)",bgColor:"rgba(112,243,255,.9)"},zise:{title:"\u7d2b\u8272",color:"rgb(233, 241, 246)",bgColor:"rgba(141,75,187,.8)"},fense:{title:"\u7c89\u8272",color:"rgb(22,22,2)",bgColor:"rgba(255,179,167,.8)"},yanzhi:{title:"\u80ed\u8102\u8272",color:"rgb(233, 241, 246)",bgColor:"rgba(157,41,51,.8)"},tong:{title:"\u5f64\u8272",color:"rgb(233, 241, 246)",bgColor:"rgba(243,83,54,.8)"},yanhong:{title:"\u6bb7\u7ea2",color:"rgb(233, 241, 246)",bgColor:"rgba(190,0,47,.8)"}},Q=function(){var e=Object.keys(q);return e[Math.floor(Math.random()*e.length)]},P={linear:{title:"\u5300\u901f"},ease:{title:"\u6162-\u5feb-\u6162"},"ease-out":{title:"\u5feb-\u6162"},"ease-in":{title:"\u6162-\u5feb"},"cubic-bezier(0.2,0.4,0.8,2)":{title:"cubic-bezier"},"steps(10, end)":{title:"\u6b65\u8fdb"}},J=function(){var e=Object.keys(P);return e[Math.floor(Math.random()*e.length)]},H=function(){return R[Math.floor(Math.random()*R.length)].path};function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(){var e=Object(A.a)(["\n  .opts {\n    z-index: 999;\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n    left: 0;\n    background: rgba(2, 2, 2, 0.2);\n    padding: 1rem 0;\n  }\n"]);return L=function(){return e},e}var V=Object(M.a)((function(e){return{root:{padding:e.spacing(3,2),marginBottom:e.spacing(3)}}})),G=O.default.section(L());function W(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(m.a)(o,2),i=c[0],s=c[1],b=Object(n.useState)("random"),d=Object(m.a)(b,2),h=d[0],p=d[1],f=Object(n.useState)("random"),A=Object(m.a)(f,2),O=A[0],M=A[1],L=Object(n.useState)(20),W=Object(m.a)(L,2),Y=W[0],K=W[1],T=Object(n.useState)("random"),U=Object(m.a)(T,2),Z=U[0],$=U[1],_=Object(n.useState)(!1),ee=Object(m.a)(_,2),te=ee[0],ae=ee[1],ne=Object(n.useRef)(null),re=V();Object(n.useEffect)((function(){var e=new C.b(".screen");l(e)}),[]);return r.a.createElement(G,null,r.a.createElement(E,{screen:a}),r.a.createElement("div",{className:"opts"},r.a.createElement(F.a,{anchorEl:ne.current,open:te,placement:"top-start"},r.a.createElement(X.a,{className:re.root},r.a.createElement(S.a,{direction:"column",container:!0,spacing:1},r.a.createElement(S.a,{item:!0},r.a.createElement(k.a,{shrink:!0,id:"img-label"},"\u5934\u50cf"),r.a.createElement(x.a,{labelId:"img-label",value:Z,onChange:function(e){var t=e.target.value;console.log({value:t}),$(t)}},r.a.createElement(z.a,{value:"random"},r.a.createElement("em",null,"\u968f\u673a")),R.map((function(e){var t=e.title,a=e.path;return r.a.createElement(z.a,{key:a,value:a},r.a.createElement(D.a,{src:a,alt:t}))})))),r.a.createElement(S.a,{item:!0},r.a.createElement(k.a,{shrink:!0,id:"theme-label"},"\u4e3b\u9898\u8272"),r.a.createElement(x.a,{labelId:"theme-label",value:h,onChange:function(e){var t=e.target.value;console.log({value:t}),p(t)}},r.a.createElement(z.a,{value:"random"},r.a.createElement("em",null,"\u968f\u673a")),Object.keys(q).map((function(e){return r.a.createElement(z.a,{key:e,value:e},r.a.createElement("span",{style:{width:"100%",padding:".2rem",fontSize:".6rem",color:q[e].color,background:q[e].bgColor},title:q[e].title},q[e].title))})))),r.a.createElement(S.a,{item:!0},r.a.createElement(k.a,{shrink:!0,id:"animate-fun-label"},"\u8fd0\u52a8\u51fd\u6570"),r.a.createElement(x.a,{labelId:"animate-fun",value:O,onChange:function(e){var t=e.target.value;console.log({value:t}),M(t)}},r.a.createElement(z.a,{value:"random"},r.a.createElement("em",null,"\u968f\u673a")),Object.keys(P).map((function(e){return r.a.createElement(z.a,{key:e,value:e},P[e].title)})))),r.a.createElement(S.a,{item:!0},r.a.createElement(y.a,{label:"\u65f6\u957f/\u79d2",type:"number",value:Y,onChange:function(e){var t=e.target.value;console.log({value:t}),K(t)}}))))),r.a.createElement(S.a,{container:!0,spacing:2,alignItems:"center",justify:"center"},r.a.createElement(S.a,{item:!0},r.a.createElement(g.a,{placement:"left",title:te?"\u5173\u95ed\u8bbe\u7f6e":"\u8bbe\u7f6e",arrow:!0},r.a.createElement(u.a,{ref:ne,onClick:function(){ae((function(e){return!e}))}},te?r.a.createElement(N.a,{color:"secondary"}):r.a.createElement(B.a,{color:"secondary"})))),r.a.createElement(S.a,{item:!0,xs:6},r.a.createElement(y.a,{value:i,label:"\u5f39\u5e55\u5185\u5bb9",fullWidth:!0,multiline:!0,placeholder:"\u8bf7\u8f93\u5165\u5f39\u5e55\u5185\u5bb9",variant:"outlined",onChange:function(e){var t=e.target.value;console.log(t),s(t)}})),r.a.createElement(S.a,{item:!0},r.a.createElement(w.a,{variant:"contained",color:"primary",className:"sendBtn",onClick:function(){if(console.log("current bullet",i),i){console.log("start send");var e="random"===O?J():O,t="random"===h?Q():h,n="random"===Z?H():Z,l=q[t],o=l.color,c=l.bgColor,m={animateTimeFun:e,txt:i,duration:Y,head:n,color:o,bgColor:c,ts:(new Date).getTime()};console.log({obj:m});var u=m.txt,g=m.head,b=Object(j.a)(m,["txt","head"]);a.push(r.a.createElement(C.a,{msg:u,head:g,color:o,bgColor:c}),function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach((function(t){Object(v.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},b));var d=JSON.stringify(m);console.log({newV:d}),localStorage.setItem("BULLET",d),s("")}}},"\u53d1\u9001\u5f39\u5e55")))))}var Y=a(70),K=a(27),T=function(){var e=Object(c.a)("(prefers-color-scheme: dark)"),t=r.a.useMemo((function(){return Object(i.a)({palette:{primary:{main:"#25f8cb"},secondary:{main:"#d2f0f4"},error:{main:"#dc3023"},type:e?"dark":"light"}})}),[e]);return r.a.createElement(s.a,{theme:t},r.a.createElement(Y.a,{basename:"/rc-bullets"},r.a.createElement(K.c,null,r.a.createElement(K.a,{path:"/",exact:!0,component:W}),r.a.createElement(K.a,{path:"/preview",component:E}))))},U=a(72),Z=a.n(U),$=a(73),_=a.n($);function ee(){var e=Object(A.a)(["\n  ","\n  *{\n    box-sizing:border-box;\n  }\n\n  body{\n    min-height:100vh;\n    position: relative;\n    background-image:url(",");\n    background-repeat:repeat;\n    background-color:#d1d9e0;\n  }\n  #root{\n    min-height:100vh;\n  }\n\n"]);return ee=function(){return e},e}var te=Object(O.createGlobalStyle)(ee(),Z.a,_.a);o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null),r.a.createElement(T,null)),document.getElementById("root"))},73:function(e,t){e.exports="data:image/png;base64,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"},93:function(e,t,a){e.exports=a(103)}},[[93,1,2]]]);
//# sourceMappingURL=main.468bb30a.chunk.js.map