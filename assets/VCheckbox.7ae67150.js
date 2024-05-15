import{p as x,Q as R,a6 as N,m as q,a as Q,g as P,l as h,Z as _,e as u,a0 as Y,aq as Z,f as z,t as s,u as B,c as v,s as G,r as K,ad as L,R as W,S as X,v as S,Y as p,V as T,aI as w,P as ee,aJ as le}from"./index.77097de3.js";import{g as te,R as ae,t as ne,i as oe,l as ue}from"./VAvatar.a854eedd.js";import{a as ie,d as ce,b as re,e as O}from"./scopeId.724f8b55.js";const M=Symbol.for("vuetify:selection-control-group"),j=x({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:R,trueIcon:R,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:N},...q(),...te(),...Q()},"SelectionControlGroup"),se=x({...j({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");P()({name:"VSelectionControlGroup",props:se(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:i}=o;const l=h(e,"modelValue"),t=_(),d=u(()=>e.id||`v-selection-control-group-${t}`),c=u(()=>e.name||d.value),a=new Set;return Y(M,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),Z(()=>{a.delete(n)})}}),z({[e.defaultsTarget]:{color:s(e,"color"),disabled:s(e,"disabled"),density:s(e,"density"),error:s(e,"error"),inline:s(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:s(e,"falseIcon"),trueIcon:s(e,"trueIcon"),readonly:s(e,"readonly"),ripple:s(e,"ripple"),type:s(e,"type"),valueComparator:s(e,"valueComparator")}}),B(()=>{var n;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=i.default)==null?void 0:n.call(i)])}),{}}});const H=x({label:String,trueValue:null,falseValue:null,value:null,...q(),...j()},"VSelectionControl");function de(e){const o=p(M,void 0),{densityClasses:i}=oe(e),l=h(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),d=u(()=>e.falseValue!==void 0?e.falseValue:!1),c=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=u({get(){const m=o?o.modelValue.value:l.value;return c.value?m.some(r=>e.valueComparator(r,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const r=m?t.value:d.value;let f=r;c.value&&(f=m?[...T(l.value),r]:T(l.value).filter(y=>!e.valueComparator(y,t.value))),o?o.modelValue.value=f:l.value=f}}),{textColorClasses:n,textColorStyles:b}=ue(u(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),k=u(()=>a.value?e.trueIcon:e.falseIcon);return{group:o,densityClasses:i,trueValue:t,falseValue:d,model:a,textColorClasses:n,textColorStyles:b,icon:k}}const ve=P()({name:"VSelectionControl",directives:{Ripple:ae},inheritAttrs:!1,props:H(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:i,slots:l}=o;const{group:t,densityClasses:d,icon:c,model:a,textColorClasses:n,textColorStyles:b,trueValue:k}=de(e),m=_(),r=u(()=>e.id||`input-${m}`),f=G(!1),y=G(!1),I=K();t==null||t.onForceUpdate(()=>{I.value&&(I.value.checked=a.value)});function C(V){f.value=!0,(!w||w&&V.target.matches(":focus-visible"))&&(y.value=!0)}function g(){f.value=!1,y.value=!1}function A(V){e.readonly&&t&&ee(()=>t.forceUpdate()),a.value=V.target.checked}return B(()=>{var $,D;const V=l.label?l.label({label:e.label,props:{for:r.value}}):e.label,[F,U]=L(i);return v("div",S({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},d.value,e.class]},F,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",n.value],style:b.value},[($=l.default)==null?void 0:$.call(l),W(v("div",{class:["v-selection-control__input"]},[c.value&&v(ne,{key:"icon",icon:c.value},null),v("input",S({ref:I,checked:a.value,disabled:!!(e.readonly||e.disabled),id:r.value,onBlur:g,onFocus:C,onInput:A,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},U),null),(D=l.input)==null?void 0:D.call(l,{model:a,textColorClasses:n,textColorStyles:b,props:{onFocus:C,onBlur:g,id:r.value}})]),[[X("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),V&&v(ie,{for:r.value,clickable:!0},{default:()=>[V]})])}),{isFocused:f,input:I}}}),J=x({indeterminate:Boolean,indeterminateIcon:{type:R,default:"$checkboxIndeterminate"},...H({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),E=P()({name:"VCheckboxBtn",props:J(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,o){let{slots:i}=o;const l=h(e,"indeterminate"),t=h(e,"modelValue");function d(n){l.value&&(l.value=!1)}const c=u(()=>l.value?e.indeterminateIcon:e.falseIcon),a=u(()=>l.value?e.indeterminateIcon:e.trueIcon);return B(()=>v(ve,S(e,{modelValue:t.value,"onUpdate:modelValue":[n=>t.value=n,d],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:c.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),i)),{}}}),me=x({...ce(),...le(J(),["inline"])},"VCheckbox"),be=P()({name:"VCheckbox",inheritAttrs:!1,props:me(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,o){let{attrs:i,slots:l}=o;const t=h(e,"modelValue"),{isFocused:d,focus:c,blur:a}=re(e),n=_(),b=u(()=>e.id||`checkbox-${n}`);return B(()=>{const[k,m]=L(i),[r,f]=O.filterProps(e),[y,I]=E.filterProps(e);return v(O,S({class:["v-checkbox",e.class]},k,r,{modelValue:t.value,"onUpdate:modelValue":C=>t.value=C,id:b.value,focused:d.value,style:e.style}),{...l,default:C=>{let{id:g,messagesId:A,isDisabled:V,isReadonly:F}=C;return v(E,S(y,{id:g.value,"aria-describedby":A.value,disabled:V.value,readonly:F.value},m,{modelValue:t.value,"onUpdate:modelValue":U=>t.value=U,onFocus:c,onBlur:a}),l)}})}),{}}});export{be as V,E as a};
