require("dotenv").config(); // Load environment variables from .env file

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameRouter = require("./routes/game");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 5000, // optional: reduce the connection timeout
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successful");
});

app.use("/api/game", gameRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
