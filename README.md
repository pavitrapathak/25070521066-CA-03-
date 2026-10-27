# Travelora - AI-Powered Travel Planning Platform

A modern travel planning application with AI-powered itinerary generation, multi-city routing, and smart booking features.

## Project Structure

```
Pavitra/
├── client/          # Frontend React + Vite application
│   ├── src/         # React components, pages, and data
│   ├── public/      # Static assets
│   ├── index.html   # Entry HTML file
│   └── package.json # Client dependencies
│
├── server/          # Backend Express.js API
│   ├── server.js    # Main server file
│   └── package.json # Server dependencies
│
└── README.md        # This file
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Client Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The client will run on `http://localhost:5173`

### Server Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Start the server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## Features

- 🤖 AI-powered trip itinerary generation
- 🗺️ Multi-city route optimization
- ✈️ Flight and hotel search integration
- 📅 Day-by-day trip planning
- 💰 Budget-based recommendations
- 🎨 Beautiful, responsive UI
- 📱 Mobile-friendly design

## Tech Stack

### Frontend
- React 18
- Vite
- React Router
- CSS3 (Custom styling)
- Font Awesome Icons

### Backend
- Node.js
- Express.js
- CORS
- dotenv

## Development

- Client runs on port `5173` (Vite default)
- Server runs on port `5000` (configurable via .env)

## License

ISC
