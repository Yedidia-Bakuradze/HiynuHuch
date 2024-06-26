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

// Configure AWS Instance
const configureAWS = () => {
  const s3 = new AWS.S3({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: process.env.AWS_REGION,
  });
  return s3;
};

// Root path
app.get("/", (req, res) => {
  res.send("API S3 Manager work Good!!");
});

// Uploads the incoming file to the S3 bucket and returns the address to that file.
app.post("/upload", upload.single("file"), (req, res) => {
  try {
    const s3 = configureAWS();

    const fileContent = fs.readFileSync;
    var params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.file.filename, // Add this line
      Body: fileContent,
    };

    // Uploading files to the S3 bucket
    s3.upload(params, function (err, data) {
      if (err) {
        res.status(500).send(`ERROR: ${err}`);
      }

      console.log(`File uploaded successfully. ${data.Location}`);

      // Delete the file locally after successful upload
      fs.unlink(req.file.path, (err) => {
        if (err) {
          return res.status(500).send("Error deleting the file");
        }
        res
          .status(201)
          .send(
            `File uploaded and deleted locally successfully at ${data.Location}`
          );
      });
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Accepts a file name in the filename field on the body and deletes the file from the S3 bucket
app.post("/delete", (req, res) => {
  try {
    // Configure the AWS instance
    const s3 = configureAWS();

    // Configure the parameters
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.body.fileName, // Get the file name from the query string
    };

    // Delete the file from the S3 bucket
    s3.deleteObject(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        throw `Error deleting the file: ${err}`;
      } else {
        console.log(data); // successful response
        res.send("File deleted successfully");
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
