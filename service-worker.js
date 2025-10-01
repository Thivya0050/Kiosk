const CACHE_NAME = 'kiosk-v1.1';
const urlsToCache = [
  '.',
  './index.html',
  './landing-page-sketch-sample.html',
  './language-page-sample.html',
  './menu-page-sample.html',
  './sidebar-height-sample.html',
  './manifest.json',
  './icon.png',
  // Images
  './doodle1.png',
  './doodle2.png',
  './doodle3.png',
  './wood.png',
  './halal.png',
  './logo old.png',
  './dineIn.png',
  './takeAway.png',
  // Menu images
  './Nasi Goreng Kampung.png',
  './Nasi Goreng Cina.png',
  './Hainanese Chicken Rice.png',
  './Hainan Chicken Chop.png',
  './Nasi Kunyit.png',
  './Chicken Porridge.png',
  './Nasi Lemak Ayam Goreng.png',
  './Nasi Lemak Ayam Sambal.png',
  './Nasi Lemak Biasa.png',
  './Nasi Goreng Ali.png',
  './Mee Goreng.png',
  './Mee Soto.png',
  './Mee Rebus.png',
  './Bihun Goreng.png',
  './Bihun Soto.png',
  './Kuey Teow.png',
  './Prawn noodle.png',
  './Cantonese Noodles.png',
  './Assam Laksa.png',
  './Ah Hock Ken Mee.png',
  './Ayam Crispy.png',
  // Videos
  './ALI ae.webm',
  './Ali, Muthu .mp4',
  './assamL.jpg',
  './addImg.jpg'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache first
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
