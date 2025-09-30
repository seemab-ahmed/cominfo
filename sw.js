// Simple Service Worker for caching static assets
const CACHE_NAME = 'cominfo-v1';
const urlsToCache = [
  '/',
  '/css/style.css',
  '/css/slick.css',
  '/js/code.jquery.com_jquery-3.7.1.min.js',
  '/js/slick.min.js',
  '/js/custom.js',
  '/images/logos/logo.png',
  '/images/logos/footer_logo.png',
  '/video/banner_poster_img.webp',
  // Add critical images
  '/images/logos/client_logo1.png',
  '/images/logos/client_logo2.png',
  '/images/logos/client_logo3.png',
  '/images/logos/client_logo4.png',
  '/images/logos/client_logo5.png',
  '/images/logos/client_logo6.png',
  '/images/logos/client_logo7.png'
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
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});