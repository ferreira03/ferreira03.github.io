this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/index.html',
                '/css/',
                '/css/app.c4832c45.css',
                '/css/chunk-vendors.d88f2c96.css',
                '/img/',
                '/img/zontasite.da6ea100.jpg',
                '/img/foodsense.6437b16e.png',
                '/img/parisjeune2.092589df.jpg',
                '/img/imagemodifie.7a95d2e5.png',
                '/img/image10000.a3e85da5.png',
                '/img/parisjeune1.825d7ac7.jpg',
                '/img/fa-brands-400.073c2f3c.svg',
                '/img/fa-regular-400.8fdea4e8.svg',
                '/img/fa-solid-900.b557f56e.svg',
                'fonts/SansForgetica-Regular.0399ab68.otf',
                '/js/',
                '/js/app.eee86483.js',
                '/js/app.eee86483.js.map',
                '/js/chunk-vendors.5887c7f2.js.map',
            ]);
        })
    );
});