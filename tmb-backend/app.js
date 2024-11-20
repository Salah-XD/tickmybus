const express = require("express");
const dotenv = require('dotenv');

// Importing routes
const authRouter = require("./routes/authRoute"); // Authentication-related routes
const hubRouter = require("./routes/hubRoute");   // Hub-related routes
const agentRouter = require("./routes/agentRoute"); // Agent-related routes

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests

// Health check route
app.get('/', (req, res) => {
    res.send("Server is running successfully!");
});

// All API routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/hubs', hubRouter);
app.use('/api/v1/agents', agentRouter);

// 404 handler for undefined routes
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: "Route Not Found !!"
    });
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
