const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Get all events
router.get("/", async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

// Add new event
router.post("/", async (req, res) => {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.json(newEvent);
});

module.exports = router;
