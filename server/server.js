const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// middlewares
app.use(cors());
app.use(express.json());

app.use(require("./routes/record"));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
