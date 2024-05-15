import{ao as S,g as $,aB as D,aC as U,m as T,ax as Z,p as f,r as N,a as o,n as j,D as E,q as G,u as H,c as s,v as u,T as J,Z as R}from"./index.919d4ddc.js";import{c as K,a as Q,d as B,f as W}from"./VAvatar.e3d7a5e8.js";import{u as ee}from"./intersectionObserver.c4513ba0.js";import{m as te}from"./tag.ad6fecd6.js";const O=["top","bottom"],ae=["start","end","left","right"];function ne(e,a){let[t,n]=e.split(" ");return n||(n=S(O,t)?"start":S(ae,t)?"top":"center"),{side:V(t,a),align:V(n,a)}}function V(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}function me(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function ve(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function fe(e){return{side:e.align,align:e.side}}function he(e){return S(O,e.side)?"y":"x"}function be(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return $()({name:t!=null?t:D(U(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...T()},setup(n,g){let{slots:l}=g;return()=>{var i;return Z(n.tag,{class:[e,n.class],style:n.style},(i=l.default)==null?void 0:i.call(l))}}})}const L={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},le=f({location:String},"location");function re(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=N();return{locationStyles:o(()=>{if(!e.location)return{};const{side:l,align:i}=ne(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function m(h){return t?t(h):0}const r={};return l!=="center"&&(a?r[L[l]]=`calc(100% - ${m(l)}px)`:r[l]=0),i!=="center"?a?r[L[i]]=`calc(100% - ${m(i)}px)`:r[i]=0:(l==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),r})}}const oe=f({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...T(),...le({location:"top"}),...K(),...te(),...j()},"VProgressLinear"),se=$()({name:"VProgressLinear",props:oe(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const n=E(e,"modelValue"),{isRtl:g,rtlClasses:l}=N(),{themeClasses:i}=G(e),{locationStyles:m}=re(e),{textColorClasses:r,textColorStyles:h}=Q(e,"color"),{backgroundColorClasses:w,backgroundColorStyles:F}=B(o(()=>e.bgColor||e.color)),{backgroundColorClasses:x,backgroundColorStyles:P}=B(e,"color"),{roundedClasses:I}=W(e),{intersectionRef:b,isIntersecting:z}=ee(),y=o(()=>parseInt(e.max,10)),c=o(()=>parseInt(e.height,10)),C=o(()=>parseFloat(e.bufferValue)/y.value*100),p=o(()=>parseFloat(n.value)/y.value*100),v=o(()=>g.value!==e.reverse),A=o(()=>e.indeterminate?"fade-transition":"slide-x-transition"),_=o(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function X(d){if(!b.value)return;const{left:M,right:Y,width:k}=b.value.getBoundingClientRect(),q=v.value?k-d.clientX+(Y-k):d.clientX-M;n.value=Math.round(q/k*y.value)}return H(()=>s(e.tag,{ref:b,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&z.value,"v-progress-linear--reverse":v.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},I.value,i.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?u(c.value):0,"--v-progress-linear-height":u(c.value),...m.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:p.value,onClick:e.clickable&&X},{default:()=>[e.stream&&s("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...h.value,[v.value?"left":"right"]:u(-c.value),borderTop:`${u(c.value/2)} dotted`,opacity:_.value,top:`calc(50% - ${u(c.value/4)})`,width:u(100-C.value,"%"),"--v-progress-linear-stream-to":u(c.value*(v.value?1:-1))}},null),s("div",{class:["v-progress-linear__background",w.value],style:[F.value,{opacity:_.value,width:u(e.stream?C.value:100,"%")}]},null),s(J,{name:A.value},{default:()=>[e.indeterminate?s("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(d=>s("div",{key:d,class:["v-progress-linear__indeterminate",d,x.value],style:P.value},null))]):s("div",{class:["v-progress-linear__determinate",x.value],style:[P.value,{width:u(p.value,"%")}]},null)]}),t.default&&s("div",{class:"v-progress-linear__content"},[t.default({value:p.value,buffer:C.value})])]})),{}}}),ye=f({loading:[Boolean,String]},"loader");function Ce(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{loaderClasses:o(()=>({[`${a}--loading`]:e.loading}))}}function pe(e,a){var n;let{slots:t}=a;return s("div",{class:`${e.name}__loader`},[((n=t.default)==null?void 0:n.call(t,{color:e.color,isActive:e.active}))||s(se,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const ie=["static","relative","fixed","absolute","sticky"],ke=f({position:{type:String,validator:e=>ie.includes(e)}},"position");function Se(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:R();return{positionClasses:o(()=>e.position?`${a}--${e.position}`:void 0)}}export{pe as L,se as V,le as a,ke as b,re as c,Se as d,be as e,me as f,ve as g,fe as h,he as i,ye as m,ne as p,V as t,Ce as u};
