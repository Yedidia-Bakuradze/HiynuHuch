const asyncHandler = require("express-async-handler");
const multer = require("multer");
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
    const middle = Date.now().toString() + Math.floor(Math.random() * 1000).toString();
    const end = file.originalname.split(".")[1];
    const filName = `${start}_${middle}.${end}`;
    console.log("name", filName);
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
const rootRoute = asyncHandler((req, res) => {
  res.send("Hey there! Welcome to the S3 Management API");
});

// Uploads the incoming file to the S3 bucket and returns the address to that file.
const uploadFile = asyncHandler((req, res) => {
  try {
    const s3 = configureAWS();

    const fileContent = fs.readFileSync(req.file.path);
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.file.filename,
      Body: fileContent,
    };

    // Uploading files to the S3 bucket
    s3.upload(params, function (err, data) {
      if (err) {
        console.error("GOT", err);
        return res.status(500).send(`ERROR: ${err}`);
      }
      const url = data.Location;
      const regex = /[^/]+$/;
      const filename = url.match(regex)[0];
      console.log(`File uploaded successfully. ${filename}`);

      // Delete the file locally after successful upload
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error("Error deleting the file", err);
          return res.status(500).json("Error deleting the file");
        }
      });

      res.status(201).json(`${filename}`);
    });
  } catch (err) {
    console.error("Error uploading file", err);
    res.status(500).send(err);
  }
});

// Accepts a file name in the filename field on the body and deletes the file from the S3 bucket
const deleteFile = asyncHandler((req, res) => {
  try {
    const s3 = configureAWS();

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.body.fileName,
    };

    s3.deleteObject(params, function (err, data) {
      if (err) {
        console.error("Error deleting the file", err);
        return res.status(500).send(`Error deleting the file: ${err}`);
      } else {
        console.log(data);
        res.send("File deleted successfully");
      }
    });
  } catch (err) {
    console.error("Error in deleteFile", err);
    res.status(500).send(err);
  }
});

// Accepts the file name in the filename field on the request query and downloads the file from the S3 bucket
const downloadFile = asyncHandler((req, res) => {
  try {
    const s3 = configureAWS();

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: req.query.fileName,
    };

    s3.getObject(params, async (err, data) => {
      if (err) {
        console.error("Error downloading the file", err);
        return res.status(500).send(`Error downloading the file: ${err}`);
      } else {
        console.log(data);
        res.send(data.Body);
      }
    });
  } catch (err) {
    console.error("Error in downloadFile", err);
    res.status(500).send(err);
  }
});

module.exports = {
  rootRoute,
  uploadFile,
  deleteFile,
  downloadFile,
  uploadFile: [upload.single("file"), uploadFile],
};
