const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");

const userRouter = require("./Router/userRouter");
const adminRouter = require("./Router/adminRouter");
const applicationRouter = require("./Router/applicationRouter");
const s3ManagementRouter = require("./Router/s3ManagementRouter");
const empAppRouter = require("./Router/empAppRouter");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API work Good!!");
});

app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/app", applicationRouter);
app.use("/api/storage", s3ManagementRouter);
app.use("/api/empapp", empAppRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Run on PORT: ${PORT}`.blue.bold));
