import{_ as f,f as p,x as g,o as v,h as _,j as a,k as c,c as e,w as o,L as x,a2 as h,aa as y,aG as V}from"./index.506b1647.js";import{V as C}from"./index.af4c56b2.js";import{V as D}from"./VImg.9f3d52b0.js";import{y as b}from"./VAvatar.0cbcd2c6.js";import{e as k,d as w,V as N}from"./VCard.6272da2c.js";import{V as P}from"./VDivider.6aa2f104.js";const n=b("flex-grow-1","div","VSpacer");const S={class:"primary-title-font title-font title-position"},j={class:"autor-font-regular"},I={class:"product-price-box mt-4 text-subtitle-1 primary-font"},B={class:"product-price mt-5 primary-font"},O={__name:"simpleCard",props:["cardData"],setup(t){const l=p(),d=g(!1),u=s=>typeof s!="number"?"Invalid Price":new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(s);function m(s){try{l.push({name:"ropaDetailPage",params:{id:s.slug}})}catch{V.error("No fue posible acceder a la p\xE1gina solicitada")}}return(s,i)=>(v(),_("div",null,[a("div",{class:"d-flex flex-column justify-center align-center",onClick:i[0]||(i[0]=r=>m(t.cardData))},[a("span",S,c(t.cardData.title||"Card title"),1),a("span",j,c(t.cardData.author||"Card author"),1),e(N,{class:"mx-auto card d-flex flex-column",image:t.cardData.image||"https://cdn.vuetifyjs.com/images/cards/docks.jpg",variant:"outlined",theme:"dark",hover:""},{image:o(()=>[e(D,{class:"card-image",src:t.cardData.image},null,8,["src"])]),default:o(()=>[e(n),e(k,{class:"card-actions"},{default:o(()=>{var r;return[e(n),a("div",I,[a("span",B,[x(" COP "),a("b",null,c(u((r=t.cardData)==null?void 0:r.price)||""),1)])])]}),_:1}),e(C,null,{default:o(()=>[h(a("div",null,[e(P),e(w,{class:"primary-font",style:{"background-color":"beige"}},{default:o(()=>{var r;return[a("span",null,c((r=t.cardData)==null?void 0:r.description),1)]}),_:1})],512),[[y,d.value]])]),_:1})]),_:1},8,["image"])])]))}};var L=f(O,[["__scopeId","data-v-5dfe3ed4"]]);export{L as g};