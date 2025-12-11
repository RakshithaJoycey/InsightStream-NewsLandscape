# 🚀 Git Setup & GitHub Upload Guide

## Step 1: Install Git

### Download Git for Windows:
1. Go to: https://git-scm.com/download/win
2. Download the latest version
3. Run the installer with default settings
4. Restart your terminal/command prompt

### Verify Installation:
```bash
git --version
```

## Step 2: Configure Git (First Time Only)
```bash
git config --global user.name "RakshithaJoycey"
git config --global user.email "your-email@example.com"
```

## Step 3: Upload Project to GitHub

### Navigate to your project folder:
```bash
cd "C:\Users\raksh\OneDrive\Desktop\News2"
```

### Initialize Git repository:
```bash
git init
```

### Add all files:
```bash
git add .
```

### Create first commit:
```bash
git commit -m "Initial commit: InsightStream News Aggregator"
```

### Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/RakshithaJoycey/InsightStream-NewsLandscape.git
```

### Push to GitHub:
```bash
git branch -M main
git push -u origin main
```

## Step 4: Verify Upload
Go to: https://github.com/RakshithaJoycey/InsightStream-NewsLandscape
Your project should now be visible!

---

## Alternative: Manual Upload via GitHub Web Interface

If you prefer not to install Git:

1. Go to your repository: https://github.com/RakshithaJoycey/InsightStream-NewsLandscape
2. Click "uploading an existing file"
3. Drag and drop all your project folders
4. Add commit message: "Add InsightStream News Aggregator project"
5. Click "Commit changes"

---

## 📁 Files to Upload

Make sure these are all uploaded:
- backend/ (folder with db.json, package.json)
- frontend/ (folder with all React files)
- README.md
- QUICKSTART.md
- PROJECT_SUMMARY.md
- COMMANDS.txt
- .gitignore

---

## 🎯 After Upload

Your repository will have:
✅ Complete working project
✅ Installation instructions
✅ Documentation
✅ Ready for others to clone and run