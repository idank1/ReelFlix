#!/bin/bash
# Script to show Expo QR code

echo "🔍 Looking for Expo server..."
echo ""

# Check if Expo is running
if lsof -ti:8081 > /dev/null 2>&1; then
    echo "✅ Expo is running on port 8081"
    echo ""
    echo "📱 To see the QR code:"
    echo "   1. Open http://localhost:8081 in your browser"
    echo "   2. Or check the terminal where 'npm start' is running"
    echo ""
    echo "🌐 Opening Expo DevTools in browser..."
    open http://localhost:8081 2>/dev/null || echo "   (Could not auto-open browser - please visit http://localhost:8081 manually)"
else
    echo "❌ Expo is not running"
    echo ""
    echo "To start Expo, run:"
    echo "   cd frontend && npm start"
fi

