const staticDevCoffee = "FF Dimonds"
const assets = [
    '/index.html',
    '/app.html',
    '/login.html',
    '/card/0.svg',
    '/card/1.svg',
    '/card/2.svg',
    '/card/3.svg',
    '/card/4.svg',
    '/card/5.svg',
    '/card/6.svg',
    '/card/7.svg',
    '/card/8.svg',
    '/card/9.svg',
    '/card/10.svg',
    './css/app.css',
    './js/app.js',
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })