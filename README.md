# Video Library MVP

A video library application for managing and watching episodes from series and seasons.

## Project Structure

This is a monorepo containing:
- `backend/` - Node.js + TypeScript API server
- `frontend/` - React Native mobile app (Expo)

## Setup

### Prerequisites
- Node.js (latest LTS version)
- npm or yarn

### Installation

```bash
# Install all dependencies
npm run install:all
```

### Development

```bash
# Start backend server (from root)
npm run dev:backend

# Start frontend app (from root, in a new terminal)
npm run dev:frontend
```

Or run them separately:

```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm start
```

## Features

- View all episodes in a scrollable list
- Watch videos in-app
- Filter episodes by watched/unwatched status
- Sort episodes by various parameters

## Tech Stack

- **Backend**: Node.js, TypeScript, Express
- **Frontend**: React Native, Expo
- **Database**: In-memory JSON (MVP)

