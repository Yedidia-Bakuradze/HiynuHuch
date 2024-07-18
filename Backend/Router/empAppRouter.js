const express = require("express");
const {
  getAllApplications,
  getAllApplicationsOfUser,
  getApplicationById,
  deleteEmpApp,
  updateApplication,
  getAllSubmittedApplications,
  createEmApp,
} = require("../Controller/empAppController");

const router = express.Router();
router.route("/").post(createEmApp);
router.route("/").get(getAllApplications);
router.route("/:user").get(getAllApplicationsOfUser);
router.route("/submit").post(getAllSubmittedApplications);
router
  .route("/:id")
  .delete(deleteEmpApp)
  .put(updateApplication)
  .get(getApplicationById);

module.exports = router;
