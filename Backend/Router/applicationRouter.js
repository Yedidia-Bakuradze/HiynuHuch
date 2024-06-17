const express = require("express");
const {
  deleteApplication,
  updateApplication,
  createApplication,
  getAllApplication,
  getApplicationById,
} = require("../Controller/applicationController");

const router = express.Router();

router.route("/").post(createApplication);
router.route("/").get(getAllApplication);
router
  .route("/:id")
  .delete(deleteApplication)
  .put(updateApplication)
  .get(getApplicationById);

module.exports = router;
