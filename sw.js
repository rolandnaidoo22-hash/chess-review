self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.registration.unregister();for(const c of await self.clients.matchAll({type:'window'}))c.navigate(c.url);})());});
self.addEventListener('fetch',e=>e.respondWith(new Response('<h2 style="font-family:sans-serif;text-align:center;margin-top:30vh">This app is no longer available.</h2>',{headers:{'Content-Type':'text/html'}})));
