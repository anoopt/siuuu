// Play the sound immediately when popup loads
document.addEventListener('DOMContentLoaded', () => {
    const iconElement = document.getElementById('iconElement');
    const videoElement = document.getElementById('videoElement');
    const titleElement = document.querySelector('.title');
    const containerElement = document.querySelector('.container');
    
    // Get display mode from storage
    chrome.storage.sync.get(['displayMode'], (result) => {
        const displayMode = result.displayMode || 'video';
        
        if (displayMode === 'video') {
            // Show video, hide icon
            iconElement.classList.add('hidden');
            videoElement.classList.remove('hidden');
            
            // Ensure video is unmuted and play with sound
            videoElement.muted = false;
            videoElement.currentTime = 0; // Start from beginning
            
            // Use a promise to handle play
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('Video play failed:', error);
                    // If autoplay fails, try with muted first then unmute
                    videoElement.muted = true;
                    videoElement.play().then(() => {
                        videoElement.muted = false;
                    }).catch(e => console.log('Fallback video play failed:', e));
                });
            }
            
            // Listen for when the video finishes playing (video has its own sound)
            videoElement.addEventListener('ended', () => {
                // Add elegant closing animation to the container
                if (containerElement) {
                    containerElement.classList.add('fade-out');
                }
                
                // Close the popup after the fade-out animation completes (600ms)
                setTimeout(() => {
                    window.close();
                }, 600);
            });
            
            // Fallback: close after 4 seconds if video doesn't fire 'ended' event (video is 2.5s + buffer)
            setTimeout(() => {
                // Add elegant fade-out even for fallback
                if (containerElement) {
                    containerElement.classList.add('fade-out');
                }
                setTimeout(() => {
                    window.close();
                }, 600);
            }, 4000);
            
        } else {
            // Show icon, hide video (default)
            videoElement.classList.add('hidden');
            iconElement.classList.remove('hidden');
            
            // Create and play the audio (only in icon mode)
            const audio = new Audio(chrome.runtime.getURL('siuuu.mp3'));
            audio.play().catch(e => console.log('Audio play failed:', e));
            
            // Listen for when the audio finishes playing
            audio.addEventListener('ended', () => {
                // Stop the shaking animation by removing the animation style
                if (iconElement && !iconElement.classList.contains('hidden')) {
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
        }
    });
});
