!function(){"use strict";const e=["client/client.f81346aa.js","client/about.5c611e0d.js","client/[slug].3c3612c0.js","client/index.67b7b2f0.js","client/[slug].6af25458.js","client/index.f4b311fd.js","client/index.856e5f10.js","client/client.72a72951.js"].concat(["service-worker-index.html","2014-01-31-ux-progress-bars--compare-phones.jpg","CNAME","dan-logo.svg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1584992249346").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1584992249346"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1584992249346").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
