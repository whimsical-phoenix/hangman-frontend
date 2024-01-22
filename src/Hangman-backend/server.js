const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameRouter = require("./routes/game");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Connect to MongoDB using environment variable directly
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successful");
});

// Use API routes
app.use("/api/game", gameRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
