const express = require("express");
const {
  getAllApplications,
  getAllApplicationsOfUser,
  getApplicationById,
  deleteAllEmpApp,
  updateApplication,
  getAllSubmittedApplications,
  createEmApp,
} = require("../Controller/empAppController");

const router = express.Router();

router.route("/").post(createEmApp);
router.route("/").delete(deleteAllEmpApp);
router.route("/").get(getAllApplications);
router.route("/:user").get(getAllApplicationsOfUser);
router.route("/submit").get(getAllSubmittedApplications);
router
  .route("/:id")
  .delete(deleteEmpApp)
  .put(updateApplication)
  .get(getApplicationById);

module.exports = router;
