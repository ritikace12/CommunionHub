const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    title: String,
    date: String,
    place: String,  // Changed from "location" to "place" to match frontend
    description: String,
    category: String,
});

module.exports = mongoose.model("Event", EventSchema);

