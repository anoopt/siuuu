# Ronaldo Siuuu! Chrome Extension

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/ajjnpmpdkgkcfolnmkfjaeimhaebcpfn?style=for-the-badge&logo=googlechrome&logoColor=white&label=Chrome%20Web%20Store)](https://chromewebstore.google.com/detail/ronaldo-siuuu-click-or-ct/ajjnpmpdkgkcfolnmkfjaeimhaebcpfn)
[![Chrome Web Store Users](https://img.shields.io/chrome-web-store/users/ajjnpmpdkgkcfolnmkfjaeimhaebcpfn?style=for-the-badge&logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/ronaldo-siuuu-click-or-ct/ajjnpmpdkgkcfolnmkfjaeimhaebcpfn)

A fun Chrome extension that plays Cristiano Ronaldo's iconic "Siuuu!" celebration sound with just a click or keyboard shortcut.

![Ronaldo Siuuu!](icon.png)

## 🎵 Features

- **One-Click Sound**: Click the extension icon to instantly hear Ronaldo's "Siuuu!" with a fun animated popup
- **Keyboard Shortcut**: Press `Ctrl+Shift+S` (or `Cmd+Shift+S` on Mac) for quick access
- **Animated Celebration**: Shows a shaking Ronaldo icon with gradient background during sound playback
- **Smart Auto-Close**: Popup automatically closes when the sound finishes playing
- **Works Everywhere**: Functions on any webpage, including Chrome internal pages
- **Privacy First**: No data collection, completely offline after installation

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
- Click it to see an animated popup with Ronaldo's shaking icon
- Hear the "Siuuu!" sound play while the icon shakes
- Popup automatically closes when the sound finishes

### Method 2: Keyboard Shortcut
- Press `Ctrl+Shift+S` (Windows/Linux) or `Cmd+Shift+S` (Mac)
- Same animated popup experience as clicking the icon
- Works on any webpage, including Chrome internal pages

## 📁 Project Structure

```
Ronaldo Siu Extension/
├── manifest.json       # Extension configuration
├── background.js       # Icon click and keyboard shortcut handlers
├── popup.html         # Animated popup interface with celebration theme
├── popup.js           # Popup logic, audio playback, and auto-close
├── icon.png           # Extension icon (also used in popup animation)
├── siuuu.mp3         # Ronaldo's "Siuuu!" sound file
└── README.md         # This file
```

## 🛠️ Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: None required! (minimal permission footprint)
- **Service Worker**: Background script for handling icon clicks and keyboard shortcuts
- **Audio Playback**: Direct audio playback in popup context
- **Animation**: CSS keyframe animations for celebration effect
- **Auto-Close**: Popup closes automatically when audio finishes playing

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

### Changing the Sound
1. Replace `siuuu.mp3` with your desired audio file
2. Keep the same filename or update the reference in `background.js`
3. Supported formats: MP3, WAV, OGG

### Updating the Icon
1. Replace `icon.png` 
2. Recommended sizes: 16x16, 32x32, 48x48, 128x128 pixels
3. Format: PNG with transparency support

### Modifying the Keyboard Shortcut
1. Edit the `commands` section in `manifest.json`
2. Update the `suggested_key` values
3. See [Chrome Commands API](https://developer.chrome.com/docs/extensions/reference/commands/) for available key combinations

## 📋 Browser Compatibility

- ✅ Chrome (Manifest V3)
- ✅ Edge (Chromium-based)
- ❌ Firefox (different extension format)
- ❌ Safari (different extension format)

## 🐛 Troubleshooting

### Sound Not Playing
- Check if audio is muted in your browser/system
- The animated popup should appear regardless of audio settings
- Try refreshing the extension if needed (go to `chrome://extensions/` and click reload)

### Animation Not Working
- Make sure the popup appears when clicking the icon
- If popup appears but no animation, try reloading the extension
- Check browser console for any JavaScript errors

### Keyboard Shortcut Not Working
- Check if another extension is using the same shortcut
- Try the shortcut on any webpage
- Reload the extension if you changed the shortcut

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