import{aF as G,p as D,m as U,n as re,g as T,q as le,r as ce,X as N,x as V,a as x,s as j,z as S,a3 as ue,c as s,u as P,V as q,W as de,I as me,D as ve,A as fe,F as $,d as I,v as L,a0 as ge,a7 as he,U as _e,_ as B,o as y,h as C,w as f,Q as M,i as Y,j as u,k as E,L as R,N as ye,O as pe,aG as be}from"./index.919d4ddc.js";import{M as xe,b as Ce,V as X}from"./VImg.2d25d0f4.js";import{u as we,a as Ve,b as ke}from"./group.fc070a9b.js";import{m as Se,u as Ie}from"./lazy.0191c73d.js";import{u as De}from"./ssrBoot.67a9763e.js";import{m as Te}from"./tag.ad6fecd6.js";import{V as k}from"./VBtn.794d6193.js";import{g as Pe,V as $e}from"./VAvatar.e3d7a5e8.js";import{V as K}from"./position.8ce4494d.js";import{V as Be,a as Ee,b as je,c as Le,d as Re,e as Xe}from"./VCard.837c685b.js";import{V as Me}from"./VDivider.4b4af8ae.js";import{V as Ye}from"./VContainer.681ed42c.js";import{g as Ae}from"./simpleCard.a576a3b7.js";import{c as Fe}from"./camisetaDetrasFidelCastro.97445f0e.js";import"./intersectionObserver.c4513ba0.js";/* empty css              */import"./index.33cc31b3.js";const We=e=>{const{touchstartX:o,touchendX:t,touchstartY:a,touchendY:i}=e,r=.5,n=16;e.offsetX=t-o,e.offsetY=i-a,Math.abs(e.offsetY)<r*Math.abs(e.offsetX)&&(e.left&&t<o-n&&e.left(e),e.right&&t>o+n&&e.right(e)),Math.abs(e.offsetX)<r*Math.abs(e.offsetY)&&(e.up&&i<a-n&&e.up(e),e.down&&i>a+n&&e.down(e))};function He(e,o){var a;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(a=o.start)==null||a.call(o,{originalEvent:e,...o})}function Oe(e,o){var a;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(a=o.end)==null||a.call(o,{originalEvent:e,...o}),We(o)}function ze(e,o){var a;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(a=o.move)==null||a.call(o,{originalEvent:e,...o})}function Ge(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>He(t,o),touchend:t=>Oe(t,o),touchmove:t=>ze(t,o)}}function Ue(e,o){var v,l,c;const t=o.value,a=t!=null&&t.parent?e.parentElement:e,i=(v=t==null?void 0:t.options)!=null?v:{passive:!0},r=(l=o.instance)==null?void 0:l.$.uid;if(!a||!r)return;const n=Ge(o.value);a._touchHandlers=(c=a._touchHandlers)!=null?c:Object.create(null),a._touchHandlers[r]=n,G(n).forEach(h=>{a.addEventListener(h,n[h],i)})}function Ne(e,o){var r,n;const t=(r=o.value)!=null&&r.parent?e.parentElement:e,a=(n=o.instance)==null?void 0:n.$.uid;if(!(t!=null&&t._touchHandlers)||!a)return;const i=t._touchHandlers[a];G(i).forEach(v=>{t.removeEventListener(v,i[v])}),delete t._touchHandlers[a]}const J={mounted:Ue,unmounted:Ne};var qe=J;const Z=Symbol.for("vuetify:v-window"),Q=Symbol.for("vuetify:v-window-group"),ee=D({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...U(),...Te(),...re()},"VWindow"),O=T()({name:"VWindow",directives:{Touch:J},props:ee(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:a}=le(e),{isRtl:i}=ce(),{t:r}=N(),n=we(e,Q),v=V(),l=x(()=>i.value?!e.reverse:e.reverse),c=j(!1),h=x(()=>{const m=e.direction==="vertical"?"y":"x",b=(l.value?!c.value:c.value)?"-reverse":"";return`v-window-${m}${b}-transition`}),_=j(0),p=V(void 0),w=x(()=>n.items.value.findIndex(m=>n.selected.value.includes(m.id)));S(w,(m,g)=>{const b=n.items.value.length,H=b-1;b<=2?c.value=m<g:m===H&&g===0?c.value=!0:m===0&&g===H?c.value=!1:c.value=m<g}),ue(Z,{transition:h,isReversed:c,transitionCount:_,transitionHeight:p,rootRef:v});const d=x(()=>e.continuous||w.value!==0),A=x(()=>e.continuous||w.value!==n.items.value.length-1);function F(){d.value&&n.prev()}function W(){A.value&&n.next()}const se=x(()=>{const m=[],g={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:n.prev,ariaLabel:r("$vuetify.carousel.prev")};m.push(d.value?t.prev?t.prev({props:g}):s(k,g,null):s("div",null,null));const b={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:n.next,ariaLabel:r("$vuetify.carousel.next")};return m.push(A.value?t.next?t.next({props:b}):s(k,b,null):s("div",null,null)),m}),ie=x(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?F():W()},right:()=>{l.value?W():F()},start:g=>{let{originalEvent:b}=g;b.stopPropagation()}},...e.touch===!0?{}:e.touch});return P(()=>q(s(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},a.value,e.class],style:e.style},{default:()=>{var m,g;return[s("div",{class:"v-window__container",style:{height:p.value}},[(m=t.default)==null?void 0:m.call(t,{group:n}),e.showArrows!==!1&&s("div",{class:"v-window__controls"},[se.value])]),(g=t.additional)==null?void 0:g.call(t,{group:n})]}}),[[de("touch"),ie.value]])),{group:n}}}),Ke=D({color:String,cycle:Boolean,delimiterIcon:{type:me,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...ee({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),te=T()({name:"VCarousel",props:Ke(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const a=ve(e,"modelValue"),{t:i}=N(),r=V();let n=-1;S(a,l),S(()=>e.interval,l),S(()=>e.cycle,c=>{c?l():window.clearTimeout(n)}),fe(v);function v(){!e.cycle||!r.value||(n=window.setTimeout(r.value.group.next,+e.interval>0?+e.interval:6e3))}function l(){window.clearTimeout(n),window.requestAnimationFrame(v)}return P(()=>{const[c]=O.filterProps(e);return s(O,I({ref:r},c,{modelValue:a.value,"onUpdate:modelValue":h=>a.value=h,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:L(e.height)},e.style]}),{default:t.default,additional:h=>{let{group:_}=h;return s($,null,[!e.hideDelimiters&&s("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[_.items.value.length>0&&s(Pe,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[_.items.value.map((p,w)=>{const d={id:`carousel-item-${p.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",w+1,_.items.value.length),class:[_.isSelected(p.id)&&"v-btn--active"],onClick:()=>_.select(p.id,!0)};return t.item?t.item({props:d,item:p}):s(k,I(p,d),null)})]})]),e.progress&&s(K,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(_.getItemIndex(a.value)+1)/_.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),ae=D({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...U(),...Ve(),...Se()},"VWindowItem"),z=T()({name:"VWindowItem",directives:{Touch:qe},props:ae(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const a=ge(Z),i=ke(e,Q),{isBooted:r}=De();if(!a||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const n=j(!1),v=x(()=>r.value&&(a.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!n.value||!a||(n.value=!1,a.transitionCount.value>0&&(a.transitionCount.value-=1,a.transitionCount.value===0&&(a.transitionHeight.value=void 0)))}function c(){var d;n.value||!a||(n.value=!0,a.transitionCount.value===0&&(a.transitionHeight.value=L((d=a.rootRef.value)==null?void 0:d.clientHeight)),a.transitionCount.value+=1)}function h(){l()}function _(d){!n.value||_e(()=>{!v.value||!n.value||!a||(a.transitionHeight.value=L(d.clientHeight))})}const p=x(()=>{const d=a.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof d!="string"?a.transition.value:d,onBeforeEnter:c,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:c,onAfterLeave:l,onLeaveCancelled:h,onEnter:_}:!1}),{hasContent:w}=Ie(e,i.isSelected);return P(()=>s(xe,{transition:p.value,disabled:!r.value},{default:()=>{var d;return[q(s("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[w.value&&((d=t.default)==null?void 0:d.call(t))]),[[he,i.isSelected.value]])]}})),{}}}),Je=D({...Ce(),...ae()},"VCarouselItem"),oe=T()({name:"VCarouselItem",inheritAttrs:!1,props:Je(),setup(e,o){let{slots:t,attrs:a}=o;P(()=>{const[i]=X.filterProps(e),[r]=z.filterProps(e);return s(z,I({class:"v-carousel-item"},r),{default:()=>[s(X,I(a,i),t)]})})}}),Ze={class:"d-flex flex-row align-center carousel-box elevation-5"},Qe=["src"],et={__name:"principalCarrousel",props:["slides","backgroundSlide"],setup(e){return(o,t)=>(y(),C("div",Ze,[s(te,{cycle:"","hide-delimiters":"",class:"circular-box justify-content-start ma-0 pa-0 mx-5"},{default:f(()=>[(y(!0),C($,null,M(e.slides,(a,i)=>(y(),Y(oe,{key:i,cover:"",transition:"fade-transition"},{default:f(()=>[u("img",{src:a.src,alt:"Imagen Circular",class:"circular-image"},null,8,Qe)]),_:2},1024))),128))]),_:1})]))}};var tt=B(et,[["__scopeId","data-v-c72cbd04"]]);const at={class:"w-100 ma-0 pa-0"},ot={__name:"superCarrousel",props:["objectSlides"],setup(e){return(o,t)=>(y(),C("div",at,[s(te,{height:"800","show-arrows":!1,cycle:"",interval:18e3,"hide-delimiters":"",class:"ma-0 pa-0"},{default:f(()=>[(y(!0),C($,null,M(e.objectSlides,(a,i)=>(y(),Y(oe,{key:i,cover:"",src:a.backgroundSlide},{default:f(()=>[s(tt,{slides:a.slides,backgroundSlide:a.backgroundSlide},null,8,["slides","backgroundSlide"])]),_:2},1032,["src"]))),128))]),_:1})]))}};const nt={class:"card-item-box"},st={class:"title-text primary-title-font"},it={class:"break-word"},rt={class:"me-1 autor-font-regular",style:{"font-size":"large"}},lt={class:"product-price-box mt-4 text-subtitle-1 primary-font"},ct={class:"product-price mt-5 primary-font"},ut=["src"],dt={__name:"genericCard",props:["genericCardData"],setup(e){const o=e,t=V(!1);V(1);const a=()=>{t.value=!0,setTimeout(()=>t.value=!1,2e3)};(()=>{switch(o.genericCardData.category){case"libro":return"Editoriales disponibles";case"ropa":return"Tallas disponibles";case"accesorio":return"Colores disponibles";default:return"Opciones disponibles"}})();const r=n=>typeof n!="number"?"Invalid Price":new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(n);return(n,v)=>(y(),Y(Ye,{class:"card-box-container"},{default:f(()=>[s(X,{class:"image",src:e.genericCardData.image||"https://cdn.vuetifyjs.com/images/cards/cooking.png"},null,8,["src"]),u("div",null,[s(Be,{loading:t.value,class:"mx-auto card-box elevation-5 my-6"},{loader:f(({isActive:l})=>[s(K,{active:l,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:f(()=>[s(Ee,null,{default:f(()=>[u("div",nt,[s(je,{class:"max-width"},{default:f(()=>[u("div",st,[u("span",it,E(e.genericCardData.title||"Default Title"),1)])]),_:1}),s(Le,{class:"max-width ma-1"},{default:f(()=>[u("span",rt,E(e.genericCardData.author||"Default Subtitle"),1),s($e,{color:e.genericCardData.iconColor||"error",icon:e.genericCardData.icon||"mdi-fire-circle",size:"small"},null,8,["color","icon"])]),_:1})])]),_:1}),s(Re,{class:"card-text-box"},{default:f(()=>[u("div",lt,[u("span",ct,[R(" COP"),u("b",null,E(r(e.genericCardData.price)||""),1)])])]),_:1}),s(Me,{class:"mx-4 mb-1"}),s(Xe,{class:"card-actions-box primary-font"},{default:f(()=>[s(k,{color:"deep-purple-lighten-2",variant:"text",onClick:a},{default:f(()=>[R(" COMPRAR ")]),_:1}),u("img",{src:e.genericCardData.logo||"https://cdn.vuetifyjs.com/images/cards/cooking.png",alt:"logo",class:"card-logo"},null,8,ut)]),_:1})]),_:1},8,["loading"])])]),_:1}))}};var mt=B(dt,[["__scopeId","data-v-d790a54c"]]);const vt={};function ft(e,o){return y(),C("div")}var gt=B(vt,[["render",ft]]),ht="https://olayita15.github.io/redecommerce/assets/Background1Carrousel.5e533474.webp";const ne=e=>(ye("data-v-677f91ae"),e=e(),pe(),e),_t={class:"first-page"},yt={class:"d-flex flex-column justify-center align-center"},pt={class:"d-flex flex-column justify-xl-space-evenly align-center mb-10"},bt=ne(()=>u("div",{class:"my-5 primary-font"},[u("h1",null,"Art\xEDculos m\xE1s vendidos")],-1)),xt=ne(()=>u("span",{class:"my-5 primary-font"},"Explora nuestros art\xEDculos m\xE1s populares",-1)),Ct={class:"cards-box d-flex flex-row flex-wrap justify-space-around align-center"},wt={class:"w-100 h-100"},Vt={__name:"homeFirstPage",setup(e){const o=[{backgroundSlide:ht,slides:[{src:be},{src:Fe}]},{backgroundSlide:"https://s.libertaddigital.com/2020/10/09/1280/0/black-lives-matter-flag-comunista.jpg",slides:[{src:"https://www.punx.co.uk/wp-content/uploads/productimages/luxury-gay-space-communism-t-shirt.png"},{src:"https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2019/06/13/5fa534aa017ee.png"},{src:"https://www.c1c.com.br/wp-content/uploads/2016/12/mockup_feminina_marx_transp.png"}]},{backgroundSlide:"https://langostaliteraria.com/wp-content/uploads/2022/02/Imagen-central-01-4-scaled.jpg",slides:[{src:"https://cdnx.jumpseller.com/queleoconce/image/14203297/resize/540/540?1611333768"},{src:"https://www.atomcomics.net/52141-thickbox_default/cuadernos-ucranianos-diario-de-una-invasion.jpg"},{src:"https://cdn1.despertaferro-ediciones.com/wp-content/uploads/2023/04/DFC5-305x318.png"}]}],t=V([{title:"Camiseta Revoluci\xF3n Comunista",author:"Ernesto Ch\xE9 Guevara",iconColor:"red",icon:"mdi-fire-circle",rating:4.5,reviews:413,price:3e4,description:"Expresa tu apoyo a la revoluci\xF3n con esta elegante camiseta de tem\xE1tica comunista.",availability:["XS","S","M","L","XL"],image:"https://acdn.mitiendanube.com/stores/605/358/products/37n1-48054e5e8a19c7b9f716249053342208-640-0.png",category:"ropa",logo:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg"},{title:"Discusiones marxistas para la revoluci\xF3n en Colombia",author:"Juan Sebasti\xE1n Cristancho Rojas",iconColor:"red",icon:"mdi-fire-circle",rating:4.7,reviews:200,price:29999,description:"Mantente abrigado y con estilo con esta acogedora sudadera que promueve la unidad de los trabajadores.",availability:["Teor\xEDa & Praxis"],image:"https://www.progresando.com/wp-content/uploads/2023/06/KesaneMX-Manifiesto-comunista-El-Karl-Marx-Engeles-GL-EMU.fw_.png",category:"libro",logo:"https://semanariovoz.com/wp-content/uploads/2015/04/09/teopraxisplano21.gif"},{title:"Mochila S\xEDmbolo de Igualdad",author:"La panader\xEDa Rusa",iconColor:"red",icon:"mdi-fire-circle",rating:4.5,reviews:180,price:49999,description:"Difunde el mensaje de igualdad y solidaridad con esta vers\xE1til mochila.",availability:["Rojo","Negro"],image:"https://images.creativefabrica.com/products/thumbnails/2023/09/04/tYvYxGtKe/2Uv67oT2m9vDEgyUCWGHyZy4kLZ.png",category:"accesorio",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg/181px-Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg.png"}]);return(a,i)=>(y(),C("div",_t,[s(ot,{objectSlides:o}),u("div",yt,[u("div",pt,[bt,xt,s(k,{class:"my-5 primary-font",rounded:"lg",size:"x-large"},{default:f(()=>[R("Ver Todo")]),_:1})]),u("div",Ct,[(y(!0),C($,null,M(t.value,(r,n)=>(y(),C("div",{key:n},[s(mt,{class:"generic-desktop-card",genericCardData:r},null,8,["genericCardData"]),s(Ae,{class:"generic-mobile-card",cardData:r},null,8,["cardData"])]))),128))]),u("div",wt,[s(gt)])])]))}};var Wt=B(Vt,[["__scopeId","data-v-677f91ae"]]);export{Wt as default};
