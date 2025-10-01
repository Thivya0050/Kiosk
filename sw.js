const CACHE_NAME = 'amakiosk-v1';
const urlsToCache = [
  '/',
  '/flashpage.html',
  '/index.html',
  '/language-page-sample.html',
  '/menu-page-sample.html',
  '/cart-page.html',
  '/order-customization.html',
  '/payment-page.html',
  '/payment-success.html',
  '/translations.js',
  '/manifest.json',
  '/icon.png',
  '/Flashpage.mp4',
  '/wood.png',
  '/logo old.png',
  '/touch N Go.png',
  '/qr.png',
  '/doodle1.png',
  '/doodle2.png',
  '/doodle3.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
