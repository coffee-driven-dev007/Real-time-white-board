# 🎨 Real-Time Whiteboard

<p align="center">
  <img src="./assets/banner.png" width="100%" alt="Real-Time Whiteboard Banner"/>
</p>

<h3 align="center">
A Collaborative Real-Time Drawing Application
</h3>

<p align="center">
Built with React, Node.js, Express, Socket.IO, and HTML5 Canvas.
</p>

<p align="center">
  <a href="https://real-time-white-board.vercel.app">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-Visit_App-red?style=for-the-badge" />
  </a>
  <a href="https://real-time-white-board-server.vercel.app">
    <img src="https://img.shields.io/badge/⚡_Backend_API-View_API-blue?style=for-the-badge" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-success" />
  <img src="https://img.shields.io/badge/Frontend-React-blue" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green" />
  <img src="https://img.shields.io/badge/Realtime-Socket.IO-orange" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-black" />
</p>

---

## 📖 Overview

The Real-Time Whiteboard is a collaborative drawing application that enables multiple users to draw simultaneously on a shared canvas with instant synchronization.

The project demonstrates real-time communication using Socket.IO, low-latency event handling, and collaborative application architecture. It was built to explore how live applications maintain synchronized state across multiple connected users.

---

## ✨ Features

### 👥 Collaboration

* Multi-user drawing
* Instant canvas synchronization
* Real-time updates using WebSockets
* Shared collaborative workspace

### 🎨 Drawing Tools

* Freehand drawing
* Brush customization
* Canvas clearing
* Smooth drawing experience

### ⚙️ Technical Features

* Socket.IO real-time communication
* HTML5 Canvas rendering
* Event-driven architecture
* Responsive interface
* Production deployment on Vercel

---

## ⚡ Technology Stack

| Layer           | Technology   |
| --------------- | ------------ |
| Frontend        | React.js     |
| Backend         | Node.js      |
| Framework       | Express.js   |
| Real-Time       | Socket.IO    |
| Rendering       | HTML5 Canvas |
| Deployment      | Vercel       |
| Version Control | Git & GitHub |

---

## 📸 Application Preview

### 🖌️ Collaborative Whiteboard

<p align="center">
  <img src="./assets/home.png" width="100%" alt="Whiteboard"/>
</p>

### 📱 Responsive Experience

<p align="center">
  <img src="./assets/mobile.png" width="350" alt="Mobile View"/>
</p>

---

## 🏗️ Architecture

```text
Users
   │
   ▼
React Client
   │
Socket.IO
   │
Express Server
```

### Event Flow

1. User draws on the canvas.
2. Drawing coordinates are emitted through Socket.IO.
3. The server broadcasts the event to connected users.
4. Every client updates its canvas instantly.
5. All users remain synchronized in real time.

---

## 🎓 Skills Demonstrated

* Real-Time Communication
* WebSocket Programming
* Event-Driven Architecture
* React Development
* Backend API Development
* State Synchronization
* Responsive Design
* Production Deployment

---

## 📂 Project Structure

```bash
Real-time-white-board
│
├── frontend
│
├── backend
│
└── README.md
```

---

## ⚙️ Installation

```bash
git clone https://github.com/coffee-driven-dev007/Real-time-white-board.git

cd Real-time-white-board

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

---

## 🔐 Environment Variables

Backend:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
```

Frontend:

```env
VITE_SOCKET_URL=http://localhost:5000
```

---

## ▶️ Run Locally

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

---

## 🚧 Engineering Challenges

### Real-Time Synchronization

Designed an event-driven architecture to synchronize drawing actions across multiple connected clients with minimal latency.

### WebSocket Communication

Implemented Socket.IO to maintain persistent client-server connections for live collaboration.

### Canvas Rendering

Leveraged the HTML5 Canvas API to efficiently render user drawings while maintaining responsiveness.

### Deployment

Configured frontend and backend deployments on Vercel while managing environment variables for Socket.IO connections.

---

## 📈 Future Improvements

* User authentication
* Private collaboration rooms
* Drawing history and undo/redo
* Shape and text tools
* Image uploads
* Cursor presence indicators
* Session persistence
* Collaborative whiteboard sharing

---

## 👨‍💻 Author

### James Matsheni

Full-Stack JavaScript Developer specializing in real-time systems, scalable backend architecture, and modern web applications.

**GitHub:** https://github.com/coffee-driven-dev007

**Portfolio:** https://portfolio-beta-drab-76.vercel.app

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

MIT License

---

<p align="center">
Built with ❤️ by James Matsheni
</p>
