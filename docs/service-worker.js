!function(){"use strict";const e=["client/client.c3dc18fd.js","client/about.f5727daf.js","client/[slug].02e45bb2.js","client/[slug].0923a6b4.js","client/index.764a18c8.js","client/index.f17844dd.js","client/index.da0d6285.js","client/client.a49aa4c4.js"].concat(["service-worker-index.html","2014-01-31-ux-progress-bars--compare-phones.jpg","2020-03-23-thought-experiment-one-file-apps--material-todo.png","2020-03-23-thought-experiment-one-file-apps--temperature-converter.png","CNAME","dan-logo.svg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1585030678969").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1585030678969"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1585030678969").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
