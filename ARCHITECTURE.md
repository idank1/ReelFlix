# Architecture & Design Decisions

## Overview

This is a Video Library MVP built as a monorepo with a Node.js/TypeScript backend and React Native/Expo frontend.

## Backend Architecture

### Technology Choices

- **Node.js + TypeScript**: As specified in requirements, provides type safety and modern JavaScript features
- **Express**: Lightweight, flexible web framework for building REST APIs
- **In-Memory Storage**: For MVP, using Map-based in-memory storage. Easy to replace with a real database later

### Structure

```
backend/
├── src/
│   ├── index.ts              # Server entry point, Express setup
│   ├── types/                # TypeScript interfaces
│   ├── storage/
│   │   ├── database.ts       # In-memory database implementation
│   │   └── videoStorage.ts   # Video storage abstraction layer
│   ├── services/
│   │   └── episodeService.ts # Business logic for episodes
│   └── routes/
│       ├── episodes.ts       # Episode API endpoints
│       └── series.ts         # Series API endpoints
```

### Key Design Decisions

1. **Video Storage Abstraction**: 
   - Created `VideoStorageService` interface to abstract video URL resolution
   - Currently uses public URLs, but structured to easily integrate S3, GCS, or Dropbox
   - All video URLs go through the storage service for consistency

2. **Service Layer**:
   - Separated business logic (filtering, sorting) from routes
   - Makes code testable and maintainable
   - Easy to add caching, validation, etc. later

3. **In-Memory Database**:
   - Simple Map-based storage for MVP
   - Data persists only during server runtime
   - Easy to replace with PostgreSQL/MongoDB by implementing the same interface

4. **Error Handling**:
   - Consistent error response format
   - Proper HTTP status codes
   - Error logging for debugging

## Frontend Architecture

### Technology Choices

- **React Native + Expo**: As specified, Expo chosen for easier development setup
- **TypeScript**: Type safety across the stack
- **React Navigation**: Standard navigation library for React Native
- **Expo AV**: Video playback capabilities

### Structure

```
frontend/
├── src/
│   ├── screens/
│   │   ├── EpisodeListScreen.tsx    # Main list view
│   │   └── VideoPlayerScreen.tsx    # Video playback
│   ├── components/
│   │   ├── EpisodeCard.tsx          # Episode list item
│   │   └── FilterSortBar.tsx        # Filter/sort controls
│   ├── services/
│   │   └── api.ts                   # API client
│   └── types/                       # TypeScript types
└── App.tsx                          # Root component with navigation
```

### Key Design Decisions

1. **Component Structure**:
   - Screens for full-page views
   - Reusable components for UI elements
   - Separation of concerns (UI vs. data fetching)

2. **API Client**:
   - Centralized API service
   - Consistent error handling
   - Easy to update base URL for different environments

3. **State Management**:
   - React hooks for local state
   - No global state library needed for MVP
   - Can easily add Redux/Context if needed later

4. **User Experience**:
   - Pull-to-refresh on episode list
   - Loading and error states
   - Native video controls via Expo AV
   - Auto-mark as watched when video finishes

## Data Flow

1. **Episode List**:
   - User opens app → `EpisodeListScreen` mounts
   - Fetches episodes from `/api/episodes`
   - Applies filters/sorting based on user selection
   - Displays in scrollable list

2. **Video Playback**:
   - User taps episode → Navigate to `VideoPlayerScreen`
   - Video loads from URL (via storage service)
   - User watches video
   - On completion, automatically marks as watched
   - User can manually toggle watched status

3. **Filtering/Sorting**:
   - User changes filter/sort → State updates
   - Triggers new API call with query parameters
   - List updates with new results

## Future Enhancements (Out of Scope for MVP)

1. **Database**: Replace in-memory storage with PostgreSQL
2. **Authentication**: Add user accounts and authentication
3. **Video Storage**: Integrate with S3/GCS bucket
4. **Caching**: Add Redis for API response caching
5. **Search**: Full-text search for episodes
6. **Offline Support**: Cache episodes for offline viewing
7. **Progress Tracking**: Track watch progress (not just watched/unwatched)
8. **Push Notifications**: Notify users of new episodes

## API Design

### RESTful Principles

- `GET /api/episodes` - List resources
- `GET /api/episodes/:id` - Get single resource
- `PATCH /api/episodes/:id/watched` - Update watched status
- Consistent response format: `{ success: boolean, data?: T, error?: string }`

### Query Parameters

- Filtering via query params (e.g., `?watched=false`)
- Sorting via query params (e.g., `?sortBy=title&sortOrder=asc`)
- Easy to extend with more filters

## Testing Considerations

While not implemented in MVP, the architecture supports:

- **Unit Tests**: Service layer functions are pure and testable
- **Integration Tests**: API routes can be tested with supertest
- **E2E Tests**: React Native Testing Library for frontend

## Performance Considerations

1. **Backend**:
   - In-memory storage is fast but not scalable
   - No pagination yet (would need for large datasets)
   - No caching layer

2. **Frontend**:
   - FlatList for efficient scrolling
   - Images/videos loaded on demand
   - No unnecessary re-renders

## Security Considerations

1. **CORS**: Enabled for development, should be restricted in production
2. **Input Validation**: Basic validation, should add more robust validation
3. **Rate Limiting**: Not implemented, should add for production
4. **Authentication**: Not implemented (as per requirements)

