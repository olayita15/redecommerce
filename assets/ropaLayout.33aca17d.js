import{p as x,m as E,aD as Ge,g as P,aE as Fe,u as w,c as l,I as L,ae as me,a as Y,l as G,A as Z,e as V,ab as we,aF as Re,f as Ve,t as C,s as ue,r as I,D as ye,y as M,G as J,v as F,ac as Te,af as se,aG as ie,J as $e,aH as De,b as ke,E as ce,aA as Ue,z as Ee,F as U,_ as ze,$ as Oe,Y as A,O as f,M as _,P as Me,N,X as j,S as H,Z as X,aI as Ne,a0 as je,a1 as He,U as Xe,V as qe,Q as W}from"./index.da1b0fa0.js";import{V as Ke,d as q}from"./VCard.ce367e9a.js";import{b as Qe,e as Je,u as Ye,f as re,d as Ze,h as We,j as el,g as ll,i as al}from"./VInput.cc483b7e.js";import{q as Ce,R as be,B as D,x as pe,n as tl,Q as nl,t as he,E as ol,m as ul,a as sl,G as il,b as cl,s as rl,S as dl,c as vl,w as fl,d as ml,e as Vl,T as yl,H as kl,v as Cl,z as bl,f as O,A as de,i as pl,o as hl}from"./VDivider.7c32d3b4.js";import{m as Ie,V as ve}from"./VContainer.d8650aec.js";const Il=x({...E(),...Ge()},"VLayout"),_l=P()({name:"VLayout",props:Il(),setup(e,r){let{slots:s}=r;const{layoutClasses:t,layoutStyles:a,getLayoutItem:m,items:d,layoutRef:i}=Fe(e);return w(()=>{var u;return l("div",{ref:i,class:[t.value,e.class],style:[a.value,e.style]},[(u=s.default)==null?void 0:u.call(s)])}),{getLayoutItem:m,items:d}}});const _e=Symbol.for("vuetify:selection-control-group"),ge=x({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:L,trueIcon:L,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:me},...E(),...Ce(),...Y()},"SelectionControlGroup"),gl=x({...ge({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");P()({name:"VSelectionControlGroup",props:gl(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:s}=r;const t=G(e,"modelValue"),a=Z(),m=V(()=>e.id||`v-selection-control-group-${a}`),d=V(()=>e.name||m.value),i=new Set;return we(_e,{modelValue:t,forceUpdate:()=>{i.forEach(u=>u())},onForceUpdate:u=>{i.add(u),Re(()=>{i.delete(u)})}}),Ve({[e.defaultsTarget]:{color:C(e,"color"),disabled:C(e,"disabled"),density:C(e,"density"),error:C(e,"error"),inline:C(e,"inline"),modelValue:t,multiple:V(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),name:d,falseIcon:C(e,"falseIcon"),trueIcon:C(e,"trueIcon"),readonly:C(e,"readonly"),ripple:C(e,"ripple"),type:C(e,"type"),valueComparator:C(e,"valueComparator")}}),w(()=>{var u;return l("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(u=s.default)==null?void 0:u.call(s)])}),{}}});const Se=x({label:String,trueValue:null,falseValue:null,value:null,...E(),...ge()},"VSelectionControl");function Sl(e){const r=Te(_e,void 0),{densityClasses:s}=pe(e),t=G(e,"modelValue"),a=V(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=V(()=>e.falseValue!==void 0?e.falseValue:!1),d=V(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),i=V({get(){const c=r?r.modelValue.value:t.value;return d.value?c.some(y=>e.valueComparator(y,a.value)):e.valueComparator(c,a.value)},set(c){if(e.readonly)return;const y=c?a.value:m.value;let o=y;d.value&&(o=c?[...se(t.value),y]:se(t.value).filter(v=>!e.valueComparator(v,a.value))),r?r.modelValue.value=o:t.value=o}}),{textColorClasses:u,textColorStyles:b}=tl(V(()=>i.value&&!e.error&&!e.disabled?e.color:void 0)),g=V(()=>i.value?e.trueIcon:e.falseIcon);return{group:r,densityClasses:s,trueValue:a,falseValue:m,model:i,textColorClasses:u,textColorStyles:b,icon:g}}const xl=P()({name:"VSelectionControl",directives:{Ripple:be},inheritAttrs:!1,props:Se(),emits:{"update:modelValue":e=>!0},setup(e,r){let{attrs:s,slots:t}=r;const{group:a,densityClasses:m,icon:d,model:i,textColorClasses:u,textColorStyles:b,trueValue:g}=Sl(e),c=Z(),y=V(()=>e.id||`input-${c}`),o=ue(!1),v=ue(!1),S=I();a==null||a.onForceUpdate(()=>{S.value&&(S.value.checked=i.value)});function n(k){o.value=!0,(!ie||ie&&k.target.matches(":focus-visible"))&&(v.value=!0)}function h(){o.value=!1,v.value=!1}function R(k){e.readonly&&a&&$e(()=>a.forceUpdate()),i.value=k.target.checked}return w(()=>{var z,p;const k=t.label?t.label({label:e.label,props:{for:y.value}}):e.label,[T,B]=ye(s);return l("div",F({class:["v-selection-control",{"v-selection-control--dirty":i.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":o.value,"v-selection-control--focus-visible":v.value,"v-selection-control--inline":e.inline},m.value,e.class]},T,{style:e.style}),[l("div",{class:["v-selection-control__wrapper",u.value],style:b.value},[(z=t.default)==null?void 0:z.call(t),M(l("div",{class:["v-selection-control__input"]},[d.value&&l(D,{key:"icon",icon:d.value},null),l("input",F({ref:S,checked:i.value,disabled:!!(e.readonly||e.disabled),id:y.value,onBlur:h,onFocus:n,onInput:R,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:g.value,name:e.name,"aria-checked":e.type==="checkbox"?i.value:void 0},B),null),(p=t.input)==null?void 0:p.call(t,{model:i,textColorClasses:u,textColorStyles:b,props:{onFocus:n,onBlur:h,id:y.value}})]),[[J("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),k&&l(Qe,{for:y.value,clickable:!0},{default:()=>[k]})])}),{isFocused:o,input:S}}}),xe=x({indeterminate:Boolean,indeterminateIcon:{type:L,default:"$checkboxIndeterminate"},...Se({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),fe=P()({name:"VCheckboxBtn",props:xe(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:s}=r;const t=G(e,"indeterminate"),a=G(e,"modelValue");function m(u){t.value&&(t.value=!1)}const d=V(()=>t.value?e.indeterminateIcon:e.falseIcon),i=V(()=>t.value?e.indeterminateIcon:e.trueIcon);return w(()=>l(xl,F(e,{modelValue:a.value,"onUpdate:modelValue":[u=>a.value=u,m],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:d.value,trueIcon:i.value,"aria-checked":t.value?"mixed":void 0}),s)),{}}}),Pl=x({...Je(),...De(xe(),["inline"])},"VCheckbox"),Bl=P()({name:"VCheckbox",inheritAttrs:!1,props:Pl(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,r){let{attrs:s,slots:t}=r;const a=G(e,"modelValue"),{isFocused:m,focus:d,blur:i}=Ye(e),u=Z(),b=V(()=>e.id||`checkbox-${u}`);return w(()=>{const[g,c]=ye(s),[y,o]=re.filterProps(e),[v,S]=fe.filterProps(e);return l(re,F({class:["v-checkbox",e.class]},g,y,{modelValue:a.value,"onUpdate:modelValue":n=>a.value=n,id:b.value,focused:m.value,style:e.style}),{...t,default:n=>{let{id:h,messagesId:R,isDisabled:k,isReadonly:T}=n;return l(fe,F(v,{id:h.value,"aria-describedby":R.value,disabled:k.value,readonly:T.value},c,{modelValue:a.value,"onUpdate:modelValue":B=>a.value=B,onFocus:d,onBlur:i}),t)}})}),{}}});const Pe=Symbol.for("vuetify:v-chip-group"),Al=x({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:me},...E(),...nl({selectedClass:"v-chip--selected"}),...Ie(),...Y(),...he({variant:"tonal"})},"VChipGroup"),K=P()({name:"VChipGroup",props:Al(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:s}=r;const{themeClasses:t}=ke(e),{isSelected:a,select:m,next:d,prev:i,selected:u}=ol(e,Pe);return Ve({VChip:{color:C(e,"color"),disabled:C(e,"disabled"),filter:C(e,"filter"),variant:C(e,"variant")}}),w(()=>l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},t.value,e.class],style:e.style},{default:()=>{var b;return[(b=s.default)==null?void 0:b.call(s,{isSelected:a,select:m,next:d,prev:i,selected:u.value})]}})),{}}}),Ll=x({activeClass:String,appendAvatar:String,appendIcon:L,closable:Boolean,closeIcon:{type:L,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:L,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ce(),onClickOnce:ce(),...ul(),...E(),...Ce(),...sl(),...il(),...cl(),...rl(),...dl(),...Ie({tag:"span"}),...Y(),...he({variant:"tonal"})},"VChip"),Q=P()({name:"VChip",directives:{Ripple:be},props:Ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,r){let{attrs:s,emit:t,slots:a}=r;const{t:m}=Ue(),{borderClasses:d}=vl(e),{colorClasses:i,colorStyles:u,variantClasses:b}=fl(e),{densityClasses:g}=pe(e),{elevationClasses:c}=ml(e),{roundedClasses:y}=Vl(e),{sizeClasses:o}=yl(e),{themeClasses:v}=ke(e),S=G(e,"modelValue"),n=kl(e,Pe,!1),h=Cl(e,s),R=V(()=>e.link!==!1&&h.isLink.value),k=V(()=>!e.disabled&&e.link!==!1&&(!!n||e.link||h.isClickable.value)),T=V(()=>({"aria-label":m(e.closeLabel),onClick(p){S.value=!1,t("click:close",p)}}));function B(p){var $;t("click",p),k.value&&(($=h.navigate)==null||$.call(h,p),n==null||n.toggle())}function z(p){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),B(p))}return()=>{const p=h.isLink.value?"a":e.tag,$=!!(e.appendIcon||e.appendAvatar),Be=!!($||a.append),Ae=!!(a.close||e.closable),le=!!(a.filter||e.filter)&&n,ae=!!(e.prependIcon||e.prependAvatar),Le=!!(ae||a.prepend),te=!n||n.isSelected.value;return S.value&&M(l(p,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":k.value,"v-chip--filter":le,"v-chip--pill":e.pill},v.value,d.value,te?i.value:void 0,g.value,c.value,y.value,o.value,b.value,n==null?void 0:n.selectedClass.value,e.class],style:[te?u.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:h.href.value,tabindex:k.value?0:void 0,onClick:B,onKeydown:k.value&&!R.value&&z},{default:()=>{var ne,oe;return[bl(k.value,"v-chip"),le&&l(Ze,{key:"filter"},{default:()=>[M(l("div",{class:"v-chip__filter"},[a.filter?M(l(O,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[J("slot"),a.filter,"default"]]):l(D,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ee,n.isSelected.value]])]}),Le&&l("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?l(O,{key:"prepend-defaults",disabled:!ae,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):l(U,null,[e.prependIcon&&l(D,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(de,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content"},[(oe=(ne=a.default)==null?void 0:ne.call(a,{isSelected:n==null?void 0:n.isSelected.value,selectedClass:n==null?void 0:n.selectedClass.value,select:n==null?void 0:n.select,toggle:n==null?void 0:n.toggle,value:n==null?void 0:n.value.value,disabled:e.disabled}))!=null?oe:e.text]),Be&&l("div",{key:"append",class:"v-chip__append"},[a.append?l(O,{key:"append-defaults",disabled:!$,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):l(U,null,[e.appendIcon&&l(D,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(de,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),Ae&&l("div",F({key:"close",class:"v-chip__close"},T.value),[a.close?l(O,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):l(D,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[J("ripple"),k.value&&e.ripple,null]])}}}),ee=e=>(Xe("data-v-6fa96aa2"),e=e(),qe(),e),Gl=ee(()=>W("h2",{class:"mb-2"}," Tipo de ropa ",-1)),Fl=ee(()=>W("h2",{class:"mb-2"}," Talla ",-1)),wl=ee(()=>W("h2",{class:"mb-2"}," Color ",-1)),Rl={__name:"ropaLayout",setup(e){const r=I(!1),s=I(!0),t=I(["Gorras","Camisetas","Cuellos","Bufandas"]),a=I([]),m=I(["S","M","L","XL"]),d=I([]),i=I([{text:"Rojo",value:1,color:"red"},{text:"Azul",value:2,color:"blue"},{text:"Verde",value:3,color:"green"},{text:"Negro",value:3,color:"black"}]),u=I(["red","blue","green","purple"]),b=I([]);return(g,c)=>{const y=Oe("router-view");return _(),A(Ke,{class:"primary-font"},{default:f(()=>[l(_l,null,{default:f(()=>[l(We,{modelValue:r.value,"onUpdate:modelValue":c[4]||(c[4]=o=>r.value=o),rail:s.value,temporary:"",style:{"background-color":"#f4f4f4"},onClick:c[5]||(c[5]=o=>s.value=!1)},{default:f(()=>[l(el,{"prepend-icon":"mdi-filter",title:"Filtrar/Ordenar",nav:"",style:{"font-size":"x-large"}},{append:f(()=>[l(pl,{variant:"text",icon:"mdi-chevron-left",onClick:c[0]||(c[0]=Me(o=>s.value=!s.value,["stop"]))})]),_:1}),l(hl),s.value?Ne("",!0):(_(),A(ll,{key:0,density:"compact",nav:""},{default:f(()=>[l(Bl,{label:"Precio: m\xE1s bajo primero"}),l(q,{class:"ma-3 pa-0"},{default:f(()=>[Gl,l(K,{modelValue:a.value,"onUpdate:modelValue":c[1]||(c[1]=o=>a.value=o),column:"",multiple:"",filter:""},{default:f(()=>[(_(!0),N(U,null,j(t.value,(o,v)=>(_(),A(Q,{key:v,color:u.value[v]},{default:f(()=>[H(X(o),1)]),_:2},1032,["color"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(q,{class:"ma-3 pa-0"},{default:f(()=>[Fl,l(K,{modelValue:d.value,"onUpdate:modelValue":c[2]||(c[2]=o=>d.value=o),column:"",multiple:"",filter:""},{default:f(()=>[(_(!0),N(U,null,j(m.value,(o,v)=>(_(),A(Q,{key:v,color:u.value[v]},{default:f(()=>[H(X(o),1)]),_:2},1032,["color"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(q,{class:"ma-3 pa-0"},{default:f(()=>[wl,l(K,{modelValue:b.value,"onUpdate:modelValue":c[3]||(c[3]=o=>b.value=o),column:"",multiple:"",filter:""},{default:f(()=>[(_(!0),N(U,null,j(i.value,(o,v)=>(_(),A(Q,{key:v,color:u.value[v]},{default:f(()=>[H(X(o.text),1)]),_:2},1032,["color"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}))]),_:1},8,["modelValue","rail"]),l(al,null,{default:f(()=>[l(ve,{fluid:"",class:"pa-0 ma-0","grid-list-xs":""},{default:f(()=>[l(ve,{fluid:"",class:"pa-0 ma-0"},{default:f(()=>[l(y,null,{default:f(({Component:o,route:v})=>[l(je,{name:"slide-fade",mode:"out-in"},{default:f(()=>[(_(),A(He(o),{key:v.name}))]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};var zl=ze(Rl,[["__scopeId","data-v-6fa96aa2"]]);export{zl as default};