// This function will play the sound by injecting a script into the active tab.
function playSound() {
    // Get the active tab and inject a script to play the audio
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0]) {
            const tab = tabs[0];
            
            // Check if the tab URL is a restricted Chrome page
            if (tab.url.startsWith('chrome://') || 
                tab.url.startsWith('chrome.google.com') || 
                tab.url.startsWith('chrome-extension://') ||
                tab.url.startsWith('edge://') ||
                tab.url.startsWith('about:')) {
                
                // Show popup for restricted pages
                chrome.action.setPopup({
                    tabId: tab.id,
                    popup: 'popup.html'
                });
                
                // Open the popup programmatically
                chrome.action.openPopup();
                return;
            }
            
            // Ensure no popup is set for regular pages
            chrome.action.setPopup({
                tabId: tab.id,
                popup: ''
            });
            
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                func: () => {
                    // Create audio element and play the sound
                    const audio = new Audio(chrome.runtime.getURL('siuuu.mp3'));
                    audio.play().catch(e => console.log('Audio play failed:', e));
                }
            }).catch(error => {
                console.log('Script injection failed:', error);
                // Show popup for script injection failures
                chrome.action.setPopup({
                    tabId: tab.id,
                    popup: 'popup.html'
                });
                chrome.action.openPopup();
            });
        }
    });
}

// Add a listener for when the user clicks the extension's icon.
chrome.action.onClicked.addListener((tab) => {
    playSound();
});

// Add a listener for the keyboard shortcut.
chrome.commands.onCommand.addListener((command) => {
  if (command === "_execute_action") {
    playSound();
  }
});