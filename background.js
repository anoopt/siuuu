// Initialize storage with default setting
chrome.runtime.onInstalled.addListener(() => {
  // Set default to video mode
  chrome.storage.sync.set({ displayMode: 'video' });
  
  // Create context menu
  chrome.contextMenus.create({
    id: "toggleDisplay",
    title: "Switch to icon mode",
    contexts: ["action"]
  });
});

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

// Function to toggle display mode
function toggleDisplayMode() {
  chrome.storage.sync.get(['displayMode'], (result) => {
    const currentMode = result.displayMode || 'video';
    const newMode = currentMode === 'icon' ? 'video' : 'icon';
    
    // Update storage
    chrome.storage.sync.set({ displayMode: newMode });
    
    // Update context menu title
    const newTitle = newMode === 'icon' ? 'Switch to video mode' : 'Switch to icon mode';
    chrome.contextMenus.update("toggleDisplay", { title: newTitle });
  });
}

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "toggleDisplay") {
    toggleDisplayMode();
  }
});

// Update context menu title when storage changes
chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'sync' && changes.displayMode) {
    const newMode = changes.displayMode.newValue;
    const newTitle = newMode === 'icon' ? 'Switch to video mode' : 'Switch to icon mode';
    chrome.contextMenus.update("toggleDisplay", { title: newTitle });
  }
});

// Add a listener for when the user clicks the extension's icon.
chrome.action.onClicked.addListener((tab) => {
    playSound();
});

// Add a listener for the keyboard shortcut.
chrome.commands.onCommand.addListener((command) => {
  if (command === "_execute_action") {
    playSound();
  } else if (command === "toggle_mode") {
    toggleDisplayMode();
  }
});