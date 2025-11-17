# How to Connect to Your Expo App

## ✅ Expo is Running Successfully!

The JSON you're seeing is the Expo manifest - that means everything is working correctly.

## Option 1: Use the Terminal QR Code (Easiest)

1. **Look at the terminal where you ran `npm start`** (in the `frontend` folder)
2. You should see a **large QR code** displayed in ASCII art
3. **Scan it with your phone:**
   - **iOS**: Open Camera app → point at QR code → tap notification
   - **Android**: Open Expo Go app → tap "Scan QR code" → point at QR code

## Option 2: Use the Connection String

If you can't see the QR code, you can manually connect:

1. **Open Expo Go** on your phone
2. **Tap "Enter URL manually"** (or similar option)
3. **Enter this URL:**
   ```
   exp://127.0.0.1:8081
   ```
   
   **BUT** - for a physical device, you need to use your computer's IP instead:
   ```
   exp://10.100.102.37:8081
   ```

## Option 3: Check Terminal Output

The QR code should be visible in your terminal. If you don't see it:

1. Make sure you're looking at the terminal where `npm start` is running
2. The QR code appears as ASCII art (text-based squares)
3. It should be right after the "Metro waiting on..." message

## Quick Test

Try this in a new terminal to see if Expo is responding:

```bash
curl http://localhost:8081
```

If you see JSON (like you did), Expo is working! The QR code is in the terminal output.

## Still Can't See QR Code?

1. **Restart Expo** to see it again:
   ```bash
   cd frontend
   npm start
   ```

2. **Look for this text** in the terminal:
   ```
   › Metro waiting on exp://...
   › Scan the QR code above with Expo Go
   ```

3. The QR code should be displayed right above that text

