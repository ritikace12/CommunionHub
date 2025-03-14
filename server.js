require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Backend is running! 🚀" });
  });
  
  
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const Event = require("./models/Event.js");

// API to Get All Events
app.get("/api/events", async (req, res) => {
    try {
      const events = await Event.find(); // Fetch events from DB
      res.json(events || []);  // Ensure it always returns an array
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });
  

// API to Add a New Event
app.post("/api/events", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5001, () => console.log("Server running on port 5001"));


