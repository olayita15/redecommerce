import{p as A,m as Q,g as L,u as N,c as l,a as ce,t as K,b as de,d as Ie,s as O,e as v,f as We,h as J,r as V,i as qe,w as Z,o as Je,j as Ye,k as Pe,l as Be,n as Xe,q as we,v as X,x as Ge,y as ve,z as ke,I as ne,E as oe,A as Ke,F as Y,B as Qe,C as Ze,D as et,G as tt,H as at,J as _e,K as lt,_ as Te,L as nt,M as G,N as ae,O as x,P as xe,Q as p,R as ot,S as ee,T as it,U as st,V as rt,W as ut,X as ct,Y as Fe,Z as dt,$ as vt,a0 as ft,a1 as mt}from"./index.2aa81676.js";import{u as gt,m as ht,V as E}from"./ssrBoot.33908502.js";import{m as fe}from"./tag.f5a3020d.js";import{V as yt,a as bt,b as _t}from"./index.3139f058.js";import{m as Re,a as $e,b as me,u as ge,c as Ae,d as Le,e as he,V as xt,f as ie,g as pt,M as Vt,h as Ct,i as St,j as It,L as Pt,I as Bt,k as wt}from"./VDivider.03fd6b8f.js";import{V as kt,m as Tt,u as Ne,a as Ft,b as Rt,c as pe,d as $t,e as Ve,f as At}from"./VInput.5602e7c8.js";import{V as Ce}from"./VContainer.864c282e.js";class se{constructor(i){let{x:t,y:o,width:a,height:n}=i;this.x=t,this.y=o,this.width=a,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Lt(e){const i=e.getBoundingClientRect(),t=getComputedStyle(e),o=t.transform;if(o){let a,n,s,r,u;if(o.startsWith("matrix3d("))a=o.slice(9,-1).split(/, /),n=+a[0],s=+a[5],r=+a[12],u=+a[13];else if(o.startsWith("matrix("))a=o.slice(7,-1).split(/, /),n=+a[0],s=+a[3],r=+a[4],u=+a[5];else return new se(i);const c=t.transformOrigin,f=i.x-r-(1-n)*parseFloat(c),h=i.y-u-(1-s)*parseFloat(c.slice(c.indexOf(" ")+1)),y=n?i.width/n:e.offsetWidth+1,m=s?i.height/s:e.offsetHeight+1;return new se({x:f,y:h,width:y,height:m})}else return new se(i)}function Nt(e,i,t){if(typeof e.animate=="undefined")return{finished:Promise.resolve()};let o;try{o=e.animate(i,t)}catch{return{finished:Promise.resolve()}}return typeof o.finished=="undefined"&&(o.finished=new Promise(a=>{o.onfinish=()=>{a(o)}})),o}const Dt="cubic-bezier(0.4, 0, 0.2, 1)";const Et=A({text:String,...Q(),...fe()},"VToolbarTitle"),De=L()({name:"VToolbarTitle",props:Et(),setup(e,i){let{slots:t}=i;return N(()=>{const o=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[o&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),Ot=[null,"prominent","default","comfortable","compact"],Ee=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ot.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Re(),...Q(),...$e(),...me(),...fe({tag:"header"}),...ce()},"VToolbar"),Se=L()({name:"VToolbar",props:Ee(),setup(e,i){var m;let{slots:t}=i;const{backgroundColorClasses:o,backgroundColorStyles:a}=ge(K(e,"color")),{borderClasses:n}=Ae(e),{elevationClasses:s}=Le(e),{roundedClasses:r}=he(e),{themeClasses:u}=de(e),{rtlClasses:c}=Ie(),f=O(!!(e.extended||((m=t.extension)==null?void 0:m.call(t)))),h=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=v(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return We({VBtn:{variant:"text"}}),N(()=>{var d;const b=!!(e.title||t.title),_=!!(t.image||e.image),D=(d=t.extension)==null?void 0:d.call(t);return f.value=!!(e.extended||D),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,n.value,s.value,r.value,u.value,c.value,e.class],style:[a.value,e.style]},{default:()=>[_&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(ie,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(xt,{key:"image-img",cover:!0,src:e.image},null)]),l(ie,{defaults:{VTabs:{height:J(h.value)}}},{default:()=>{var w,C,I;return[l("div",{class:"v-toolbar__content",style:{height:J(h.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(w=t.prepend)==null?void 0:w.call(t)]),b&&l(De,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(I=t.append)==null?void 0:I.call(t)])])]}}),l(ie,{defaults:{VTabs:{height:J(y.value)}}},{default:()=>[l(yt,null,{default:()=>[f.value&&l("div",{class:"v-toolbar__extension",style:{height:J(y.value)}},[D])]})]})]})}),{contentHeight:h,extensionHeight:y}}}),zt=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Mt(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=i;let o=0;const a=V(null),n=O(0),s=O(0),r=O(0),u=O(!1),c=O(!1),f=v(()=>Number(e.scrollThreshold)),h=v(()=>qe((f.value-n.value)/f.value||0)),y=()=>{const m=a.value;!m||t&&!t.value||(o=n.value,n.value="window"in m?m.pageYOffset:m.scrollTop,c.value=n.value<o,r.value=Math.abs(n.value-f.value))};return Z(c,()=>{s.value=s.value||n.value}),Z(u,()=>{s.value=0}),Je(()=>{Z(()=>e.scrollTarget,m=>{var _;const b=m?document.querySelector(m):window;!b||b!==a.value&&((_=a.value)==null||_.removeEventListener("scroll",y),a.value=b,a.value.addEventListener("scroll",y,{passive:!0}))},{immediate:!0})}),Ye(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",y)}),t&&Z(t,y,{immediate:!0}),{scrollThreshold:f,currentScroll:n,currentThreshold:r,isScrollActive:u,scrollRatio:h,isScrollingUp:c,savedScroll:s}}const jt=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ee(),...Pe(),...zt(),height:{type:[Number,String],default:64}},"VAppBar"),Ht=L()({name:"VAppBar",props:jt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const o=V(),a=Be(e,"modelValue"),n=v(()=>{var w,C;const d=new Set((C=(w=e.scrollBehavior)==null?void 0:w.split(" "))!=null?C:[]);return{hide:d.has("hide"),inverted:d.has("inverted"),collapse:d.has("collapse"),elevate:d.has("elevate"),fadeImage:d.has("fade-image")}}),s=v(()=>{const d=n.value;return d.hide||d.inverted||d.collapse||d.elevate||d.fadeImage||!a.value}),{currentScroll:r,scrollThreshold:u,isScrollingUp:c,scrollRatio:f}=Mt(e,{canScroll:s}),h=v(()=>e.collapse||n.value.collapse&&(n.value.inverted?f.value>0:f.value===0)),y=v(()=>e.flat||n.value.elevate&&(n.value.inverted?r.value>0:r.value===0)),m=v(()=>n.value.fadeImage?n.value.inverted?1-f.value:f.value:void 0),b=v(()=>{var C,I,z,g;if(n.value.hide&&n.value.inverted)return 0;const d=(I=(C=o.value)==null?void 0:C.contentHeight)!=null?I:0,w=(g=(z=o.value)==null?void 0:z.extensionHeight)!=null?g:0;return d+w});Xe(v(()=>!!e.scrollBehavior),()=>{Ge(()=>{n.value.hide?n.value.inverted?a.value=r.value>u.value:a.value=c.value||r.value<u.value:a.value=!0})});const{ssrBootStyles:_}=gt(),{layoutItemStyles:D}=we({id:e.name,order:v(()=>parseInt(e.order,10)),position:K(e,"location"),layoutSize:b,elementSize:O(void 0),active:a,absolute:K(e,"absolute")});return N(()=>{const[d]=Se.filterProps(e);return l(Se,X({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...D.value,"--v-toolbar-image-opacity":m.value,height:void 0,..._.value},e.style]},d,{collapse:h.value,flat:y.value}),t)}),{}}}),Ut=A({...ht({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Wt=L()({name:"VAppBarNavIcon",props:Ut(),setup(e,i){let{slots:t}=i;return N(()=>l(E,X(e,{class:["v-app-bar-nav-icon"]}),t)),{}}});const qt=A({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Q(),...pt({transition:{component:bt}})},"VCounter"),Jt=L()({name:"VCounter",functional:!0,props:qt(),setup(e,i){let{slots:t}=i;const o=v(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return N(()=>l(Vt,{transition:e.transition},{default:()=>[ve(l("div",{class:["v-counter",e.class],style:e.style},[t.default?t.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[ke,e.active]])]})),{}}});const Yt=A({floating:Boolean,...Q()},"VFieldLabel"),te=L()({name:"VFieldLabel",props:Yt(),setup(e,i){let{slots:t}=i;return N(()=>l(kt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},t)),{}}}),Xt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Oe=A({appendInnerIcon:ne,bgColor:String,clearable:Boolean,clearIcon:{type:ne,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ne,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Xt.includes(e)},"onClick:clear":oe(),"onClick:appendInner":oe(),"onClick:prependInner":oe(),...Q(),...Ct(),...me(),...ce()},"VField"),ze=L()({name:"VField",inheritAttrs:!1,props:{id:String,...Tt(),...Oe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:t,emit:o,slots:a}=i;const{themeClasses:n}=de(e),{loaderClasses:s}=St(e),{focusClasses:r,isFocused:u,focus:c,blur:f}=Ne(e),{InputIcon:h}=Ft(e),{roundedClasses:y}=he(e),{rtlClasses:m}=Ie(),b=v(()=>e.dirty||e.active),_=v(()=>!e.singleLine&&!!(e.label||a.label)),D=Ke(),d=v(()=>e.id||`input-${D}`),w=v(()=>`${d.value}-messages`),C=V(),I=V(),z=V(),g=v(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:k,backgroundColorStyles:T}=ge(K(e,"bgColor")),{textColorClasses:F,textColorStyles:ye}=It(v(()=>e.error||e.disabled?void 0:b.value&&u.value?e.color:e.baseColor));Z(b,P=>{if(_.value){const S=C.value.$el,R=I.value.$el;requestAnimationFrame(()=>{const $=Lt(S),B=R.getBoundingClientRect(),U=B.x-$.x,W=B.y-$.y-($.height/2-B.height/2),M=B.width/.75,q=Math.abs(M-$.width)>1?{maxWidth:J(M)}:void 0,j=getComputedStyle(S),be=getComputedStyle(R),je=parseFloat(j.transitionDuration)*1e3||150,He=parseFloat(be.getPropertyValue("--v-field-label-scale")),Ue=be.getPropertyValue("color");S.style.visibility="visible",R.style.visibility="hidden",Nt(S,{transform:`translate(${U}px, ${W}px) scale(${He})`,color:Ue,...q},{duration:je,easing:Dt,direction:P?"normal":"reverse"}).finished.then(()=>{S.style.removeProperty("visibility"),R.style.removeProperty("visibility")})})}},{flush:"post"});const H=v(()=>({isActive:b,isFocused:u,controlRef:z,blur:f,focus:c}));function le(P){P.target!==document.activeElement&&P.preventDefault()}return N(()=>{var U,W,M,q;const P=e.variant==="outlined",S=a["prepend-inner"]||e.prependInnerIcon,R=!!(e.clearable||a.clear),$=!!(a["append-inner"]||e.appendInnerIcon||R),B=a.label?a.label({...H.value,label:e.label,props:{for:d.value}}):e.label;return l("div",X({class:["v-field",{"v-field--active":b.value,"v-field--appended":$,"v-field--center-affix":(U=e.centerAffix)!=null?U:!g.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":S,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!B,[`v-field--variant-${e.variant}`]:!0},n.value,k.value,r.value,s.value,y.value,m.value,e.class],style:[T.value,ye.value,e.style],onClick:le},t),[l("div",{class:"v-field__overlay"},null),l(Pt,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),S&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(h,{key:"prepend-icon",name:"prependInner"},null),(W=a["prepend-inner"])==null?void 0:W.call(a,H.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&_.value&&l(te,{key:"floating-label",ref:I,class:[F.value],floating:!0,for:d.value},{default:()=>[B]}),l(te,{ref:C,for:d.value},{default:()=>[B]}),(M=a.default)==null?void 0:M.call(a,{...H.value,props:{id:d.value,class:"v-field__input","aria-describedby":w.value},focus:c,blur:f})]),R&&l(_t,{key:"clear"},{default:()=>[ve(l("div",{class:"v-field__clearable",onMousedown:j=>{j.preventDefault(),j.stopPropagation()}},[a.clear?a.clear():l(h,{name:"clear"},null)]),[[ke,e.dirty]])]}),$&&l("div",{key:"append",class:"v-field__append-inner"},[(q=a["append-inner"])==null?void 0:q.call(a,H.value),e.appendInnerIcon&&l(h,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",F.value]},[P&&l(Y,null,[l("div",{class:"v-field__outline__start"},null),_.value&&l("div",{class:"v-field__outline__notch"},[l(te,{ref:I,floating:!0,for:d.value},{default:()=>[B]})]),l("div",{class:"v-field__outline__end"},null)]),g.value&&_.value&&l(te,{ref:I,floating:!0,for:d.value},{default:()=>[B]})])])}),{controlRef:z}}});function Gt(e){const i=Object.keys(ze.props).filter(t=>!Qe(t)&&t!=="class"&&t!=="style");return Ze(e,i)}const re=Symbol("Forwarded refs");function ue(e,i){let t=e;for(;t;){const o=Reflect.getOwnPropertyDescriptor(t,i);if(o)return o;t=Object.getPrototypeOf(t)}}function Kt(e){for(var i=arguments.length,t=new Array(i>1?i-1:0),o=1;o<i;o++)t[o-1]=arguments[o];return e[re]=t,new Proxy(e,{get(a,n){if(Reflect.has(a,n))return Reflect.get(a,n);if(!(typeof n=="symbol"||n.startsWith("__"))){for(const s of t)if(s.value&&Reflect.has(s.value,n)){const r=Reflect.get(s.value,n);return typeof r=="function"?r.bind(s.value):r}}},has(a,n){if(Reflect.has(a,n))return!0;if(typeof n=="symbol"||n.startsWith("__"))return!1;for(const s of t)if(s.value&&Reflect.has(s.value,n))return!0;return!1},set(a,n,s){if(Reflect.has(a,n))return Reflect.set(a,n,s);if(typeof n=="symbol"||n.startsWith("__"))return!1;for(const r of t)if(r.value&&Reflect.has(r.value,n))return Reflect.set(r.value,n,s);return!1},getOwnPropertyDescriptor(a,n){var r,u;const s=Reflect.getOwnPropertyDescriptor(a,n);if(s)return s;if(!(typeof n=="symbol"||n.startsWith("__"))){for(const c of t){if(!c.value)continue;const f=(u=ue(c.value,n))!=null?u:"_"in c.value?ue((r=c.value._)==null?void 0:r.setupState,n):void 0;if(f)return f}for(const c of t){const f=c.value&&c.value[re];if(!f)continue;const h=f.slice();for(;h.length;){const y=h.shift(),m=ue(y.value,n);if(m)return m;const b=y.value&&y.value[re];b&&h.push(...b)}}}}})}const Qt=["color","file","time","date","datetime-local","week","month"],Zt=A({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...Rt(),...Oe()},"VTextField"),ea=L()({name:"VTextField",directives:{Intersect:Bt},inheritAttrs:!1,props:Zt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:t,emit:o,slots:a}=i;const n=Be(e,"modelValue"),{isFocused:s,focus:r,blur:u}=Ne(e),c=v(()=>{var g;return typeof e.counterValue=="function"?e.counterValue(n.value):((g=n.value)!=null?g:"").toString().length}),f=v(()=>{if(t.maxlength)return t.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),h=v(()=>["plain","underlined"].includes(e.variant));function y(g,k){var T,F;!e.autofocus||!g||(F=(T=k[0].target)==null?void 0:T.focus)==null||F.call(T)}const m=V(),b=V(),_=V(),D=v(()=>Qt.includes(e.type)||e.persistentPlaceholder||s.value||e.active);function d(){var g;_.value!==document.activeElement&&((g=_.value)==null||g.focus()),s.value||r()}function w(g){o("mousedown:control",g),g.target!==_.value&&(d(),g.preventDefault())}function C(g){d(),o("click:control",g)}function I(g){g.stopPropagation(),d(),_e(()=>{n.value=null,lt(e["onClick:clear"],g)})}function z(g){var T;const k=g.target;if(n.value=k.value,((T=e.modelModifiers)==null?void 0:T.trim)&&["text","search","password","tel","url"].includes(e.type)){const F=[k.selectionStart,k.selectionEnd];_e(()=>{k.selectionStart=F[0],k.selectionEnd=F[1]})}}return N(()=>{const g=!!(a.counter||e.counter||e.counterValue),k=!!(g||a.details),[T,F]=et(t),[{modelValue:ye,...H}]=pe.filterProps(e),[le]=Gt(e);return l(pe,X({ref:m,modelValue:n.value,"onUpdate:modelValue":P=>n.value=P,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},T,H,{centerAffix:!h.value,focused:s.value}),{...a,default:P=>{let{id:S,isDisabled:R,isDirty:$,isReadonly:B,isValid:U}=P;return l(ze,X({ref:b,onMousedown:w,onClick:C,"onClick:clear":I,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},le,{id:S.value,active:D.value||$.value,dirty:$.value||e.dirty,disabled:R.value,focused:s.value,error:U.value===!1}),{...a,default:W=>{let{props:{class:M,...q}}=W;const j=ve(l("input",X({ref:_,value:n.value,onInput:z,autofocus:e.autofocus,readonly:B.value,disabled:R.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:d,onBlur:u},q,F),null),[[tt("intersect"),{handler:y},null,{once:!0}]]);return l(Y,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l("div",{class:M,"data-no-activator":""},[a.default?l(Y,null,[a.default(),j]):at(j)]),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:k?P=>{var S;return l(Y,null,[(S=a.details)==null?void 0:S.call(a,P),g&&l(Y,null,[l("span",null,null),l(Jt,{active:e.persistentCounter||s.value,value:c.value,max:f.value},a.counter)])])}:void 0})}),Kt({},m,b,_)}}),Me=e=>(st("data-v-10e58b43"),e=e(),rt(),e),ta={class:"navigation-mobile"},aa=Me(()=>p("a",{class:"mobile-display"},"TR",-1)),la=Me(()=>p("a",{variant:"text",class:"desktop-display"},"TIENDA ROJA",-1)),na=[aa,la],oa={class:"desktop-display"},ia={class:"main-nav secondary-title-font"},sa={class:"search-drawer"},ra={__name:"navigationMobilBar",setup(e){const i=nt(),t=V(!1),o=V(!1);V(null);const a=V([{title:"Ropa",value:"ropaFirstPage"},{title:"Libros",value:"bar"},{title:"Accesorios",value:"fizz"},{title:"Contacto",value:"buzz"}]),n=V(null),s=r=>{const{id:u}=r;i.push({name:u})};return(r,u)=>(G(),ae("div",ta,[l(Ht,{class:"d-flex justify-center aling-center",prominent:"",style:{"background-color":"#f4f4f4"}},{default:x(()=>[l(Wt,{class:"primary-color mobile-display",variant:"text",onClick:u[0]||(u[0]=xe(c=>t.value=!t.value,["stop"]))}),l(De,null,{default:x(()=>[p("div",{onClick:u[1]||(u[1]=c=>ot(i).push({name:"homeFirstPage"})),class:"mt-1 main-nav secondary-title-font"},na)]),_:1}),p("div",oa,[p("ul",ia,[p("li",null,[l(E,{variant:"text",to:{name:"ropaFirstPage"}},{default:x(()=>[ee("Ropa")]),_:1})]),p("li",null,[l(E,{variant:"text",to:{name:"homeFirstPage"}},{default:x(()=>[ee("Libros")]),_:1})]),p("li",null,[l(E,{variant:"text",to:{name:"homeFirstPage"}},{default:x(()=>[ee("Accesorios")]),_:1})]),p("li",null,[l(E,{variant:"text",to:{name:"homeFirstPage"}},{default:x(()=>[ee("Contacto")]),_:1})])])]),l(E,{class:"primary-color",variant:"text",icon:"mdi-magnify",onClick:u[2]||(u[2]=xe(c=>o.value=!o.value,["stop"]))}),l(E,{class:"primary-color",variant:"text",icon:"mdi-shopping-outline"})]),_:1}),l(Ve,{modelValue:t.value,"onUpdate:modelValue":u[3]||(u[3]=c=>t.value=c),location:"left",temporary:"",class:"primary-font",style:{"background-color":"#f4f4f4"}},{default:x(()=>[l($t,{items:a.value,selected:n.value,"onClick:select":s},null,8,["items","selected"])]),_:1},8,["modelValue"]),l(Ve,{modelValue:o.value,"onUpdate:modelValue":u[4]||(u[4]=c=>o.value=c),location:"top",temporary:"",class:"primary-font",style:{"background-color":"#f4f4f4"},width:100},{default:x(()=>[p("div",sa,[l(ea,{class:"w-75 mt-7 primary-color",style:{"justify-content":"flex-end"},clearable:"",label:"Buscar por productos","prepend-icon":"mdi-magnify",variant:"underlined",rounded:"",density:"compact"})])]),_:1},8,["modelValue"]),l(At,null,{default:x(()=>[it(r.$slots,"default",{},void 0,!0)]),_:3})]))}};var ua=Te(ra,[["__scopeId","data-v-10e58b43"]]);const ca=A({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Re(),...Q(),...$e(),...Pe(),...me(),...fe({tag:"footer"}),...ce()},"VFooter"),da=L()({name:"VFooter",props:ca(),setup(e,i){let{slots:t}=i;const{themeClasses:o}=de(e),{backgroundColorClasses:a,backgroundColorStyles:n}=ge(K(e,"color")),{borderClasses:s}=Ae(e),{elevationClasses:r}=Le(e),{roundedClasses:u}=he(e),c=O(32),{resizeRef:f}=ut(m=>{!m.length||(c.value=m[0].target.clientHeight)}),h=v(()=>e.height==="auto"?c.value:parseInt(e.height,10)),{layoutItemStyles:y}=we({id:e.name,order:v(()=>parseInt(e.order,10)),position:v(()=>"bottom"),layoutSize:h,elementSize:v(()=>e.height==="auto"?void 0:h.value),active:v(()=>e.app),absolute:K(e,"absolute")});return N(()=>l(e.tag,{ref:f,class:["v-footer",o.value,a.value,s.value,r.value,u.value,e.class],style:[n.value,e.app?y.value:{height:J(e.height)},e.style]},t)),{}}}),va={class:"w-100"},fa=p("div",{class:"pt-0 primary-font"}," La juventud comunista colombiana es una organizaci\xF3n juvenil de car\xE1cter pol\xEDtico, democr\xE1tica, revolucionaria y antiimperialista, que lucha por la unidad de los j\xF3venes, por la defensa de sus derechos, por la paz con justicia social, la liberaci\xF3n nacional, la democracia y el socialismo. La JUCO es una organizaci\xF3n patri\xF3tica, orientada por los principios del marxismo-leninismo, inspirado y recreado en la tradiciones emancipadoras de nuestro pueblo, el pensamiento bolivariano y de nuestra Am\xE9rica. Contin\xFAa el ejemplo de las gestas de la liberaci\xF3n nacional y latinoamericana. Educa y forja a sus militantes en sus ideales para el socialismo, en la conciencia de clase, la independencia y la soberan\xEDa. Somos una organizaci\xF3n antifacista que promueve los principios del internacionalismo y la solidaridad con los pueblos oprimidos en el mundo. ",-1),ma={class:"primary-font"},ga=p("strong",null,"Juventud Comunista Colombiana",-1),ha={__name:"principalFooter",setup(e){const i=V(["mdi-facebook","mdi-twitter","mdi-whatsapp","mdi-instagram"]);return(t,o)=>(G(),ae("div",va,[l(da,{class:"bg-indigo-lighten-1 text-center d-flex flex-column"},{default:x(()=>[p("div",null,[(G(!0),ae(Y,null,ct(i.value,a=>(G(),Fe(E,{key:a,class:"mx-4",icon:a,variant:"text"},null,8,["icon"]))),128))]),fa,l(wt),p("div",ma,[ee(dt(new Date().getFullYear())+" \u2014 ",1),ga])]),_:1})]))}};const ya={class:"container"},ba={__name:"mainLayout",setup(e){return(i,t)=>{const o=vt("router-view");return G(),ae("div",ya,[l(ua,null,{default:x(()=>[l(Ce,{fluid:"",class:"pa-0 ma-0","grid-list-xs":""},{default:x(()=>[l(Ce,{fluid:"",class:"pa-0 ma-0"},{default:x(()=>[l(o,null,{default:x(({Component:a})=>[l(ft,{name:"slide-fade"},{default:x(()=>[(G(),Fe(mt(a)))]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1}),l(ha)])}}};var Pa=Te(ba,[["__scopeId","data-v-c22473c0"]]);export{Pa as default};
