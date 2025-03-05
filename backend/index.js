const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Use cors middleware
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
    allowedHeaders: 'Content-Type,Authorization'
};

// Middlewares
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// MongoDB Connection String
const MONGO_URI = "mongodb+srv://workdhruvateja:tqaNHUnMEYGxcyjY@project-db.t99lx.mongodb.net/?retryWrites=true&w=majority&appName=project-db";

// Connect to MongoDB with Debugging
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected Successfully!");
})
.catch((err) => {
    console.error("MongoDB Connection Error:", err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
