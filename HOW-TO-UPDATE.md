# 🔄 HOW TO UPDATE YOUR KIOSK ON GITHUB

## Quick Update Process

### Option 1: Super Easy (Recommended)
1. **Make your changes** to any file (index.html, images, etc.)
2. **Double-click** `quick-update.bat`
3. **Wait** for it to finish
4. **Done!** Your kiosk is updated online

### Option 2: Manual Steps
1. Open Command Prompt in your project folder
2. Run these commands:
   ```
   git add .
   git commit -m "My update"
   git push origin main
   ```

## ⚡ When to Update
- **Anytime** you change `index.html`
- **Anytime** you add/change images
- **Anytime** you modify any file in the project

## 🌐 Where to See Updates
- **GitHub Repository**: https://github.com/thivya0050/amaKiosk
- **Live Kiosk**: https://thivya0050.github.io/amaKiosk/

## 📱 Testing on Samsung A8
1. Open browser on Samsung A8
2. Go to: `https://thivya0050.github.io/amaKiosk/`
3. Make sure it's in portrait mode
4. Test all functionality

## 🔧 Troubleshooting
- If update fails, check internet connection
- If images don't show, wait 1-2 minutes (GitHub Pages needs time to update)
- If still issues, run `quick-update.bat` again

## 💡 Pro Tips
- Always test changes locally first
- Keep file sizes under 100MB
- Use descriptive commit messages
- Update regularly for best performance
