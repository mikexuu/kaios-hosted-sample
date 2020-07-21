self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  self.clients.claim();
});

console.log('inside SW');