function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?d(e):p(e)}function _(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function b(t){return _(t," ")}function E(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let x;function w(t){x=t}function P(t,e){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.context.set(t,e)}const A=[],R=[],j=[],L=[],C=Promise.resolve();let N=!1;function O(t){j.push(t)}let q=!1;const U=new Set;function k(){if(!q){q=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];w(e),D(e.$$)}for(A.length=0;R.length;)R.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];U.has(e)||(U.add(e),e())}j.length=0}while(A.length);for(;L.length;)L.pop()();N=!1,q=!1,U.clear()}}function D(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const I=new Set;let H;function T(){H={r:0,c:[],p:H}}function B(){H.r||s(H.c),H=H.p}function J(t,e){t&&t.i&&(I.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(I.has(t))return;I.add(t),H.c.push(()=>{I.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function M(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function F(t,e){t&&t.l(e)}function G(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),O(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(O)}function W(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(A.push(t),N||(N=!0,C.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(e,n,o,a,c,i,l=[-1]){const f=x;w(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),h&&X(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();n.intro&&J(e.$$.fragment),G(e,n.target,n.anchor),k()}w(f)}class Q{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const Z=[];function tt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!Z.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),Z.push(n,e)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const et={},nt=()=>({});function rt(e){let n,r,s,o,a,c,f,d,g,E,S,x,w,P,A,R;return{c(){n=p("nav"),r=p("ul"),s=p("li"),o=p("a"),a=h("home"),f=m(),d=p("li"),g=p("a"),E=h("dev"),x=m(),w=p("li"),P=p("a"),A=h("random"),this.h()},l(t){var e=v(n=y(t,"NAV",{class:!0})),c=v(r=y(e,"UL",{class:!0})),i=v(s=y(c,"LI",{class:!0})),l=v(o=y(i,"A",{"aria-current":!0,href:!0,class:!0}));a=_(l,"home"),l.forEach(u),i.forEach(u),f=b(c);var p=v(d=y(c,"LI",{class:!0})),h=v(g=y(p,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));E=_(h,"dev"),h.forEach(u),p.forEach(u),x=b(c);var m=v(w=y(c,"LI",{class:!0})),$=v(P=y(m,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));A=_($,"random"),$.forEach(u),m.forEach(u),c.forEach(u),e.forEach(u),this.h()},h(){$(o,"aria-current",c=void 0===e[0]?"page":void 0),$(o,"href","."),$(o,"class","svelte-12i6fi0"),$(s,"class","svelte-12i6fi0"),$(g,"rel","prefetch"),$(g,"aria-current",S="dev"===e[0]?"page":void 0),$(g,"href","dev"),$(g,"class","svelte-12i6fi0"),$(d,"class","svelte-12i6fi0"),$(P,"rel","prefetch"),$(P,"aria-current",R="random"===e[0]?"page":void 0),$(P,"href","random"),$(P,"class","svelte-12i6fi0"),$(w,"class","svelte-12i6fi0"),$(r,"class","svelte-12i6fi0"),$(n,"class","svelte-12i6fi0")},m(t,e){l(t,n,e),i(n,r),i(r,s),i(s,o),i(o,a),i(r,f),i(r,d),i(d,g),i(g,E),i(r,x),i(r,w),i(w,P),i(P,A)},p(t,[e]){1&e&&c!==(c=void 0===t[0]?"page":void 0)&&$(o,"aria-current",c),1&e&&S!==(S="dev"===t[0]?"page":void 0)&&$(g,"aria-current",S),1&e&&R!==(R="random"===t[0]?"page":void 0)&&$(P,"aria-current",R)},i:t,o:t,d(t){t&&u(n)}}}function st(t,e,n){let{segment:r}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),[r]}class ot extends Q{constructor(t){super(),Y(this,t,st,rt,a,{segment:0})}}function at(t){let e,n,r;const s=new ot({props:{segment:t[0]}}),o=t[2].default,a=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(o,t,t[1],null);return{c(){z(s.$$.fragment),e=m(),n=p("main"),a&&a.c(),this.h()},l(t){F(s.$$.fragment,t),e=b(t);var r=v(n=y(t,"MAIN",{class:!0}));a&&a.l(r),r.forEach(u),this.h()},h(){$(n,"class","svelte-x6rnam")},m(t,o){G(s,t,o),l(t,e,o),l(t,n,o),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),a&&a.p&&2&e&&a.p(c(o,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(o,t[1],e,null))},i(t){r||(J(s.$$.fragment,t),J(a,t),r=!0)},o(t){V(s.$$.fragment,t),V(a,t),r=!1},d(t){W(s,t),t&&u(e),t&&u(n),a&&a.d(t)}}}function ct(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)}),[r,o,s]}class it extends Q{constructor(t){super(),Y(this,t,ct,at,a,{segment:0})}}function lt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){var s=v(e=y(t,"PRE",{}));n=_(s,r),s.forEach(u)},m(t,r){l(t,e,r),i(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&u(e)}}}function ut(e){let n,r,s,o,a,c,f,d,x,w=e[1].message+"";document.title=n=e[0];let P=e[2]&&e[1].stack&&lt(e);return{c(){r=m(),s=p("h1"),o=h(e[0]),a=m(),c=p("p"),f=h(w),d=m(),P&&P.c(),x=g(),this.h()},l(t){S('[data-svelte="svelte-1moakz"]',document.head).forEach(u),r=b(t);var n=v(s=y(t,"H1",{class:!0}));o=_(n,e[0]),n.forEach(u),a=b(t);var i=v(c=y(t,"P",{class:!0}));f=_(i,w),i.forEach(u),d=b(t),P&&P.l(t),x=g(),this.h()},h(){$(s,"class","svelte-hc3g3x"),$(c,"class","svelte-hc3g3x")},m(t,e){l(t,r,e),l(t,s,e),i(s,o),l(t,a,e),l(t,c,e),i(c,f),l(t,d,e),P&&P.m(t,e),l(t,x,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(o,t[0]),2&e&&w!==(w=t[1].message+"")&&E(f,w),t[2]&&t[1].stack?P?P.p(t,e):((P=lt(t)).c(),P.m(x.parentNode,x)):P&&(P.d(1),P=null)},i:t,o:t,d(t){t&&u(r),t&&u(s),t&&u(a),t&&u(c),t&&u(d),P&&P.d(t),t&&u(x)}}}function ft(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class pt extends Q{constructor(t){super(),Y(this,t,ft,ut,a,{status:0,error:1})}}function dt(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&z(c.$$.fragment),n=g()},l(t){c&&F(c.$$.fragment,t),n=g()},m(t,e){c&&G(c,t,e),l(t,n,e),r=!0},p(t,e){const r=16&e?K(s,[M(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){T();const t=c;V(t.$$.fragment,1,0,()=>{W(t,1)}),B()}o?(z((c=new o(a())).$$.fragment),J(c.$$.fragment,1),G(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&J(c.$$.fragment,t),r=!0)},o(t){c&&V(c.$$.fragment,t),r=!1},d(t){t&&u(n),c&&W(c,t)}}}function ht(t){let e;const n=new pt({props:{error:t[0],status:t[1]}});return{c(){z(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,r){G(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function mt(t){let e,n,r,s;const o=[ht,dt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),l(t,r,n),s=!0},p(t,s){let i=e;(e=c(t))===i?a[e].p(t,s):(T(),V(a[i],1,1,()=>{a[i]=null}),B(),(n=a[e])||(n=a[e]=o[e](t)).c(),J(n,1),n.m(r.parentNode,r))},i(t){s||(J(n),s=!0)},o(t){V(n),s=!1},d(t){a[e].d(t),t&&u(r)}}}function gt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new it({props:s});return{c(){z(o.$$.fragment)},l(t){F(o.$$.fragment,t)},m(t,e){G(o,t,e),n=!0},p(t,[e]){const n=12&e?K(r,[4&e&&{segment:t[2][0]},8&e&&M(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(J(o.$$.fragment,t),n=!0)},o(t){V(o.$$.fragment,t),n=!1},d(t){W(o,t)}}}function $t(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;return P(et,r),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[s,o,a,c,i,r]}class vt extends Q{constructor(t){super(),Y(this,t,$t,gt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const yt=[/^\/random.json$/,/^\/random\/([^\/]+?).json$/,/^\/api\/tags.json$/,/^\/dev.json$/,/^\/dev\/([^\/]+?).json$/],_t=[{js:()=>import("./index.449b1049.js"),css:["index.449b1049.css","client.0bed781b.css"]},{js:()=>import("./index.e9872fd4.js"),css:["index.e9872fd4.css","client.0bed781b.css"]},{js:()=>import("./[slug].1056af08.js"),css:["[slug].1056af08.css","client.0bed781b.css"]},{js:()=>import("./about.bbb80d9a.js"),css:["client.0bed781b.css"]},{js:()=>import("./index.f2b03cce.js"),css:["index.f2b03cce.css","client.0bed781b.css"]},{js:()=>import("./index.2ef35257.js"),css:["index.2ef35257.css","client.0bed781b.css"]},{js:()=>import("./[slug].9e3acdab.js"),css:["[slug].9e3acdab.css","client.0bed781b.css"]}],bt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/random\/?$/,parts:[{i:1}]},{pattern:/^\/random\/([^\/]+?)\/?$/,parts:[null,{i:2,params:e=>({slug:t(e[1])})}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/api\/tags\/?$/,parts:[null,{i:4}]},{pattern:/^\/dev\/?$/,parts:[{i:5}]},{pattern:/^\/dev\/([^\/]+?)\/?$/,parts:[null,{i:6,params:e=>({slug:t(e[1])})}]}])(decodeURIComponent);const Et="undefined"!=typeof __SAPPER__&&__SAPPER__;let St,xt,wt,Pt=!1,At=[],Rt="{}";const jt={page:tt({}),preloading:tt(null),session:tt(Et&&Et.session)};let Lt,Ct;jt.session.subscribe(async t=>{if(Lt=t,!Pt)return;Ct=!0;const e=Ht(new URL(location.href)),n=xt={},{redirect:r,props:s,branch:o}=await Vt(e);n===xt&&await Jt(r,o,s,e.page)});let Nt,Ot=null;let qt,Ut=1;const kt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Dt={};function It(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ht(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Et.baseUrl))return null;let e=t.pathname.slice(Et.baseUrl.length);if(""===e&&(e="/"),!yt.some(t=>t.test(e)))for(let n=0;n<bt.length;n+=1){const r=bt[n],s=r.pattern.exec(e);if(s){const n=It(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Tt(){return{x:pageXOffset,y:pageYOffset}}async function Bt(t,e,n,r){if(e)qt=e;else{const t=Tt();Dt[qt]=t,e=qt=++Ut,Dt[qt]=n?t:{x:0,y:0}}qt=e,St&&jt.preloading.set(!0);const s=Ot&&Ot.href===t.href?Ot.promise:Vt(t);Ot=null;const o=xt={},{redirect:a,props:c,branch:i}=await s;if(o===xt&&(await Jt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Dt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Dt[qt]=t,t&&scrollTo(t.x,t.y)}}async function Jt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ht(new URL(t,document.baseURI));return n?(kt[e.replaceState?"replaceState":"pushState"]({id:qt},"",t),Bt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(jt.page.set(r),jt.preloading.set(!1),St)St.$set(n);else{n.stores={page:{subscribe:jt.page.subscribe},preloading:{subscribe:jt.preloading.subscribe},session:jt.session},n.level0={props:await wt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Mt(t.nextSibling);Mt(t),Mt(e)}St=new vt({target:Nt,props:n,hydrate:!0})}At=e,Rt=JSON.stringify(r.query),Pt=!0,Ct=!1}async function Vt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;wt||(wt=Et.preloaded[0]||nt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Lt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Rt)return!0;const s=At[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ct&&!u&&At[c]&&At[c].part===e.i)return At[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Kt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(_t[e.i]);let m;return m=Pt||!Et.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Lt):{}:Et.preloaded[c+1],o[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Kt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function Mt(t){t.parentNode.removeChild(t)}function zt(t){const e=Ht(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Vt(e)),Ot.promise}let Ft;function Gt(t){clearTimeout(Ft),Ft=setTimeout(()=>{Wt(t)},20)}function Wt(t){const e=Yt(t.target);e&&"prefetch"===e.rel&&zt(e.href)}function Xt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Yt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ht(s);if(o){Bt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),kt.pushState({id:qt},"",s.href)}}function Yt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Qt(t){if(Dt[qt]=Tt(),t.state){const e=Ht(new URL(location.href));e?Bt(e,t.state.id):location.href=location.href}else(function(t){qt=t})(Ut=Ut+1),kt.replaceState({id:qt},"",location.href)}!function(t){var e;"scrollRestoration"in kt&&(kt.scrollRestoration="manual"),e=t.target,Nt=e,addEventListener("click",Xt),addEventListener("popstate",Qt),addEventListener("touchstart",Wt),addEventListener("mousemove",Gt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;kt.replaceState({id:Ut},"",e);const n=new URL(location.href);if(Et.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Et;wt||(wt=o&&o[0]),Jt(null,[],{error:c,status:a,session:s,level0:{props:wt},level1:{props:{status:a,error:c},component:pt},segments:o},{host:e,path:n,query:It(r),params:{}})}();const r=Ht(n);return r?Bt(r,Ut,!0,t):void 0})}({target:document.querySelector("#sapper")});export{Q as S,v as a,_ as b,y as c,u as d,p as e,$ as f,l as g,i as h,Y as i,E as j,m as k,d as l,b as m,t as n,f as o,S as q,a as s,h as t};
