const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.CONNECTION_URL);
  if (connect) {
    console.log("db connected");
  }
};

module.exports = connectDB;
