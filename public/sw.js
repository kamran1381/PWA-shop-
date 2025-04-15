const CACHE_NAME = "pwa-cache-v1";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/main.js",
  "/sw.js",
  "https://cdn.tailwindcss.com"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
