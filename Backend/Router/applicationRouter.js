const express = require("express");
const {
  createApplication,
  updateApplication,
  deleteApplication,
  getAllApplications,
  deleteAllApplicationsByCreator,
  getApplicationByCreator,
  getApplicationById,
} = require("../Controller/applicationController");
const { protectAdmin } = require("../Middleware/adminMiddleware");
const {protectApp} = require('../Middleware/appMiddleware');


const router = express.Router();

router.route("/").post(protectAdmin,createApplication).get(getAllApplications).delete(protectAdmin, deleteAllApplicationsByCreator);
router
  .route("/:id")
  .delete(protectAdmin,protectApp, deleteApplication)
  .put(protectAdmin,protectApp, updateApplication)
  .get(getApplicationById);

router
  .route("/:owner")
  .get(getApplicationByCreator)

module.exports = router;
