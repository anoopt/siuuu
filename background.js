// This function will show the popup with sound for all scenarios
function playSound() {
    // Get the active tab
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0]) {
            const tab = tabs[0];
            
            // Show popup for all scenarios
            chrome.action.setPopup({
                tabId: tab.id,
                popup: 'popup.html'
            });
            
            // Open the popup programmatically
            chrome.action.openPopup();
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