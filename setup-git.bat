@echo off
title Setup Git for Auto Updates
echo.
echo ========================================
echo    SETTING UP GIT FOR AUTO UPDATES
echo ========================================
echo.

echo [1] Initializing Git repository...
git init

echo.
echo [2] Adding your GitHub repository...
echo Please enter your GitHub repository URL:
echo Example: https://github.com/YOUR_USERNAME/amaKiosk.git
echo.
set /p REPO_URL="https://github.com/thivya0050/amaKiosk.git "

git remote add origin %REPO_URL%

echo.
echo [3] Setting up main branch...
git branch -M main

echo.
echo [4] Adding all files...
git add .

echo.
echo [5] Making initial commit...
git commit -m "Initial commit: Samsung A8 optimized kiosk"

echo.
echo [6] Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo    SETUP COMPLETE!
echo ========================================
echo.
echo Your local project is now connected to GitHub!
echo.
echo To update your kiosk in the future:
echo 1. Make changes to your files
echo 2. Run: update-kiosk.bat
echo 3. Changes will be live in 2-3 minutes!
echo.
echo Press any key to continue...
pause >nul
