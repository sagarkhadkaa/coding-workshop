# 📋 Prerequisites for Day 4: React Fundamentals & Portfolio Development

Before diving into React development with Vite, ensure you have the following prerequisites set up on your system.

---

## 🖥️ System Requirements

### Operating System

- **Windows**: Windows 10 or later
- **macOS**: macOS 10.14 or later
- **Linux**: Any modern distribution (Ubuntu 18.04+, Fedora 30+, etc.)

### Hardware Requirements

- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 2GB free space
- **Internet**: Stable internet connection for downloads

---

## 🛠️ Essential Software Installation

### 1. Node.js (Required)

Node.js is essential for running React applications and managing packages.

#### Installation Steps:

**Option A: Official Installer (Recommended)**

1. Visit [nodejs.org](https://nodejs.org/)
2. Download **Node.js v22.18.0 LTS** (Long Term Support)
3. Run the installer and follow the setup wizard
4. Restart your terminal/command prompt

**Option A.1: Direct Download Links**

- **Windows**: [node-v22.18.0-x64.msi](https://nodejs.org/dist/v22.18.0/node-v22.18.0-x64.msi)
- **macOS**: [node-v22.18.0.pkg](https://nodejs.org/dist/v22.18.0/node-v22.18.0.pkg)
- **Linux**: [node-v22.18.0-linux-x64.tar.xz](https://nodejs.org/dist/v22.18.0/node-v22.18.0-linux-x64.tar.xz)

**Option B: Using Package Managers**

**Windows (using Chocolatey):**

```bash
# Install specific version
choco install nodejs --version=22.18.0

# Or install latest LTS
choco install nodejs-lts
```

**macOS (using Homebrew):**

```bash
# Install Node.js (will install latest LTS)
brew install node

# To install specific version, use n or nvm (see Option C)
```

**Linux (Ubuntu/Debian):**

```bash
# Method 1: Using NodeSource repository (recommended)
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Method 2: Using snap
sudo snap install node --classic --channel=22/stable
```

**Option C: Using Version Managers (Advanced)**

**Using NVM (Node Version Manager) - Cross-platform:**

```bash
# Install NVM first
# Windows: Download nvm-windows from GitHub
# macOS/Linux:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal, then:
nvm install 22.18.0
nvm use 22.18.0
nvm alias default 22.18.0
```

**Using n (macOS/Linux only):**

```bash
# Install n globally
sudo npm install -g n

# Install and use Node.js v22.18.0
sudo n 22.18.0
```

#### Verification:

```bash
node --version    # Should show v22.18.0
npm --version     # Should show v10.8.2 or later
```

**Important**: Ensure you have exactly **Node.js v22.18.0** for consistency across the workshop environment.

### 2. Code Editor (Highly Recommended)

#### Visual Studio Code (Recommended)

1. Download from [code.visualstudio.com](https://code.visualstudio.com/)
2. Install for your operating system
3. Install essential extensions (see below)

#### Alternative Editors:

- **WebStorm** (paid, powerful IDE)
- **Sublime Text** (lightweight)
- **Atom** (GitHub's editor)
- **Vim/Neovim** (for advanced users)

---

## 📚 Knowledge Prerequisites

### Required Knowledge (Day 3 Content)

- [ ] **HTML5** fundamentals and semantic elements
- [ ] **CSS3** basics including Flexbox and Grid
- [ ] **JavaScript ES6+** concepts:
  - Variables (let, const)
  - Arrow functions
  - Template literals
  - Destructuring
  - Array methods (map, filter, reduce)
  - Promises and async/await
  - Modules (import/export)

### Recommended Knowledge

- [ ] **Git** basics (clone, add, commit, push)
- [ ] **Command Line** basics
- [ ] **Package managers** (npm/yarn concepts)
- [ ] **JSON** format understanding

---

## 🌐 Browser Requirements

### Recommended Browsers:

- **Google Chrome** (latest version) - Recommended
- **Mozilla Firefox** (latest version)
- **Microsoft Edge** (latest version)
- **Safari** (latest version for macOS)

### Developer Tools:

Ensure you're familiar with browser developer tools:

- **Console** for debugging
- **Elements** for inspecting HTML/CSS
- **Network** for monitoring requests
- **Sources** for debugging JavaScript

---

## 🔧 Development Tools Setup

### 1. Terminal/Command Line

**Windows:**

- **PowerShell** (built-in, recommended)
- **Command Prompt** (basic)
- **Git Bash** (if Git is installed)
- **Windows Terminal** (modern, recommended)

**macOS:**

- **Terminal** (built-in)
- **iTerm2** (enhanced terminal)

**Linux:**

- **Bash** (default in most distributions)
- **Zsh** (with Oh My Zsh for enhanced experience)

### 2. Git (Version Control)

#### Installation:

**Windows:**

1. Download from [git-scm.com](https://git-scm.com/)
2. Run installer with default settings

**macOS:**

```bash
# Using Homebrew
brew install git

# Or download from git-scm.com
```

**Linux:**

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install git

# Fedora
sudo dnf install git

# Arch
sudo pacman -S git
```

#### Configuration:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### Verification:

```bash
git --version    # Should show version 2.x.x
```

---

## 🚀 Create Your First Vite React App

### Test Installation

Run this command to verify everything is working:

```bash
# Create a new React app with Vite
npm create vite@latest my-react-app -- --template react

# Navigate to the project
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Expected Output:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

---

## 📋 Pre-Workshop Checklist

Before Day 4, ensure you can check all these boxes:

### ✅ Installation Checklist:

- [ ] Node.js v22.18.0 installed and verified
- [ ] npm v10.8.2+ working correctly
- [ ] VS Code (or preferred editor) installed
- [ ] Essential VS Code extensions installed
- [ ] Git installed and configured
- [ ] Modern browser installed
- [ ] Stable internet connection

### ✅ Knowledge Checklist:

- [ ] Comfortable with HTML5 and CSS3
- [ ] Understanding of JavaScript ES6+ features
- [ ] Basic command line navigation
- [ ] Basic Git commands (clone, add, commit)
- [ ] Understanding of JSON format

### ✅ Test Checklist:

- [ ] Successfully created a Vite React app
- [ ] Development server starts without errors
- [ ] Can see "Hello Vite + React" in browser
- [ ] Can make simple changes and see hot reload

---

## 🆘 Troubleshooting Common Issues

### Node.js Issues:

**Problem**: `node: command not found`
**Solution**: Restart terminal or add Node.js to PATH

**Problem**: Wrong Node.js version installed
**Solution**:

```bash
# Check current version
node --version

# If not v22.18.0, uninstall and reinstall correct version
# Or use version manager (nvm/n) to switch versions
nvm install 22.18.0
nvm use 22.18.0
```

**Problem**: Permission errors on npm install
**Solution**:

```bash
# Fix npm permissions (macOS/Linux)
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile

# Alternative: Use npx instead of global installs
npx create-vite@latest my-app
```

**Problem**: Multiple Node.js versions causing conflicts
**Solution**: Use a version manager (nvm) to manage versions cleanly

### VS Code Issues:

**Problem**: Extensions not working
**Solution**: Reload VS Code window (Ctrl+Shift+P → "Developer: Reload Window")

### Git Issues:

**Problem**: SSH key authentication
**Solution**: Use HTTPS URLs for repositories during workshop

### Vite Issues:

**Problem**: Port 5173 already in use
**Solution**: Use different port: `npm run dev -- --port 3000`

---

## 📖 Recommended Reading

### Before the Workshop:

1. [React Official Documentation - Getting Started](https://react.dev/learn)
2. [Vite Guide](https://vitejs.dev/guide/)
3. [JavaScript ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_ECMAScript_6)

### Reference During Workshop:

1. [React Hooks Reference](https://react.dev/reference/react)
2. [Tailwind CSS Documentation](https://tailwindcss.com/docs)
3. [MDN Web Docs](https://developer.mozilla.org/)

---

## 🎯 Success Criteria

By the end of this prerequisite setup, you should be able to:

1. ✅ Create a new React app using Vite
2. ✅ Start the development server
3. ✅ Make changes and see them reflected in the browser
4. ✅ Open and navigate the project in VS Code
5. ✅ Use browser developer tools effectively
6. ✅ Understand the basic project structure

---

## 🤝 Getting Help

If you encounter issues during setup:

1. **Check the troubleshooting section** above
2. **Search for the specific error message** online
3. **Ask in the workshop Slack** channel
4. **Pair with a classmate** who has successfully set up

---

**Remember**: Having these prerequisites ready will ensure you can focus on learning React concepts rather than fighting with setup issues during the workshop!

**Good luck, and see you on Day 4! 🚀**
