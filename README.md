# Task Timer Application

A full-stack web application for managing tasks with time tracking functionality. Users can create tasks, track time spent on each task, and mark tasks as complete.

## Features

- Create new tasks with names
- Start/pause time tracking for each task
- Mark tasks as complete
- Real-time timer updates
- Persistent data storage with MongoDB
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js
- MongoDB
- npm 

## Installation & Setup

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory:
```env
MONGODB_URI=mongodb://localhost:27017/task-timer
PORT=5000
```

4. Start the server:
```bash
npm run dev
```

The server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on http://localhost:3000

## API Endpoints

### Tasks
- `GET /api/tasks` - Get all active tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update task status

## Environment Variables

### Backend
```env
MONGODB_URI - MongoDB connection string
PORT - Server port (default: 5000)
```

## Usage

1. Start both the backend and frontend servers
2. Open http://localhost:3000 in your browser
3. Create a new task by entering a name and clicking "Add Task"
4. Use the "Start/Pause" button to control the timer
5. Click "Complete" to mark a task as finished




