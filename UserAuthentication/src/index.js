const express = require("express");
const errorHandler = require("./middleWare/errorHandlers");
const connectDB = require("./config/dbConnection");
const authRouter = require("./routes/authRouter")
const dotenv = require("dotenv").config();

connectDB();
const app = express()
const port =process.env.PORT || 5000


app.use(express.json());
app.use("/api/v1/users", authRouter);
app.use(errorHandler);


app.listen(port, () => console.log(`Server is running on port ${port}!`))