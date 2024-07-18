const express = require("express");
const {
  getAllApplications,
  getAllApplicationsOfUser,
  getApplicationById,
  deleteEmpApp,
  updateApplication,
  getAllSubmittedApplications,
  createEmpApp,
} = require("../Controller/empAppController");

const router = express.Router();
router.route("/").post(createEmpApp);
router.route("/").get(getAllApplications);
router.route("/:user").get(getAllApplicationsOfUser);
router.route("/submit").post(getAllSubmittedApplications);
router
  .route("/:id")
  .delete(deleteEmpApp)
  .put(updateApplication)
  .get(getApplicationById);

module.exports = router;
