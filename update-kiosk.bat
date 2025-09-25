@echo off
title Update Kiosk on GitHub
echo.
echo ========================================
echo    UPDATING KIOSK ON GITHUB
echo ========================================
echo.

echo [1] Adding all changes...
git add .

echo.
echo [2] Committing changes...
git commit -m "Updated kiosk - %date% %time%"

echo.
echo [3] Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo    UPDATE COMPLETE!
echo ========================================
echo.
echo Your kiosk has been updated on GitHub!
echo.
echo Live URL: https://YOUR_USERNAME.github.io/amaKiosk/
echo.
echo Changes will be live within 2-3 minutes.
echo.
echo Press any key to continue...
pause >nul
