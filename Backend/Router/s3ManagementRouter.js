const express = require("express");
const router = express.Router();
const {
  rootRoute,
  uploadFile,
  deleteFile,
  downloadFile,
} = require("../Controller/s3ManagementController");
//Upload a new document
router.route("/").get(rootRoute);

//Upload a new document
router.route("/upload").post(uploadFile);

//Delete a document
router.route("/delete").post(deleteFile);

//Download a document
router.route("/download").post(downloadFile);

module.exports = router;
