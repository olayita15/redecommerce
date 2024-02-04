import{aD as U,p as T,m as q,l as ve,g as $,n as fe,q as ge,al as N,v as V,a as C,s as L,y as S,a0 as he,c as n,u as P,H as J,P as _e,I as ye,C as be,z as pe,F as B,d as D,r as M,$ as Ce,J as xe,R as we,_ as j,o as y,f as w,w as l,a2 as R,h as E,i as c,aE as Ve,j as k,W as A,Y as ke,Z as Ie}from"./index.9fb71cbd.js";import{g as Se,J as X,M as De,K as Te,l as Y,V as K,q as $e}from"./VDivider.1706ae43.js";import{b as Pe,V as I,c as Be,d as je,u as Ee}from"./ssrBoot.25c1ffee.js";import{m as Le,u as Me}from"./lazy.4c58babe.js";import{m as Ae}from"./tag.24cacb3b.js";import{V as Z,a as Q,b as ee,c as te,d as Ye,e as Re}from"./VCard.7c7d2a8f.js";import{V as ae}from"./VContainer.7210d1e0.js";import{V as Xe,a as We}from"./VRow.5d98a87b.js";const He=e=>{const{touchstartX:o,touchendX:t,touchstartY:a,touchendY:i}=e,r=.5,s=16;e.offsetX=t-o,e.offsetY=i-a,Math.abs(e.offsetY)<r*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<r*Math.abs(e.offsetY)&&(e.up&&i<a-s&&e.up(e),e.down&&i>a+s&&e.down(e))};function ze(e,o){var a;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(a=o.start)==null||a.call(o,{originalEvent:e,...o})}function Fe(e,o){var a;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(a=o.end)==null||a.call(o,{originalEvent:e,...o}),He(o)}function Ge(e,o){var a;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(a=o.move)==null||a.call(o,{originalEvent:e,...o})}function Oe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>ze(t,o),touchend:t=>Fe(t,o),touchmove:t=>Ge(t,o)}}function Ue(e,o){var f,u,d;const t=o.value,a=t!=null&&t.parent?e.parentElement:e,i=(f=t==null?void 0:t.options)!=null?f:{passive:!0},r=(u=o.instance)==null?void 0:u.$.uid;if(!a||!r)return;const s=Oe(o.value);a._touchHandlers=(d=a._touchHandlers)!=null?d:Object.create(null),a._touchHandlers[r]=s,U(s).forEach(h=>{a.addEventListener(h,s[h],i)})}function qe(e,o){var r,s;const t=(r=o.value)!=null&&r.parent?e.parentElement:e,a=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!a)return;const i=t._touchHandlers[a];U(i).forEach(f=>{t.removeEventListener(f,i[f])}),delete t._touchHandlers[a]}const oe={mounted:Ue,unmounted:qe};var Ne=oe;const ne=Symbol.for("vuetify:v-window"),se=Symbol.for("vuetify:v-window-group"),ie=T({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...q(),...Ae(),...ve()},"VWindow"),G=$()({name:"VWindow",directives:{Touch:oe},props:ie(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:a}=fe(e),{isRtl:i}=ge(),{t:r}=N(),s=Pe(e,se),f=V(),u=C(()=>i.value?!e.reverse:e.reverse),d=L(!1),h=C(()=>{const v=e.direction==="vertical"?"y":"x",p=(u.value?!d.value:d.value)?"-reverse":"";return`v-window-${v}${p}-transition`}),_=L(0),b=V(void 0),x=C(()=>s.items.value.findIndex(v=>s.selected.value.includes(v.id)));S(x,(v,g)=>{const p=s.items.value.length,F=p-1;p<=2?d.value=v<g:v===F&&g===0?d.value=!0:v===0&&g===F?d.value=!1:d.value=v<g}),he(ne,{transition:h,isReversed:d,transitionCount:_,transitionHeight:b,rootRef:f});const m=C(()=>e.continuous||x.value!==0),W=C(()=>e.continuous||x.value!==s.items.value.length-1);function H(){m.value&&s.prev()}function z(){W.value&&s.next()}const de=C(()=>{const v=[],g={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:s.prev,ariaLabel:r("$vuetify.carousel.prev")};v.push(m.value?t.prev?t.prev({props:g}):n(I,g,null):n("div",null,null));const p={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:s.next,ariaLabel:r("$vuetify.carousel.next")};return v.push(W.value?t.next?t.next({props:p}):n(I,p,null):n("div",null,null)),v}),me=C(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?H():z()},right:()=>{u.value?z():H()},start:g=>{let{originalEvent:p}=g;p.stopPropagation()}},...e.touch===!0?{}:e.touch});return P(()=>J(n(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},a.value,e.class],style:e.style},{default:()=>{var v,g;return[n("div",{class:"v-window__container",style:{height:b.value}},[(v=t.default)==null?void 0:v.call(t,{group:s}),e.showArrows!==!1&&n("div",{class:"v-window__controls"},[de.value])]),(g=t.additional)==null?void 0:g.call(t,{group:s})]}}),[[_e("touch"),me.value]])),{group:s}}}),Je=T({color:String,cycle:Boolean,delimiterIcon:{type:ye,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ie({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),re=$()({name:"VCarousel",props:Je(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const a=be(e,"modelValue"),{t:i}=N(),r=V();let s=-1;S(a,u),S(()=>e.interval,u),S(()=>e.cycle,d=>{d?u():window.clearTimeout(s)}),pe(f);function f(){!e.cycle||!r.value||(s=window.setTimeout(r.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(s),window.requestAnimationFrame(f)}return P(()=>{const[d]=G.filterProps(e);return n(G,D({ref:r},d,{modelValue:a.value,"onUpdate:modelValue":h=>a.value=h,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:M(e.height)},e.style]}),{default:t.default,additional:h=>{let{group:_}=h;return n(B,null,[!e.hideDelimiters&&n("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[_.items.value.length>0&&n(Se,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[_.items.value.map((b,x)=>{const m={id:`carousel-item-${b.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",x+1,_.items.value.length),class:[_.isSelected(b.id)&&"v-btn--active"],onClick:()=>_.select(b.id,!0)};return t.item?t.item({props:m,item:b}):n(I,D(b,m),null)})]})]),e.progress&&n(X,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(_.getItemIndex(a.value)+1)/_.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),le=T({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...q(),...Be(),...Le()},"VWindowItem"),O=$()({name:"VWindowItem",directives:{Touch:Ne},props:le(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const a=Ce(ne),i=je(e,se),{isBooted:r}=Ee();if(!a||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=L(!1),f=C(()=>r.value&&(a.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!s.value||!a||(s.value=!1,a.transitionCount.value>0&&(a.transitionCount.value-=1,a.transitionCount.value===0&&(a.transitionHeight.value=void 0)))}function d(){var m;s.value||!a||(s.value=!0,a.transitionCount.value===0&&(a.transitionHeight.value=M((m=a.rootRef.value)==null?void 0:m.clientHeight)),a.transitionCount.value+=1)}function h(){u()}function _(m){!s.value||we(()=>{!f.value||!s.value||!a||(a.transitionHeight.value=M(m.clientHeight))})}const b=C(()=>{const m=a.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof m!="string"?a.transition.value:m,onBeforeEnter:d,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onAfterLeave:u,onLeaveCancelled:h,onEnter:_}:!1}),{hasContent:x}=Me(e,i.isSelected);return P(()=>n(De,{transition:b.value,disabled:!r.value},{default:()=>{var m;return[J(n("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[x.value&&((m=t.default)==null?void 0:m.call(t))]),[[xe,i.isSelected.value]])]}})),{}}}),Ke=T({...Te(),...le()},"VCarouselItem"),ce=$()({name:"VCarouselItem",inheritAttrs:!1,props:Ke(),setup(e,o){let{slots:t,attrs:a}=o;P(()=>{const[i]=Y.filterProps(e),[r]=O.filterProps(e);return n(O,D({class:"v-carousel-item"},r),{default:()=>[n(Y,D(a,i),t)]})})}}),Ze=["src"],Qe={__name:"principalCarrousel",props:["slides","backgroundSlide"],setup(e){return(o,t)=>(y(),w("div",{class:"d-flex flex-column justify-center carousel-box",style:Ve({backgroundImage:`url('${e.backgroundSlide}')`})},[n(re,{cycle:"","hide-delimiters":"",class:"circular-box ma-0 pa-0 mx-5"},{default:l(()=>[(y(!0),w(B,null,R(e.slides,(a,i)=>(y(),E(ce,{key:i,cover:"",transition:"scroll-x-transition"},{default:l(()=>[c("img",{src:a.src,alt:"Imagen Circular",class:"circular-image"},null,8,Ze)]),_:2},1024))),128))]),_:1})],4))}};var et=j(Qe,[["__scopeId","data-v-6a04e292"]]);const tt={class:"w-100"},at={__name:"superCarrousel",props:["objectSlides"],setup(e){return(o,t)=>(y(),w("div",tt,[n(re,{height:"500","show-arrows":!1,cycle:"",interval:18e3,"hide-delimiters":""},{default:l(()=>[(y(!0),w(B,null,R(e.objectSlides,(a,i)=>(y(),E(ce,{key:i},{default:l(()=>[n(et,{slides:a.slides,backgroundSlide:a.backgroundSlide},null,8,["slides","backgroundSlide"])]),_:2},1024))),128))]),_:1})]))}};const ot={class:"card-item-box"},nt={class:"title-text primary-title-font"},st={class:"break-word"},it={class:"me-1 autor-font-regular",style:{"font-size":"large"}},rt={class:"product-price-box mt-4 text-subtitle-1 primary-font"},lt={class:"product-price mt-5 primary-font"},ct=["src"],ut={__name:"genericCard",props:["genericCardData"],setup(e){const o=e,t=V(!1);V(1);const a=()=>{t.value=!0,setTimeout(()=>t.value=!1,2e3)};(()=>{switch(o.genericCardData.category){case"libro":return"Editoriales disponibles";case"ropa":return"Tallas disponibles";case"accesorio":return"Colores disponibles";default:return"Opciones disponibles"}})();const r=s=>typeof s!="number"?"Invalid Price":new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(s);return(s,f)=>(y(),E(ae,{class:"card-box-container"},{default:l(()=>[n(Y,{class:"image",src:e.genericCardData.image||"https://cdn.vuetifyjs.com/images/cards/cooking.png"},null,8,["src"]),c("div",null,[n(Z,{loading:t.value,class:"mx-auto card-box elevation-5 my-6"},{loader:l(({isActive:u})=>[n(X,{active:u,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:l(()=>[n(Q,null,{default:l(()=>[c("div",ot,[n(ee,{class:"max-width"},{default:l(()=>[c("div",nt,[c("span",st,k(e.genericCardData.title||"Default Title"),1)])]),_:1}),n(te,{class:"max-width ma-1"},{default:l(()=>[c("span",it,k(e.genericCardData.author||"Default Subtitle"),1),n(K,{color:e.genericCardData.iconColor||"error",icon:e.genericCardData.icon||"mdi-fire-circle",size:"small"},null,8,["color","icon"])]),_:1})])]),_:1}),n(Ye,{class:"card-text-box"},{default:l(()=>[c("div",rt,[c("span",lt,[A(" COP"),c("b",null,k(r(e.genericCardData.price)||""),1)])])]),_:1}),n($e,{class:"mx-4 mb-1"}),n(Re,{class:"card-actions-box primary-font"},{default:l(()=>[n(I,{color:"deep-purple-lighten-2",variant:"text",onClick:a},{default:l(()=>[A(" Ver m\xE1s ")]),_:1}),c("img",{src:e.genericCardData.logo||"https://cdn.vuetifyjs.com/images/cards/cooking.png",alt:"logo",class:"card-logo"},null,8,ct)]),_:1})]),_:1},8,["loading"])])]),_:1}))}};var dt=j(ut,[["__scopeId","data-v-3a7aab88"]]);const mt={class:"card-item-box"},vt=["src"],ft={class:"title-text primary-title-font"},gt={class:"break-word"},ht={class:"me-1 autor-font-regular",style:{"font-size":"large"}},_t={__name:"genericMobileCard",props:["genericCardData"],setup(e){const o=V(!1);return(t,a)=>(y(),E(ae,{class:"card-box-container"},{default:l(()=>[n(Z,{loading:o.value,class:"mx-auto card-box elevation-5"},{loader:l(({isActive:i})=>[n(X,{active:i,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:l(()=>[n(Xe,null,{default:l(()=>[n(We,null,{default:l(()=>[n(Q,null,{default:l(()=>[c("div",mt,[c("img",{class:"image",src:e.genericCardData.image||"https://cdn.vuetifyjs.com/images/cards/cooking.png"},null,8,vt),n(ee,{class:"max-width mt-3"},{default:l(()=>[c("div",ft,[c("span",gt,k(e.genericCardData.title||"Default Title"),1)])]),_:1}),n(te,{class:"max-width ma-1"},{default:l(()=>[c("span",ht,k(e.genericCardData.author||"Default Subtitle"),1),n(K,{color:e.genericCardData.iconColor||"error",icon:e.genericCardData.icon||"mdi-fire-circle",size:"small"},null,8,["color","icon"])]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1}))}};var yt=j(_t,[["__scopeId","data-v-5f26bcce"]]);const ue=e=>(ke("data-v-05e0eb58"),e=e(),Ie(),e),bt={class:"first-page"},pt={class:"d-flex flex-column justify-center align-center"},Ct={class:"d-flex flex-column justify-xl-space-evenly align-center mb-10"},xt=ue(()=>c("div",{class:"my-5 primary-font"},[c("h1",null,"Art\xEDculos m\xE1s vendidos")],-1)),wt=ue(()=>c("span",{class:"my-5 primary-font"},"Explora nuestros art\xEDculos m\xE1s populares",-1)),Vt={class:"cards-box d-flex flex-row flex-wrap justify-space-around align-center"},kt={__name:"homeFirstPage",setup(e){const o=[{backgroundSlide:"https://libreria.luchadeclases.org/pub/media/ubcontentslider/images/l/i/libro_filosofia_15_.jpg",slides:[{src:"https://patriaroja.pe/wp-content/uploads/2022/05/3-1.png"},{src:"https://images.pagina12.com.ar/styles/width960/public/2017-03/sl30fo03_1.png?itok=w3848JbB"},{src:"https://1.bp.blogspot.com/-CcYHiz_IGiM/XpryqxUYM4I/AAAAAAAAD4I/8WQ5WVnLh10ZUXp1u5-d8G4RnCs2gWnPwCLcBGAsYHQ/s1600/92699421_224968638774048_8381766954616094720_n.png"}]},{backgroundSlide:"https://s.libertaddigital.com/2020/10/09/1280/0/black-lives-matter-flag-comunista.jpg",slides:[{src:"https://www.punx.co.uk/wp-content/uploads/productimages/luxury-gay-space-communism-t-shirt.png"},{src:"https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2019/06/13/5fa534aa017ee.png"},{src:"https://www.c1c.com.br/wp-content/uploads/2016/12/mockup_feminina_marx_transp.png"}]},{backgroundSlide:"https://langostaliteraria.com/wp-content/uploads/2022/02/Imagen-central-01-4-scaled.jpg",slides:[{src:"https://cdnx.jumpseller.com/queleoconce/image/14203297/resize/540/540?1611333768"},{src:"https://www.atomcomics.net/52141-thickbox_default/cuadernos-ucranianos-diario-de-una-invasion.jpg"},{src:"https://cdn1.despertaferro-ediciones.com/wp-content/uploads/2023/04/DFC5-305x318.png"}]}],t=V([{title:"Camiseta Revoluci\xF3n Comunista",author:"Ernesto Ch\xE9 Guevara",iconColor:"red",icon:"mdi-fire-circle",rating:4.5,reviews:413,price:3e4,description:"Expresa tu apoyo a la revoluci\xF3n con esta elegante camiseta de tem\xE1tica comunista.",availability:["XS","S","M","L","XL"],image:"https://acdn.mitiendanube.com/stores/605/358/products/37n1-48054e5e8a19c7b9f716249053342208-640-0.png",category:"ropa",logo:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg"},{title:"Discusiones marxistas para la revoluci\xF3n en Colombia",author:"Juan Sebasti\xE1n Cristancho Rojas",iconColor:"red",icon:"mdi-fire-circle",rating:4.7,reviews:200,price:29999,description:"Mantente abrigado y con estilo con esta acogedora sudadera que promueve la unidad de los trabajadores.",availability:["Teor\xEDa & Praxis"],image:"https://www.progresando.com/wp-content/uploads/2023/06/KesaneMX-Manifiesto-comunista-El-Karl-Marx-Engeles-GL-EMU.fw_.png",category:"libro",logo:"https://semanariovoz.com/wp-content/uploads/2015/04/09/teopraxisplano21.gif"},{title:"Mochila S\xEDmbolo de Igualdad",author:"La panader\xEDa Rusa",iconColor:"red",icon:"mdi-fire-circle",rating:4.5,reviews:180,price:49999,description:"Difunde el mensaje de igualdad y solidaridad con esta vers\xE1til mochila.",availability:["Rojo","Negro"],image:"https://images.creativefabrica.com/products/thumbnails/2023/09/04/tYvYxGtKe/2Uv67oT2m9vDEgyUCWGHyZy4kLZ.png",category:"accesorio",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg/181px-Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg.png"}]);return(a,i)=>(y(),w("div",bt,[n(at,{objectSlides:o}),c("div",pt,[c("div",Ct,[xt,wt,n(I,{class:"my-5 primary-font",rounded:"lg",size:"x-large"},{default:l(()=>[A("Ver Todo")]),_:1})]),c("div",Vt,[(y(!0),w(B,null,R(t.value,(r,s)=>(y(),w("div",{key:s},[n(dt,{class:"generic-desktop-card",genericCardData:r},null,8,["genericCardData"]),n(yt,{class:"generic-mobile-card",genericCardData:r},null,8,["genericCardData"])]))),128))])])]))}};var Et=j(kt,[["__scopeId","data-v-05e0eb58"]]);export{Et as default};
