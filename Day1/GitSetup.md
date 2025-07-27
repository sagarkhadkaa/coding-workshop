## 📝 What is Git?

**Git** is a free and open-source version control system that helps you track changes in your code, collaborate with others, and manage different versions of your projects. It is widely used by developers and teams to:

- **Save and manage code history**
- **Work together on projects**
- **Experiment with new features safely**
- **Revert to previous versions if needed**
- **Share code on platforms like GitHub**

Learning Git is essential for modern software development, teamwork, and open-source contributions.

# 🧰 Git Setup Guide

> A beginner-friendly guide to set up Git on **Windows**, **macOS**, and **Linux (Ubuntu)** for version control and collaboration.

---

## 🪟 **Windows**

### ✅ Step 1: Download Git

1. Visit: [git-scm.com/download/win](https://git-scm.com/download/win)
2. The download will start automatically.
3. Open the installer and **follow the default options**:
   - Keep clicking **Next** (unless you're an advanced user)
   - Choose **Git Bash** when prompted for a terminal

### ✅ Step 2: Set Up Git

Open **Git Bash** and run:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "youremail@example.com"
```

Check your configuration:

```bash
git config --list
```

---

## 🍎 **macOS**

### ✅ Step 1: Install Git

Open **Terminal** and run:

```bash
git --version
```

If Git is not installed, you’ll be prompted to install Xcode Command Line Tools.  
Click **Install** and follow the instructions.

### ✅ Step 2: Set Up Git

In Terminal, run:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "youremail@example.com"
```

Verify your configuration:

```bash
git config --list
```

---

## 🐧 **Linux / Ubuntu**

### ✅ Step 1: Install Git

Open **Terminal** and run:

```bash
sudo apt update
sudo apt install git -y
```

Check installation:

```bash
git --version
```

### ✅ Step 2: Set Up Git

Configure Git with your name and email:

```bash
git config --global user.name "Your Full Name"
git config --global user.email "youremail@example.com"
```

Check your configuration:

```bash
git config --list
```

---

## 📁 **Optional: Create a Test Repository**

Try it on any OS:

```bash
mkdir git-test
cd git-test
git init
touch README.md
git add .
git commit -m "Initial commit"
```

---

## 🌐 **Optional: Connect to GitHub**

1. Go to [github.com](https://github.com) and create an account.
2. Create a new repository.
3. Link it from terminal:

```bash
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin master
```

---

## 🚀 **You're Ready!**

You’ve successfully installed and configured Git. You can now:

- Track your code history
- Collaborate with teammates
- Push/pull from GitHub or other Git platforms

---

## 🧠 **Bonus Tips**

- Use `git status` to check changes
- Use `git log` to view commit history
- Use `git clone <repo-url>` to copy a remote
