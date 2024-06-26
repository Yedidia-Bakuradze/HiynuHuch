const express = require("express");
const router = express.Router();

//Upload a new document
router.route("/upload").post();

//Delete a document
router.route("/delete").get();

//Download a document
router.route("/download").get();

//Replace a document
router.route("/modify").post();

module.exports = router;
