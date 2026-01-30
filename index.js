// Express import (correct spelling)
import express from "express";

// MongoDB client import
import { MongoClient } from "mongodb";

// Express app initialize
const app = express();

// Server port
const port = 3200;

// Database name
const dbName = "school";

// MongoDB connection URL
const url = "mongodb+srv://muhabbatali:myworldisstart$$$@cluster0.fepov5t.mongodb.net/";

// MongoDB client create
const client = new MongoClient(url);

// Database variable (global use ke liye)
let db;

// MongoDB connection function
async function connectDB() {
  try {
    // MongoDB se actual connection
    await client.connect();
    console.log("✅ MongoDB connected successfully");

    // Specific database select
    db = client.db(dbName);
    console.log(`✅ Database selected: ${dbName}`);

  } catch (error) {
    // Agar error aaye
    console.log("❌ MongoDB connection error:", error);
  }
}

// Function call (server start hone se pehle)
connectDB();

// Home route
app.get("/", (req, res) => {
  res.send("Server is running & MongoDB connected");
});

// Server listen
app.listen(port, () => {
  console.log("🚀 Server running at http://localhost:" + port);
});
