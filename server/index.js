const express = require("express"); // Use require for standard Node apps
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.route");
dotenv.config();

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Removed trailing slash for better compatibility
    credentials: true
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth" , authRouter)
const PORT = process.env.PORT || 3000; 



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB()
});