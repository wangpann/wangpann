import{d as e,r as t,c as a,a as o,t as s,F as r,w as d,p as n,b as l,e as c,f as p,o as u,g as m,h as i}from"./vendor.05decbbe.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const o=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const d=new URL(e,o);if(self[t].moduleMap[d])return a(self[t].moduleMap[d]);const n=new Blob([`import * as m from '${d}';`,`${t}.moduleMap['${d}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){r(new Error(`Failed to import: ${e}`)),s(l)},onload(){a(self[t].moduleMap[d]),s(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");var v=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:t(0)})});const f=d();n("data-v-48294d8a");const g=l('<p data-v-48294d8a> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-48294d8a>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-48294d8a> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-48294d8a>Volar</a> (if using <code data-v-48294d8a>&lt;script setup&gt;</code>) </p><p data-v-48294d8a>See <code data-v-48294d8a>README.md</code> for more information.</p><p data-v-48294d8a><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-48294d8a> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-48294d8a>Vue 3 Docs</a></p>',3),h=o("p",null,[c(" Edit "),o("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1);p();const b=f(((e,t,d,n,l,c)=>(u(),a(r,null,[o("h1",null,s(e.msg),1),g,o("button",{onClick:t[1]||(t[1]=t=>e.count++)},"count is: "+s(e.count),1),h],64))));v.render=b,v.__scopeId="data-v-48294d8a";var _=e({name:"App",components:{HelloWorld:v}});const k=o("img",{alt:"Vue logo",src:"/assets/logo.03d6d6da.png"},null,-1);_.render=function(e,t,s,d,n,l){const c=m("HelloWorld");return u(),a(r,null,[k,o(c,{msg:"Hello Vue 3 + TypeScript + Vite111"})],64)},i(_).mount("#app");
