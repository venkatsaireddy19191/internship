const mongoose = require("mongoose");

const dailyDoseSchema = new mongoose.Schema({
    date: {
        type: String, // Store as YYYY-MM-DD
        required: true
    },
    language: {
        type: String,
        enum: ["English", "Hindi", "Bengali"],
        required: true
    },
    categories: [
        {
            title: { type: String, required: true }, // e.g., General Knowledge, Current Affairs
            url: { type: String, default: null }, // Cloudinary URL for downloading PDF
            cloudinaryId: { type: String, default: null }, // Cloudinary public_id
            status: { type: String, enum: ["Available", "Pending"], default: "Pending" } // "Pending" for "Will be uploaded soon"
        }
    ],
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

const DailyDose = mongoose.model("DailyDose", dailyDoseSchema);

module.exports = DailyDose;
