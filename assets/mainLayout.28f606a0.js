import{p as A,m as Q,g as L,u as N,c as l,a as ce,t as K,b as de,d as Ie,s as O,e as c,f as We,h as J,r as S,i as qe,w as Z,o as Je,j as Ye,k as Pe,l as Be,n as Xe,q as we,v as X,x as Ge,y as ve,z as ke,I as ne,E as oe,A as Ke,F as Y,B as Qe,C as Ze,D as et,G as tt,H as at,J as _e,K as lt,_ as Te,L as nt,M as G,N as ae,O as x,P as xe,Q as p,R as ot,S as ee,T as it,U as st,V as rt,W as ut,X as ct,Y as Fe,Z as dt,$ as vt,a0 as ft,a1 as mt}from"./index.da1b0fa0.js";import{m as Re,a as $e,b as fe,u as me,c as Ae,d as Le,e as ge,V as gt,f as ie,g as ht,h as yt,i as E,j as bt,M as _t,k as xt,l as pt,n as Vt,L as Ct,I as St,o as It}from"./VDivider.7c32d3b4.js";import{m as he,V as pe}from"./VContainer.d8650aec.js";import{V as Pt,a as Bt,b as wt,m as kt,u as Ne,c as Tt,d as Ft,e as Rt,f as Ve,g as $t,h as Ce,i as At}from"./VInput.cc483b7e.js";class se{constructor(s){let{x:t,y:o,width:a,height:n}=s;this.x=t,this.y=o,this.width=a,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Lt(e){const s=e.getBoundingClientRect(),t=getComputedStyle(e),o=t.transform;if(o){let a,n,i,r,y;if(o.startsWith("matrix3d("))a=o.slice(9,-1).split(/, /),n=+a[0],i=+a[5],r=+a[12],y=+a[13];else if(o.startsWith("matrix("))a=o.slice(7,-1).split(/, /),n=+a[0],i=+a[3],r=+a[4],y=+a[5];else return new se(s);const f=t.transformOrigin,d=s.x-r-(1-n)*parseFloat(f),g=s.y-y-(1-i)*parseFloat(f.slice(f.indexOf(" ")+1)),h=n?s.width/n:e.offsetWidth+1,v=i?s.height/i:e.offsetHeight+1;return new se({x:d,y:g,width:h,height:v})}else return new se(s)}function Nt(e,s,t){if(typeof e.animate=="undefined")return{finished:Promise.resolve()};let o;try{o=e.animate(s,t)}catch{return{finished:Promise.resolve()}}return typeof o.finished=="undefined"&&(o.finished=new Promise(a=>{o.onfinish=()=>{a(o)}})),o}const Dt="cubic-bezier(0.4, 0, 0.2, 1)";const Et=A({text:String,...Q(),...he()},"VToolbarTitle"),De=L()({name:"VToolbarTitle",props:Et(),setup(e,s){let{slots:t}=s;return N(()=>{const o=!!(t.default||t.text||e.text);return l(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[o&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),Ot=[null,"prominent","default","comfortable","compact"],Ee=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ot.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Re(),...Q(),...$e(),...fe(),...he({tag:"header"}),...ce()},"VToolbar"),Se=L()({name:"VToolbar",props:Ee(),setup(e,s){var v;let{slots:t}=s;const{backgroundColorClasses:o,backgroundColorStyles:a}=me(K(e,"color")),{borderClasses:n}=Ae(e),{elevationClasses:i}=Le(e),{roundedClasses:r}=ge(e),{themeClasses:y}=de(e),{rtlClasses:f}=Ie(),d=O(!!(e.extended||((v=t.extension)==null?void 0:v.call(t)))),g=c(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),h=c(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return We({VBtn:{variant:"text"}}),N(()=>{var u;const b=!!(e.title||t.title),_=!!(t.image||e.image),D=(u=t.extension)==null?void 0:u.call(t);return d.value=!!(e.extended||D),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,n.value,i.value,r.value,y.value,f.value,e.class],style:[a.value,e.style]},{default:()=>[_&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(ie,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(gt,{key:"image-img",cover:!0,src:e.image},null)]),l(ie,{defaults:{VTabs:{height:J(g.value)}}},{default:()=>{var w,V,I;return[l("div",{class:"v-toolbar__content",style:{height:J(g.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(w=t.prepend)==null?void 0:w.call(t)]),b&&l(De,{key:"title",text:e.title},{text:t.title}),(V=t.default)==null?void 0:V.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(I=t.append)==null?void 0:I.call(t)])])]}}),l(ie,{defaults:{VTabs:{height:J(h.value)}}},{default:()=>[l(Pt,null,{default:()=>[d.value&&l("div",{class:"v-toolbar__extension",style:{height:J(h.value)}},[D])]})]})]})}),{contentHeight:g,extensionHeight:h}}}),zt=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Mt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=s;let o=0;const a=S(null),n=O(0),i=O(0),r=O(0),y=O(!1),f=O(!1),d=c(()=>Number(e.scrollThreshold)),g=c(()=>qe((d.value-n.value)/d.value||0)),h=()=>{const v=a.value;!v||t&&!t.value||(o=n.value,n.value="window"in v?v.pageYOffset:v.scrollTop,f.value=n.value<o,r.value=Math.abs(n.value-d.value))};return Z(f,()=>{i.value=i.value||n.value}),Z(y,()=>{i.value=0}),Je(()=>{Z(()=>e.scrollTarget,v=>{var _;const b=v?document.querySelector(v):window;!b||b!==a.value&&((_=a.value)==null||_.removeEventListener("scroll",h),a.value=b,a.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),Ye(()=>{var v;(v=a.value)==null||v.removeEventListener("scroll",h)}),t&&Z(t,h,{immediate:!0}),{scrollThreshold:d,currentScroll:n,currentThreshold:r,isScrollActive:y,scrollRatio:g,isScrollingUp:f,savedScroll:i}}const jt=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ee(),...Pe(),...zt(),height:{type:[Number,String],default:64}},"VAppBar"),Ht=L()({name:"VAppBar",props:jt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const o=S(),a=Be(e,"modelValue"),n=c(()=>{var w,V;const u=new Set((V=(w=e.scrollBehavior)==null?void 0:w.split(" "))!=null?V:[]);return{hide:u.has("hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),i=c(()=>{const u=n.value;return u.hide||u.inverted||u.collapse||u.elevate||u.fadeImage||!a.value}),{currentScroll:r,scrollThreshold:y,isScrollingUp:f,scrollRatio:d}=Mt(e,{canScroll:i}),g=c(()=>e.collapse||n.value.collapse&&(n.value.inverted?d.value>0:d.value===0)),h=c(()=>e.flat||n.value.elevate&&(n.value.inverted?r.value>0:r.value===0)),v=c(()=>n.value.fadeImage?n.value.inverted?1-d.value:d.value:void 0),b=c(()=>{var V,I,z,m;if(n.value.hide&&n.value.inverted)return 0;const u=(I=(V=o.value)==null?void 0:V.contentHeight)!=null?I:0,w=(m=(z=o.value)==null?void 0:z.extensionHeight)!=null?m:0;return u+w});Xe(c(()=>!!e.scrollBehavior),()=>{Ge(()=>{n.value.hide?n.value.inverted?a.value=r.value>y.value:a.value=f.value||r.value<y.value:a.value=!0})});const{ssrBootStyles:_}=ht(),{layoutItemStyles:D}=we({id:e.name,order:c(()=>parseInt(e.order,10)),position:K(e,"location"),layoutSize:b,elementSize:O(void 0),active:a,absolute:K(e,"absolute")});return N(()=>{const[u]=Se.filterProps(e);return l(Se,X({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...D.value,"--v-toolbar-image-opacity":v.value,height:void 0,..._.value},e.style]},u,{collapse:g.value,flat:h.value}),t)}),{}}}),Ut=A({...yt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Wt=L()({name:"VAppBarNavIcon",props:Ut(),setup(e,s){let{slots:t}=s;return N(()=>l(E,X(e,{class:["v-app-bar-nav-icon"]}),t)),{}}});const qt=A({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Q(),...bt({transition:{component:Bt}})},"VCounter"),Jt=L()({name:"VCounter",functional:!0,props:qt(),setup(e,s){let{slots:t}=s;const o=c(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return N(()=>l(_t,{transition:e.transition},{default:()=>[ve(l("div",{class:["v-counter",e.class],style:e.style},[t.default?t.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[ke,e.active]])]})),{}}});const Yt=A({floating:Boolean,...Q()},"VFieldLabel"),te=L()({name:"VFieldLabel",props:Yt(),setup(e,s){let{slots:t}=s;return N(()=>l(wt,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},t)),{}}}),Xt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Oe=A({appendInnerIcon:ne,bgColor:String,clearable:Boolean,clearIcon:{type:ne,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ne,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Xt.includes(e)},"onClick:clear":oe(),"onClick:appendInner":oe(),"onClick:prependInner":oe(),...Q(),...xt(),...fe(),...ce()},"VField"),ze=L()({name:"VField",inheritAttrs:!1,props:{id:String,...kt(),...Oe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:t,emit:o,slots:a}=s;const{themeClasses:n}=de(e),{loaderClasses:i}=pt(e),{focusClasses:r,isFocused:y,focus:f,blur:d}=Ne(e),{InputIcon:g}=Tt(e),{roundedClasses:h}=ge(e),{rtlClasses:v}=Ie(),b=c(()=>e.dirty||e.active),_=c(()=>!e.singleLine&&!!(e.label||a.label)),D=Ke(),u=c(()=>e.id||`input-${D}`),w=c(()=>`${u.value}-messages`),V=S(),I=S(),z=S(),m=c(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:k,backgroundColorStyles:T}=me(K(e,"bgColor")),{textColorClasses:F,textColorStyles:ye}=Vt(c(()=>e.error||e.disabled?void 0:b.value&&y.value?e.color:e.baseColor));Z(b,P=>{if(_.value){const C=V.value.$el,R=I.value.$el;requestAnimationFrame(()=>{const $=Lt(C),B=R.getBoundingClientRect(),U=B.x-$.x,W=B.y-$.y-($.height/2-B.height/2),M=B.width/.75,q=Math.abs(M-$.width)>1?{maxWidth:J(M)}:void 0,j=getComputedStyle(C),be=getComputedStyle(R),je=parseFloat(j.transitionDuration)*1e3||150,He=parseFloat(be.getPropertyValue("--v-field-label-scale")),Ue=be.getPropertyValue("color");C.style.visibility="visible",R.style.visibility="hidden",Nt(C,{transform:`translate(${U}px, ${W}px) scale(${He})`,color:Ue,...q},{duration:je,easing:Dt,direction:P?"normal":"reverse"}).finished.then(()=>{C.style.removeProperty("visibility"),R.style.removeProperty("visibility")})})}},{flush:"post"});const H=c(()=>({isActive:b,isFocused:y,controlRef:z,blur:d,focus:f}));function le(P){P.target!==document.activeElement&&P.preventDefault()}return N(()=>{var U,W,M,q;const P=e.variant==="outlined",C=a["prepend-inner"]||e.prependInnerIcon,R=!!(e.clearable||a.clear),$=!!(a["append-inner"]||e.appendInnerIcon||R),B=a.label?a.label({...H.value,label:e.label,props:{for:u.value}}):e.label;return l("div",X({class:["v-field",{"v-field--active":b.value,"v-field--appended":$,"v-field--center-affix":(U=e.centerAffix)!=null?U:!m.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":C,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!B,[`v-field--variant-${e.variant}`]:!0},n.value,k.value,r.value,i.value,h.value,v.value,e.class],style:[T.value,ye.value,e.style],onClick:le},t),[l("div",{class:"v-field__overlay"},null),l(Ct,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:a.loader}),C&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(g,{key:"prepend-icon",name:"prependInner"},null),(W=a["prepend-inner"])==null?void 0:W.call(a,H.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&_.value&&l(te,{key:"floating-label",ref:I,class:[F.value],floating:!0,for:u.value},{default:()=>[B]}),l(te,{ref:V,for:u.value},{default:()=>[B]}),(M=a.default)==null?void 0:M.call(a,{...H.value,props:{id:u.value,class:"v-field__input","aria-describedby":w.value},focus:f,blur:d})]),R&&l(Ft,{key:"clear"},{default:()=>[ve(l("div",{class:"v-field__clearable",onMousedown:j=>{j.preventDefault(),j.stopPropagation()}},[a.clear?a.clear():l(g,{name:"clear"},null)]),[[ke,e.dirty]])]}),$&&l("div",{key:"append",class:"v-field__append-inner"},[(q=a["append-inner"])==null?void 0:q.call(a,H.value),e.appendInnerIcon&&l(g,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",F.value]},[P&&l(Y,null,[l("div",{class:"v-field__outline__start"},null),_.value&&l("div",{class:"v-field__outline__notch"},[l(te,{ref:I,floating:!0,for:u.value},{default:()=>[B]})]),l("div",{class:"v-field__outline__end"},null)]),m.value&&_.value&&l(te,{ref:I,floating:!0,for:u.value},{default:()=>[B]})])])}),{controlRef:z}}});function Gt(e){const s=Object.keys(ze.props).filter(t=>!Qe(t)&&t!=="class"&&t!=="style");return Ze(e,s)}const re=Symbol("Forwarded refs");function ue(e,s){let t=e;for(;t;){const o=Reflect.getOwnPropertyDescriptor(t,s);if(o)return o;t=Object.getPrototypeOf(t)}}function Kt(e){for(var s=arguments.length,t=new Array(s>1?s-1:0),o=1;o<s;o++)t[o-1]=arguments[o];return e[re]=t,new Proxy(e,{get(a,n){if(Reflect.has(a,n))return Reflect.get(a,n);if(!(typeof n=="symbol"||n.startsWith("__"))){for(const i of t)if(i.value&&Reflect.has(i.value,n)){const r=Reflect.get(i.value,n);return typeof r=="function"?r.bind(i.value):r}}},has(a,n){if(Reflect.has(a,n))return!0;if(typeof n=="symbol"||n.startsWith("__"))return!1;for(const i of t)if(i.value&&Reflect.has(i.value,n))return!0;return!1},set(a,n,i){if(Reflect.has(a,n))return Reflect.set(a,n,i);if(typeof n=="symbol"||n.startsWith("__"))return!1;for(const r of t)if(r.value&&Reflect.has(r.value,n))return Reflect.set(r.value,n,i);return!1},getOwnPropertyDescriptor(a,n){var r,y;const i=Reflect.getOwnPropertyDescriptor(a,n);if(i)return i;if(!(typeof n=="symbol"||n.startsWith("__"))){for(const f of t){if(!f.value)continue;const d=(y=ue(f.value,n))!=null?y:"_"in f.value?ue((r=f.value._)==null?void 0:r.setupState,n):void 0;if(d)return d}for(const f of t){const d=f.value&&f.value[re];if(!d)continue;const g=d.slice();for(;g.length;){const h=g.shift(),v=ue(h.value,n);if(v)return v;const b=h.value&&h.value[re];b&&g.push(...b)}}}}})}const Qt=["color","file","time","date","datetime-local","week","month"],Zt=A({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...Rt(),...Oe()},"VTextField"),ea=L()({name:"VTextField",directives:{Intersect:St},inheritAttrs:!1,props:Zt(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:t,emit:o,slots:a}=s;const n=Be(e,"modelValue"),{isFocused:i,focus:r,blur:y}=Ne(e),f=c(()=>{var m;return typeof e.counterValue=="function"?e.counterValue(n.value):((m=n.value)!=null?m:"").toString().length}),d=c(()=>{if(t.maxlength)return t.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),g=c(()=>["plain","underlined"].includes(e.variant));function h(m,k){var T,F;!e.autofocus||!m||(F=(T=k[0].target)==null?void 0:T.focus)==null||F.call(T)}const v=S(),b=S(),_=S(),D=c(()=>Qt.includes(e.type)||e.persistentPlaceholder||i.value||e.active);function u(){var m;_.value!==document.activeElement&&((m=_.value)==null||m.focus()),i.value||r()}function w(m){o("mousedown:control",m),m.target!==_.value&&(u(),m.preventDefault())}function V(m){u(),o("click:control",m)}function I(m){m.stopPropagation(),u(),_e(()=>{n.value=null,lt(e["onClick:clear"],m)})}function z(m){var T;const k=m.target;if(n.value=k.value,((T=e.modelModifiers)==null?void 0:T.trim)&&["text","search","password","tel","url"].includes(e.type)){const F=[k.selectionStart,k.selectionEnd];_e(()=>{k.selectionStart=F[0],k.selectionEnd=F[1]})}}return N(()=>{const m=!!(a.counter||e.counter||e.counterValue),k=!!(m||a.details),[T,F]=et(t),[{modelValue:ye,...H}]=Ve.filterProps(e),[le]=Gt(e);return l(Ve,X({ref:v,modelValue:n.value,"onUpdate:modelValue":P=>n.value=P,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--plain-underlined":["plain","underlined"].includes(e.variant)},e.class],style:e.style},T,H,{centerAffix:!g.value,focused:i.value}),{...a,default:P=>{let{id:C,isDisabled:R,isDirty:$,isReadonly:B,isValid:U}=P;return l(ze,X({ref:b,onMousedown:w,onClick:V,"onClick:clear":I,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},le,{id:C.value,active:D.value||$.value,dirty:$.value||e.dirty,disabled:R.value,focused:i.value,error:U.value===!1}),{...a,default:W=>{let{props:{class:M,...q}}=W;const j=ve(l("input",X({ref:_,value:n.value,onInput:z,autofocus:e.autofocus,readonly:B.value,disabled:R.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:u,onBlur:y},q,F),null),[[tt("intersect"),{handler:h},null,{once:!0}]]);return l(Y,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l("div",{class:M,"data-no-activator":""},[a.default?l(Y,null,[a.default(),j]):at(j)]),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:k?P=>{var C;return l(Y,null,[(C=a.details)==null?void 0:C.call(a,P),m&&l(Y,null,[l("span",null,null),l(Jt,{active:e.persistentCounter||i.value,value:f.value,max:d.value},a.counter)])])}:void 0})}),Kt({},v,b,_)}}),Me=e=>(st("data-v-60fd19e4"),e=e(),rt(),e),ta={class:"navigation-mobile"},aa=Me(()=>p("a",{class:"mobile-display"},"TR",-1)),la=Me(()=>p("a",{variant:"text",class:"desktop-display"},"TIENDA ROJA",-1)),na=[aa,la],oa={class:"desktop-display"},ia={class:"main-nav secondary-title-font"},sa={class:"search-drawer"},ra={__name:"navigationMobilBar",setup(e){const s=nt(),t=S(!1),o=S(!1);S(null);const a=S([{title:"Ropa",value:"foo"},{title:"Libros",value:"bar"},{title:"Accesorios",value:"fizz"},{title:"Contacto",value:"buzz"}]);return(n,i)=>(G(),ae("div",ta,[l(Ht,{class:"d-flex justify-center aling-center",prominent:"",style:{"background-color":"#f4f4f4"}},{default:x(()=>[l(Wt,{class:"primary-color mobile-display",variant:"text",onClick:i[0]||(i[0]=xe(r=>t.value=!t.value,["stop"]))}),l(De,null,{default:x(()=>[p("div",{onClick:i[1]||(i[1]=r=>ot(s).push({name:"homeFirstPage"})),class:"mt-1 main-nav secondary-title-font"},na)]),_:1}),p("div",oa,[p("ul",ia,[p("li",null,[l(E,{variant:"text",to:{name:"ropaFirstPage"}},{default:x(()=>[ee("Ropa")]),_:1})]),p("li",null,[l(E,{variant:"text",to:{name:"homeFirstPage"}},{default:x(()=>[ee("Libros")]),_:1})]),p("li",null,[l(E,{variant:"text",to:{name:"homeFirstPage"}},{default:x(()=>[ee("Accesorios")]),_:1})]),p("li",null,[l(E,{variant:"text",to:{name:"homeFirstPage"}},{default:x(()=>[ee("Contacto")]),_:1})])])]),l(E,{class:"primary-color",variant:"text",icon:"mdi-magnify",onClick:i[2]||(i[2]=xe(r=>o.value=!o.value,["stop"]))}),l(E,{class:"primary-color",variant:"text",icon:"mdi-shopping-outline"})]),_:1}),l(Ce,{modelValue:t.value,"onUpdate:modelValue":i[3]||(i[3]=r=>t.value=r),location:"left",temporary:"",class:"primary-font",style:{"background-color":"#f4f4f4"}},{default:x(()=>[l($t,{items:a.value},null,8,["items"])]),_:1},8,["modelValue"]),l(Ce,{modelValue:o.value,"onUpdate:modelValue":i[4]||(i[4]=r=>o.value=r),location:"top",temporary:"",class:"primary-font",style:{"background-color":"#f4f4f4"},width:100},{default:x(()=>[p("div",sa,[l(ea,{class:"w-75 mt-7 primary-color",style:{"justify-content":"flex-end"},clearable:"",label:"Buscar por productos","prepend-icon":"mdi-magnify",variant:"underlined",rounded:"",density:"compact"})])]),_:1},8,["modelValue"]),l(At,null,{default:x(()=>[it(n.$slots,"default",{},void 0,!0)]),_:3})]))}};var ua=Te(ra,[["__scopeId","data-v-60fd19e4"]]);const ca=A({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Re(),...Q(),...$e(),...Pe(),...fe(),...he({tag:"footer"}),...ce()},"VFooter"),da=L()({name:"VFooter",props:ca(),setup(e,s){let{slots:t}=s;const{themeClasses:o}=de(e),{backgroundColorClasses:a,backgroundColorStyles:n}=me(K(e,"color")),{borderClasses:i}=Ae(e),{elevationClasses:r}=Le(e),{roundedClasses:y}=ge(e),f=O(32),{resizeRef:d}=ut(v=>{!v.length||(f.value=v[0].target.clientHeight)}),g=c(()=>e.height==="auto"?f.value:parseInt(e.height,10)),{layoutItemStyles:h}=we({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:g,elementSize:c(()=>e.height==="auto"?void 0:g.value),active:c(()=>e.app),absolute:K(e,"absolute")});return N(()=>l(e.tag,{ref:d,class:["v-footer",o.value,a.value,i.value,r.value,y.value,e.class],style:[n.value,e.app?h.value:{height:J(e.height)},e.style]},t)),{}}}),va={class:"w-100"},fa=p("div",{class:"pt-0 primary-font"}," La juventud comunista colombiana es una organizaci\xF3n juvenil de car\xE1cter pol\xEDtico, democr\xE1tica, revolucionaria y antiimperialista, que lucha por la unidad de los j\xF3venes, por la defensa de sus derechos, por la paz con justicia social, la liberaci\xF3n nacional, la democracia y el socialismo. La JUCO es una organizaci\xF3n patri\xF3tica, orientada por los principios del marxismo-leninismo, inspirado y recreado en la tradiciones emancipadoras de nuestro pueblo, el pensamiento bolivariano y de nuestra Am\xE9rica. Contin\xFAa el ejemplo de las gestas de la liberaci\xF3n nacional y latinoamericana. Educa y forja a sus militantes en sus ideales para el socialismo, en la conciencia de clase, la independencia y la soberan\xEDa. Somos una organizaci\xF3n antifacista que promueve los principios del internacionalismo y la solidaridad con los pueblos oprimidos en el mundo. ",-1),ma={class:"primary-font"},ga=p("strong",null,"Juventud Comunista Colombiana",-1),ha={__name:"principalFooter",setup(e){const s=S(["mdi-facebook","mdi-twitter","mdi-whatsapp","mdi-instagram"]);return(t,o)=>(G(),ae("div",va,[l(da,{class:"bg-indigo-lighten-1 text-center d-flex flex-column"},{default:x(()=>[p("div",null,[(G(!0),ae(Y,null,ct(s.value,a=>(G(),Fe(E,{key:a,class:"mx-4",icon:a,variant:"text"},null,8,["icon"]))),128))]),fa,l(It),p("div",ma,[ee(dt(new Date().getFullYear())+" \u2014 ",1),ga])]),_:1})]))}};const ya={class:"container"},ba={__name:"mainLayout",setup(e){return(s,t)=>{const o=vt("router-view");return G(),ae("div",ya,[l(ua,null,{default:x(()=>[l(pe,{fluid:"",class:"pa-0 ma-0","grid-list-xs":""},{default:x(()=>[l(pe,{fluid:"",class:"pa-0 ma-0"},{default:x(()=>[l(o,null,{default:x(({Component:a})=>[l(ft,{name:"slide-fade"},{default:x(()=>[(G(),Fe(mt(a)))]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1}),l(ha)])}}};var Ca=Te(ba,[["__scopeId","data-v-c22473c0"]]);export{Ca as default};
