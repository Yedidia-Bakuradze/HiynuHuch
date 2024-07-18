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


const router = express.Router();

router.route("/")
.post(protectAdmin,createApplication)
.get(getAllApplications)
.delete(protectAdmin, deleteAllApplicationsByCreator);
router
  .route("/:id")
  .delete(protectAdmin, deleteApplication)
  .put(protectAdmin, updateApplication)
  .get(getApplicationById);

router
  .route("/creator/:owner")
  .get(getApplicationByCreator)

module.exports = router;
