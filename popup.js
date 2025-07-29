// Play the sound immediately when popup loads
document.addEventListener('DOMContentLoaded', () => {
    // Create and play the audio
    const audio = new Audio(chrome.runtime.getURL('siuuu.mp3'));
    const iconElement = document.querySelector('.icon');
    const titleElement = document.querySelector('.title');
    const containerElement = document.querySelector('.container');
    
    audio.play().catch(e => console.log('Audio play failed:', e));
    
    // Listen for when the audio finishes playing
    audio.addEventListener('ended', () => {
        // Stop the shaking animation by removing the animation style
        if (iconElement) {
            iconElement.style.animation = 'none';
        }
        
        // Add elegant closing animation to the container
        if (containerElement) {
            containerElement.classList.add('fade-out');
        }
        
        // Close the popup after the enhanced fade-out animation completes (600ms)
        setTimeout(() => {
            window.close();
        }, 600);
    });
    
    // Fallback: close after 10 seconds if audio doesn't fire 'ended' event
    setTimeout(() => {
        // Add elegant fade-out even for fallback
        if (containerElement) {
            containerElement.classList.add('fade-out');
        }
        setTimeout(() => {
            window.close();
        }, 600);
    }, 10000);
});
