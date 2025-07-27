# 🧰 VS Code Setup Guide

> A simple guide to install and set up Visual Studio Code (VS Code) on Windows, macOS, and Ubuntu.

---

## 🪟 **Windows**

### ✅ Step 1: Download VS Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com/)
2. Click **Download for Windows**
3. Run the installer and follow the default prompts

### ✅ Step 2: Launch & Basic Setup

- Open VS Code from the Start menu
- (Optional) Sign in with your Microsoft or GitHub account
- Install recommended extensions (see below)

---

## 🍎 **macOS**

### ✅ Step 1: Download VS Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com/)
2. Click **Download for macOS**
3. Open the downloaded `.zip` file and drag **Visual Studio Code** to your **Applications** folder

### ✅ Step 2: Launch & Basic Setup

- Open VS Code from Applications
- (Optional) Sign in with your Microsoft or GitHub account
- Install recommended extensions (see below)

---

## 🐧 **Ubuntu / Linux**

### ✅ Step 1: Install VS Code

Open **Terminal** and run each command one by one:

1. **Update your package list:**
   ```bash
   sudo apt update
   ```
2. **Install wget and gpg (if not already installed):**
   ```bash
   sudo apt install wget gpg
   ```
3. **Download and add the Microsoft GPG key:**
   ```bash
   wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
   sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
   ```
4. **Add the VS Code repository:**
   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" | sudo tee /etc/apt/sources.list.d/vscode.list
   ```
5. **Update your package list again:**
   ```bash
   sudo apt update
   ```
6. **Install VS Code:**
   ```bash
   sudo apt install code
   ```

### ✅ Step 2: Launch & Basic Setup

- Open VS Code from the Applications menu or run `code` in Terminal
- (Optional) Sign in with your Microsoft or GitHub account
- Install recommended extensions (see below)

---

## 🌟 **Recommended Extensions**

- **Python** (for Python development)
- **ESLint** (for JavaScript/TypeScript)
- **Prettier** (code formatter)
- **GitLens** (Git integration)
- **Live Server** (for web development)
- **Material Icon Theme**

---

## 🚀 **You're Ready!**

VS Code is now installed and ready for coding. Explore the sidebar, settings, and extensions to customize your workflow!
