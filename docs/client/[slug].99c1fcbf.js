import{S as t,i as s,s as e,a,e as n,t as o,q as i,d as r,c as l,b as c,f as h,g as u,h as f,j as m,k as p,l as d,n as v}from"./client.e35b14e7.js";function g(t){let s,e,g,j,b,w,x=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){e=a(),g=n("h1"),j=o(x),b=a(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-iu3vwn"]',document.head).forEach(r),e=l(t),g=c(t,"H1",{});var s=h(g);j=u(s,x),s.forEach(r),b=l(t),w=c(t,"DIV",{class:!0}),h(w).forEach(r),this.h()},h(){f(w,"class","content svelte-1rnhflm")},m(t,s){m(t,e,s),m(t,g,s),p(g,j),m(t,b,s),m(t,w,s),w.innerHTML=E},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&x!==(x=t[0].title+"")&&d(j,x),1&e&&E!==(E=t[0].html+"")&&(w.innerHTML=E)},i:v,o:v,d(t){t&&r(e),t&&r(g),t&&r(b),t&&r(w)}}}async function j({params:t,query:s}){const e=await this.fetch(`blog/${t.slug}.json`),a=await e.json();if(200===e.status)return{post:a};this.error(e.status,a.message)}function b(t,s,e){let{post:a}=s;return t.$set=(t=>{"post"in t&&e(0,a=t.post)}),[a]}export default class extends t{constructor(t){super(),s(this,t,b,g,e,{post:0})}}export{j as preload};
