import{T as m}from"./47375623-Bfna0z5k.js";import{_ as f,j as o,k as w,c as r,d as e,f as c,F as p,l as g,g as h,m as k,a as C,r as x,o as l,s as N,t as B}from"./index-3JKbyJYv.js";const b={class:"news-top"},j=["src"],y={class:"news"},F={class:"page-nav"},I=["onClick"],R=k({name:"News"}),T=Object.assign(R,{setup(V){const u=o(m),i=C(),n=o("/news/corporation"),d=o([{name:"公司新闻",path:"/news/corporation"},{name:"行业动态",path:"/news/profession"},{name:"常见问题",path:"/news/partner"}]);w(()=>{n.value=i.currentRoute.value.path});const _=a=>{n.value=a.path,i.push(a.path)};return(a,s)=>{const v=x("router-view");return l(),r(p,null,[e("div",b,[e("img",{src:c(u),alt:""},null,8,j)]),e("div",y,[s[0]||(s[0]=e("div",{class:"font-center news-title"},"新闻动态",-1)),s[1]||(s[1]=e("div",{class:"font-center news-subtitle"},"高精度自动化设备研发、制造、销售与服务于一体化",-1)),e("div",F,[(l(!0),r(p,null,g(c(d),t=>(l(),r("div",{class:N({"page-active":c(n)===t.path}),key:t.name,onClick:z=>_(t)},B(t.name),11,I))),128))]),e("div",null,[h(v)])])],64)}}}),L=f(T,[["__scopeId","data-v-d47a0c6f"]]);export{L as default};