import{m as C}from"./tag.f5a3020d.js";import{aC as c,am as u,p as b,m as S,g as k,e as N,ao as j}from"./index.2aa81676.js";const V=(()=>c.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),v=(()=>c.reduce((e,a)=>{const t="offset"+u(a);return e[t]={type:[String,Number],default:null},e},{}))(),L=(()=>c.reduce((e,a)=>{const t="order"+u(a);return e[t]={type:[String,Number],default:null},e},{}))(),y={col:Object.keys(V),offset:Object.keys(v),order:Object.keys(L)};function G(e,a,t){let s=e;if(!(t==null||t===!1))return a&&(s+=`-${a.replace(e,"")}`),e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}const _=["auto","start","end","center","baseline","stretch"],I=b({cols:{type:[Boolean,String,Number],default:!1},...V,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:e=>_.includes(e)},...S(),...C()},"VCol"),p=k()({name:"VCol",props:I(),setup(e,a){let{slots:t}=a;const s=N(()=>{const n=[];let l;for(l in y)y[l].forEach(o=>{const i=e[o],g=G(l,o,i);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return j(e.tag,{class:[s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),f=["start","end","center"],$=["space-between","space-around","space-evenly"];function d(e,a){return c.reduce((t,s)=>{const n=e+u(s);return t[n]=a(),t},{})}const R=[...f,"baseline","stretch"],h=e=>R.includes(e),w=d("align",()=>({type:String,default:null,validator:h})),T=[...f,...$],P=e=>T.includes(e),E=d("justify",()=>({type:String,default:null,validator:P})),U=[...f,...$,"stretch"],A=e=>U.includes(e),O=d("alignContent",()=>({type:String,default:null,validator:A})),m={align:Object.keys(w),justify:Object.keys(E),alignContent:Object.keys(O)},B={align:"align",justify:"justify",alignContent:"align-content"};function M(e,a,t){let s=B[e];if(t!=null)return a&&(s+=`-${a.replace(e,"")}`),s+=`-${t}`,s.toLowerCase()}const F=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...w,justify:{type:String,default:null,validator:P},...E,alignContent:{type:String,default:null,validator:A},...O,...S(),...C()},"VRow"),z=k()({name:"VRow",props:F(),setup(e,a){let{slots:t}=a;const s=N(()=>{const n=[];let l;for(l in m)m[l].forEach(r=>{const o=e[r],i=M(l,r,o);i&&n.push(i)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return j(e.tag,{class:["v-row",s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}});export{z as V,p as a};
