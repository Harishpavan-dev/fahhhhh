# 🎵 Fahhhhhh Error Notifier

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/harishpavan.fahhhhh?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=harishpavan.fahhhhh)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/harishpavan.fahhhhh?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=harishpavan.fahhhhh)
[![License](https://img.shields.io/github/license/Harishpavan-dev/fahhhhh?style=for-the-badge)](LICENSE)


<p align="center">
  <img src="media/logo.png" alt="Fahhhhhh Logo" width="128" height="128">
</p>

A fun and highly effective VS Code extension that provides immediate audio feedback when terminal commands fail. Never miss a compilation error or script failure again!

## 🚀 Overview

**Fahhhhhh** is designed to transform your development experience by adding a layer of auditory awareness to your workflow. Whether you're juggling multiple terminals or just need a lighthearted alert for failed tasks, this extension automatically plays a satisfying "fahhhhhh" sound whenever a command exits with an error code.

## ✨ Key Features

- 🔊 **Auto-Trigger on Error**: Automatically plays `fahhhhhh.wav` when terminal commands fail (non-zero exit code).
- 🛠️ **Manual Playback**: Trigger the sound manually via the Command Palette for testing or fun.
- ⚡ **Performance Optimized**: Features a smart cooldown system to prevent sound overlapping during rapid-fire errors.
- 🌐 **Fully Offline**: No internet connection required. All assets are bundled locally.
- 💻 **Cross-Platform**: Seamlessly works on **Windows (PowerShell)**, **macOS (afplay)**, and **Linux (paplay/aplay)**.

## 📥 Installation

### 1. From Visual Studio Marketplace
Search for **"Fahhhhhh Error Notifier"** in the VS Code Extensions Marketplace and click **Install**.

### 2. Manual VSIX Installation
1. [Download](https://github.com/Harishpavan-dev/fahhhhh) the latest `.vsix` file.
2. In VS Code, open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Type and select **"Extensions: Install from VSIX..."**.
4. Choose the downloaded file and enjoy!

> [!TIP]
> **Not hearing anything?** Ensure your system volume is up and you have the necessary system players installed (e.g., PowerShell on Windows, `afplay` on macOS, or `paplay`/`aplay` on Linux).

## 🛠️ Configuration & Usage

Once installed, Fahhhhhh works automatically for all integrated terminals.

### Commands
| Command | Description |
| --- | --- |
| `Fahhhhhh: Play Fahhhhhh Sound` | Manually triggers the sound notification. |

### Configuration
You can customize the cooldown period in your VS Code settings:
```json
"fahhhhh.cooldownMs": 1000
```

## 👨‍💻 Developed By

**Bavananthan Harishpavan**
Connect with me for more creative tools and developer solutions:

- 🌐 [Personal Portfolio](https://harishpavan-dev.vercel.app)
- 🐙 [GitHub Profile](https://github.com/Harishpavan-dev)
- 🤝 [Feedback](https://github.com/Harishpavan-dev)

---

## ⚖️ License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

<p align="center">
  <i>Made with ❤️ for developers who need a break from silent errors.</i>
</p>