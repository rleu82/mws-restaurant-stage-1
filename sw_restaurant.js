/**
 * Service Worker Lifecycle for reference
 * Register : registered in main.js and restaurant_info.js
 * Install
 * Activate
 */

// Use variable to easily manage caches if changed are made
const cacheVersion = 'version1';
// Array of items to Cache
const cacheItems = [
    'https://unpkg.com/leaflet@1.3.4/dist/leaflet.css',
    'https://necolas.github.io/normalize.css/8.0.0/normalize.css',
    'https://unpkg.com/leaflet@1.3.4/dist/leaflet.js',
    'index.html',
    'restaurant.html',
    '/css/media-queries.css',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    'config.js'
];

/**
 * Install event for the Service Worker
 */
self.addEventListener('install', event => {
    // Wait until promise is completed
    event.waitUntil(
        caches
            .open(cacheVersion)
            // Open cache and add all items from array to cache
            .then(cache => {
                cache.addAll(cacheItems);
            })
            // skipWaiting for items can go into effect immediately
            .then(() => self.skipWaiting)
            // on errory console log error
            .catch(err => console.log(err))
    );
});

/**
 * Activate event for the Service Worker
 * * Check for cache matches and delete older cache for future
 * * cache changes and storage cleanup
 */
self.addEventListener('activate', event => {
    event.waitUntil(
        // Grab caches keys and map through any and all caches then to check if caches match
        caches.keys().then(cacheVersions => {
            return Promise.all(
                cacheVersions.map(cache => {
                    // If cache does not equal to cacheVersion variable
                    if (cache !== cacheVersion) {
                        // Delete the cache if it doesn't match cacheVersion
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

/**
 * Fetch event for Service Worker
 */
self.addEventListener('fetch', event => {
    event.respondWith(
        // fetch original request if online and cache a copy
        fetch(event.request)
            .then(Response => {
                const reqClone = Response.clone();
                // Now open and store the clone in cache
                caches.open(cacheVersion).then(cache => {
                    cache.put(event.request, reqClone);
                });
                // return response
                return Response;
            })
            // If error, return original cache that was stored
            .catch(err => caches.match(event.request, { ignoreSearch: true }).then(Response => Response))
    );
});
