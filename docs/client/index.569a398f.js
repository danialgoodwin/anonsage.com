import{S as t,i as e,s,e as a,t as r,c as n,a as l,b as h,d as o,f as c,g as f,h as i,j as u,k as g,q as p,m as d,n as m,o as v}from"./client.68e3705e.js";function j(t,e,s){const a=t.slice();return a[1]=e[s],a}function E(t){let e,s,g,p,d=t[1]+"";return{c(){e=a("li"),s=a("a"),g=r(d),this.h()},l(t){e=n(t,"LI",{});var a=l(e);s=n(a,"A",{rel:!0,href:!0});var r=l(s);g=h(r,d),r.forEach(o),a.forEach(o),this.h()},h(){c(s,"rel","prefetch"),c(s,"href",p="topic/"+t[1])},m(t,a){f(t,e,a),i(e,s),i(s,g)},p(t,e){1&e&&d!==(d=t[1]+"")&&u(g,d),1&e&&p!==(p="topic/"+t[1])&&c(s,"href",p)},d(t){t&&o(e)}}}function q(t){let e,s,u,q,x,T=t[0],L=[];for(let e=0;e<T.length;e+=1)L[e]=E(j(t,T,e));return{c(){e=g(),s=a("h1"),u=r("Tags"),q=g(),x=a("ul");for(let t=0;t<L.length;t+=1)L[t].c();this.h()},l(t){p('[data-svelte="svelte-7o39qi"]',document.head).forEach(o),e=d(t),s=n(t,"H1",{});var a=l(s);u=h(a,"Tags"),a.forEach(o),q=d(t),x=n(t,"UL",{class:!0});var r=l(x);for(let t=0;t<L.length;t+=1)L[t].l(r);r.forEach(o),this.h()},h(){document.title="Tags",c(x,"class","svelte-153qjto")},m(t,a){f(t,e,a),f(t,s,a),i(s,u),f(t,q,a),f(t,x,a);for(let t=0;t<L.length;t+=1)L[t].m(x,null)},p(t,[e]){if(1&e){let s;for(T=t[0],s=0;s<T.length;s+=1){const a=j(t,T,s);L[s]?L[s].p(a,e):(L[s]=E(a),L[s].c(),L[s].m(x,null))}for(;s<L.length;s+=1)L[s].d(1);L.length=T.length}},i:m,o:m,d(t){t&&o(e),t&&o(s),t&&o(q),t&&o(x),v(L,t)}}}function x({params:t,query:e}){return this.fetch("api/tags.json").then(t=>t.json()).then(t=>({tags:t}))}function T(t,e,s){let{tags:a}=e;return t.$set=(t=>{"tags"in t&&s(0,a=t.tags)}),[a]}export default class extends t{constructor(t){super(),e(this,t,T,q,s,{tags:0})}}export{x as preload};