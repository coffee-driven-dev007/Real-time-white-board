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
  <a href="https://real-time-white-board-server.onrender.com">
    <img src="https://img.shields.io/badge/⚡_Backend_API-Hosted_on_Render-blue?style=for-the-badge" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live-success" />
  <img src="https://img.shields.io/badge/Frontend-React-blue" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green" />
  <img src="https://img.shields.io/badge/Realtime-Socket.IO-orange" />
  <img src="https://img.shields.io/badge/Frontend-Vercel-black" />
  <img src="https://img.shields.io/badge/Backend-Render-46E3B7" />
</p>

---

# 🚀 Live Demo

### 🌐 Frontend

https://real-time-white-board.vercel.app

### ⚡ Backend API

https://real-time-white-board-server.onrender.com

> **Deployment Note**
>
> The frontend is deployed on **Vercel**, while the backend is hosted on **Render**.
>
> During deployment I discovered that my Socket.IO server required persistent WebSocket connections, which weren't suitable for my backend deployment on Vercel's serverless environment.
>
> To provide reliable real-time communication, I migrated the backend to **Render**, which supports long-running server instances and WebSocket connections. This experience gave me practical insight into deployment trade-offs, infrastructure decisions, and hosting real-time applications in production.

---

# 📖 Overview

The **Real-Time Whiteboard** is a collaborative drawing platform that enables multiple users to draw simultaneously on a shared canvas with instant synchronization.

Built using **React**, **Socket.IO**, and **Node.js**, the application demonstrates how real-time systems maintain synchronized state across multiple connected clients while delivering a smooth and responsive drawing experience.

This project strengthened my understanding of WebSockets, event-driven programming, state synchronization, and deploying production-ready real-time applications.

---

# 🎯 Why I Built This

Traditional web applications communicate through request-response cycles.

I wanted to explore how modern collaborative applications such as Google Jamboard, Figma, and Miro enable multiple users to interact with shared data simultaneously.

This project allowed me to gain practical experience with:

* WebSocket communication
* Event-driven architecture
* State synchronization
* Low-latency communication
* Real-time user collaboration
* Production deployment

---

# ✨ Features

## 👥 Collaboration

* Multi-user drawing
* Instant synchronization
* Shared collaborative workspace
* Low-latency communication
* Live canvas updates

## 🎨 Drawing Features

* Freehand drawing
* Smooth brush rendering
* Canvas clearing
* Responsive canvas
* Mobile-friendly interface

## ⚙️ Technical Features

* Socket.IO WebSocket communication
* HTML5 Canvas rendering
* Event-driven architecture
* Responsive React application
* Environment variable configuration
* Production deployment

---

# ⚡ Technology Stack

| Layer            | Technology   |
| ---------------- | ------------ |
| Frontend         | React.js     |
| Backend          | Node.js      |
| Framework        | Express.js   |
| Real-Time        | Socket.IO    |
| Rendering        | HTML5 Canvas |
| Frontend Hosting | Vercel       |
| Backend Hosting  | Render       |
| Version Control  | Git & GitHub |

---

# 📸 Application Preview

## 🖌️ Whiteboard

<p align="center">
<img src="./assets/home.png" width="100%" alt="Whiteboard"/>
</p>

---

## 📱 Mobile Experience

<p align="center">
<img src="./assets/mobile.png" width="350" alt="Mobile View"/>
</p>

---

# 🏗️ System Architecture

```text
                User A
                  │
                  │
                  ▼
          React Frontend
                  │
          Socket.IO Client
                  │
═══════════════════════════════
       WebSocket Connection
═══════════════════════════════
                  │
          Socket.IO Server
                  │
          Express Backend
                  │
       Broadcast Events
                  │
        Connected Clients
                  │
      User B • User C • User D
```

---

# 🔄 Application Flow

1. A user draws on the HTML5 canvas.
2. Drawing coordinates are emitted through Socket.IO.
3. The Express server receives the drawing event.
4. Socket.IO broadcasts the event to every connected client.
5. Each client redraws the stroke instantly.
6. All connected users remain synchronized in real time.

---

# 🎓 Skills Demonstrated

* React Development
* Node.js Development
* Express APIs
* WebSocket Programming
* Socket.IO
* Event-Driven Architecture
* State Synchronization
* Real-Time Systems
* Responsive Design
* Production Deployment
* Environment Configuration
* Problem Solving

---

# 📂 Project Structure

```bash
Real-time-white-board
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── socket
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── assets
│   ├── banner.png
│   ├── home.png
│   └── mobile.png
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/coffee-driven-dev007/Real-time-white-board.git
```

## Navigate Into Project

```bash
cd Real-time-white-board
```

## Install Frontend

```bash
cd frontend
npm install
```

## Install Backend

```bash
cd ../backend
npm install
```

---

# 🔐 Environment Variables

## Backend

```env
PORT=5000

CLIENT_URL=http://localhost:5173
```

## Frontend

```env
VITE_SOCKET_URL=http://localhost:5000
```

---

# ▶️ Running Locally

## Start Backend

```bash
cd backend
npm run dev
```

---

## Start Frontend

```bash
cd frontend
npm run dev
```

---

# 🚧 Engineering Challenges

## Real-Time Synchronization

Designed an event-driven communication model using Socket.IO to synchronize drawing events across multiple connected users while maintaining low latency.

---

## WebSocket Communication

Implemented persistent client-server communication using Socket.IO instead of traditional HTTP polling, enabling live updates across all connected clients.

---

## Canvas Rendering

Leveraged the HTML5 Canvas API to efficiently render freehand drawing while maintaining a responsive user experience.

---

## Deployment & Infrastructure

Deploying a real-time application required careful consideration of hosting platforms.

Initially, I attempted to deploy both the frontend and backend on **Vercel**. While the frontend worked perfectly, the backend required persistent WebSocket connections for Socket.IO, which were not suitable for my deployment on Vercel's serverless environment.

To solve this, I migrated the backend to **Render**, where long-running server instances support persistent WebSocket connections.

This experience strengthened my understanding of:

* WebSocket infrastructure
* Serverless deployment limitations
* Production networking
* Environment variable management
* CORS configuration
* Choosing the right hosting platform for different workloads

---

# 🧠 Key Takeaways

This project strengthened my understanding of:

* Real-Time Application Development
* WebSocket Communication
* Event-Driven Programming
* React Architecture
* Backend API Development
* State Synchronization
* Production Deployment
* Infrastructure Decisions
* Software Engineering Best Practices

---

# 📈 Future Enhancements

Planned improvements include:

* User Authentication
* Private Collaboration Rooms
* Cursor Presence Indicators
* Undo / Redo
* Drawing History
* Shape Tools
* Text Tool
* Image Uploads
* Session Persistence
* Export as PDF
* Export as PNG

---

# 👨‍💻 Author

## James Matsheni

Full-Stack JavaScript Developer passionate about building scalable systems, real-time applications, and software that solves real-world problems.

**GitHub**

https://github.com/coffee-driven-dev007

**Portfolio**

https://portfolio-beta-drab-76.vercel.app

---

# ⭐ Support

If you found this project useful or interesting, consider giving it a ⭐ on GitHub. It helps showcase the project and supports future development.

---

# 📄 License

This project is licensed under the MIT License.

---

<p align="center">
Built with ❤️ by <strong>James Matsheni</strong><br>
Building scalable, real-time applications with modern JavaScript technologies.
</p>
