document.getElementById('feedPet').addEventListener('click', () => {
    chrome.storage.local.set({ lastFed: Date.now() }, () => {
        document.getElementById('petStatus').innerText = "Your pet has been fed!";
    });
});

document.getElementById('playWithPet').addEventListener('click', () => {
    chrome.storage.local.set({ lastPlayed: Date.now() }, () => {
        document.getElementById('petStatus').innerText = "You played with your pet!";
    });
});
