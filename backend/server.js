// server.js
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Use environment variable for allowed origin, fallback to localhost
const FRONTEND_URL = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
    credentials: true,
}));

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
    cors: {
        origin: FRONTEND_URL,
        methods: ["GET", "POST"],
        credentials: true,
    },
});

// Socket.IO connection
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("drawing", (data) => {
        socket.broadcast.emit("drawing", data);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Use dynamic PORT for Vercel or fallback for local dev
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
