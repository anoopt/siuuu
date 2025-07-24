// Get DOM elements
const closeButton = document.getElementById('closeButton');

// Close the popup when the button is clicked
closeButton.addEventListener('click', () => {
    window.close();
});

// Auto-close the popup after 3 seconds
setTimeout(() => {
    window.close();
}, 6000);
