const express = require("express");
const mongoose = require("mongoose");

const taskRoutes = require("./routes/task.route");
const config = require("./config/config");

const app = express();
app.use(express.json());

let server;
const port = config.port;

// MongoDB connection and server startup
mongoose
  .connect(config.mongoose.url)
  .then(() => {
    console.log("Connected to database", config.mongoose.url);
    server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

app.use("/tasks", taskRoutes);
