const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//routes call

const userRoute = require("./routes/userRoutes");

//routes
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("API is running....");
});

const port = process.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
