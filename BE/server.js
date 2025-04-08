const express = require("express");
const path = require("path");
const connectDB = require("./database/db");
const errorMiddleware = require("./middlewares/error.middleware");
require('dotenv').config();

const routeProduct = require("./routes/product.routes");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://playshifu-gfo2.onrender.com',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Product routes
app.use("/api/product", routeProduct);

// Health check endpoint
app.get("/health", async (req, res) => {
  try {
    const state = mongoose.connection.readyState;
    const states = {
      0: "disconnected",
      1: "connected",
      2: "connecting",
      3: "disconnecting",
    };
    res.json({
      status: "ok",
      database: states[state],
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Error handler
app.use(errorMiddleware);

// Database connection and server start
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`⚙️ Server is running at https://playshifu-gfo2.onrender.com`);
  });
});
