!function(){"use strict";const e=["client/client.d33452f6.js","client/about.93efbc1d.js","client/[slug].86c0848e.js","client/index.a9613ab7.js","client/index.a01e789e.js","client/index.6d45e10f.js","client/index.3f46abfb.js","client/index.15b1c84a.js","client/[slug].6a2049e5.js","client/client.a14dec3d.js"].concat(["service-worker-index.html","dev/2014-01-31-ux-progress-bars--compare-phones.jpg","dev/2020-03-01-thought-experiment-one-file-apps--temperature-converter.png","dev/2020-03-02-thought-experiment-one-file-apps--material-todo.png","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1585411142700").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1585411142700"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1585411142700").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
