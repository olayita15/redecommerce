import{g as P,ao as he,j as et,m as T,i as ye,p as L,k as C,ap as tt,aq as _e,a as ee,o as te,q as at,u as ne,s as z,C as E,x as $,aa as nt,e as n,c as R,w as G,N as le,I as M,n as be,J as Ce,F as H,f as U,y as Q,G as lt,ai as it,L as Se,v as ke,ar as st,B as ot,Q as F,a1 as ue,U as A,R as Y,a0 as Ve,as as rt,a8 as ct,at as ut,au as dt,r as vt,V as Z,_ as mt,S as V,a2 as O,av as ft}from"./index.5e40e05b.js";import{q as gt,j as N,r as p,s as xe,t as we,v as Ie,b as ht,I as yt,M as W,w as _t,x as bt,h as ae,a as Ae,y as Be,z as Pe,A as Le,i as De,c as Ee,B as Ct,V as Te,C as Re,k as St,l as kt,f as Vt,m as xt,D as wt,E as It,R as At,n as Bt,o as Pt,g as Lt,e as Dt,F as Et,G as Tt,L as Rt,p as jt}from"./VDivider.1f5afc39.js";import{m as K}from"./tag.1d56ad5c.js";/* empty css              */function ie(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return P()({name:t!=null?t:he(et(e.replace(/__/g,"-"))),props:{tag:{type:String,default:l},...T()},setup(a,o){let{slots:s}=o;return()=>{var i;return ye(a.tag,{class:[e,a.class],style:a.style},(i=s.default)==null?void 0:i.call(s))}}})}const se=["start","end","center"],je=["space-between","space-around","space-evenly"];function oe(e,l){return tt.reduce((t,a)=>{const o=e+he(a);return t[o]=l(),t},{})}const $t=[...se,"baseline","stretch"],$e=e=>$t.includes(e),ze=oe("align",()=>({type:String,default:null,validator:$e})),zt=[...se,...je],Me=e=>zt.includes(e),Fe=oe("justify",()=>({type:String,default:null,validator:Me})),Mt=[...se,...je,"stretch"],He=e=>Mt.includes(e),Ne=oe("alignContent",()=>({type:String,default:null,validator:He})),de={align:Object.keys(ze),justify:Object.keys(Fe),alignContent:Object.keys(Ne)},Ft={align:"align",justify:"justify",alignContent:"align-content"};function Ht(e,l,t){let a=Ft[e];if(t!=null)return l&&(a+=`-${l.replace(e,"")}`),a+=`-${t}`,a.toLowerCase()}const Nt=L({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$e},...ze,justify:{type:String,default:null,validator:Me},...Fe,alignContent:{type:String,default:null,validator:He},...Ne,...T(),...K()},"VRow"),Xt=P()({name:"VRow",props:Nt(),setup(e,l){let{slots:t}=l;const a=C(()=>{const o=[];let s;for(s in de)de[s].forEach(i=>{const u=e[i],c=Ht(s,i,u);c&&o.push(c)});return o.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),o});return()=>{var o;return ye(e.tag,{class:["v-row",a.value,e.class],style:e.style},(o=t.default)==null?void 0:o.call(t))}}});const Ot=e=>{const{touchstartX:l,touchendX:t,touchstartY:a,touchendY:o}=e,s=.5,i=16;e.offsetX=t-l,e.offsetY=o-a,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&t<l-i&&e.left(e),e.right&&t>l+i&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&o<a-i&&e.up(e),e.down&&o>a+i&&e.down(e))};function Wt(e,l){var a;const t=e.changedTouches[0];l.touchstartX=t.clientX,l.touchstartY=t.clientY,(a=l.start)==null||a.call(l,{originalEvent:e,...l})}function Yt(e,l){var a;const t=e.changedTouches[0];l.touchendX=t.clientX,l.touchendY=t.clientY,(a=l.end)==null||a.call(l,{originalEvent:e,...l}),Ot(l)}function Gt(e,l){var a;const t=e.changedTouches[0];l.touchmoveX=t.clientX,l.touchmoveY=t.clientY,(a=l.move)==null||a.call(l,{originalEvent:e,...l})}function Ut(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const l={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Wt(t,l),touchend:t=>Yt(t,l),touchmove:t=>Gt(t,l)}}function qt(e,l){var u,c,r;const t=l.value,a=t!=null&&t.parent?e.parentElement:e,o=(u=t==null?void 0:t.options)!=null?u:{passive:!0},s=(c=l.instance)==null?void 0:c.$.uid;if(!a||!s)return;const i=Ut(l.value);a._touchHandlers=(r=a._touchHandlers)!=null?r:Object.create(null),a._touchHandlers[s]=i,_e(i).forEach(d=>{a.addEventListener(d,i[d],o)})}function Kt(e,l){var s,i;const t=(s=l.value)!=null&&s.parent?e.parentElement:e,a=(i=l.instance)==null?void 0:i.$.uid;if(!(t!=null&&t._touchHandlers)||!a)return;const o=t._touchHandlers[a];_e(o).forEach(u=>{t.removeEventListener(u,o[u])}),delete t._touchHandlers[a]}const Xe={mounted:qt,unmounted:Kt};var Jt=Xe;const Oe=Symbol.for("vuetify:v-window"),We=Symbol.for("vuetify:v-window-group"),Ye=L({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...T(),...K(),...ee()},"VWindow"),ve=P()({name:"VWindow",directives:{Touch:Xe},props:Ye(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{themeClasses:a}=te(e),{isRtl:o}=at(),{t:s}=ne(),i=gt(e,We),u=z(),c=C(()=>o.value?!e.reverse:e.reverse),r=E(!1),d=C(()=>{const h=e.direction==="vertical"?"y":"x",w=(c.value?!r.value:r.value)?"-reverse":"";return`v-window-${h}${w}-transition`}),f=E(0),x=z(void 0),I=C(()=>i.items.value.findIndex(h=>i.selected.value.includes(h.id)));$(I,(h,S)=>{const w=i.items.value.length,B=w-1;w<=2?r.value=h<S:h===B&&S===0?r.value=!0:h===0&&S===B?r.value=!1:r.value=h<S}),nt(Oe,{transition:d,isReversed:r,transitionCount:f,transitionHeight:x,rootRef:u});const _=C(()=>e.continuous||I.value!==0),m=C(()=>e.continuous||I.value!==i.items.value.length-1);function g(){_.value&&i.prev()}function y(){m.value&&i.next()}const b=C(()=>{const h=[],S={icon:o.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:i.prev,ariaLabel:s("$vuetify.carousel.prev")};h.push(_.value?t.prev?t.prev({props:S}):n(N,S,null):n("div",null,null));const w={icon:o.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:i.next,ariaLabel:s("$vuetify.carousel.next")};return h.push(m.value?t.next?t.next({props:w}):n(N,w,null):n("div",null,null)),h}),D=C(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?g():y()},right:()=>{c.value?y():g()},start:S=>{let{originalEvent:w}=S;w.stopPropagation()}},...e.touch===!0?{}:e.touch});return R(()=>G(n(e.tag,{ref:u,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},a.value,e.class],style:e.style},{default:()=>{var h,S;return[n("div",{class:"v-window__container",style:{height:x.value}},[(h=t.default)==null?void 0:h.call(t,{group:i}),e.showArrows!==!1&&n("div",{class:"v-window__controls"},[b.value])]),(S=t.additional)==null?void 0:S.call(t,{group:i})]}}),[[le("touch"),D.value]])),{group:i}}}),Qt=L({color:String,cycle:Boolean,delimiterIcon:{type:M,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Ye({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Zt=P()({name:"VCarousel",props:Qt(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const a=be(e,"modelValue"),{t:o}=ne(),s=z();let i=-1;$(a,c),$(()=>e.interval,c),$(()=>e.cycle,r=>{r?c():window.clearTimeout(i)}),Ce(u);function u(){!e.cycle||!s.value||(i=window.setTimeout(s.value.group.next,+e.interval>0?+e.interval:6e3))}function c(){window.clearTimeout(i),window.requestAnimationFrame(u)}return R(()=>{const[r]=ve.filterProps(e);return n(ve,U({ref:s},r,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:Q(e.height)},e.style]}),{default:t.default,additional:d=>{let{group:f}=d;return n(H,null,[!e.hideDelimiters&&n("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[f.items.value.length>0&&n(p,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[f.items.value.map((x,I)=>{const _={id:`carousel-item-${x.id}`,"aria-label":o("$vuetify.carousel.ariaLabel.delimiter",I+1,f.items.value.length),class:[f.isSelected(x.id)&&"v-btn--active"],onClick:()=>f.select(x.id,!0)};return t.item?t.item({props:_,item:x}):n(N,U(x,_),null)})]})]),e.progress&&n(xe,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(f.getItemIndex(a.value)+1)/f.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}});function pt(e){return{aspectStyles:C(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const Ge=L({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...T(),...we()},"VResponsive"),me=P()({name:"VResponsive",props:Ge(),setup(e,l){let{slots:t}=l;const{aspectStyles:a}=pt(e),{dimensionStyles:o}=Ie(e);return R(()=>{var s;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[o.value,e.style]},[n("div",{class:"v-responsive__sizer",style:a.value},null),(s=t.additional)==null?void 0:s.call(t),t.default&&n("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),Ue=L({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Ge(),...T(),...ht()},"VImg"),q=P()({name:"VImg",directives:{intersect:yt},props:Ue(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:t,slots:a}=l;const o=E(""),s=z(),i=E(e.eager?"loading":"idle"),u=E(),c=E(),r=C(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),d=C(()=>r.value.aspect||u.value/c.value||0);$(()=>e.src,()=>{f(i.value!=="idle")}),$(d,(v,k)=>{!v&&k&&s.value&&g(s.value)}),lt(()=>f());function f(v){if(!(e.eager&&v)&&!(it&&!v&&!e.eager)){if(i.value="loading",r.value.lazySrc){const k=new Image;k.src=r.value.lazySrc,g(k,null)}!r.value.src||Se(()=>{var k,j;if(t("loadstart",((k=s.value)==null?void 0:k.currentSrc)||r.value.src),(j=s.value)!=null&&j.complete){if(s.value.naturalWidth||I(),i.value==="error")return;d.value||g(s.value,null),x()}else d.value||g(s.value),_()})}}function x(){var v;_(),i.value="loaded",t("load",((v=s.value)==null?void 0:v.currentSrc)||r.value.src)}function I(){var v;i.value="error",t("error",((v=s.value)==null?void 0:v.currentSrc)||r.value.src)}function _(){const v=s.value;v&&(o.value=v.currentSrc||v.src)}let m=-1;function g(v){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const j=()=>{clearTimeout(m);const{naturalHeight:J,naturalWidth:X}=v;J||X?(u.value=X,c.value=J):!v.complete&&i.value==="loading"&&k!=null?m=window.setTimeout(j,k):(v.currentSrc.endsWith(".svg")||v.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,c.value=1)};j()}const y=C(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),b=()=>{var j;if(!r.value.src||i.value==="idle")return null;const v=n("img",{class:["v-img__img",y.value],src:r.value.src,srcset:r.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:x,onError:I},null),k=(j=a.sources)==null?void 0:j.call(a);return n(W,{transition:e.transition,appear:!0},{default:()=>[G(k?n("picture",{class:"v-img__picture"},[k,v]):v,[[ke,i.value==="loaded"]])]})},D=()=>n(W,{transition:e.transition},{default:()=>[r.value.lazySrc&&i.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",y.value],src:r.value.lazySrc,alt:e.alt},null)]}),h=()=>a.placeholder?n(W,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!a.error)&&n("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,S=()=>a.error?n(W,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&n("div",{class:"v-img__error"},[a.error()])]}):null,w=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=E(!1);{const v=$(d,k=>{k&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),v())})}return R(()=>{const[v]=me.filterProps(e);return G(n(me,U({class:["v-img",{"v-img--booting":!B.value},e.class],style:[{width:Q(e.width==="auto"?u.value:e.width)},e.style]},v,{aspectRatio:d.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(H,null,[n(b,null,null),n(D,null,null),n(w,null,null),n(h,null,null),n(S,null,null)]),default:a.default}),[[le("intersect"),{handler:f,options:e.options},null,{once:!0}]])}),{currentSrc:o,image:s,state:i,naturalWidth:u,naturalHeight:c}}}),ea=L({eager:Boolean},"lazy");function ta(e,l){const t=E(!1),a=C(()=>t.value||e.eager||l.value);$(l,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}function aa(){const e=E(!1);return Ce(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:C(()=>e.value?void 0:{transition:"none !important"}),isBooted:st(e)}}const qe=L({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...T(),..._t(),...ea()},"VWindowItem"),fe=P()({name:"VWindowItem",directives:{Touch:Jt},props:qe(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const a=ot(Oe),o=bt(e,We),{isBooted:s}=aa();if(!a||!o)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const i=E(!1),u=C(()=>s.value&&(a.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!i.value||!a||(i.value=!1,a.transitionCount.value>0&&(a.transitionCount.value-=1,a.transitionCount.value===0&&(a.transitionHeight.value=void 0)))}function r(){var _;i.value||!a||(i.value=!0,a.transitionCount.value===0&&(a.transitionHeight.value=Q((_=a.rootRef.value)==null?void 0:_.clientHeight)),a.transitionCount.value+=1)}function d(){c()}function f(_){!i.value||Se(()=>{!u.value||!i.value||!a||(a.transitionHeight.value=Q(_.clientHeight))})}const x=C(()=>{const _=a.isReversed.value?e.reverseTransition:e.transition;return u.value?{name:typeof _!="string"?a.transition.value:_,onBeforeEnter:r,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:r,onAfterLeave:c,onLeaveCancelled:d,onEnter:f}:!1}),{hasContent:I}=ta(e,o.isSelected);return R(()=>n(W,{transition:x.value,disabled:!s.value},{default:()=>{var _;return[G(n("div",{class:["v-window-item",o.selectedClass.value,e.class],style:e.style},[I.value&&((_=t.default)==null?void 0:_.call(t))]),[[ke,o.isSelected.value]])]}})),{}}}),na=L({...Ue(),...qe()},"VCarouselItem"),la=P()({name:"VCarouselItem",inheritAttrs:!1,props:na(),setup(e,l){let{slots:t,attrs:a}=l;R(()=>{const[o]=q.filterProps(e),[s]=fe.filterProps(e);return n(fe,U({class:"v-carousel-item"},s),{default:()=>[n(q,U(a,o),t)]})})}}),ia={__name:"principalCarrousel",setup(e){const l=z([{src:"https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/331717636_573404524742698_5087273115374914680_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeG9_zj9kyYFpYHB8Q7p6oe9lw9jKSPV53-XD2MpI9Xnf8DeqYZE2cV8sOHngTozbqk&_nc_ohc=jpEjifDVvG4AX9F0tQk&_nc_ht=scontent.fbog4-1.fna&oh=00_AfByBEwYx6Zf5O5QdFbE7mEzyj76piunuDENUWwQn3HU-w&oe=65BDBA83"},{src:"https://scontent.fbog4-2.fna.fbcdn.net/v/t31.18172-8/17504266_1603376729690563_4427257886941544040_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=Z70cyt9zXwkAX8lRKvc&_nc_ht=scontent.fbog4-2.fna&oh=00_AfBh9cKWVrIhw-OGo_RvZPUxqf3Ogo00KoalbQkW-W8Heg&oe=65D8192A"},{src:"https://scontent.fbog4-1.fna.fbcdn.net/v/t31.18172-8/11052022_1018825364812372_563942574491331374_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=J3gOD_2cA9cAX-LxAwS&_nc_ht=scontent.fbog4-1.fna&oh=00_AfBCdkBHEDqX8NPLdUdhSLqGdFCjBFcnCp50hAZ-Vp0fng&oe=65D81E38"},{src:"https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/289670524_399129988906174_5275446146119067894_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9534ce&_nc_ohc=y3qjVS2pKH0AX8su0JW&_nc_oc=AQns4bEUfH70HE-ONzRSFJ64eZAEKTRgBfcjLffb5kQ_ukEP-1xjteE-D4GoVzXpQmo&_nc_ht=scontent.fbog4-2.fna&oh=00_AfBJ_ReTgo0ehM0mRJUlrF7I5hOLtdLi-CaiPjh6y1czVg&oe=65B6624D"}]);return(t,a)=>(F(),ue(Zt,{cycle:"","show-arrows":"hover",height:"400","hide-delimiters":"",progress:"red"},{default:A(()=>[(F(!0),Y(H,null,Ve(l.value,(o,s)=>(F(),ue(la,{key:s,src:o.src,cover:""},{default:A(()=>[rt(t.$slots,"default",{index:s})]),_:2},1032,["src"]))),128))]),_:3}))}};const Ke=P()({name:"VCardActions",props:T(),setup(e,l){let{slots:t}=l;return ct({VBtn:{variant:"text"}}),R(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Je=ie("v-card-subtitle"),Qe=ie("v-card-title");const sa=L({start:Boolean,end:Boolean,icon:M,image:String,...T(),...ae(),...Ae(),...Be(),...K(),...ee(),...Pe({variant:"flat"})},"VAvatar"),ge=P()({name:"VAvatar",props:sa(),setup(e,l){let{slots:t}=l;const{themeClasses:a}=te(e),{colorClasses:o,colorStyles:s,variantClasses:i}=Le(e),{densityClasses:u}=De(e),{roundedClasses:c}=Ee(e),{sizeClasses:r,sizeStyles:d}=Ct(e);return R(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,u.value,c.value,r.value,i.value,e.class],style:[s.value,d.value,e.style]},{default:()=>{var f;return[e.image?n(q,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(Te,{key:"icon",icon:e.icon},null):(f=t.default)==null?void 0:f.call(t),Re(!1,"v-avatar")]}})),{}}}),oa=L({appendAvatar:String,appendIcon:M,prependAvatar:String,prependIcon:M,subtitle:String,title:String,...T(),...ae()},"VCardItem"),Ze=P()({name:"VCardItem",props:oa(),setup(e,l){let{slots:t}=l;return R(()=>{var r;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),i=!!(s||t.append),u=!!(e.title||t.title),c=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[o&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(p,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(ge,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[u&&n(Qe,{key:"title"},{default:()=>{var d,f;return[(f=(d=t.title)==null?void 0:d.call(t))!=null?f:e.title]}}),c&&n(Je,{key:"subtitle"},{default:()=>{var d,f;return[(f=(d=t.subtitle)==null?void 0:d.call(t))!=null?f:e.subtitle]}}),(r=t.default)==null?void 0:r.call(t)]),i&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(p,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(ge,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),pe=ie("v-card-text"),ra=L({appendAvatar:String,appendIcon:M,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...St(),...T(),...ae(),...we(),...kt(),...Vt(),...xt(),...wt(),...Ae(),...It(),...K(),...ee(),...Pe({variant:"elevated"})},"VCard"),ca=P()({name:"VCard",directives:{Ripple:At},props:ra(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:o}=te(e),{borderClasses:s}=Bt(e),{colorClasses:i,colorStyles:u,variantClasses:c}=Le(e),{densityClasses:r}=De(e),{dimensionStyles:d}=Ie(e),{elevationClasses:f}=Pt(e),{loaderClasses:x}=Lt(e),{locationStyles:I}=Dt(e),{positionClasses:_}=Et(e),{roundedClasses:m}=Ee(e),g=Tt(e,t),y=C(()=>e.link!==!1&&g.isLink.value),b=C(()=>!e.disabled&&e.link!==!1&&(e.link||g.isClickable.value));return R(()=>{const D=y.value?"a":e.tag,h=!!(a.title||e.title),S=!!(a.subtitle||e.subtitle),w=h||S,B=!!(a.append||e.appendAvatar||e.appendIcon),v=!!(a.prepend||e.prependAvatar||e.prependIcon),k=!!(a.image||e.image),j=w||v||B,J=!!(a.text||e.text);return G(n(D,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":b.value},o.value,s.value,i.value,r.value,f.value,x.value,_.value,m.value,c.value,e.class],style:[u.value,d.value,I.value,e.style],href:g.href.value,onClick:b.value&&g.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var X;return[k&&n("div",{key:"image",class:"v-card__image"},[a.image?n(p,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(q,{key:"image-img",cover:!0,src:e.image},null)]),n(Rt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),j&&n(Ze,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),J&&n(pe,{key:"text"},{default:()=>{var re,ce;return[(ce=(re=a.text)==null?void 0:re.call(a))!=null?ce:e.text]}}),(X=a.default)==null?void 0:X.call(a),a.actions&&n(Ke,null,{default:a.actions}),Re(b.value,"v-card")]}}),[[le("ripple"),b.value&&e.ripple]])}),{}}});const ua=L({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:M,default:"$ratingEmpty"},fullIcon:{type:M,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...T(),...ae(),...Be(),...K(),...ee()},"VRating"),da=P()({name:"VRating",props:ua(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{t:a}=ne(),{themeClasses:o}=te(e),s=be(e,"modelValue"),i=C(()=>ut(parseFloat(s.value),0,+e.length)),u=C(()=>dt(Number(e.length),1)),c=C(()=>u.value.flatMap(m=>e.halfIncrements?[m-.5,m]:[m])),r=E(-1),d=C(()=>c.value.map(m=>{var B;const g=e.hover&&r.value>-1,y=i.value>=m,b=r.value>=m,h=(g?b:y)?e.fullIcon:e.emptyIcon,S=(B=e.activeColor)!=null?B:e.color,w=y||b?S:e.color;return{isFilled:y,isHovered:b,icon:h,color:w}})),f=C(()=>[0,...c.value].map(m=>{function g(){r.value=m}function y(){r.value=-1}function b(){e.disabled||e.readonly||(s.value=i.value===m&&e.clearable?0:m)}return{onMouseenter:e.hover?g:void 0,onMouseleave:e.hover?y:void 0,onClick:b}})),x=C(()=>{var m;return(m=e.name)!=null?m:`v-rating-${vt()}`});function I(m){var v,k;let{value:g,index:y,showStar:b=!0}=m;const{onMouseenter:D,onMouseleave:h,onClick:S}=f.value[y+1],w=`${x.value}-${String(g).replace(".","-")}`,B={color:(v=d.value[y])==null?void 0:v.color,density:e.density,disabled:e.disabled,icon:(k=d.value[y])==null?void 0:k.icon,ripple:e.ripple,size:e.size,variant:"plain"};return n(H,null,[n("label",{for:w,class:{"v-rating__item--half":e.halfIncrements&&g%1>0,"v-rating__item--full":e.halfIncrements&&g%1===0},onMouseenter:D,onMouseleave:h,onClick:S},[n("span",{class:"v-rating__hidden"},[a(e.itemAriaLabel,g,e.length)]),b?t.item?t.item({...d.value[y],props:B,value:g,index:y,rating:i.value}):n(N,B,null):void 0]),n("input",{class:"v-rating__hidden",name:x.value,id:w,type:"radio",value:g,checked:i.value===g,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function _(m){return t["item-label"]?t["item-label"](m):m.label?n("span",null,[m.label]):n("span",null,[Z("\xA0")])}return R(()=>{var g;const m=!!((g=e.itemLabels)!=null&&g.length)||t["item-label"];return n(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},o.value,e.class],style:e.style},{default:()=>[n(I,{value:0,index:-1,showStar:!1},null),u.value.map((y,b)=>{var D,h;return n("div",{class:"v-rating__wrapper"},[m&&e.itemLabelPosition==="top"?_({value:y,index:b,label:(D=e.itemLabels)==null?void 0:D[b]}):void 0,n("div",{class:"v-rating__item"},[e.halfIncrements?n(H,null,[n(I,{value:y-.5,index:b*2},null),n(I,{value:y,index:b*2+1},null)]):n(I,{value:y,index:b},null)]),m&&e.itemLabelPosition==="bottom"?_({value:y,index:b,label:(h=e.itemLabels)==null?void 0:h[b]}):void 0])})]})}),{}}}),va={class:""},ma={class:"title-text"},fa={class:"me-1"},ga={class:"text-grey ms-4"},ha={class:"mt-5 max-width",style:{height:"50px"}},ya={class:"mt-4 text-subtitle-1"},_a={class:"product-price mt-5"},ba=["src"],Ca={__name:"genericCard",props:["genericCardData"],setup(e){const l=e,t=z(!1);z(1);const a=()=>{t.value=!0,setTimeout(()=>t.value=!1,2e3)};(()=>{switch(l.genericCardData.category){case"libro":return"Editoriales disponibles";case"ropa":return"Tallas disponibles";case"accesorio":return"Colores disponibles";default:return"Opciones disponibles"}})();const s=i=>typeof i!="number"?"Invalid Price":new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(i);return(i,u)=>(F(),Y(H,null,[n(q,{class:"image",width:300,"aspect-ratio":"16/9","max-height":"300",src:e.genericCardData.image||"https://cdn.vuetifyjs.com/images/cards/cooking.png"},null,8,["src"]),V("div",va,[n(ca,{loading:t.value,class:"mx-auto card-box elevation-5 my-6",width:"374",height:"400"},{loader:A(({isActive:c})=>[n(xe,{active:c,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:A(()=>[n(Ze,{class:"max-width"},{default:A(()=>[n(Qe,null,{default:A(()=>[V("div",ma,[V("span",null,O(e.genericCardData.title||"Default Title"),1)])]),_:1}),n(Je,{class:"max-width"},{default:A(()=>[V("span",fa,O(e.genericCardData.subtitle||"Default Subtitle"),1),n(Te,{color:e.genericCardData.iconColor||"error",icon:e.genericCardData.icon||"mdi-fire-circle",size:"small"},null,8,["color","icon"])]),_:1})]),_:1}),n(pe,{class:"my-1"},{default:A(()=>[n(Xt,{align:"center",class:"mx-0"},{default:A(()=>[n(da,{"model-value":e.genericCardData.rating||4.5,color:"amber",density:"compact","half-increments":"",readonly:"",size:"small"},null,8,["model-value"]),V("div",ga,O(`${e.genericCardData.rating||4.5} (${e.genericCardData.reviews||0})`),1)]),_:1}),V("div",ha,O(e.genericCardData.description||"Default Description"),1),V("div",ya,[V("span",_a,[Z(" COP"),V("b",null,O(s(e.genericCardData.price)||""),1)])])]),_:1}),n(jt,{class:"mx-4 mb-1"}),n(Ke,{class:"card-actions"},{default:A(()=>[n(N,{color:"deep-purple-lighten-2",variant:"text",onClick:a},{default:A(()=>[Z(" Ver m\xE1s ")]),_:1}),V("img",{src:e.genericCardData.logo||"https://cdn.vuetifyjs.com/images/cards/cooking.png",alt:"logo",class:"card-logo",width:"65"},null,8,ba)]),_:1})]),_:1},8,["loading"])])],64))}};var Sa=mt(Ca,[["__scopeId","data-v-2c203532"]]);const ka={class:"first-page"},Va=V("div",null,"Contenido para el primer slide",-1),xa={class:"d-flex flex-column justify-center align-center my-10"},wa={class:"d-flex flex-column justify-xl-space-evenly align-center"},Ia=V("div",{class:"my-5"},[V("h1",null,"Art\xEDculos m\xE1s vendidos")],-1),Aa=V("span",{class:"my-5"},"Explora nuestros art\xEDculos m\xE1s populares",-1),Ba={class:"d-flex flex-row justify-space-evenly align-center flex-wrap"},Ta={__name:"homeFirstPage",setup(e){const l=z([{title:"Camiseta Revoluci\xF3n Comunista",subtitle:"Favorito de la Localidad",iconColor:"red",icon:"mdi-fire-circle",rating:4.5,reviews:413,price:3e4,description:"Expresa tu apoyo a la revoluci\xF3n con esta elegante camiseta de tem\xE1tica comunista.",availability:["XS","S","M","L","XL"],image:"https://acdn.mitiendanube.com/stores/605/358/products/37n1-48054e5e8a19c7b9f716249053342208-640-0.png",category:"ropa",logo:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Juco.jpg"},{title:"Discusiones marxistas para la revoluci\xF3n en Colombia",subtitle:"Juan Sebasti\xE1n Cristancho Rojas",iconColor:"red",icon:"mdi-fire-circle",rating:4.7,reviews:200,price:3999,description:"Mantente abrigado y con estilo con esta acogedora sudadera que promueve la unidad de los trabajadores.",availability:["Teor\xEDa & Praxis"],image:"https://www.progresando.com/wp-content/uploads/2023/06/KesaneMX-Manifiesto-comunista-El-Karl-Marx-Engeles-GL-EMU.fw_.png",category:"libro",logo:"https://semanariovoz.com/wp-content/uploads/2015/04/09/teopraxisplano21.gif"},{title:"Mochila S\xEDmbolo de Igualdad",subtitle:"Lleva el Mensaje a Todas Partes",iconColor:"red",icon:"mdi-fire-circle",rating:4.5,reviews:180,price:4999,description:"Difunde el mensaje de igualdad y solidaridad con esta vers\xE1til mochila.",availability:["Rojo","Negro"],image:"https://images.creativefabrica.com/products/thumbnails/2023/09/04/tYvYxGtKe/2Uv67oT2m9vDEgyUCWGHyZy4kLZ.png",category:"accesorio",logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg/181px-Coat_of_arms_of_the_Soviet_Union_%281923%E2%80%931936%29.svg.png"}]);return(t,a)=>(F(),Y("div",ka,[n(ia,null,ft({_:2},[t.index===0?{name:"default",fn:A(({index:o})=>[Va]),key:"0"}:t.index===1?{name:"default",fn:A(({index:o})=>[V("div",null,"Contenido para el segundo slide")]),key:"1"}:{name:"default",fn:A(({index:o})=>[V("div",null,"Contenido para otros slides")]),key:"2"}]),1024),V("div",xa,[V("div",wa,[Ia,Aa,n(N,{class:"my-5",rounded:"lg",size:"x-large"},{default:A(()=>[Z("Ver Todo")]),_:1})]),V("div",Ba,[(F(!0),Y(H,null,Ve(l.value,(o,s)=>(F(),Y("div",{class:"mx-15",key:s},[n(Sa,{genericCardData:o},null,8,["genericCardData"])]))),128))])])]))}};export{Ta as default};
