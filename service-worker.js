var CACHE_NAME = '2019-07-06-21-13-00'
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll([
                '/',
                '/css/app.e4fdf01c.css',
                '/css/chunk-vendors.98a8aa7d.css',
                'js/app.3dbf0d7c.js',
                '/js/chunk-vendors.22ab56fd.js',
                'https://fonts.googleapis.com/css?family=Poppins&display=swap',
                'https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css',
                '/fonts/SansForgetica-Regular.0399ab68.otf',
                '/fonts/fa-solid-900.b5cf8ae2.woff2',
                'https://fonts.gstatic.com/s/poppins/v6/pxiEyp8kv8JHgFVrJJfecg.woff2',
                '/manifest.json',
                'img/icons/android-icon-192x192.png',
                '/img/image10000.a3e85da5.png',
                '/img/parisjeune1.825d7ac7.jpg',
                '/img/parisjeune2.092589df.jpg',
                '/img/foodsense.6437b16e.png',
                '/img/zontasite.da6ea100.jpg',
                '/img/zontaback.7a95d2e5.png'

            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(function (res) {
                if (res) {
                    return res
                }
                return fetch(event.request)
            })
    )
});

const expectedCaches = ['static-v2']
self.addEventListener('active', event => {
    event.waitUntil(
        caches.keys()
            .then(
                keys => Promise.all(
                    keys.map(key => {
                        if (!expectedCaches.includes(key)) {
                            return caches.delete(key)
                        }
                    })
                )
            ).then(() => {
                console.log('V2 now ready')
            })
    )
})

