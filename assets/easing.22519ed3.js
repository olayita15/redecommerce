class c{constructor(t){let{x:r,y:i,width:e,height:n}=t;this.x=r,this.y=i,this.width=e,this.height=n}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function m(s,t){return{x:{before:Math.max(0,t.left-s.left),after:Math.max(0,s.right-t.right)},y:{before:Math.max(0,t.top-s.top),after:Math.max(0,s.bottom-t.bottom)}}}function x(s){const t=s.getBoundingClientRect(),r=getComputedStyle(s),i=r.transform;if(i){let e,n,o,a,h;if(i.startsWith("matrix3d("))e=i.slice(9,-1).split(/, /),n=+e[0],o=+e[5],a=+e[12],h=+e[13];else if(i.startsWith("matrix("))e=i.slice(7,-1).split(/, /),n=+e[0],o=+e[3],a=+e[4],h=+e[5];else return new c(t);const f=r.transformOrigin,d=t.x-a-(1-n)*parseFloat(f),l=t.y-h-(1-o)*parseFloat(f.slice(f.indexOf(" ")+1)),u=n?t.width/n:s.offsetWidth+1,g=o?t.height/o:s.offsetHeight+1;return new c({x:d,y:l,width:u,height:g})}else return new c(t)}function y(s,t,r){if(typeof s.animate=="undefined")return{finished:Promise.resolve()};let i;try{i=s.animate(t,r)}catch{return{finished:Promise.resolve()}}return typeof i.finished=="undefined"&&(i.finished=new Promise(e=>{i.onfinish=()=>{e(i)}})),i}const p="cubic-bezier(0.4, 0, 0.2, 1)",w="cubic-bezier(0.0, 0, 0.2, 1)",b="cubic-bezier(0.4, 0, 1, 1)";export{c as B,y as a,b,w as d,m as g,x as n,p as s};
