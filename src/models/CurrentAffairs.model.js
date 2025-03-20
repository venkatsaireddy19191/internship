const mongoose = require("mongoose");

const CurrentAffairSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    keyPoints: {
        type: [String], // Changed to an array for multiple key points
    },
    date: {
        type: Number, // Stores the day (e.g., 6 for March 6)
        required: true,
    }
  
});

const CA = mongoose.model("CA", CurrentAffairSchema);
module.exports = CA;
