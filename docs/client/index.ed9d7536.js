import{S as t,i as s,s as e,e as l,t as o,b as n,f as r,g as a,d as h,h as c,j as f,k as i,l as u,a as p,q as g,c as d,n as m,m as v}from"./client.e35b14e7.js";function b(t,s,e){const l=t.slice();return l[1]=s[e],l}function j(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=o(d),this.h()},l(t){s=n(t,"LI",{});var l=r(s);e=n(l,"A",{rel:!0,href:!0});var o=r(e);p=a(o,d),o.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="dev/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="dev/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function E(t){let s,e,u,E,q,x=t[0],L=[];for(let s=0;s<x.length;s+=1)L[s]=j(b(t,x,s));return{c(){s=p(),e=l("h1"),u=o("Recent posts"),E=p(),q=l("ul");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){g('[data-svelte="svelte-10h7psl"]',document.head).forEach(h),s=d(t),e=n(t,"H1",{});var l=r(e);u=a(l,"Recent posts"),l.forEach(h),E=d(t),q=n(t,"UL",{class:!0});var o=r(q);for(let t=0;t<L.length;t+=1)L[t].l(o);o.forEach(h),this.h()},h(){document.title="Blog",c(q,"class","svelte-153qjto")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,E,l),f(t,q,l);for(let t=0;t<L.length;t+=1)L[t].m(q,null)},p(t,[s]){if(1&s){let e;for(x=t[0],e=0;e<x.length;e+=1){const l=b(t,x,e);L[e]?L[e].p(l,s):(L[e]=j(l),L[e].c(),L[e].m(q,null))}for(;e<L.length;e+=1)L[e].d(1);L.length=x.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(E),t&&h(q),v(L,t)}}}function q({params:t,query:s}){return this.fetch("dev.json").then(t=>t.json()).then(t=>({posts:t}))}function x(t,s,e){let{posts:l}=s;return t.$set=(t=>{"posts"in t&&e(0,l=t.posts)}),[l]}export default class extends t{constructor(t){super(),s(this,t,x,E,e,{posts:0})}}export{q as preload};
