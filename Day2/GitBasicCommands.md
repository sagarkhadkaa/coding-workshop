# Basic Git Commands for Beginners

## Ctrl+`

## 1. Configure Git

- Set your name: `git config --global user.name "Your Name"`
- Set your email: `git config --global user.email "your.email@example.com"`

- Check your configuration: `git config --list`  
  Shows all your Git configuration settings, including username and email.

---

## 2. Initialize a Repository

- `git init`  
  Initializes a new Git repository in your project folder.

---

## 3. Clone a Repository

- `git clone <repository-url>`  
  Copies a remote repository to your local machine.

---

## 4. Check Status

- `git status`  
  Shows the status of changes as untracked, modified, or staged.

---

## 5. Add Files

- `git add <filename>`  
  Adds a file to the staging area.
- `git add .`  
  Adds all files to the staging area.

---

## 6. Commit Changes

- `git commit -m "Your commit message"`  
  Commits the staged changes with a message.

---

## 7. View Commit History

- `git log`  
  Shows the commit history for the current branch.

---

## 8. Push Changes

- `git push`  
  Uploads your commits to a remote repository.

---

## 9. Pull Changes

- `git pull`  
  Fetches and merges changes from the remote repository.

---

## 10. Create a Branch

- `git branch <branch-name>`  
  Creates a new branch.

---

## 11. Switch Branches

- `git checkout <branch-name>`  
  Switches to the specified branch.
- `git switch <branch-name>`  
  Alternative command to switch branches.

---

## 12. Merge Branches

- `git merge <branch-name>`  
  Merges the specified branch into your current branch.

---

## 13. Discard Changes

- `git checkout -- <filename>`  
  Discards changes in a file.
- `git restore <filename>`  
  Alternative command to discard changes.

---

## 14. Remove Files

- `git rm <filename>`  
  Removes a file from the working directory and staging area.

---

## 15. View Remote URLs

- `git remote -v`  
  Shows the URLs of remote repositories.

---

> For more help, use `git help <command>` or visit the official documentation: https://git-scm.com/doc
