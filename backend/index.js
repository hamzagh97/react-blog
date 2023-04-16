// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const rootDir = require("./utils/path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const feedRoutes = require("./routes/feed/feedRoutes");
const authRoutes = require("./routes/auth/authRoutes");
const dotenv = require("dotenv");
dotenv.config({ path: ".env.local" });
const PORT = process.env.PORT || 5000;
const db = process.env.db;

// app.use((req, res, next) => {
//   next();
// });

// app.use(express.static(path.join(__dirname, "public")));

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(authRoutes);
app.use(feedRoutes);

// app.use((req, res, next) => {
//   res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
// });

mongoose
  .connect(db)
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`app runing on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
