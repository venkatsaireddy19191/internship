const express = require("express");
const mongoose=require("mongoose");
const cors = require("cors");
const OnlineCourses =require('./src/routes/OnlineCourseRoute');
const OfflineCourses=require('./src/routes/OfflineCourseRoute')
const DailyDose =require('./src/routes/DDRoute.js');
const CurrentAffair=require('./src/routes/CurrentAffairRoute.js');
const Book=require('./src/routes/Bookroute.js');
const Blog=require('./src/routes/Blogs.js');
const app = express();
const PORT =5000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to Express.js API!");
});
const dbConnect = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://vr4507:VAISHNAVI@cluster0.ga9qx.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(` MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(" Error Connecting to MongoDB:", error);
        process.exit(1);
    }
};

dbConnect();

app.use('/addOnlineCourse',OnlineCourses);
app.use('/addOfflineCourse',OfflineCourses);
app.use('/uploadDD',DailyDose);
app.use('/ca',CurrentAffair);
app.use('/bookupload',Book);
app.use('/blog',Blog);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

