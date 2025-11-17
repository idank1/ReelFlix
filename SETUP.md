# Setup Instructions

## Prerequisites

1. **Node.js** (Latest LTS version recommended)
   - Check installation: `node --version`
   - Download from: https://nodejs.org/

2. **npm** (comes with Node.js)
   - Check installation: `npm --version`

3. **For Mobile Development:**
   - **iOS**: Xcode (Mac only)
   - **Android**: Android Studio
   - Or use Expo Go app on your phone for easier testing

## Installation Steps

### 1. Install Dependencies

From the root directory:

```bash
npm install
cd backend && npm install
cd ../frontend && npm install
```

Or use the convenience script:

```bash
npm run install:all
```

### 2. Start Backend Server

```bash
# From root directory
npm run dev:backend

# Or from backend directory
cd backend
npm run dev
```

The backend will start on `http://localhost:3000`

### 3. Start Frontend App

In a **new terminal**:

```bash
# From root directory
npm run dev:frontend

# Or from frontend directory
cd frontend
npm start
```

This will open the Expo development server. You can:
- Press `i` to open iOS simulator (Mac only)
- Press `a` to open Android emulator
- Scan QR code with Expo Go app on your phone
- Press `w` to open in web browser

## API Endpoints

- `GET /api/episodes` - Get all episodes (with optional filters and sorting)
- `GET /api/episodes/:id` - Get single episode
- `PATCH /api/episodes/:id/watched` - Mark episode as watched
- `PATCH /api/episodes/:id/unwatched` - Mark episode as unwatched
- `GET /api/series` - Get all series
- `GET /api/series/:id` - Get single series

### Query Parameters for Episodes

- `watched=true|false` - Filter by watched status
- `seriesId=<id>` - Filter by series
- `seasonId=<id>` - Filter by season
- `sortBy=title|episodeNumber|createdAt|seriesName` - Sort field
- `sortOrder=asc|desc` - Sort order

## Troubleshooting

### Backend Issues

- **Port already in use**: Change `PORT` in `backend/src/index.ts` or set `PORT` environment variable
- **TypeScript errors**: Run `cd backend && npm run build` to check for compilation errors

### Frontend Issues

- **Expo not starting**: Make sure you're in the `frontend` directory
- **Cannot connect to backend**: 
  - Make sure backend is running on `http://localhost:3000`
  - For physical device, update `API_BASE_URL` in `frontend/src/services/api.ts` to use your computer's IP address
  - For Android emulator, use `http://10.0.2.2:3000` instead of `localhost`

### Network Configuration for Physical Devices

If testing on a physical device:

1. Find your computer's local IP address:
   - Mac/Linux: `ifconfig | grep "inet "`
   - Windows: `ipconfig`

2. Update `frontend/src/services/api.ts`:
   ```typescript
   const API_BASE_URL = __DEV__
     ? 'http://YOUR_IP_ADDRESS:3000/api'  // Replace with your IP
     : 'https://your-api-url.com/api';
   ```

3. Make sure your phone and computer are on the same WiFi network

## Project Structure

```
appreel/
├── backend/
│   ├── src/
│   │   ├── index.ts          # Express server entry point
│   │   ├── types/            # TypeScript type definitions
│   │   ├── storage/          # Database and video storage
│   │   ├── services/         # Business logic
│   │   └── routes/           # API routes
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── screens/          # Screen components
│   │   ├── components/       # Reusable components
│   │   ├── services/         # API client
│   │   └── types/            # TypeScript types
│   ├── App.tsx               # Root component
│   └── package.json
└── package.json              # Monorepo root
```

