const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
app.use(bodyParser.json());

//Routes
const reviewRoutes = require("./routes/reviews");
const musingRoutes = require("./routes/musings");
const otherRoutes = require("./routes/otherRoutes");
const authRoutes = require("./routes/auth");

app.use("/api", reviewRoutes);
app.use("/api", musingRoutes);
app.use("/api", otherRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Home Page Has Moved!");
});

mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to DB")
);

app.listen(3000);
