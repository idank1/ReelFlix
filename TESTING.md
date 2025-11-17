# Testing the Frontend

## Quick Start

The Expo development server should be running. You should see a QR code and menu options in your terminal.

## Option 1: Physical Device (Recommended for Best Experience)

### Steps:
1. **Install Expo Go** on your phone:
   - iOS: [App Store - Expo Go](https://apps.apple.com/app/expo-go/id982107779)
   - Android: [Play Store - Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Connect to same WiFi** as your computer

3. **Open Expo Go** and scan the QR code from the terminal

4. **Important for API Connection**: 
   - If testing on a physical device, you may need to update the API URL
   - Find your computer's IP address:
     ```bash
     # Mac/Linux
     ifconfig | grep "inet " | grep -v 127.0.0.1
     
     # Or use
     ipconfig getifaddr en0
     ```
   - Update `frontend/src/services/api.ts`:
     ```typescript
     const API_BASE_URL = __DEV__
       ? 'http://YOUR_IP_ADDRESS:3000/api'  // Replace YOUR_IP_ADDRESS
       : 'https://your-api-url.com/api';
     ```
   - Restart Expo after making this change

## Option 2: iOS Simulator (Mac Only)

1. **Make sure Xcode is installed** (required for iOS simulator)
   - Install from App Store if needed

2. **In the terminal where Expo is running**, press:
   ```
   i
   ```
   Or run:
   ```bash
   cd frontend
   npm run ios
   ```

3. The iOS simulator will open automatically

## Option 3: Android Emulator

1. **Install Android Studio** if not already installed
   - Download from: https://developer.android.com/studio

2. **Set up an Android Virtual Device (AVD)**
   - Open Android Studio
   - Tools → Device Manager → Create Device
   - Choose a device and system image

3. **Start the emulator** from Android Studio

4. **In the terminal where Expo is running**, press:
   ```
   a
   ```
   Or run:
   ```bash
   cd frontend
   npm run android
   ```

## Option 4: Web Browser (Limited)

1. **In the terminal where Expo is running**, press:
   ```
   w
   ```
   Or run:
   ```bash
   cd frontend
   npm run web
   ```

   **Note**: Video playback may be limited in web browsers. This is best for testing UI only.

## Troubleshooting

### Can't see the Expo menu/QR code?
- Check if Expo is running: Look for the process or check terminal output
- Restart Expo:
  ```bash
  cd frontend
  npm start
  ```

### API connection issues on physical device?
- Make sure backend is running on `http://localhost:3000`
- Update API_BASE_URL in `frontend/src/services/api.ts` to use your computer's IP
- Make sure phone and computer are on the same WiFi network
- Check firewall settings (may need to allow port 3000)

### iOS Simulator not opening?
- Make sure Xcode Command Line Tools are installed:
  ```bash
  xcode-select --install
  ```

### Android Emulator not connecting?
- Make sure Android Studio and emulator are running
- Check that `ANDROID_HOME` environment variable is set

## Testing Checklist

Once the app loads, test these features:

- [ ] Episode list displays correctly
- [ ] Can scroll through episodes
- [ ] Can tap an episode to open video player
- [ ] Video plays correctly
- [ ] Filter button shows only unwatched episodes
- [ ] Sort button changes episode order
- [ ] Mark as watched/unwatched works
- [ ] Video auto-marks as watched when finished

## Viewing Logs

- **Expo logs**: Check the terminal where `npm start` is running
- **Backend logs**: Check the terminal where `npm run dev` is running (in backend folder)
- **React Native Debugger**: Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android) in simulator

