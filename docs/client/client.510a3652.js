function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function _(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?d(e):p(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function E(t){return y(t," ")}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function b(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let P;function A(t){P=t}function w(){if(!P)throw new Error("Function called outside component initialization");return P}function j(t){w().$$.on_mount.push(t)}const R=[],L=[],C=[],O=[],N=Promise.resolve();let q=!1;function U(t){C.push(t)}let k=!1;const D=new Set;function H(){if(!k){k=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];A(e),I(e.$$)}for(R.length=0;L.length;)L.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];D.has(e)||(D.add(e),e())}C.length=0}while(R.length);for(;O.length;)O.pop()();q=!1,k=!1,D.clear()}}function I(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const T=new Set;let B;function J(){B={r:0,c:[],p:B}}function V(){B.r||s(B.c),B=B.p}function K(t,e){t&&t.i&&(T.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),B.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function z(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function W(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(U)}function Y(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(R.push(t),q||(q=!0,N.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,o,a,c,i,l=[-1]){const f=P;A(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),h&&Q(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),X(e,n.target,n.anchor),H()}A(f)}class tt{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const rt={},st=()=>({});function ot(e){let n,r,s,o,a,c,f,d,g,S,b,x,P,A,w,j,R,L,C,O,N,q,U,k,D,H;return{c(){n=p("nav"),r=p("ul"),s=p("li"),o=p("a"),a=h("home"),f=m(),d=p("li"),g=p("a"),S=h("dev"),x=m(),P=p("li"),A=p("a"),w=h("random"),R=m(),L=p("li"),C=p("a"),O=h("anonlang"),q=m(),U=p("li"),k=p("a"),D=h("products"),this.h()},l(t){var e=v(n=_(t,"NAV",{class:!0})),c=v(r=_(e,"UL",{class:!0})),i=v(s=_(c,"LI",{class:!0})),l=v(o=_(i,"A",{"aria-current":!0,href:!0,class:!0}));a=y(l,"home"),l.forEach(u),i.forEach(u),f=E(c);var p=v(d=_(c,"LI",{class:!0})),h=v(g=_(p,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));S=y(h,"dev"),h.forEach(u),p.forEach(u),x=E(c);var m=v(P=_(c,"LI",{class:!0})),$=v(A=_(m,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));w=y($,"random"),$.forEach(u),m.forEach(u),R=E(c);var b=v(L=_(c,"LI",{class:!0})),j=v(C=_(b,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));O=y(j,"anonlang"),j.forEach(u),b.forEach(u),q=E(c);var N=v(U=_(c,"LI",{class:!0})),H=v(k=_(N,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));D=y(H,"products"),H.forEach(u),N.forEach(u),c.forEach(u),e.forEach(u),this.h()},h(){$(o,"aria-current",c=void 0===e[0]?"page":void 0),$(o,"href","."),$(o,"class","svelte-12i6fi0"),$(s,"class","svelte-12i6fi0"),$(g,"rel","prefetch"),$(g,"aria-current",b="dev"===e[0]?"page":void 0),$(g,"href","dev"),$(g,"class","svelte-12i6fi0"),$(d,"class","svelte-12i6fi0"),$(A,"rel","prefetch"),$(A,"aria-current",j="random"===e[0]?"page":void 0),$(A,"href","random"),$(A,"class","svelte-12i6fi0"),$(P,"class","svelte-12i6fi0"),$(C,"rel","prefetch"),$(C,"aria-current",N="anonlang"===e[0]?"page":void 0),$(C,"href","anonlang"),$(C,"class","svelte-12i6fi0"),$(L,"class","svelte-12i6fi0"),$(k,"rel","prefetch"),$(k,"aria-current",H="products"===e[0]?"page":void 0),$(k,"href","products"),$(k,"class","svelte-12i6fi0"),$(U,"class","svelte-12i6fi0"),$(r,"class","svelte-12i6fi0"),$(n,"class","svelte-12i6fi0")},m(t,e){l(t,n,e),i(n,r),i(r,s),i(s,o),i(o,a),i(r,f),i(r,d),i(d,g),i(g,S),i(r,x),i(r,P),i(P,A),i(A,w),i(r,R),i(r,L),i(L,C),i(C,O),i(r,q),i(r,U),i(U,k),i(k,D)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&$(o,"aria-current",c),1&e&&b!==(b="dev"===t[0]?"page":void 0)&&$(g,"aria-current",b),1&e&&j!==(j="random"===t[0]?"page":void 0)&&$(A,"aria-current",j),1&e&&N!==(N="anonlang"===t[0]?"page":void 0)&&$(C,"aria-current",N),1&e&&H!==(H="products"===t[0]?"page":void 0)&&$(k,"aria-current",H)},i:t,o:t,d(t){t&&u(n)}}}function at(t,e,n){let{segment:r}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),[r]}class ct extends tt{constructor(t){super(),Z(this,t,at,ot,a,{segment:0})}}function it(t){let e,n,r;const s=new ct({props:{segment:t[0]}}),o=t[2].default,a=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(o,t,t[1],null);return{c(){G(s.$$.fragment),e=m(),n=p("main"),a&&a.c(),this.h()},l(t){W(s.$$.fragment,t),e=E(t);var r=v(n=_(t,"MAIN",{class:!0}));a&&a.l(r),r.forEach(u),this.h()},h(){$(n,"class","svelte-kr0vyj")},m(t,o){X(s,t,o),l(t,e,o),l(t,n,o),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),a&&a.p&&2&e&&a.p(c(o,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(o,t[1],e,null))},i(t){r||(K(s.$$.fragment,t),K(a,t),r=!0)},o(t){M(s.$$.fragment,t),M(a,t),r=!1},d(t){Y(s,t),t&&u(e),t&&u(n),a&&a.d(t)}}}function lt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)}),[r,o,s]}class ut extends tt{constructor(t){super(),Z(this,t,lt,it,a,{segment:0})}}function ft(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){var s=v(e=_(t,"PRE",{}));n=y(s,r),s.forEach(u)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&u(e)}}}function pt(e){let n,r,s,o,a,c,f,d,b,P=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&ft(e);return{c(){r=m(),s=p("h1"),o=h(e[0]),a=m(),c=p("p"),f=h(P),d=m(),A&&A.c(),b=g(),this.h()},l(t){x('[data-svelte="svelte-1moakz"]',document.head).forEach(u),r=E(t);var n=v(s=_(t,"H1",{class:!0}));o=y(n,e[0]),n.forEach(u),a=E(t);var i=v(c=_(t,"P",{class:!0}));f=y(i,P),i.forEach(u),d=E(t),A&&A.l(t),b=g(),this.h()},h(){$(s,"class","svelte-hc3g3x"),$(c,"class","svelte-hc3g3x")},m(t,e){l(t,r,e),l(t,s,e),i(s,o),l(t,a,e),l(t,c,e),i(c,f),l(t,d,e),A&&A.m(t,e),l(t,b,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(o,t[0]),2&e&&P!==(P=t[1].message+"")&&S(f,P),t[2]&&t[1].stack?A?A.p(t,e):((A=ft(t)).c(),A.m(b.parentNode,b)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&u(r),t&&u(s),t&&u(a),t&&u(c),t&&u(d),A&&A.d(t),t&&u(b)}}}function dt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class ht extends tt{constructor(t){super(),Z(this,t,dt,pt,a,{status:0,error:1})}}function mt(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&G(c.$$.fragment),n=g()},l(t){c&&W(c.$$.fragment,t),n=g()},m(t,e){c&&X(c,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?z(s,[F(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){J();const t=c;M(t.$$.fragment,1,0,()=>{Y(t,1)}),V()}o?(G((c=new o(a())).$$.fragment),K(c.$$.fragment,1),X(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&K(c.$$.fragment,t),r=!0)},o(t){c&&M(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&Y(c,t)}}}function gt(t){let e;const n=new ht({props:{error:t[0],status:t[1]}});return{c(){G(n.$$.fragment)},l(t){W(n.$$.fragment,t)},m(t,r){X(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(K(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){Y(n,t)}}}function $t(t){let e,n,r,s;const o=[gt,mt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),l(t,r,n),s=!0},p(t,s){let i=e;(e=c(t))===i?a[e].p(t,s):(J(),M(a[i],1,1,()=>{a[i]=null}),V(),(n=a[e])||(n=a[e]=o[e](t)).c(),K(n,1),n.m(r.parentNode,r))},i(t){s||(K(n),s=!0)},o(t){M(n),s=!1},d(t){a[e].d(t),t&&u(r)}}}function vt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new ut({props:s});return{c(){G(o.$$.fragment)},l(t){W(o.$$.fragment,t)},m(t,e){X(o,t,e),n=!0},p(t,[e]){const n=12&e?z(r,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(K(o.$$.fragment,t),n=!0)},o(t){M(o.$$.fragment,t),n=!1},d(t){Y(o,t)}}}function _t(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=rt,u=r,w().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[s,o,a,c,i,r]}class yt extends tt{constructor(t){super(),Z(this,t,_t,vt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const Et=[/^\/anonlang.json$/,/^\/anonlang\/([^\/]+?).json$/,/^\/random.json$/,/^\/random\/([^\/]+?).json$/,/^\/api\/tags.json$/,/^\/dev.json$/,/^\/dev\/([^\/]+?).json$/],St=[{js:()=>import("./index.2cc4af3a.js"),css:["index.2cc4af3a.css","client.510a3652.css"]},{js:()=>import("./index.15597cf8.js"),css:["index.15597cf8.css","client.510a3652.css"]},{js:()=>import("./[slug].90caa17c.js"),css:["client.510a3652.css"]},{js:()=>import("./index.99f58b54.js"),css:["client.510a3652.css"]},{js:()=>import("./index.391083c3.js"),css:["index.391083c3.css","client.510a3652.css"]},{js:()=>import("./[slug].ce8e8b56.js"),css:["client.510a3652.css"]},{js:()=>import("./about.fbde0f12.js"),css:["client.510a3652.css"]},{js:()=>import("./index.884992fe.js"),css:["index.884992fe.css","client.510a3652.css"]},{js:()=>import("./index.dd0476a8.js"),css:["index.dd0476a8.css","client.510a3652.css"]},{js:()=>import("./[slug].f01ba917.js"),css:["client.510a3652.css"]}],bt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/anonlang\/?$/,parts:[{i:1}]},{pattern:/^\/anonlang\/([^\/]+?)\/?$/,parts:[null,{i:2,params:e=>({slug:t(e[1])})}]},{pattern:/^\/products\/?$/,parts:[{i:3}]},{pattern:/^\/random\/?$/,parts:[{i:4}]},{pattern:/^\/random\/([^\/]+?)\/?$/,parts:[null,{i:5,params:e=>({slug:t(e[1])})}]},{pattern:/^\/about\/?$/,parts:[{i:6}]},{pattern:/^\/api\/tags\/?$/,parts:[null,{i:7}]},{pattern:/^\/dev\/?$/,parts:[{i:8}]},{pattern:/^\/dev\/([^\/]+?)\/?$/,parts:[null,{i:9,params:e=>({slug:t(e[1])})}]}])(decodeURIComponent);const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Pt,At,wt,jt=!1,Rt=[],Lt="{}";const Ct={page:nt({}),preloading:nt(null),session:nt(xt&&xt.session)};let Ot,Nt;Ct.session.subscribe(async t=>{if(Ot=t,!jt)return;Nt=!0;const e=Bt(new URL(location.href)),n=At={},{redirect:r,props:s,branch:o}=await Mt(e);n===At&&await Kt(r,o,s,e.page)});let qt,Ut=null;let kt,Dt=1;const Ht="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},It={};function Tt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Bt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(xt.baseUrl))return null;let e=t.pathname.slice(xt.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<bt.length;n+=1){const r=bt[n],s=r.pattern.exec(e);if(s){const n=Tt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Jt(){return{x:pageXOffset,y:pageYOffset}}async function Vt(t,e,n,r){if(e)kt=e;else{const t=Jt();It[kt]=t,e=kt=++Dt,It[kt]=n?t:{x:0,y:0}}kt=e,Pt&&Ct.preloading.set(!0);const s=Ut&&Ut.href===t.href?Ut.promise:Mt(t);Ut=null;const o=At={},{redirect:a,props:c,branch:i}=await s;if(o===At&&(await Kt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=It[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}It[kt]=t,t&&scrollTo(t.x,t.y)}}async function Kt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Bt(new URL(t,document.baseURI));return n?(Ht[e.replaceState?"replaceState":"pushState"]({id:kt},"",t),Vt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Ct.page.set(r),Ct.preloading.set(!1),Pt)Pt.$set(n);else{n.stores={page:{subscribe:Ct.page.subscribe},preloading:{subscribe:Ct.preloading.subscribe},session:Ct.session},n.level0={props:await wt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Ft(t.nextSibling);Ft(t),Ft(e)}Pt=new yt({target:qt,props:n,hydrate:!0})}Rt=e,Lt=JSON.stringify(r.query),jt=!0,Nt=!1}async function Mt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;wt||(wt=xt.preloaded[0]||st.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ot));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Lt)return!0;const s=Rt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Nt&&!u&&Rt[c]&&Rt[c].part===e.i)return Rt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(St[e.i]);let m;return m=jt||!xt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ot):{}:xt.preloaded[c+1],o[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function zt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function Ft(t){t.parentNode.removeChild(t)}function Gt(t){const e=Bt(new URL(t,document.baseURI));if(e)return Ut&&t===Ut.href||function(t,e){Ut={href:t,promise:e}}(t,Mt(e)),Ut.promise}let Wt;function Xt(t){clearTimeout(Wt),Wt=setTimeout(()=>{Yt(t)},20)}function Yt(t){const e=Zt(t.target);e&&"prefetch"===e.rel&&Gt(e.href)}function Qt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Bt(s);if(o){Vt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Ht.pushState({id:kt},"",s.href)}}function Zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function te(t){if(It[kt]=Jt(),t.state){const e=Bt(new URL(location.href));e?Vt(e,t.state.id):location.href=location.href}else(function(t){kt=t})(Dt=Dt+1),Ht.replaceState({id:kt},"",location.href)}!function(t){var e;"scrollRestoration"in Ht&&(Ht.scrollRestoration="manual"),e=t.target,qt=e,addEventListener("click",Qt),addEventListener("popstate",te),addEventListener("touchstart",Yt),addEventListener("mousemove",Xt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Ht.replaceState({id:Dt},"",e);const n=new URL(location.href);if(xt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=xt;wt||(wt=o&&o[0]),Kt(null,[],{error:c,status:a,session:s,level0:{props:wt},level1:{props:{status:a,error:c},component:ht},segments:o},{host:e,path:n,query:Tt(r),params:{}})}();const r=Bt(n);return r?Vt(r,Dt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{tt as S,m as a,d as b,E as c,u as d,p as e,_ as f,v as g,y as h,Z as i,$ as j,l as k,i as l,S as m,t as n,f as o,g as p,x as q,j as r,a as s,h as t,b as u};