const staticDevCoffee = "im-dashboard-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/cloud.jpg",
  "/images/daily-is.jpg",
  "/images/intranet.jpg",
  "/images/mail.jpg",
  "/images/sc-ticket.jpg",
  "/images/web.jpg"
  
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
