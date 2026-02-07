import React, { useEffect, useRef, useState } from "react";
import { socket } from "./socket";
import bgImage from "./img1.webp";
import logoImage from "./logo.png"; // logo in src folder
import jsPDF from "jspdf";

function Whiteboard() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    const [drawing, setDrawing] = useState(false);
    const [connected, setConnected] = useState(false);
    const [color, setColor] = useState("#000000");
    const [brushSize, setBrushSize] = useState(5); // slightly bigger brush
    const [eraser, setEraser] = useState(false);

    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = ctxRef.current;
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.6;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.putImageData(imageData, 0, 0);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeCanvas);

        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 0.95;
        canvas.height = window.innerHeight * 0.6;

        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.lineWidth = brushSize;
        ctx.strokeStyle = color;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctxRef.current = ctx;

        socket.on("connect", () => setConnected(true));
        socket.on("disconnect", () => setConnected(false));

        socket.on("drawing", ({ x0, y0, x1, y1, color, size }) => {
            if (color === "clear") {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#ffffff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            } else {
                drawLine(x0, y0, x1, y1, color, size, false);
            }
        });

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("drawing");
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    useEffect(() => {
        if (ctxRef.current) {
            ctxRef.current.strokeStyle = eraser ? "#ffffff" : color;
            ctxRef.current.lineWidth = brushSize;
        }
    }, [color, brushSize, eraser]);

    const drawLine = (x0, y0, x1, y1, strokeColor, size, emit = true) => {
        const ctx = ctxRef.current;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = size;
        ctx.stroke();
        ctx.closePath();

        if (!emit) return;

        socket.emit("drawing", { x0, y0, x1, y1, color: strokeColor, size });
    };

    const getMousePos = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const getTouchPos = (touch) => {
        const rect = canvasRef.current.getBoundingClientRect();
        return { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    };

    const handleMouseDown = (e) => {
        setDrawing(true);
        const { x, y } = getMousePos(e);
        ctxRef.current.lastX = x;
        ctxRef.current.lastY = y;
    };
    const handleMouseMove = (e) => {
        if (!drawing) return;
        const { x, y } = getMousePos(e);
        drawLine(ctxRef.current.lastX, ctxRef.current.lastY, x, y, eraser ? "#ffffff" : color, brushSize);
        ctxRef.current.lastX = x;
        ctxRef.current.lastY = y;
    };
    const handleTouchStart = (e) => {
        e.preventDefault();
        setDrawing(true);
        const { x, y } = getTouchPos(e.touches[0]);
        ctxRef.current.lastX = x;
        ctxRef.current.lastY = y;
    };
    const handleTouchMove = (e) => {
        e.preventDefault();
        if (!drawing) return;
        const { x, y } = getTouchPos(e.touches[0]);
        drawLine(ctxRef.current.lastX, ctxRef.current.lastY, x, y, eraser ? "#ffffff" : color, brushSize);
        ctxRef.current.lastX = x;
        ctxRef.current.lastY = y;
    };
    const handleMouseUp = () => setDrawing(false);
    const handleTouchEnd = () => setDrawing(false);

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        socket.emit("drawing", { x0: 0, y0: 0, x1: 0, y1: 0, color: "clear", size: 0 });
    };

    const downloadImage = () => {
        const canvas = canvasRef.current;
        const link = document.createElement("a");
        link.download = "whiteboard.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    };

    const exportPDF = () => {
        const canvas = canvasRef.current;
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
            orientation: "landscape",
            unit: "px",
            format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("whiteboard.pdf");
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                fontFamily: "Arial, sans-serif",
                padding: "10px",
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Bigger Logo at top center */}
            <img
                src={logoImage}
                alt="Logo"
                style={{
                    width: "160px",
                    maxWidth: "35%",
                    height: "auto",
                    marginBottom: "15px",
                    display: "block",
                }}
            />

            <h1 style={{ color: "#000", textAlign: "center" }}>Real-time Whiteboard</h1>
            <h2 style={{ color: "#000", textAlign: "center" }}>
                Socket.IO Status:{" "}
                <span style={{ color: connected ? "green" : "red" }}>
                    {connected ? "Connected ✅" : "Disconnected ❌"}
                </span>
            </h2>

            {/* Canvas */}
            <canvas
                ref={canvasRef}
                style={{
                    border: "3px solid #000",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff",
                    touchAction: "none",
                    maxWidth: "100%",
                    height: "auto",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />

            {/* Buttons under canvas */}
            <div
                style={{
                    marginTop: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "15px",
                }}
            >
                <label style={{ fontSize: "16px" }}>
                    Color:
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        disabled={eraser}
                        style={{ marginLeft: "5px", width: "40px", height: "30px" }}
                    />
                </label>
                <label style={{ fontSize: "16px" }}>
                    Brush Size:
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={brushSize}
                        onChange={(e) => setBrushSize(e.target.value)}
                        style={{ marginLeft: "5px" }}
                    />
                </label>
                <button style={{ fontSize: "16px", padding: "8px 15px" }} onClick={() => setEraser(!eraser)}>
                    {eraser ? "Pen" : "Eraser"}
                </button>
                <button style={{ fontSize: "16px", padding: "8px 15px" }} onClick={clearCanvas}>
                    Clear Canvas
                </button>
                <button style={{ fontSize: "16px", padding: "8px 15px" }} onClick={downloadImage}>
                    Download PNG
                </button>
                <button style={{ fontSize: "16px", padding: "8px 15px" }} onClick={exportPDF}>
                    Export PDF
                </button>
            </div>
        </div>
    );
}

export default Whiteboard;
