const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

// Import routes

const authRoutes = require("./routes/auth");

// envoirment variable
env.config();

// MongoDB connection
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.hzphz.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Datebase Connected!!!");
  });

app.use(express.json());
app.use("/api", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is runing on port ${process.env.PORT}`);
});
