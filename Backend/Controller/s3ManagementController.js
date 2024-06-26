const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path"); // Import path module
const AWS = require("aws-sdk");
const fs = require("fs");
require("dotenv").config();
const PORT = process.env.PORT;

// Customize storage option
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set destination
  },
  filename: function (req, file, cb) {
    // Use the original file name
    const start = file.originalname.split(".")[0];
    const middle = Date.now().toString() * Math.random();
    const end = file.originalname.split(".")[1];
    const filName = start + middle + "." + end;
    cb(null, filName);
  },
});

const upload = multer({ storage: storage }); // Use the custom storage configuration

// Root path
app.get("/", (req, res) => {
  res.send("API S3 Manager work Good!!");
});
