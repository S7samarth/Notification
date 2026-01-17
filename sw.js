self.addEventListener('notificationclick', (event) => {
    // When you click the notification, it clears the badge (resets to 0)
    event.notification.close();
    if (navigator.clearAppBadge) {
        navigator.clearAppBadge();
    }
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then((clientList) => {
            if (clientList.length > 0) return clientList[0].focus();
            return clients.openWindow('/');
        })
    );
});
