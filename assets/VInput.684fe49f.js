import{$ as ne,s as _,a0 as re,ac as j,v as $,p as T,C as Q,a as v,A as ae,a6 as Re,L as be,ad as it,I as H,m as N,g as O,t as x,u as F,c as g,H as Ne,J as st,K as ee,l as ce,y as D,n as pe,ae as ut,P as ot,F as fe,d as oe,b as Fe,af as rt,ag as J,N as ct,ah as dt,r as vt,z as Se,ai as ft,B as gt,q as He,aj as mt,R as ze,ak as Ge,E as yt,a4 as ht,al as bt,a9 as ue,am as Ye,V as pt,D as Te}from"./index.5ffbe59e.js";import{g as ge,M as We,n as St,H as Ke,h as we,b as ke,z as je,i as Ve,c as Ce,m as wt,v as Xe,R as kt,u as Vt,j as Ie,C as Ct,e as Me,D as Ue,k as Pe,f as Ae,G as It,J as _e,V as me,a as qe,t as Mt,d as ye,K as Pt,N as At,o as Lt,p as Bt}from"./index.2aa5d9a7.js";import{u as Le}from"./ssrBoot.ea5e6ff8.js";import{m as X}from"./tag.4605d44c.js";const he=Symbol.for("vuetify:list");function Ze(){const e=ne(he,{hasPrepend:_(!1),updateHasPrepend:()=>null}),i={hasPrepend:_(!1),updateHasPrepend:a=>{a&&(i.hasPrepend.value=a)}};return re(he,i),e}function Je(){return ne(he,null)}const xt={open:e=>{let{id:i,value:a,opened:n,parents:l}=e;if(a){const t=new Set;t.add(i);let s=l.get(i);for(;s!=null;)t.add(s),s=l.get(s);return t}else return n.delete(i),n},select:()=>null},Qe={open:e=>{let{id:i,value:a,opened:n,parents:l}=e;if(a){let t=l.get(i);for(n.add(i);t!=null&&t!==i;)n.add(t),t=l.get(t);return n}else n.delete(i);return n},select:()=>null},Tt={open:Qe.open,select:e=>{let{id:i,value:a,opened:n,parents:l}=e;if(!a)return n;const t=[];let s=l.get(i);for(;s!=null;)t.push(s),s=l.get(s);return new Set(t)}},Be=e=>{const i={select:a=>{let{id:n,value:l,selected:t}=a;if(n=j(n),e&&!l){const s=Array.from(t.entries()).reduce((o,y)=>{let[h,f]=y;return f==="on"?[...o,h]:o},[]);if(s.length===1&&s[0]===n)return t}return t.set(n,l?"on":"off"),t},in:(a,n,l)=>{let t=new Map;for(const s of a||[])t=i.select({id:s,value:!0,selected:new Map(t),children:n,parents:l});return t},out:a=>{const n=[];for(const[l,t]of a.entries())t==="on"&&n.push(l);return n}};return i},et=e=>{const i=Be(e);return{select:n=>{let{selected:l,id:t,...s}=n;t=j(t);const o=l.has(t)?new Map([[t,l.get(t)]]):new Map;return i.select({...s,id:t,selected:o})},in:(n,l,t)=>{let s=new Map;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,t)),s},out:(n,l,t)=>i.out(n,l,t)}},_t=e=>{const i=Be(e);return{select:n=>{let{id:l,selected:t,children:s,...o}=n;return l=j(l),s.has(l)?t:i.select({id:l,selected:t,children:s,...o})},in:i.in,out:i.out}},Et=e=>{const i=et(e);return{select:n=>{let{id:l,selected:t,children:s,...o}=n;return l=j(l),s.has(l)?t:i.select({id:l,selected:t,children:s,...o})},in:i.in,out:i.out}},$t=e=>{const i={select:a=>{let{id:n,value:l,selected:t,children:s,parents:o}=a;n=j(n);const y=new Map(t),h=[n];for(;h.length;){const u=h.shift();t.set(u,l?"on":"off"),s.has(u)&&h.push(...s.get(u))}let f=o.get(n);for(;f;){const u=s.get(f),r=u.every(d=>t.get(d)==="on"),c=u.every(d=>!t.has(d)||t.get(d)==="off");t.set(f,r?"on":c?"off":"indeterminate"),f=o.get(f)}return e&&!l&&Array.from(t.entries()).reduce((r,c)=>{let[d,I]=c;return I==="on"?[...r,d]:r},[]).length===0?y:t},in:(a,n,l)=>{let t=new Map;for(const s of a||[])t=i.select({id:s,value:!0,selected:new Map(t),children:n,parents:l});return t},out:(a,n)=>{const l=[];for(const[t,s]of a.entries())s==="on"&&!n.has(t)&&l.push(t);return l}};return i},te=Symbol.for("vuetify:nested"),tt={id:_(),root:{register:()=>null,unregister:()=>null,parents:$(new Map),children:$(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:$(new Set),selected:$(new Map),selectedValues:$([])}},Dt=T({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Ot=e=>{let i=!1;const a=$(new Map),n=$(new Map),l=Q(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),t=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Et(e.mandatory);case"leaf":return _t(e.mandatory);case"independent":return Be(e.mandatory);case"single-independent":return et(e.mandatory);case"classic":default:return $t(e.mandatory)}}),s=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Tt;case"single":return xt;case"multiple":default:return Qe}}),o=Q(e,"selected",e.selected,u=>t.value.in(u,a.value,n.value),u=>t.value.out(u,a.value,n.value));ae(()=>{i=!0});function y(u){const r=[];let c=u;for(;c!=null;)r.unshift(c),c=n.value.get(c);return r}const h=Re("nested"),f={id:_(),root:{opened:l,selected:o,selectedValues:v(()=>{const u=[];for(const[r,c]of o.value.entries())c==="on"&&u.push(r);return u}),register:(u,r,c)=>{r&&u!==r&&n.value.set(u,r),c&&a.value.set(u,[]),r!=null&&a.value.set(r,[...a.value.get(r)||[],u])},unregister:u=>{var c;if(i)return;a.value.delete(u);const r=n.value.get(u);if(r){const d=(c=a.value.get(r))!=null?c:[];a.value.set(r,d.filter(I=>I!==u))}n.value.delete(u),l.value.delete(u)},open:(u,r,c)=>{h.emit("click:open",{id:u,value:r,path:y(u),event:c});const d=s.value.open({id:u,value:r,opened:new Set(l.value),children:a.value,parents:n.value,event:c});d&&(l.value=d)},openOnSelect:(u,r,c)=>{const d=s.value.select({id:u,value:r,selected:new Map(o.value),opened:new Set(l.value),children:a.value,parents:n.value,event:c});d&&(l.value=d)},select:(u,r,c)=>{h.emit("click:select",{id:u,value:r,path:y(u),event:c});const d=t.value.select({id:u,value:r,selected:new Map(o.value),children:a.value,parents:n.value,event:c});d&&(o.value=d),f.root.openOnSelect(u,r,c)},children:a,parents:n}};return re(te,f),f.root},nt=(e,i)=>{const a=ne(te,tt),n=Symbol(be()),l=v(()=>e.value!==void 0?e.value:n),t={...a,id:l,open:(s,o)=>a.root.open(l.value,s,o),openOnSelect:(s,o)=>a.root.openOnSelect(l.value,s,o),isOpen:v(()=>a.root.opened.value.has(l.value)),parent:v(()=>a.root.parents.value.get(l.value)),select:(s,o)=>a.root.select(l.value,s,o),isSelected:v(()=>a.root.selected.value.get(j(l.value))==="on"),isIndeterminate:v(()=>a.root.selected.value.get(l.value)==="indeterminate"),isLeaf:v(()=>!a.root.children.value.get(l.value)),isGroupActivator:a.isGroupActivator};return!a.isGroupActivator&&a.root.register(l.value,a.id.value,i),ae(()=>{!a.isGroupActivator&&a.root.unregister(l.value)}),i&&re(te,t),t},Rt=()=>{const e=ne(te,tt);re(te,{...e,isGroupActivator:!0})},Nt=it({name:"VListGroupActivator",setup(e,i){let{slots:a}=i;return Rt(),()=>{var n;return(n=a.default)==null?void 0:n.call(a)}}}),Ft=T({activeColor:String,baseColor:String,color:String,collapseIcon:{type:H,default:"$collapse"},expandIcon:{type:H,default:"$expand"},prependIcon:H,appendIcon:H,fluid:Boolean,subgroup:Boolean,title:String,value:null,...N(),...X()},"VListGroup"),Ee=O()({name:"VListGroup",props:Ft(),setup(e,i){let{slots:a}=i;const{isOpen:n,open:l,id:t}=nt(x(e,"value"),!0),s=v(()=>`v-list-group--id-${String(t.value)}`),o=Je(),{isBooted:y}=Le();function h(c){l(!n.value,c)}const f=v(()=>({onClick:h,class:"v-list-group__header",id:s.value})),u=v(()=>n.value?e.collapseIcon:e.expandIcon),r=v(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&u.value,appendIcon:e.appendIcon||!e.subgroup&&u.value,title:e.title,value:e.value}}));return F(()=>g(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[a.activator&&g(ge,{defaults:r.value},{default:()=>[g(Nt,null,{default:()=>[a.activator({props:f.value,isOpen:n.value})]})]}),g(We,{transition:{component:St},disabled:!y.value},{default:()=>{var c;return[Ne(g("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(c=a.default)==null?void 0:c.call(a)]),[[st,n.value]])]}})]})),{}}});const Ht=Ke("v-list-item-subtitle"),zt=Ke("v-list-item-title"),Gt=T({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:H,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:H,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:ee(),onClickOnce:ee(),...we(),...N(),...ke(),...je(),...Ve(),...Ce(),...wt(),...X(),...ce(),...Xe({variant:"text"})},"VListItem"),$e=O()({name:"VListItem",directives:{Ripple:kt},props:Gt(),emits:{click:e=>!0},setup(e,i){let{attrs:a,slots:n,emit:l}=i;const t=Vt(e,a),s=v(()=>e.value===void 0?t.href.value:e.value),{select:o,isSelected:y,isIndeterminate:h,isGroupActivator:f,root:u,parent:r,openOnSelect:c}=nt(s,!1),d=Je(),I=v(()=>{var M;return e.active!==!1&&(e.active||((M=t.isActive)==null?void 0:M.value)||y.value)}),A=v(()=>e.link!==!1&&t.isLink.value),P=v(()=>!e.disabled&&e.link!==!1&&(e.link||t.isClickable.value||e.value!=null&&!!d)),k=v(()=>e.rounded||e.nav),b=v(()=>{var M;return(M=e.color)!=null?M:e.activeColor}),w=v(()=>{var M;return{color:I.value&&(M=b.value)!=null?M:e.baseColor,variant:e.variant}});D(()=>{var M;return(M=t.isActive)==null?void 0:M.value},M=>{M&&r.value!=null&&u.open(r.value,!0),M&&c(M)},{immediate:!0});const{themeClasses:m}=pe(e),{borderClasses:p}=Ie(e),{colorClasses:S,colorStyles:C,variantClasses:V}=Ct(w),{densityClasses:B}=Me(e),{dimensionStyles:z}=Ue(e),{elevationClasses:Y}=Pe(e),{roundedClasses:G}=Ae(k),W=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),R=v(()=>({isActive:I.value,select:o,isSelected:y.value,isIndeterminate:h.value}));function le(M){var L;l("click",M),!(f||!P.value)&&((L=t.navigate)==null||L.call(t,M),e.value!=null&&o(!y.value,M))}function de(M){(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),le(M))}return F(()=>{const M=A.value?"a":e.tag,L=n.title||e.title,ie=n.subtitle||e.subtitle,U=!!(e.appendAvatar||e.appendIcon),se=!!(U||n.append),q=!!(e.prependAvatar||e.prependIcon),ve=!!(q||n.prepend);return d==null||d.updateHasPrepend(ve),e.activeColor&&ut("active-color",["color","base-color"]),Ne(g(M,{class:["v-list-item",{"v-list-item--active":I.value,"v-list-item--disabled":e.disabled,"v-list-item--link":P.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ve&&(d==null?void 0:d.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&I.value},m.value,p.value,S.value,B.value,Y.value,W.value,G.value,V.value,e.class],style:[C.value,z.value,e.style],href:t.href.value,tabindex:P.value?d?-2:0:void 0,onClick:le,onKeydown:P.value&&!A.value&&de},{default:()=>{var xe;return[It(P.value||I.value,"v-list-item"),ve&&g("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?g(ge,{key:"prepend-defaults",disabled:!q,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var E;return[(E=n.prepend)==null?void 0:E.call(n,R.value)]}}):g(fe,null,[e.prependAvatar&&g(_e,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&g(me,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),g("div",{class:"v-list-item__content","data-no-activator":""},[L&&g(zt,{key:"title"},{default:()=>{var E,Z;return[(Z=(E=n.title)==null?void 0:E.call(n,{title:e.title}))!=null?Z:e.title]}}),ie&&g(Ht,{key:"subtitle"},{default:()=>{var E,Z;return[(Z=(E=n.subtitle)==null?void 0:E.call(n,{subtitle:e.subtitle}))!=null?Z:e.subtitle]}}),(xe=n.default)==null?void 0:xe.call(n,R.value)]),se&&g("div",{key:"append",class:"v-list-item__append"},[n.append?g(ge,{key:"append-defaults",disabled:!U,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var E;return[(E=n.append)==null?void 0:E.call(n,R.value)]}}):g(fe,null,[e.appendIcon&&g(me,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&g(_e,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[ot("ripple"),P.value&&e.ripple]])}),{}}}),Yt=T({color:String,inset:Boolean,sticky:Boolean,title:String,...N(),...X()},"VListSubheader"),Wt=O()({name:"VListSubheader",props:Yt(),setup(e,i){let{slots:a}=i;const{textColorClasses:n,textColorStyles:l}=qe(x(e,"color"));return F(()=>{const t=!!(a.default||e.title);return g(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s,o;return[t&&g("div",{class:"v-list-subheader__text"},[(o=(s=a.default)==null?void 0:s.call(a))!=null?o:e.title])]}})}),{}}}),Kt=T({items:Array},"VListChildren"),at=O()({name:"VListChildren",props:Kt(),setup(e,i){let{slots:a}=i;return Ze(),()=>{var n,l,t;return(t=(n=a.default)==null?void 0:n.call(a))!=null?t:(l=e.items)==null?void 0:l.map(s=>{var d,I,A,P;let{children:o,props:y,type:h,raw:f}=s;if(h==="divider")return(I=(d=a.divider)==null?void 0:d.call(a,{props:y}))!=null?I:g(Mt,y,null);if(h==="subheader")return(P=(A=a.subheader)==null?void 0:A.call(a,{props:y}))!=null?P:g(Wt,y,null);const u={subtitle:a.subtitle?k=>{var b;return(b=a.subtitle)==null?void 0:b.call(a,{...k,item:f})}:void 0,prepend:a.prepend?k=>{var b;return(b=a.prepend)==null?void 0:b.call(a,{...k,item:f})}:void 0,append:a.append?k=>{var b;return(b=a.append)==null?void 0:b.call(a,{...k,item:f})}:void 0,title:a.title?k=>{var b;return(b=a.title)==null?void 0:b.call(a,{...k,item:f})}:void 0},[r,c]=Ee.filterProps(y);return o?g(Ee,oe({value:y==null?void 0:y.value},r),{activator:k=>{let{props:b}=k;return a.header?a.header({props:{...y,...b}}):g($e,oe(y,b),u)},default:()=>g(at,{items:o},a)}):a.item?a.item({props:y}):g($e,y,u)})}}}),jt=T({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"list-items");function Xt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ut(e,i){const a=J(i,e.itemType,"item"),n=Xt(i)?i:J(i,e.itemTitle),l=J(i,e.itemValue,void 0),t=J(i,e.itemChildren),s=e.itemProps===!0?ct(i,["children"])[1]:J(i,e.itemProps),o={title:n,value:l,...s};return{type:a,title:o.title,value:o.value,props:o,children:a==="item"&&t?lt(e,t):void 0,raw:i}}function lt(e,i){const a=[];for(const n of i)a.push(Ut(e,n));return a}function qt(e){return{items:v(()=>lt(e,e.items))}}const Zt=T({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Dt({selectStrategy:"single-leaf",openStrategy:"list"}),...we(),...N(),...ke(),...je(),...Ve(),itemType:{type:String,default:"type"},...jt(),...Ce(),...X(),...ce(),...Xe({variant:"text"})},"VList"),Vn=O()({name:"VList",props:Zt(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:a}=i;const{items:n}=qt(e),{themeClasses:l}=pe(e),{backgroundColorClasses:t,backgroundColorStyles:s}=ye(x(e,"bgColor")),{borderClasses:o}=Ie(e),{densityClasses:y}=Me(e),{dimensionStyles:h}=Ue(e),{elevationClasses:f}=Pe(e),{roundedClasses:u}=Ae(e),{open:r,select:c}=Ot(e),d=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=x(e,"activeColor"),A=x(e,"baseColor"),P=x(e,"color");Ze(),Fe({VListGroup:{activeColor:I,baseColor:A,color:P},VListItem:{activeClass:x(e,"activeClass"),activeColor:I,baseColor:A,color:P,density:x(e,"density"),disabled:x(e,"disabled"),lines:x(e,"lines"),nav:x(e,"nav"),variant:x(e,"variant")}});const k=_(!1),b=$();function w(V){k.value=!0}function m(V){k.value=!1}function p(V){var B;!k.value&&!(V.relatedTarget&&((B=b.value)==null?void 0:B.contains(V.relatedTarget)))&&C()}function S(V){if(!!b.value){if(V.key==="ArrowDown")C("next");else if(V.key==="ArrowUp")C("prev");else if(V.key==="Home")C("first");else if(V.key==="End")C("last");else return;V.preventDefault()}}function C(V){if(b.value)return rt(b.value,V)}return F(()=>g(e.tag,{ref:b,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},l.value,t.value,o.value,y.value,f.value,d.value,u.value,e.class],style:[s.value,h.value,e.style],tabindex:e.disabled||k.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:w,onFocusout:m,onFocus:p,onKeydown:S},{default:()=>[g(at,{items:n.value},a)]})),{open:r,select:c,focus:C}}});const Jt=T({scrollable:Boolean,...N(),...X({tag:"main"})},"VMain"),Cn=O()({name:"VMain",props:Jt(),setup(e,i){let{slots:a}=i;const{mainStyles:n}=dt(),{ssrBootStyles:l}=Le();return F(()=>g(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,l.value,e.style]},{default:()=>{var t,s;return[e.scrollable?g("div",{class:"v-main__scroller"},[(t=a.default)==null?void 0:t.call(a)]):(s=a.default)==null?void 0:s.call(a)]}})),{}}});function Qt(e){let{rootEl:i,isSticky:a,layoutItemStyles:n}=e;const l=_(!1),t=_(0),s=v(()=>{const h=typeof l.value=="boolean"?"top":l.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,l.value?{[h]:vt(t.value)}:{top:n.value.top}]});Se(()=>{D(a,h=>{h?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),ae(()=>{window.removeEventListener("scroll",y)});let o=0;function y(){var I;const h=o>window.scrollY?"up":"down",f=i.value.getBoundingClientRect(),u=parseFloat((I=n.value.top)!=null?I:0),r=window.scrollY-Math.max(0,t.value-u),c=f.height+Math.max(t.value,u)-window.scrollY-window.innerHeight,d=parseFloat(getComputedStyle(i.value).getPropertyValue("--v-body-scroll-y"))||0;f.height<window.innerHeight-u?(l.value="top",t.value=u):h==="up"&&l.value==="bottom"||h==="down"&&l.value==="top"?(t.value=window.scrollY+f.top-d,l.value=!0):h==="down"&&c<=0?(t.value=0,l.value="bottom"):h==="up"&&r<=0&&(d?l.value!=="top"&&(t.value=-r+d+u,l.value="top"):(t.value=f.top+r,l.value="top")),o=window.scrollY}return{isStuck:l,stickyStyles:s}}const en=100,tn=20;function De(e){const i=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*i}function Oe(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let i=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const n=De(i),l=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);i+=(l-n)*Math.abs(l),a===e.length-1&&(i*=.5)}return De(i)*1e3}function nn(){const e={};function i(l){Array.from(l.changedTouches).forEach(t=>{var o;((o=e[t.identifier])!=null?o:e[t.identifier]=new ft(tn)).push([l.timeStamp,t])})}function a(l){Array.from(l.changedTouches).forEach(t=>{delete e[t.identifier]})}function n(l){var h;const t=(h=e[l])==null?void 0:h.values().reverse();if(!t)throw new Error(`No samples for touch id ${l}`);const s=t[0],o=[],y=[];for(const f of t){if(s[0]-f[0]>en)break;o.push({t:f[0],d:f[1].clientX}),y.push({t:f[0],d:f[1].clientY})}return{x:Oe(o),y:Oe(y),get direction(){const{x:f,y:u}=this,[r,c]=[Math.abs(f),Math.abs(u)];return r>c&&f>=0?"right":r>c&&f<=0?"left":c>r&&u>=0?"down":c>r&&u<=0?"up":an()}}}return{addMovement:i,endTouch:a,getVelocity:n}}function an(){throw new Error}function ln(e){let{isActive:i,isTemporary:a,width:n,touchless:l,position:t}=e;Se(()=>{window.addEventListener("touchstart",P,{passive:!0}),window.addEventListener("touchmove",k,{passive:!1}),window.addEventListener("touchend",b,{passive:!0})}),ae(()=>{window.removeEventListener("touchstart",P),window.removeEventListener("touchmove",k),window.removeEventListener("touchend",b)});const s=v(()=>["left","right"].includes(t.value)),{addMovement:o,endTouch:y,getVelocity:h}=nn();let f=!1;const u=_(!1),r=_(0),c=_(0);let d;function I(m,p){return(t.value==="left"?m:t.value==="right"?document.documentElement.clientWidth-m:t.value==="top"?m:t.value==="bottom"?document.documentElement.clientHeight-m:K())-(p?n.value:0)}function A(m){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const S=t.value==="left"?(m-c.value)/n.value:t.value==="right"?(document.documentElement.clientWidth-m-c.value)/n.value:t.value==="top"?(m-c.value)/n.value:t.value==="bottom"?(document.documentElement.clientHeight-m-c.value)/n.value:K();return p?Math.max(0,Math.min(1,S)):S}function P(m){if(l.value)return;const p=m.changedTouches[0].clientX,S=m.changedTouches[0].clientY,C=25,V=t.value==="left"?p<C:t.value==="right"?p>document.documentElement.clientWidth-C:t.value==="top"?S<C:t.value==="bottom"?S>document.documentElement.clientHeight-C:K(),B=i.value&&(t.value==="left"?p<n.value:t.value==="right"?p>document.documentElement.clientWidth-n.value:t.value==="top"?S<n.value:t.value==="bottom"?S>document.documentElement.clientHeight-n.value:K());(V||B||i.value&&a.value)&&(f=!0,d=[p,S],c.value=I(s.value?p:S,i.value),r.value=A(s.value?p:S),y(m),o(m))}function k(m){const p=m.changedTouches[0].clientX,S=m.changedTouches[0].clientY;if(f){if(!m.cancelable){f=!1;return}const V=Math.abs(p-d[0]),B=Math.abs(S-d[1]);(s.value?V>B&&V>3:B>V&&B>3)?(u.value=!0,f=!1):(s.value?B:V)>3&&(f=!1)}if(!u.value)return;m.preventDefault(),o(m);const C=A(s.value?p:S,!1);r.value=Math.max(0,Math.min(1,C)),C>1?c.value=I(s.value?p:S,!0):C<0&&(c.value=I(s.value?p:S,!1))}function b(m){if(f=!1,!u.value)return;o(m),u.value=!1;const p=h(m.changedTouches[0].identifier),S=Math.abs(p.x),C=Math.abs(p.y);(s.value?S>C&&S>400:C>S&&C>3)?i.value=p.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||K()):i.value=r.value>.5}const w=v(()=>u.value?{transform:t.value==="left"?`translateX(calc(-100% + ${r.value*n.value}px))`:t.value==="right"?`translateX(calc(100% - ${r.value*n.value}px))`:t.value==="top"?`translateY(calc(-100% + ${r.value*n.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${r.value*n.value}px))`:K(),transition:"none"}:void 0);return{isDragging:u,dragProgress:r,dragStyles:w}}function K(){throw new Error}function sn(){const i=Re("useScopeId").vnode.scopeId;return{scopeId:i?{[i]:""}:void 0}}const un=["start","end","left","right","top","bottom"],on=T({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>un.includes(e)},sticky:Boolean,...we(),...N(),...Ve(),...gt(),...Ce(),...X({tag:"nav"}),...ce()},"VNavigationDrawer"),In=O()({name:"VNavigationDrawer",props:on(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,i){let{attrs:a,emit:n,slots:l}=i;const{isRtl:t}=He(),{themeClasses:s}=pe(e),{borderClasses:o}=Ie(e),{backgroundColorClasses:y,backgroundColorStyles:h}=ye(x(e,"color")),{elevationClasses:f}=Pe(e),{mobile:u}=mt(),{roundedClasses:r}=Ae(e),c=Pt(),d=Q(e,"modelValue",null,L=>!!L),{ssrBootStyles:I}=Le(),{scopeId:A}=sn(),P=$(),k=_(!1),b=v(()=>e.rail&&e.expandOnHover&&k.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),w=v(()=>At(e.location,t.value)),m=v(()=>!e.permanent&&(u.value||e.temporary)),p=v(()=>e.sticky&&!m.value&&w.value!=="bottom");e.expandOnHover&&e.rail!=null&&D(k,L=>n("update:rail",!L)),e.disableResizeWatcher||D(m,L=>!e.permanent&&ze(()=>d.value=!L)),!e.disableRouteWatcher&&c&&D(c.currentRoute,()=>m.value&&(d.value=!1)),D(()=>e.permanent,L=>{L&&(d.value=!0)}),Ge(()=>{e.modelValue!=null||m.value||(d.value=e.permanent||!u.value)});const{isDragging:S,dragProgress:C,dragStyles:V}=ln({isActive:d,isTemporary:m,width:b,touchless:x(e,"touchless"),position:w}),B=v(()=>{const L=m.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):b.value;return S.value?L*C.value:L}),{layoutItemStyles:z,layoutItemScrimStyles:Y}=yt({id:e.name,order:v(()=>parseInt(e.order,10)),position:w,layoutSize:B,elementSize:b,active:v(()=>d.value||S.value),disableTransitions:v(()=>S.value),absolute:v(()=>e.absolute||p.value&&typeof G.value!="string")}),{isStuck:G,stickyStyles:W}=Qt({rootEl:P,isSticky:p,layoutItemStyles:z}),R=ye(v(()=>typeof e.scrim=="string"?e.scrim:null)),le=v(()=>({...S.value?{opacity:C.value*.2,transition:"none"}:void 0,...Y.value}));Fe({VList:{bgColor:"transparent"}});function de(){k.value=!0}function M(){k.value=!1}return F(()=>{const L=l.image||e.image;return g(fe,null,[g(e.tag,oe({ref:P,onMouseenter:de,onMouseleave:M,class:["v-navigation-drawer",`v-navigation-drawer--${w.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":k.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":m.value,"v-navigation-drawer--active":d.value,"v-navigation-drawer--sticky":p.value},s.value,y.value,o.value,f.value,r.value,e.class],style:[h.value,z.value,V.value,I.value,W.value,e.style]},A,a),{default:()=>{var ie,U,se,q;return[L&&g("div",{key:"image",class:"v-navigation-drawer__img"},[l.image?(ie=l.image)==null?void 0:ie.call(l,{image:e.image}):g("img",{src:e.image,alt:""},null)]),l.prepend&&g("div",{class:"v-navigation-drawer__prepend"},[(U=l.prepend)==null?void 0:U.call(l)]),g("div",{class:"v-navigation-drawer__content"},[(se=l.default)==null?void 0:se.call(l)]),l.append&&g("div",{class:"v-navigation-drawer__append"},[(q=l.append)==null?void 0:q.call(l)])]}}),g(ht,{name:"fade-transition"},{default:()=>[m.value&&(S.value||d.value)&&!!e.scrim&&g("div",oe({class:["v-navigation-drawer__scrim",R.backgroundColorClasses.value],style:[le.value,R.backgroundColorStyles.value],onClick:()=>d.value=!1},A),null)]})])}),{isStuck:G}}});const rn=T({text:String,clickable:Boolean,...N(),...ce()},"VLabel"),Mn=O()({name:"VLabel",props:rn(),setup(e,i){let{slots:a}=i;return F(()=>{var n;return g("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(n=a.default)==null?void 0:n.call(a)])}),{}}});function cn(e){const{t:i}=bt();function a(n){var y;let{name:l}=n;const t={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[l],s=e[`onClick:${l}`],o=s&&t?i(`$vuetify.input.${t}`,(y=e.label)!=null?y:""):void 0;return g(me,{icon:e[`${l}Icon`],"aria-label":o,onClick:s},null)}return{InputIcon:a}}const dn=T({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...N(),...Lt({transition:{component:Bt,leaveAbsolute:!0,group:!0}})},"VMessages"),vn=O()({name:"VMessages",props:dn(),setup(e,i){let{slots:a}=i;const n=v(()=>ue(e.messages)),{textColorClasses:l,textColorStyles:t}=qe(v(()=>e.color));return F(()=>g(We,{transition:e.transition,tag:"div",class:["v-messages",l.value,e.class],style:[t.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((s,o)=>g("div",{class:"v-messages__message",key:`${o}-${n.value}`},[a.message?a.message({message:s}):s]))]})),{}}}),fn=T({focused:Boolean,"onUpdate:focused":ee()},"focus");function Pn(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ye();const a=Q(e,"focused"),n=v(()=>({[`${i}--focused`]:a.value}));function l(){a.value=!0}function t(){a.value=!1}return{focusClasses:n,isFocused:a,focus:l,blur:t}}const gn=Symbol.for("vuetify:form");function mn(){return ne(gn,null)}const yn=T({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...fn()},"validation");function hn(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ye(),a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:be();const n=Q(e,"modelValue"),l=v(()=>e.validationValue===void 0?n.value:e.validationValue),t=mn(),s=$([]),o=_(!0),y=v(()=>!!(ue(n.value===""?null:n.value).length||ue(l.value===""?null:l.value).length)),h=v(()=>{var w;return!!((w=e.disabled)!=null?w:t==null?void 0:t.isDisabled.value)}),f=v(()=>{var w;return!!((w=e.readonly)!=null?w:t==null?void 0:t.isReadonly.value)}),u=v(()=>e.errorMessages.length?ue(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):s.value),r=v(()=>{var p,S;let w=((p=e.validateOn)!=null?p:t==null?void 0:t.validateOn.value)||"input";w==="lazy"&&(w="input lazy");const m=new Set((S=w==null?void 0:w.split(" "))!=null?S:[]);return{blur:m.has("blur")||m.has("input"),input:m.has("input"),submit:m.has("submit"),lazy:m.has("lazy")}}),c=v(()=>e.error||e.errorMessages.length?!1:e.rules.length?o.value?s.value.length||r.value.lazy?null:!0:!s.value.length:!0),d=_(!1),I=v(()=>({[`${i}--error`]:c.value===!1,[`${i}--dirty`]:y.value,[`${i}--disabled`]:h.value,[`${i}--readonly`]:f.value})),A=v(()=>{var w;return(w=e.name)!=null?w:pt(a)});Ge(()=>{t==null||t.register({id:A.value,validate:b,reset:P,resetValidation:k})}),ae(()=>{t==null||t.unregister(A.value)}),Se(async()=>{r.value.lazy||await b(!0),t==null||t.update(A.value,c.value,u.value)}),Te(()=>r.value.input,()=>{D(l,()=>{if(l.value!=null)b();else if(e.focused){const w=D(()=>e.focused,m=>{m||b(),w()})}})}),Te(()=>r.value.blur,()=>{D(()=>e.focused,w=>{w||b()})}),D(c,()=>{t==null||t.update(A.value,c.value,u.value)});function P(){n.value=null,ze(k)}function k(){o.value=!0,r.value.lazy?s.value=[]:b(!0)}async function b(){var p;let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const m=[];d.value=!0;for(const S of e.rules){if(m.length>=+((p=e.maxErrors)!=null?p:1))break;const V=await(typeof S=="function"?S:()=>S)(l.value);if(V!==!0){if(V!==!1&&typeof V!="string"){console.warn(`${V} is not a valid value. Rule functions must return boolean true or a string.`);continue}m.push(V||"")}}return s.value=m,d.value=!1,o.value=w,s.value}return{errorMessages:u,isDirty:y,isDisabled:h,isReadonly:f,isPristine:o,isValid:c,isValidating:d,reset:P,resetValidation:k,validate:b,validationClasses:I}}const bn=T({id:String,appendIcon:H,centerAffix:{type:Boolean,default:!0},prependIcon:H,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":ee(),"onClick:append":ee(),...N(),...ke(),...yn()},"VInput"),An=O()({name:"VInput",props:{...bn()},emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:a,slots:n,emit:l}=i;const{densityClasses:t}=Me(e),{rtlClasses:s}=He(),{InputIcon:o}=cn(e),y=be(),h=v(()=>e.id||`input-${y}`),f=v(()=>`${h.value}-messages`),{errorMessages:u,isDirty:r,isDisabled:c,isReadonly:d,isPristine:I,isValid:A,isValidating:P,reset:k,resetValidation:b,validate:w,validationClasses:m}=hn(e,"v-input",h),p=v(()=>({id:h,messagesId:f,isDirty:r,isDisabled:c,isReadonly:d,isPristine:I,isValid:A,isValidating:P,reset:k,resetValidation:b,validate:w})),S=v(()=>{var C;return((C=e.errorMessages)==null?void 0:C.length)||!I.value&&u.value.length?u.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return F(()=>{var Y,G,W,R;const C=!!(n.prepend||e.prependIcon),V=!!(n.append||e.appendIcon),B=S.value.length>0,z=!e.hideDetails||e.hideDetails==="auto"&&(B||!!n.details);return g("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix},t.value,s.value,m.value,e.class],style:e.style},[C&&g("div",{key:"prepend",class:"v-input__prepend"},[(Y=n.prepend)==null?void 0:Y.call(n,p.value),e.prependIcon&&g(o,{key:"prepend-icon",name:"prepend"},null)]),n.default&&g("div",{class:"v-input__control"},[(G=n.default)==null?void 0:G.call(n,p.value)]),V&&g("div",{key:"append",class:"v-input__append"},[e.appendIcon&&g(o,{key:"append-icon",name:"append"},null),(W=n.append)==null?void 0:W.call(n,p.value)]),z&&g("div",{class:"v-input__details"},[g(vn,{id:f.value,active:B,messages:S.value},{message:n.message}),(R=n.details)==null?void 0:R.call(n,p.value)])])}),{reset:k,resetValidation:b,validate:w}}});export{Mn as V,cn as a,bn as b,An as c,Vn as d,In as e,Cn as f,$e as g,fn as m,Pn as u};