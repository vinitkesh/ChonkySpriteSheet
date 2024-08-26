chrome.runtime.onInstalled.addListener(() => {
    chrome.alarms.create('petCheck', { periodInMinutes: 1 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'petCheck') {
        chrome.storage.local.get(['lastFed'], (result) => {
            const now = Date.now();
            const lastFed = result.lastFed || 0;
            if (now - lastFed > 86400000) {
                chrome.notifications.create({
                    type: 'basic',
                    // iconUrl: 'images/icon128.png',
                    title: 'Your pet is hungry!',
                    message: 'Dont forget to feed your pet.'
                });
            }
        });
    }
});
