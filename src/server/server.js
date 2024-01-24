// //server.js

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const gameRouter = require("./routes/game");

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Enable CORS for all routes
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB (replace 'your_database_url' with your MongoDB connection string)
// mongoose.connect(
//   "mongodb+srv://admin:SZs5pWK3kF1M3Uxi@cluster0.t2xpdjz.mongodb.net/Gamesdb?retryWrites=true&w=majority"
// );

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB connection established successful");
// });

// // Use API routes
// app.use("/api/game", gameRouter);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// server.js

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
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established successful");
});

app.use("/api/game", gameRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
