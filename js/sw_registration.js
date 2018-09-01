/**
 * Check for serviceWorker support
 * If supported, register the worker after window load. (https://developers.google.com/web/fundamentals/primers/service-workers/registration)
 * If not supported, display error.
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
            // Service worker scope is entire app
            // because it is placed in root folder
            .register('../sw_restaurant.js')
            // Worker Registered
            .then(reg => console.log('Service Worker Registered Successfully'))
            // Catching the error (err)
            .catch(err => console.log('Service Worker encountered and error: ' + `${err}`));
    });
}
