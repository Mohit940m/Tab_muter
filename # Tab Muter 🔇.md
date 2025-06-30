# Tab Muter 🔇

A simple and lightweight Chrome extension to mute and unmute any browser tab with a single click.

## ✨ Features

- **One-Click Mute:** Instantly mute the audio of the current tab by clicking the extension icon.
- **One-Click Unmute:** Easily unmute the tab to restore audio with another click.
- **Minimalist:** No complex UI, just a simple and effective toolbar icon.
- **Lightweight:** Runs efficiently in the background with minimal resource usage.

## 🚀 Installation

Since this extension is not on the Chrome Web Store, you can install it locally by following these steps:

1.  **Download the Code**
    *   Clone this repository to your local machine or download the source code as a ZIP file and extract it.

2.  **Open Browser Extensions Page**
    *   Open your Chromium-based browser (Google Chrome, Microsoft Edge, Brave, etc.).
    *   Navigate to the extensions management page. You can usually find this at `chrome://extensions`.

3.  **Enable Developer Mode**
    *   In the top-right corner of the extensions page, find the **"Developer mode"** toggle and switch it **on**.

    

4.  **Load the Extension**
    *   With developer mode enabled, you will see new buttons appear. Click on the **"Load unpacked"** button.
    *   A file selection dialog will open. Navigate to and select the folder where you downloaded/cloned this project (the folder that contains `manifest.json`).

5.  **Done!**
    *   The "Tab Muter" extension will now appear in your list of extensions and its icon will be added to your browser's toolbar. You may need to pin it to the toolbar from the extensions puzzle-piece menu.

## 🔧 How to Use

1.  Navigate to any tab that is playing audio.
2.  Click the **Tab Muter icon** in your browser's toolbar.
3.  The tab will be muted. The browser will typically show a mute symbol on the tab itself.
4.  Click the icon again to unmute it.

## 📂 Project Structure

The project is composed of a few key files:

```
Tab_muter/
├── images/
│   ├── icon16.png        # Icon (16x16)
│   ├── icon48.png        # Icon (48x48)
│   └── icon128.png       # Icon (128x128)
├── background.js       # The service worker that handles the core logic
└── manifest.json       # The extension's manifest file
```

-   **`manifest.json`**: This is the core file that tells Chrome about the extension's name, permissions, icons, and which scripts to run.
-   **`background.js`**: This script runs in the background. It listens for clicks on the extension's action icon and then uses the `chrome.tabs` API to toggle the mute state of the active tab.

## 📄 License

This project is open source and available under the MIT License.