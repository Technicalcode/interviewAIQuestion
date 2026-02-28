const express = require("express"); // Use require for standard Node apps
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");

// Initialize dotenv to load variables from a .env file
dotenv.config();

const app = express();

// Fallback to 3000 if PORT isn't defined in your .env
const PORT = process.env.PORT || 3000; 



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB()
});