(this["webpackJsonpweb-lab-3"]=this["webpackJsonpweb-lab-3"]||[]).push([[0],[,,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(4),i=s.n(c),r=s(2),o=(s(10),s(11),s.p+"static/media/earth.a5a9895b.svg"),l=s.p+"static/media/sun.b5368efe.svg",d=s(0),u=function(e){var t=e.onThemeChange,s=Object(n.useState)(!0),a=Object(r.a)(s,2),c=a[0],i=a[1],u=Object(n.useState)(o),m=Object(r.a)(u,2),j=m[0],h=m[1];return Object(d.jsx)("nav",{children:Object(d.jsxs)("section",{children:[Object(d.jsxs)("div",{className:"logotype",children:[Object(d.jsx)("img",{src:j,alt:"website logo"}),Object(d.jsx)("h1",{children:"Strona o planetach"})]}),Object(d.jsxs)("div",{className:"toggle",children:[Object(d.jsx)("input",{type:"checkbox",id:"1",onChange:function(e){i((function(e){return!e})),t(c),h(c?l:o)}}),Object(d.jsx)("label",{for:"1",children:Object(d.jsx)("span",{})})]})]})})},m=(s(13),s(5)),j=function(e){var t=e.color,s=e.text;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"button-".concat(t),onClick:function(e){var n=document.querySelector(".toasts-container"),a=document.createElement("div");a.classList.add("toast-".concat(t));var c=document.createElement("div");c.classList.add("toast-".concat(t,"__wrap")),c.innerHTML=s,a.appendChild(c),n.appendChild(a);var i=m.a.timeline();i.to(a,{autoAlpha:1,y:0,ease:"power4.out",duration:.7}),i.to(a,{height:0,marginBottom:0,autoAlpha:0,duration:.9,delay:3,ease:"power4.out",onComplete:function(){a.parentNode.removeChild(a)}})},children:s})})},h=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{class:"toasts-container"}),Object(d.jsx)("section",{className:"toasts",children:Object(d.jsxs)("div",{className:"toast_container",children:[Object(d.jsx)(j,{color:"green",text:"Show success"}),Object(d.jsx)(j,{color:"blue",text:"Show info"}),Object(d.jsx)(j,{color:"red",text:"Show error"})]})})]})},b=(s(14),[{name:"Merkury",src:s.p+"static/media/mercury.8ff38b32.png",size:4879},{name:"Wenus",src:s.p+"static/media/venus.d21ed132.png",size:12104},{name:"Ziemia",src:s.p+"static/media/earth.0f55f10c.png",size:12756},{name:"Mars",src:s.p+"static/media/mars.2e95bd6c.png",size:6805},{name:"Jowisz",src:s.p+"static/media/jupiter.546d06a2.png",size:142984},{name:"Saturn",src:s.p+"static/media/saturn.801f93af.png",size:120536},{name:"Uran",src:s.p+"static/media/uran.a13348f9.png",size:51118},{name:"Neptun",src:s.p+"static/media/neptune.fad3ccac.png",size:49528}]),p=function(e){var t=e.planet,s=e.onClose;return Object(d.jsx)("div",{className:"backdrop",onClick:s,children:Object(d.jsxs)("section",{className:"modal",onClick:function(e){return e.stopPropagation()},children:[Object(d.jsx)("h2",{children:t.name}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(d.jsx)("img",{src:t.src,alt:t.name}),Object(d.jsx)("button",{className:"closeButton",onClick:s,children:"Zamknij"})]})})},x=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("section",{className:"planets",children:[Object(d.jsx)("h2",{children:"Uk\u0142ad s\u0142oneczny"}),Object(d.jsx)("ul",{className:"planets-list",children:b.map((function(e){return Object(d.jsxs)("li",{onClick:function(){return a(e)},children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:e.src,alt:e.name})}),Object(d.jsx)("p",{children:e.name})]},e.name)}))})]}),s&&Object(d.jsx)(p,{planet:s,onClose:function(){return a(null)}})]})},O=s.p+"static/media/landing.228fbf25.svg",g=(s(15),function(){return Object(d.jsx)("div",{className:"landingDiv",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"fraction headings",children:[Object(d.jsx)("h1",{children:"Explore space with us!"}),Object(d.jsx)("h3",{children:"See intresting facts about outer space"}),Object(d.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),Object(d.jsx)("div",{className:"fraction",children:Object(d.jsx)("img",{src:O,alt:"hero image",className:"heroImage"})})]})})}),f=s.p+"static/media/rocket.45963100.svg",v=function(){return Object(d.jsx)("div",{className:"infoDiv",children:Object(d.jsxs)("div",{className:"container reverse",children:[Object(d.jsxs)("div",{className:"fraction headings",children:[Object(d.jsx)("h1",{children:"Let's reach the stars!"}),Object(d.jsx)("h3",{children:"Hope on for and adventure of a lifetime"}),Object(d.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]}),Object(d.jsx)("div",{className:"fraction",children:Object(d.jsx)("img",{src:f,alt:"rocket image",className:"heroImage2"})})]})})},y=(s(16),function(){return Object(d.jsx)("section",{className:"footer",children:Object(d.jsx)("div",{className:"footerContainer",children:Object(d.jsx)("p",{children:"Labolatorium 3 - SCSS @ 2021"})})})});var k=function(){var e=Object(n.useState)("theme--dark"),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){var e=document.querySelector("body");e.classList.remove("scrollbar-light"),e.classList.add("scrollbar-dark")}),[]),Object(d.jsx)("div",{className:"App ".concat(s),children:Object(d.jsxs)("div",{className:"AppContainer",children:[Object(d.jsx)(u,{onThemeChange:function(e){a(e?"theme--light":"theme--dark");var t=document.querySelector("body");"theme--dark"===s?(t.classList.remove("scrollbar-dark"),t.classList.add("scrollbar-light")):(t.classList.remove("scrollbar-light"),t.classList.add("scrollbar-dark"))}}),Object(d.jsx)(g,{}),Object(d.jsx)(x,{}),Object(d.jsx)(v,{}),Object(d.jsx)(h,{}),Object(d.jsx)(y,{})]})})};s(17);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.74527478.chunk.js.map