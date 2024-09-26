require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const taskRoutes = require("./routes/task.route");

const app = express();

// Use environment variables
const PORT = process.env.PORT || 8082;
const MONGODB_URL = process.env.MONGODB_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Task routes
app.use("/tasks", taskRoutes);

// MongoDB connection and server startup
mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database:", MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server listening on PORT: ${PORT}`);
    });
  })
  .catch((err) => console.log("Database connection error:", err));
