import{S as t,i as e,s,e as l,t as n,f as a,g as o,h as r,d as h,j as c,k as f,l as i,m as u,a as p,q as d,c as g,n as v,o as m}from"./client.9bb1af7d.js";function j(t,e,s){const l=t.slice();return l[1]=e[s],l}function E(t){let e,s,p,d,g=t[1].title+"";return{c(){e=l("li"),s=l("a"),p=n(g),this.h()},l(t){e=a(t,"LI",{});var l=o(e);s=a(l,"A",{rel:!0,href:!0});var n=o(s);p=r(n,g),n.forEach(h),l.forEach(h),this.h()},h(){c(s,"rel","prefetch"),c(s,"href",d="dev/"+t[1].slug)},m(t,l){f(t,e,l),i(e,s),i(s,p)},p(t,e){1&e&&g!==(g=t[1].title+"")&&u(p,g),1&e&&d!==(d="dev/"+t[1].slug)&&c(s,"href",d)},d(t){t&&h(e)}}}function x(t){let e,s,u,x,q,b=t[0],A=[];for(let e=0;e<b.length;e+=1)A[e]=E(j(t,b,e));return{c(){e=p(),s=l("h1"),u=n("Recent dev posts"),x=p(),q=l("ul");for(let t=0;t<A.length;t+=1)A[t].c();this.h()},l(t){d('[data-svelte="svelte-eij3xp"]',document.head).forEach(h),e=g(t),s=a(t,"H1",{});var l=o(s);u=r(l,"Recent dev posts"),l.forEach(h),x=g(t),q=a(t,"UL",{class:!0});var n=o(q);for(let t=0;t<A.length;t+=1)A[t].l(n);n.forEach(h),this.h()},h(){document.title="Dev Blog - Anonsage",c(q,"class","svelte-153qjto")},m(t,l){f(t,e,l),f(t,s,l),i(s,u),f(t,x,l),f(t,q,l);for(let t=0;t<A.length;t+=1)A[t].m(q,null)},p(t,[e]){if(1&e){let s;for(b=t[0],s=0;s<b.length;s+=1){const l=j(t,b,s);A[s]?A[s].p(l,e):(A[s]=E(l),A[s].c(),A[s].m(q,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=b.length}},i:v,o:v,d(t){t&&h(e),t&&h(s),t&&h(x),t&&h(q),m(A,t)}}}function q({params:t,query:e}){return this.fetch("dev.json").then(t=>t.json()).then(t=>({posts:t}))}function b(t,e,s){let{posts:l}=e;return t.$set=(t=>{"posts"in t&&s(0,l=t.posts)}),[l]}export default class extends t{constructor(t){super(),e(this,t,b,x,s,{posts:0})}}export{q as preload};
