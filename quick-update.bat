@echo off
echo ========================================
echo    QUICK UPDATE TO GITHUB
echo ========================================
echo.

echo Checking git status...
git status

echo.
echo Adding all changes...
git add .

echo.
echo Committing changes...
git commit -m "Updated kiosk - %date% %time%"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ========================================
echo    UPDATE COMPLETE!
echo ========================================
echo Your kiosk is now updated at:
echo https://thivya0050.github.io/amaKiosk/
echo ========================================
pause
