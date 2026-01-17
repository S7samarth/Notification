self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // This forces the app to take control immediately
});

// This helps sync the badge with the notification
self.addEventListener('push', (event) => {
    const promiseChain = isBadgeSupported().then((supported) => {
        if (supported) {
            return navigator.setAppBadge(1);
        }
    });
    event.waitUntil(promiseChain);
});
