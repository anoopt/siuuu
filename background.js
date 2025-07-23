// This function will play the sound by injecting a script into the active tab.
function playSound() {
    // Get the active tab and inject a script to play the audio
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        if (tabs[0]) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: () => {
                    // Create audio element and play the sound
                    const audio = new Audio(chrome.runtime.getURL('siuuu.mp3'));
                    audio.play().catch(e => console.log('Audio play failed:', e));
                }
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