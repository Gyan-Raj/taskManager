const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server;
const port = config.port;

// MongoDB connection and server startup
mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() => {
    console.log("Connected to database", config.mongoose.url);
    server = app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
