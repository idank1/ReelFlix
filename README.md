# Video Library MVP

A video library application for managing and watching episodes from series and seasons.

## Project Structure

This is a monorepo containing:
- `backend/` - Node.js + TypeScript API server
- `frontend/` - React Native mobile app (Expo)

## Setup

### Prerequisites
- Node.js (latest LTS version)
- npm (comes with Node.js)

### Quick Start

```bash
# Make the script executable (first time only)
chmod +x start.sh

# Start everything (installs dependencies if needed)
./start.sh
```

The script will:
- Check for Node.js and npm
- Install dependencies if needed
- Start the backend server
- Start the frontend (Expo)

For detailed setup instructions, see [SETUP.md](SETUP.md).

## Features

- View all episodes in a scrollable list
- Watch videos in-app
- Filter episodes by watched/unwatched status
- Sort episodes by various parameters

## Tech Stack

- **Backend**: Node.js, TypeScript, Express
- **Frontend**: React Native, Expo
- **Database**: In-memory JSON (MVP)

