import{aD as O,p as D,m as U,l as re,g as T,n as le,q as ce,al as N,v as V,a as x,s as j,y as I,a0 as ue,c as s,u as P,H as q,P as de,I as me,C as ve,z as fe,F as B,d as S,r as E,$ as ge,J as he,R as _e,_ as Y,o as y,f as w,w as f,a2 as M,h as X,i as m,j as $,W as L,Y as pe,Z as ye}from"./index.16620330.js";import{g as be,O as J,M as xe,P as Ce,l as A,V as we,t as Ve}from"./index.4e337a5f.js";import{b as ke,V as k,c as Ie,d as Se,u as De}from"./ssrBoot.959f8312.js";import{m as Te,u as Pe}from"./lazy.c4de44d7.js";import{m as Be}from"./tag.53db6bc8.js";import{V as $e,a as je,b as Ee,c as Le,d as Ae,e as Ye}from"./VCard.c0add655.js";import{V as Me}from"./VContainer.19b0ef81.js";import{g as Xe}from"./simpleCard.cc8d7f60.js";const Re=e=>{const{touchstartX:o,touchendX:t,touchstartY:a,touchendY:i}=e,r=.5,n=16;e.offsetX=t-o,e.offsetY=i-a,Math.abs(e.offsetY)<r*Math.abs(e.offsetX)&&(e.left&&t<o-n&&e.left(e),e.right&&t>o+n&&e.right(e)),Math.abs(e.offsetX)<r*Math.abs(e.offsetY)&&(e.up&&i<a-n&&e.up(e),e.down&&i>a+n&&e.down(e))};function We(e,o){var a;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(a=o.start)==null||a.call(o,{originalEvent:e,...o})}function He(e,o){var a;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(a=o.end)==null||a.call(o,{originalEvent:e,...o}),Re(o)}function Fe(e,o){var a;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(a=o.move)==null||a.call(o,{originalEvent:e,...o})}function Ge(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>We(t,o),touchend:t=>He(t,o),touchmove:t=>Fe(t,o)}}function ze(e,o){var v,l,c;const t=o.value,a=t!=null&&t.parent?e.parentElement:e,i=(v=t==null?void 0:t.options)!=null?v:{passive:!0},r=(l=o.instance)==null?void 0:l.$.uid;if(!a||!r)return;const n=Ge(o.value);a._touchHandlers=(c=a._touchHandlers)!=null?c:Object.create(null),a._touchHandlers[r]=n,O(n).forEach(h=>{a.addEventListener(h,n[h],i)})}function Oe(e,o){var r,n;const t=(r=o.value)!=null&&r.parent?e.parentElement:e,a=(n=o.instance)==null?void 0:n.$.uid;if(!(t!=null&&t._touchHandlers)||!a)return;const i=t._touchHandlers[a];O(i).forEach(v=>{t.removeEventListener(v,i[v])}),delete t._touchHandlers[a]}const Z={mounted:ze,unmounted:Oe};var Ue=Z;const K=Symbol.for("vuetify:v-window"),Q=Symbol.for("vuetify:v-window-group"),ee=D({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...U(),...Be(),...re()},"VWindow"),G=T()({name:"VWindow",directives:{Touch:Z},props:ee(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:a}=le(e),{isRtl:i}=ce(),{t:r}=N(),n=ke(e,Q),v=V(),l=x(()=>i.value?!e.reverse:e.reverse),c=j(!1),h=x(()=>{const d=e.direction==="vertical"?"y":"x",b=(l.value?!c.value:c.value)?"-reverse":"";return`v-window-${d}${b}-transition`}),_=j(0),p=V(void 0),C=x(()=>n.items.value.findIndex(d=>n.selected.value.includes(d.id)));I(C,(d,g)=>{const b=n.items.value.length,F=b-1;b<=2?c.value=d<g:d===F&&g===0?c.value=!0:d===0&&g===F?c.value=!1:c.value=d<g}),ue(K,{transition:h,isReversed:c,transitionCount:_,transitionHeight:p,rootRef:v});const u=x(()=>e.continuous||C.value!==0),R=x(()=>e.continuous||C.value!==n.items.value.length-1);function W(){u.value&&n.prev()}function H(){R.value&&n.next()}const se=x(()=>{const d=[],g={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:n.prev,ariaLabel:r("$vuetify.carousel.prev")};d.push(u.value?t.prev?t.prev({props:g}):s(k,g,null):s("div",null,null));const b={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:n.next,ariaLabel:r("$vuetify.carousel.next")};return d.push(R.value?t.next?t.next({props:b}):s(k,b,null):s("div",null,null)),d}),ie=x(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?W():H()},right:()=>{l.value?H():W()},start:g=>{let{originalEvent:b}=g;b.stopPropagation()}},...e.touch===!0?{}:e.touch});return P(()=>q(s(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},a.value,e.class],style:e.style},{default:()=>{var d,g;return[s("div",{class:"v-window__container",style:{height:p.value}},[(d=t.default)==null?void 0:d.call(t,{group:n}),e.showArrows!==!1&&s("div",{class:"v-window__controls"},[se.value])]),(g=t.additional)==null?void 0:g.call(t,{group:n})]}}),[[de("touch"),ie.value]])),{group:n}}}),Ne=D({color:String,cycle:Boolean,delimiterIcon:{type:me,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ee({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),te=T()({name:"VCarousel",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const a=ve(e,"modelValue"),{t:i}=N(),r=V();let n=-1;I(a,l),I(()=>e.interval,l),I(()=>e.cycle,c=>{c?l():window.clearTimeout(n)}),fe(v);function v(){!e.cycle||!r.value||(n=window.setTimeout(r.value.group.next,+e.interval>0?+e.interval:6e3))}function l(){window.clearTimeout(n),window.requestAnimationFrame(v)}return P(()=>{const[c]=G.filterProps(e);return s(G,S({ref:r},c,{modelValue:a.value,"onUpdate:modelValue":h=>a.value=h,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:E(e.height)},e.style]}),{default:t.default,additional:h=>{let{group:_}=h;return s(B,null,[!e.hideDelimiters&&s("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[_.items.value.length>0&&s(be,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[_.items.value.map((p,C)=>{const u={id:`carousel-item-${p.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",C+1,_.items.value.length),class:[_.isSelected(p.id)&&"v-btn--active"],onClick:()=>_.select(p.id,!0)};return t.item?t.item({props:u,item:p}):s(k,S(p,u),null)})]})]),e.progress&&s(J,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(_.getItemIndex(a.value)+1)/_.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),ae=D({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...U(),...Ie(),...Te()},"VWindowItem"),z=T()({name:"VWindowItem",directives:{Touch:Ue},props:ae(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const a=ge(K),i=Se(e,Q),{isBooted:r}=De();if(!a||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const n=j(!1),v=x(()=>r.value&&(a.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!n.value||!a||(n.value=!1,a.transitionCount.value>0&&(a.transitionCount.value-=1,a.transitionCount.value===0&&(a.transitionHeight.value=void 0)))}function c(){var u;n.value||!a||(n.value=!0,a.transitionCount.value===0&&(a.transitionHeight.value=E((u=a.rootRef.value)==null?void 0:u.clientHeight)),a.transitionCount.value+=1)}function h(){l()}function _(u){!n.value||_e(()=>{!v.value||!n.value||!a||(a.transitionHeight.value=E(u.clientHeight))})}const p=x(()=>{const u=a.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof u!="string"?a.transition.value:u,onBeforeEnter:c,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:c,onAfterLeave:l,onLeaveCancelled:h,onEnter:_}:!1}),{hasContent:C}=Pe(e,i.isSelected);return P(()=>s(xe,{transition:p.value,disabled:!r.value},{default:()=>{var u;return[q(s("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[C.value&&((u=t.default)==null?void 0:u.call(t))]),[[he,i.isSelected.value]])]}})),{}}}),qe=D({...Ce(),...ae()},"VCarouselItem"),oe=T()({name:"VCarouselItem",inheritAttrs:!1,props:qe(),setup(e,o){let{slots:t,attrs:a}=o;P(()=>{const[i]=A.filterProps(e),[r]=z.filterProps(e);return s(z,S({class:"v-carousel-item"},r),{default:()=>[s(A,S(a,i),t)]})})}}),Je={class:"d-flex flex-row align-center carousel-box"},Ze=["src"],Ke={__name:"principalCarrousel",props:["slides","backgroundSlide"],setup(e){return(o,t)=>(y(),w("div",Je,[s(te,{cycle:"","hide-delimiters":"",class:"circular-box justify-content-start ma-0 pa-0 mx-5"},{default:f(()=>[(y(!0),w(B,null,M(e.slides,(a,i)=>(y(),X(oe,{key:i,cover:"",transition:"fade-transition"},{default:f(()=>[m("img",{src:a.src,alt:"Imagen Circular",class:"circular-image"},null,8,Ze)]),_:2},1024))),128))]),_:1})]))}};var Qe=Y(Ke,[["__scopeId","data-v-b0536838"]]);const et={class:"w-100 ma-0 pa-0"},tt={__name:"superCarrousel",props:["objectSlides"],setup(e){return(o,t)=>(y(),w("div",et,[s(te,{height:"400","show-arrows":!1,cycle:"",interval:18e3,"hide-delimiters":"",class:"ma-0 pa-0"},{default:f(()=>[(y(!0),w(B,null,M(e.objectSlides,(a,i)=>(y(),X(oe,{key:i,cover:"",src:a.backgroundSlide},{default:f(()=>[s(Qe,{slides:a.slides,backgroundSlide:a.backgroundSlide},null,8,["slides","backgroundSlide"])]),_:2},1032,["src"]))),128))]),_:1})]))}};const at={class:"card-item-box"},ot={class:"title-text primary-title-font"},nt={class:"break-word"},st={class:"me-1 autor-font-regular",style:{"font-size":"large"}},it={class:"product-price-box mt-4 text-subtitle-1 primary-font"},rt={class:"product-price mt-5 primary-font"},lt=["src"],ct={__name:"genericCard",props:["genericCardData"],setup(e){const o=e,t=V(!1);V(1);const a=()=>{t.value=!0,setTimeout(()=>t.value=!1,2e3)};(()=>{switch(o.genericCardData.category){case"libro":return"Editoriales disponibles";case"ropa":return"Tallas disponibles";case"accesorio":return"Colores disponibles";default:return"Opciones disponibles"}})();const r=n=>typeof n!="number"?"Invalid Price":new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(n);return(n,v)=>(y(),X(Me,{class:"card-box-container"},{default:f(()=>[s(A,{class:"image",src:e.genericCardData.image||"https://cdn.vuetifyjs.com/images/cards/cooking.png"},null,8,["src"]),m("div",null,[s($e,{loading:t.value,class:"mx-auto card-box elevation-5 my-6"},{loader:f(({isActive:l})=>[s(J,{active:l,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:f(()=>[s(je,null,{default:f(()=>[m("div",at,[s(Ee,{class:"max-width"},{default:f(()=>[m("div",ot,[m("span",nt,$(e.genericCardData.title||"Default Title"),1)])]),_:1}),s(Le,{class:"max-width ma-1"},{default:f(()=>[m("span",st,$(e.genericCardData.author||"Default Subtitle"),1),s(we,{color:e.genericCardData.iconColor||"error",icon:e.genericCardData.icon||"mdi-fire-circle",size:"small"},null,8,["color","icon"])]),_:1})])]),_:1}),s(Ae,{class:"card-text-box"},{default:f(()=>[m("div",it,[m("span",rt,[L(" COP"),m("b",null,$(r(e.genericCardData.price)||""),1)])])]),_:1}),s(Ve,{class:"mx-4 mb-1"}),s(Ye,{class:"card-actions-box primary-font"},{default:f(()=>[s(k,{color:"deep-purple-lighten-2",variant:"text",onClick:a},{default:f(()=>[L(" Ver m\xE1s ")]),_:1}),m("img",{src:e.genericCardData.logo||"https://cdn.vuetifyjs.com/images/cards/cooking.png",alt:"logo",class:"card-logo"},null,8,lt)]),_:1})]),_:1},8,["loading"])])]),_:1}))}};var ut=Y(ct,[["__scopeId","data-v-3a7aab88"]]);const ne=e=>(pe("data-v-182eca75"),e=e(),ye(),e),dt={class:"first-page"},mt={class:"d-flex flex-column justify-center align-center"},vt={class:"d-flex flex-column justify-xl-space-evenly align-center mb-10"},ft=ne(()=>m("div",{class:"my-5 primary-font"},[m("h1",null,"Art\xEDculos m\xE1s vendidos")],-1)),gt=ne(()=>m("span",{class:"my-5 primary-font"},"Explora nuestros art\xEDculos m\xE1s populares",-1)),ht={class:"cards-box d-flex flex-row flex-wrap justify-space-around align-center"},_t={__name:"homeFirstPage",setup(e){const o=[{backgroundSlide:"https://libreria.luchadeclases.org/pub/media/ubcontentslider/images/l/i/libro_filosofia_15_.jpg",slides:[{src:"https://patriaroja.pe/wp-content/uploads/2022/05/3-1.png"},{src:"https://images.pagina12.com.ar/styles/width960/public/2017-03/sl30fo03_1.png?itok=w3848JbB"},{src:"https://1.bp.blogspot.com/-CcYHiz_IGiM/XpryqxUYM4I/AAAAAAAAD4I/8WQ5WVnLh10ZUXp1u5-d8G4RnCs2gWnPwCLcBGAsYHQ/s1600/92699421_224968638774048_8381766954616094720_n.png"}]},{backgroundSlide:"https://s.libertaddigital.com/2020/10/09/1280/0/black-lives-matter-flag-comunista.jpg",slides:[{src:"https://www.punx.co.uk/wp-content/uploads/productimages/luxury-gay-space-communism-t-shirt.png"},{src:"https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2019/06/13/5fa534aa017ee.png"},{src:"https://www.c1c.com.br/wp-content/uploads/2016/12/mockup_feminina_marx_transp.png"}]},{backgroundSlide:"https://langostaliteraria.com/wp-content/uploads/2022/02/Imagen-central-01-4-scaled.jpg",slides:[{src:"https://cdnx.jumpseller.com/queleoconce/image/14203297/resize/540/540?1611333768"},{src:"https://www.atomcomics.net/52141-thickbox_default/cuadernos-ucranianos-diario-de-una-invasion.jpg"},{src:"https://cdn1.despertaferro-ediciones.com/wp-content/uploads/2023/04/DFC5-305x318.png"}]}],t=V([{title:"Camiseta Revoluci\xF3n Comunista",author:"Ernesto Ch\xE9 Guevara",iconColor:"red",icon:"mdi-fire-circle",rating:4.5,reviews:413,price:3e4,description:"Expresa tu apoyo a la revoluci\xF3n con esta elegante camiseta de tem\xE1tica comunista.",availability:["XS","S","M","L","XL"],image:"https://acdn.mitiendanube.com/stores/605/358/products/37n1-48054e5e8a19c7b9f716249053342208-640-0.png",category:"ropa",logo:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg"},{title:"Discusiones marxistas para la revoluci\xF3n en Colombia",author:"Juan Sebasti\xE1n Cristancho Rojas",iconColor:"red",icon:"mdi-fire-circle",rating:4.7,reviews:200,price:29999,description:"Mantente abrigado y con estilo con esta acogedora sudadera que promueve la unidad de los trabajadores.",availability:["Teor\xEDa & Praxis"],image:"https://www.progresando.com/wp-content/uploads/2023/06/KesaneMX-Manifiesto-comunista-El-Karl-Marx-Engeles-GL-EMU.fw_.png",category:"libro",logo:"https://semanariovoz.com/wp-content/uploads/2015/04/09/teopraxisplano21.gif"},{title:"Mochila S\xEDmbolo de Igualdad",author:"La panader\xEDa Rusa",iconColor:"red",icon:"mdi-fire-circle",rating:4.5,reviews:180,price:49999,description:"Difunde el mensaje de igualdad y solidaridad con esta vers\xE1til mochila.",availability:["Rojo","Negro"],image:"https://images.creativefabrica.com/products/thumbnails/2023/09/04/tYvYxGtKe/2Uv67oT2m9vDEgyUCWGHyZy4kLZ.png",category:"accesorio",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg/181px-Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg.png"}]);return(a,i)=>(y(),w("div",dt,[s(tt,{objectSlides:o}),m("div",mt,[m("div",vt,[ft,gt,s(k,{class:"my-5 primary-font",rounded:"lg",size:"x-large"},{default:f(()=>[L("Ver Todo")]),_:1})]),m("div",ht,[(y(!0),w(B,null,M(t.value,(r,n)=>(y(),w("div",{key:n},[s(ut,{class:"generic-desktop-card",genericCardData:r},null,8,["genericCardData"]),s(Xe,{class:"generic-mobile-card",cardData:r},null,8,["cardData"])]))),128))])])]))}};var It=Y(_t,[["__scopeId","data-v-182eca75"]]);export{It as default};
