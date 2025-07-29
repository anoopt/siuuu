# Ronaldo Siuuu! Chrome Extension

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ajjnpmpdkgkcfolnmkfjaeimhaebcpfn?style=for-the-badge&logo=googlechrome&logoColor=white&label=Chrome%20Web%20Store)](https://chromewebstore.google.com/detail/ronaldo-siuuu-click-or-ct/ajjnpmpdkgkcfolnmkfjaeimhaebcpfn)
[![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/ajjnpmpdkgkcfolnmkfjaeimhaebcpfn?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/ronaldo-siuuu-click-or-ct/ajjnpmpdkgkcfolnmkfjaeimhaebcpfn)

A fun Chrome extension that plays Cristiano Ronaldo's iconic "Siuuu!" celebration sound with just a click or keyboard shortcut.

![Ronaldo Siuuu!](icon.png)

## 🎵 Features

- **Two Display Modes**: Choose between classic icon animation or video celebration
  - **Icon Mode**: Shows a shaking Ronaldo icon with MP3 audio
  - **Video Mode**: Plays Ronaldo's "Siuuu!" video with built-in sound (default)
- **One-Click Sound**: Click the extension icon to instantly hear/see Ronaldo's "Siuuu!" celebration
- **Multiple Keyboard Shortcuts**: 
  - Press `Ctrl+Shift+S` (or `Cmd+Shift+S` on Mac) to play the celebration
  - Press `Alt+Shift+M` to toggle between icon and video modes
- **Right-Click Mode Toggle**: Right-click the extension icon to switch between display modes
- **Animated Celebration**: 
  - Icon mode: Shows a shaking Ronaldo icon with gradient background
  - Video mode: Plays Ronaldo's celebration video with original sound
- **Smart Auto-Close**: Popup automatically closes when the sound/video finishes playing
- **Persistent Settings**: Your display mode preference is saved and remembered
- **Works Everywhere**: Functions on any webpage, including Chrome internal pages
- **Privacy First**: Minimal permissions, no data collection

## 🚀 Installation

### From Chrome Web Store (Recommended)

**[📥 Install from Chrome Web Store](https://chromewebstore.google.com/detail/ronaldo-siuuu-click-or-ct/ajjnpmpdkgkcfolnmkfjaeimhaebcpfn)**

1. Click the link above or search for "Ronaldo Siuuu!" in the Chrome Web Store
2. Click "Add to Chrome" 
3. Confirm by clicking "Add extension"
4. Pin the extension to your toolbar for easy access

### From Source (Development)

1. **Clone or Download** this repository
2. **Open Chrome** and navigate to `chrome://extensions/`
3. **Enable Developer Mode** (toggle in top-right corner)
4. **Click "Load unpacked"** and select the extension folder
5. **Pin the extension** to your toolbar for easy access

## 🎮 Usage

### Method 1: Click the Icon
- Look for the Ronaldo extension icon in your Chrome toolbar
- Click it to see an animated popup with celebration
- **Video Mode** (default): Watch Ronaldo's celebration video with original sound
- **Icon Mode**: See the classic shaking icon animation with separate MP3 audio
- Popup automatically closes when the celebration finishes

### Method 2: Keyboard Shortcuts
- **Play Celebration**: Press `Ctrl+Shift+S` (Windows/Linux) or `Cmd+Shift+S` (Mac)
- **Toggle Display Mode**: Press `Alt+Shift+M` to switch between video and icon modes
- Works on any webpage, including Chrome internal pages

### Method 3: Right-Click Mode Toggle
- Right-click the extension icon in your toolbar
- Select "Switch to Icon Mode" or "Switch to Video Mode"
- Your preference is automatically saved for future use

## 📁 Project Structure

```
Ronaldo Siu Extension/
├── manifest.json       # Extension configuration with commands and permissions
├── background.js       # Icon click, keyboard shortcuts, and mode toggle handlers
├── popup.html         # Animated popup interface with video and icon elements
├── popup.js           # Popup logic, audio/video playback, and auto-close
├── icon.png           # Extension icon (also used in icon mode animation)
├── siuuu.mp3         # Ronaldo's "Siuuu!" sound file (used in icon mode)
├── siuuu.mp4         # Ronaldo's celebration video (used in video mode)
└── README.md         # This file
```

## 🛠️ Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: 
  - `contextMenus`: For right-click mode toggle functionality
  - `storage`: For remembering user's display mode preference
- **Service Worker**: Background script for handling icon clicks, keyboard shortcuts, and mode switching
- **Display Modes**: 
  - Video mode with built-in audio playback
  - Icon mode with separate MP3 audio playback
- **Animation**: CSS keyframe animations for celebration effects
- **Auto-Close**: Popup closes automatically when audio/video finishes playing
- **Persistent Settings**: User preferences stored using Chrome storage API

## 🔧 Development

### Prerequisites
- Google Chrome (latest version)
- Basic knowledge of JavaScript and Chrome Extension APIs

### Local Development
1. Make changes to the source files
2. Go to `chrome://extensions/`
3. Click the reload button (🔄) for the extension
4. Test your changes

### Debugging
- **Service Worker Console**: Go to `chrome://extensions/` → Find your extension → Click "Inspect views: service worker"
- **Content Script Console**: Open DevTools on any webpage where you're testing

## 🎨 Customization

### Changing the Audio/Video
1. **For Icon Mode**: Replace `siuuu.mp3` with your desired audio file
2. **For Video Mode**: Replace `siuuu.mp4` with your desired video file
3. Keep the same filenames or update references in `popup.js`
4. Supported audio formats: MP3, WAV, OGG
5. Supported video formats: MP4, WebM

### Updating the Icon
1. Replace `icon.png` 
2. Recommended sizes: 16x16, 32x32, 48x48, 128x128 pixels
3. Format: PNG with transparency support

### Modifying Keyboard Shortcuts
1. Edit the `commands` section in `manifest.json`
2. Available shortcuts:
   - `_execute_action`: Play celebration (default: `Ctrl+Shift+S`)
   - `toggle_mode`: Switch display modes (default: `Alt+Shift+M`)
3. See [Chrome Commands API](https://developer.chrome.com/docs/extensions/reference/commands/) for available key combinations

### Changing Default Display Mode
1. Edit `background.js`
2. Change `displayMode: 'video'` to `displayMode: 'icon'` in the `chrome.runtime.onInstalled` listener
3. Update context menu title accordingly

## 📋 Browser Compatibility

- ✅ Chrome (Manifest V3)
- ✅ Edge (Chromium-based)
- ❌ Firefox (different extension format)
- ❌ Safari (different extension format)

## 🐛 Troubleshooting

### Sound/Video Not Playing
- Check if audio is muted in your browser/system
- The animated popup should appear regardless of audio settings
- Try switching display modes using `Alt+Shift+M` or right-click menu
- Try refreshing the extension if needed (go to `chrome://extensions/` and click reload)

### Animation Not Working
- Make sure the popup appears when clicking the icon
- If popup appears but no animation, try reloading the extension
- Check browser console for any JavaScript errors
- Try switching between video and icon modes

### Keyboard Shortcuts Not Working
- **Play shortcut** (`Ctrl+Shift+S`): Check if another extension is using the same shortcut
- **Mode toggle** (`Alt+Shift+M`): Try the shortcut on any webpage
- Reload the extension if you changed any shortcuts
- Check Chrome's keyboard shortcuts page: `chrome://extensions/shortcuts`

### Display Mode Issues
- If stuck in one mode, try using the right-click context menu to switch
- Use `Alt+Shift+M` to toggle between modes
- Check Chrome's storage if issues persist: DevTools → Application → Storage → Extension Storage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source. Please ensure you have rights to use any audio files.

## ⚽ About

Created for football fans and Cristiano Ronaldo supporters who want to add some celebration to their browsing experience. 

**Siuuu!** 🎉

---

*This extension is not officially affiliated with Cristiano Ronaldo or any football organizations.*