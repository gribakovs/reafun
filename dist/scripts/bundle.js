!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({8:function(e,t,n){"use strict";n.r(t);let o=(e,t)=>{t.forEach(t=>{e.appendChild(t)})},r=(e,t,n)=>{console.log(e);let r=document.createElement(e);return t.forEach(([e,t])=>r.setAttribute(e,t)),o(r,n),r},s=(e,t)=>Object.assign(e,t),i=(e,t)=>r("div",e,t),l=(e,t)=>r("span",e,t),c=(e,t)=>{let n=new Worker(e);return n.onmessage=t,n},u=(e,t)=>{e.postMessage(t)};let a=e=>new class{constructor(e){Object.entries(e).forEach(([t,n])=>{console.log(t),Object.defineProperty(this,t,{get:()=>e[t].value,set:n=>{e[t].value!=n&&(e[t].value=n,e[t].set(n))}})})}}(e),d=(e,t,n,s,i,l,d)=>{return customElements.define(e,class extends HTMLElement{constructor(){super();let e=document.createElement("style");e.textContent='@import "./assets/uikit/css/uikit-shadow.css";';let r=document.createElement("script");r.src="./assets/uikit/js/uikit.min.js";let i=document.createElement("script");i.src="./assets/uikit/js/uikit-icons.min.js";let p=document.createElement("script");p.src="./scripts/uikitloader.js";let m=this.attachShadow({mode:"open"}),f=t(m),b=a(f),g=n(b);m.appendChild(e),o(m,g),m.appendChild(r),m.appendChild(i),m.appendChild(p),console.log(m.innerHTML);let y=c(l,e=>{let t=s(e);Object.assign(b,t)});u(y,d)}}),(t,n)=>r(e,t,n)},p=e=>{return{title:{value:"title",set:t=>{e.getElementById("title").textContent=t}},description:{value:"description",set:t=>{e.getElementById("description").textContent=t}},model:{value:"model",set:t=>{e.getElementById("model").textContent=t}}}},m=e=>{return[i([["class","uk-container"]],[i([["class","uk-card uk-card-body uk-card-primary"]],[s(((e,t)=>r("h3",e,t))([["class","uk-card-title"]],[]),{textContent:"Example headline"}),s(((e,t)=>r("button",e,t))([["class","uk-button uk-button-default"],["uk-tooltip","title: Hello World"]],[]),{textContent:"Hover"})])]),i([],[l([["id","title"],["text","title"]],[]),i([],[l([["id","description"],["textContent","description"]],[]),i([["id","model"],["text","model"]],[])])])]},f=e=>{return console.log("message received from worker"),{title:e.data.title,description:e.data.description,model:JSON.stringify(e.data)}};(e=>{let t={cmd:"updateTitle",params:e,status:status},n=d("rf-app",p,m,f,0,"./scripts/homeapi.js",t);console.log(n),o(document.body,[n([],[])]),console.log(document.body.innerHTML)})({title:"my home page"})}});