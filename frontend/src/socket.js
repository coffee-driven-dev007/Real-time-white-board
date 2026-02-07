import { io } from "socket.io-client";

// Load environment variables (in React, this is automatically handled)
// process.env.REACT_APP_SOCKET_URL is accessible in React

export const socket = io(process.env.REACT_APP_SOCKET_URL, {
    transports: ["websocket"],
    withCredentials: true
});
