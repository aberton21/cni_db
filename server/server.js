const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8080;

// middlewares
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const dbo = require("./db/conn");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
