(this["webpackJsonpbts-website"]=this["webpackJsonpbts-website"]||[]).push([[0],{23:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var i=t(1),n=t.n(i),c=t(18),s=t.n(c),o=(t(23),t(16)),r=t(28),j=t(30),l=t(29),d=t(2);var m=function(e){var a=e.image,t=e.onClick,i=e.name;return Object(d.jsxs)("div",{className:"profile",onClick:t,children:[Object(d.jsx)("img",{src:a,alt:i}),Object(d.jsx)("div",{className:"profile-name",children:i})]})},u=t.p+"static/media/jh.7a5ce776.jpeg",b=t.p+"static/media/jimin.4a8af232.jpeg",p=t.p+"static/media/jin.0b573039.jpeg",O=t.p+"static/media/jk.1809d423.jpeg",g=t.p+"static/media/rm.e6a82807.jpeg",h=t.p+"static/media/suga.74d90f96.jpeg",x=t.p+"static/media/vi.207836cb.jpeg";var f=function(e){var a=e.onProfileSelected;return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"animation-container",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Quem \xe9 o seu UTT?"})}),Object(d.jsxs)("div",{className:"profile-container",children:[Object(d.jsx)(m,{onClick:a("rm"),image:g,name:"RM"}),Object(d.jsx)(m,{onClick:a("jin"),image:p,name:"Jin"}),Object(d.jsx)(m,{onClick:a("suga"),image:h,name:"Suga"}),Object(d.jsx)(m,{onClick:a("j-hope"),image:u,name:"J-Hope"}),Object(d.jsx)(m,{onClick:a("jimin"),image:b,name:"Jimin"}),Object(d.jsx)(m,{onClick:a("vi"),image:x,name:"V"}),Object(d.jsx)(m,{onClick:a("jungkook"),image:O,name:"Jungkook"})]})]})})},v={rm:{title:"Qual \xe9 o nome da \xfaltima mixtape do RM?",answer:"mono"},jin:{title:"Qual o nome da esposa do Jin?",answer:"fau"},suga:{title:"Qual a fruta preferida do Suga?",answer:"tangerina"},"j-hope":{title:"Qual m\xfasica do J-hope foi escrita no Brasil?",answer:"daydream"},jimin:{title:"Em que ano Jimin tirou a carteira de motorista?",answer:"2019"},vi:{title:"Como o Tae assina sua obras de arte/fotografias?",answer:"vante"},jungkook:{title:"Qual o ano que o Jungkook nasceu?",answer:"1997"}},k=t.p+"static/media/ingresso.974b9a9f.pdf";var C=function(e){var a=e.profile,t=v[a.toLowerCase()],n=Object(i.useState)(),c=Object(o.a)(n,2),s=c[0],r=c[1],j=Object(i.useState)(),l=Object(o.a)(j,2),m=l[0],u=l[1],b=Object(i.useState)(),p=Object(o.a)(b,2),O=p[0],g=p[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"animation-container",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:t.title})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",value:O,onChange:function(e){var a=e.target;g(a.value),r(!1)},placeholder:"Sua resposta aqui!"}),s&&Object(d.jsx)("p",{className:"error",children:"Tony Montana? Lachimolala? Tente novamente!"}),Object(d.jsx)("button",{onClick:function(){O.toLowerCase()===t.answer.toLowerCase()?(u(!0),window.location.href=k):r(!0)},children:m?"Abrindo surpresa...":"Enviar"})]})]})})};var w=function(){var e=Object(i.useState)(),a=Object(o.a)(e,2),t=a[0],n=a[1];return Object(d.jsx)("main",{children:Object(d.jsx)(r.a,{transition:{duration:1},children:Object(d.jsx)(j.a,{exitBeforeEnter:!0,children:Boolean(!t)?Object(d.jsx)(l.a.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},children:Object(d.jsx)(f,{onProfileSelected:function(e){return function(){return n(e)}}})},"profile"):Object(d.jsx)(l.a.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},children:Object(d.jsx)(C,{profile:t})},"pergunta")})})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(a){var t=a.getCLS,i=a.getFID,n=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.0980ee31.chunk.js.map