importScripts("/precache-manifest.79bf012268efc07407bfb51a8da8c745.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts('/cache-polyfill.js');

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/index.html',
                '/css/',
                '/img/',
                '/img/foodsense.jpg',
                '/img/parisjeune1.jpg',
                '/img/parisjeune2.jpg',
                '/img/zontaback.png',
                '/img/zontasite.jpg',
                '/img/image10000.png',
                'fonts/SansForgetica-Regular.0399ab68.otf',
            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                return res
            })
    )
});
