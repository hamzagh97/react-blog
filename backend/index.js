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
var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.use(authRoutes);
app.use(feedRoutes);

mongoose
  .connect(db)
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`app runing on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
