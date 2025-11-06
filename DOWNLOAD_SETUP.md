# Download Feature Setup

## Overview
The What-If website now includes download buttons for both Android and iOS applications in the CTA (Call-to-Action) section.

## How It Works

### Download Buttons
- Two download buttons are available in the CTA section:
  - **Android**: Downloads `what-if-android.apk`
  - **iOS**: Downloads `what-if-ios.ipa`

### File Structure
```
public/
  ├── what-if-android.apk (placeholder - replace with your APK)
  ├── what-if-ios.ipa (placeholder - replace with your IPA)
  └── README.md (instructions)
```

## Adding Your App Files

### Option 1: Direct Download (Development/Beta)
1. Replace the placeholder files in the `public/` folder:
   - Copy your Android APK file and name it `what-if-android.apk`
   - Copy your iOS IPA file and name it `what-if-ios.ipa`

2. The files will be served from the root of your site:
   - Android: `https://yoursite.com/what-if-android.apk`
   - iOS: `https://yoursite.com/what-if-ios.ipa`

### Option 2: App Store Links (Production)
For production apps, modify the download handlers in `components/CTA.tsx` to use app store URLs:

```tsx
const handleDownload = (platform: 'android' | 'ios') => {
  const urls = {
    android: 'https://play.google.com/store/apps/details?id=com.whatif.app',
    ios: 'https://apps.apple.com/app/what-if/id123456789'
  };
  
  window.open(urls[platform], '_blank');
};
```

### Option 3: External Hosting
Use services like:
- **Firebase App Distribution**: For beta testing
- **TestFlight**: For iOS beta testing
- **Your own CDN/server**: For direct APK hosting

Update the URLs in the `handleDownload` function accordingly.

## Important Notes

### For iOS
- `.ipa` files can only be installed on devices that are registered in your Apple Developer account
- For public distribution, use the App Store
- For beta testing, use TestFlight

### For Android
- `.apk` files can be installed directly (with "Install from unknown sources" enabled)
- For public distribution, use Google Play Store
- For beta testing, you can use direct APK distribution or Google Play Console's internal testing

### Security
- The current placeholder files are just text files and safe to commit
- Your actual `.apk` and `.ipa` files are ignored by git (see `.gitignore`)
- Always verify file integrity and sign your applications properly

## UI Features
- Download buttons appear in the CTA section at the bottom of the homepage
- Each button shows the platform icon (Android/Apple) and a download icon
- Buttons are responsive and work well on mobile devices
- The section maintains the existing email signup form below the download buttons

## Customization
You can customize the download behavior by editing the `handleDownload` function in `components/CTA.tsx`.
