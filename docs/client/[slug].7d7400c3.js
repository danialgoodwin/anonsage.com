import{S as t,i as a,s as e,e as s,t as n,f as r,g as o,h as l,d as c,k as i,l as h,m as u,j as d,a as p,p as m,q as f,c as v,n as g,r as x}from"./client.e984a261.js";function E(t){let a,e,d=t[0].date+"";return{c(){a=s("small"),e=n(d)},l(t){a=r(t,"SMALL",{});var s=o(a);e=l(s,d),s.forEach(c)},m(t,s){i(t,a,s),h(a,e)},p(t,a){1&a&&d!==(d=t[0].date+"")&&u(e,d)},d(t){t&&c(a)}}}function w(t){let a,e,p,m,f=t[0].previous.name+"";return{c(){a=s("a"),e=n("<"),p=n(f),this.h()},l(t){a=r(t,"A",{href:!0});var s=o(a);e=l(s,"<"),p=l(s,f),s.forEach(c),this.h()},h(){d(a,"href",m="../anonlang/"+t[0].previous.slug)},m(t,s){i(t,a,s),h(a,e),h(a,p)},p(t,e){1&e&&f!==(f=t[0].previous.name+"")&&u(p,f),1&e&&m!==(m="../anonlang/"+t[0].previous.slug)&&d(a,"href",m)},d(t){t&&c(a)}}}function j(t){let a,e,p,m,f,v=t[0].next.name+"";return{c(){a=s("div"),e=s("a"),p=n(v),m=n(">"),this.h()},l(t){a=r(t,"DIV",{class:!0});var s=o(a);e=r(s,"A",{href:!0});var n=o(e);p=l(n,v),m=l(n,">"),n.forEach(c),s.forEach(c),this.h()},h(){d(e,"href",f="../anonlang/"+t[0].next.slug),d(a,"class","right")},m(t,s){i(t,a,s),h(a,e),h(e,p),h(e,m)},p(t,a){1&a&&v!==(v=t[0].next.name+"")&&u(p,v),1&a&&f!==(f="../anonlang/"+t[0].next.slug)&&d(e,"href",f)},d(t){t&&c(a)}}}function L(t){let a,e,x,L,b,y,A,B,H,M,N,R,q,D,I=t[0].title+"",S=t[0].html+"";document.title=a=t[0].title;let T=t[0].date&&E(t),V=t[0].previous&&w(t),$=t[0].next&&j(t);return{c(){e=p(),x=s("h1"),L=n(I),b=p(),T&&T.c(),y=p(),A=s("div"),B=p(),H=s("br"),M=s("br"),N=s("br"),R=p(),V&&V.c(),q=p(),$&&$.c(),D=m(),this.h()},l(t){f('[data-svelte="svelte-iu3vwn"]',document.head).forEach(c),e=v(t),x=r(t,"H1",{});var a=o(x);L=l(a,I),a.forEach(c),b=v(t),T&&T.l(t),y=v(t),A=r(t,"DIV",{class:!0}),o(A).forEach(c),B=v(t),H=r(t,"BR",{}),M=r(t,"BR",{}),N=r(t,"BR",{}),R=v(t),V&&V.l(t),q=v(t),$&&$.l(t),D=m(),this.h()},h(){d(A,"class","content")},m(t,a){i(t,e,a),i(t,x,a),h(x,L),i(t,b,a),T&&T.m(t,a),i(t,y,a),i(t,A,a),A.innerHTML=S,i(t,B,a),i(t,H,a),i(t,M,a),i(t,N,a),i(t,R,a),V&&V.m(t,a),i(t,q,a),$&&$.m(t,a),i(t,D,a)},p(t,[e]){1&e&&a!==(a=t[0].title)&&(document.title=a),1&e&&I!==(I=t[0].title+"")&&u(L,I),t[0].date?T?T.p(t,e):((T=E(t)).c(),T.m(y.parentNode,y)):T&&(T.d(1),T=null),1&e&&S!==(S=t[0].html+"")&&(A.innerHTML=S),t[0].previous?V?V.p(t,e):((V=w(t)).c(),V.m(q.parentNode,q)):V&&(V.d(1),V=null),t[0].next?$?$.p(t,e):(($=j(t)).c(),$.m(D.parentNode,D)):$&&($.d(1),$=null)},i:g,o:g,d(t){t&&c(e),t&&c(x),t&&c(b),T&&T.d(t),t&&c(y),t&&c(A),t&&c(B),t&&c(H),t&&c(M),t&&c(N),t&&c(R),V&&V.d(t),t&&c(q),$&&$.d(t),t&&c(D)}}}async function b({params:t,query:a}){const e=await this.fetch(`anonlang/${t.slug}.json`),s=await e.json();if(200===e.status)return{post:s};this.error(e.status,s.message)}function y(t,a,e){x(async()=>{window.goatcounter.count()});let{post:s}=a;return t.$set=(t=>{"post"in t&&e(0,s=t.post)}),[s]}export default class extends t{constructor(t){super(),a(this,t,y,L,e,{post:0})}}export{b as preload};
