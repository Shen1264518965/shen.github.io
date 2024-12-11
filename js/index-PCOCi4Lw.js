import{_ as M,i as v,j as N,c as n,g as c,w as l,f as r,d as t,t as d,F as u,k as m,l as V,a as $,E as F,m as q,o,n as x,h as f,p as H}from"./index-Cub4thmZ.js";import{u as O}from"./config-SibOWegK.js";import{l as R}from"./lodash-UX7hK06f.js";const S=["src"],T={class:"home-about-us"},W={class:"home-about-us-content"},A={class:"home-about-us-title"},G={class:"margin-top-40 home-about-us-info"},I={class:"home-about-us-detail"},J=["src"],K={class:"margin-left-15 home-about-us-detail_right"},P={class:"margin-top-10"},Q={class:"home-product-display"},X={class:"home-product-display-content"},Y={class:"home-product-display-list"},Z=["onClick"],tt=["src"],st={class:"home-product-display-list-item_name"},et=["src"],ot={class:"home-news-trends font-center"},it={class:"home-news-trends-content"},nt={class:"home-news-trends-list"},lt=["src"],at={class:"font-left home-news-trends-list-item_info"},rt=["onClick"],dt={class:"home-news-trends-list-item_info-text"},ct={class:"home-news-trends-list-item_info-time"},ut={class:"font-center home-message"},pt={class:"home-message-content"},mt=V({name:"Home"}),ht=Object.assign(mt,{setup(_t){const{isWin:k}=O(),h=$(),y=v([]),j=v([{title:"date",unit:"年",url:"/src/assets/images/h1.png",text:"公司成立"},{title:"people",unit:"人",url:"/src/assets/images/h2.png",text:"团队人数"},{title:"productionCapacity",unit:"台",url:"/src/assets/images/h3.png",text:"全年生产量"},{title:"district",unit:"个",url:"/src/assets/images/h4.png",text:"出口地区"}]),w=v({}),b=v([]),C=v([]);N(()=>{z()});const z=async()=>{let a=[];const s=await fetch("/data/home.json").then(i=>i.json()),p=await fetch("/data/product.json").then(i=>i.json()),_=await fetch("/data/news.json").then(i=>i.json());y.value=s.carouselList,w.value=s.aboutUs,C.value=_.公司新闻.slice(0,3);for(let i in p)a=a.concat(p[i]);b.value=R.chunk(a,k?3:1)},E=a=>{h.push(`/product/detail/all/${a.id}`)},B=()=>{h.push("/aboutUs/intro")},U=()=>{h.push("/product/list")},D=a=>{h.push({path:"/news/detail/公司新闻",query:{id:a.id}})},L=()=>{h.push("/news/corporation")};return(a,s)=>{const p=H,_=F,i=q;return o(),n(u,null,[c(_,{arrow:"always",height:r(k)?"750px":"350px"},{default:l(()=>[(o(!0),n(u,null,m(r(y),e=>(o(),x(p,{class:"home-carousel",key:e},{default:l(()=>[t("img",{src:e.url,alt:"",srcset:"",style:{width:"100%",height:"100%"}},null,8,S)]),_:2},1024))),128))]),_:1},8,["height"]),t("div",T,[t("div",W,[t("div",A,[s[1]||(s[1]=t("div",{class:"home-page-title home-about-us-title_name"},"关于我们",-1)),c(i,{type:"primary",size:"large",onClick:B},{default:l(()=>s[0]||(s[0]=[f("了解更多")])),_:1})]),t("div",G,d(r(w).intro),1),t("div",I,[(o(!0),n(u,null,m(r(j),e=>(o(),n("div",{class:"home-about-us-detail-item",key:e.text},[t("div",null,[t("img",{src:e.url,alt:"",srcset:""},null,8,J)]),t("div",K,[t("div",null,[t("span",null,d(r(w)[e.title]),1),f(" "+d(e.unit),1)]),t("div",P,d(e.text),1)])]))),128))])])]),t("div",Q,[t("div",X,[s[3]||(s[3]=t("div",{class:"home-page-title home-product-display-title"},"产品展示",-1)),s[4]||(s[4]=t("div",{class:"margin-top-30 home-product-display-tip"},"高精度自动化设备研发、制造、销售与服务于一体化",-1)),c(_,{"indicator-position":"none",class:"margin-top-40",height:"430px",style:{"z-index":"1"}},{default:l(()=>[(o(!0),n(u,null,m(r(b),e=>(o(),x(p,{key:e},{default:l(()=>[t("div",Y,[(o(!0),n(u,null,m(e,g=>(o(),n("div",{class:"home-product-display-list-item",key:g.id},[t("div",{class:"home-product-display-list-item_img",onClick:gt=>E(g)},[t("img",{src:g.url,alt:""},null,8,tt)],8,Z),t("div",st,d(g.name),1)]))),128))])]),_:2},1024))),128))]),_:1}),c(i,{class:"margin-top-30",type:"primary",size:"large",onClick:U},{default:l(()=>s[2]||(s[2]=[f("了解更多")])),_:1})])]),c(_,{arrow:"always",height:"350px",style:{"z-index":"1","margin-top":"2%"}},{default:l(()=>[(o(!0),n(u,null,m(r(y),e=>(o(),x(p,{class:"home-show-carousel",key:e},{default:l(()=>[t("img",{src:e.url,alt:"",srcset:"",style:{width:"100%",height:"100%"}},null,8,et)]),_:2},1024))),128))]),_:1}),t("div",ot,[t("div",it,[s[6]||(s[6]=t("div",{class:"home-page-title home-news-trends-title"},"新闻动态",-1)),s[7]||(s[7]=t("div",{class:"margin-top-30 home-news-trends-tip"},"高精度自动化设备研发、制造、销售与服务于一体化",-1)),t("div",nt,[(o(!0),n(u,null,m(r(C),e=>(o(),n("div",{class:"home-news-trends-list-item",key:e.id},[t("img",{src:e.url,alt:"",srcset:""},null,8,lt),t("div",at,[t("div",{class:"home-news-trends-list-item_info-title",onClick:g=>D(e)},d(e.title),9,rt),t("div",dt,d(e.content),1),t("div",ct,d(e.time),1)])]))),128))]),c(i,{class:"margin-tb-40",type:"primary",size:"large",onClick:L},{default:l(()=>s[5]||(s[5]=[f("了解更多")])),_:1})])]),t("div",ut,[t("div",pt,[s[9]||(s[9]=t("div",{class:"home-message-title"},"专业的自动化设备研发、产销",-1)),s[10]||(s[10]=t("div",{class:"margin-top-20",style:{"line-height":"30px"}},"“雄厚的资本实力+强大的研发技术+完整的解决方案+优秀的品质管理+先进的生产制造流程+完善的售后服务”六位一体，全方位为您度身打造实用性自动化设备。",-1)),c(i,{class:"margin-top-30",type:"primary",size:"large"},{default:l(()=>s[8]||(s[8]=[f("立即资讯")])),_:1})])])],64)}}}),wt=M(ht,[["__scopeId","data-v-99524658"]]);export{wt as default};