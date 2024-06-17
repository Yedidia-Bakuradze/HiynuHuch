const express = require("express");
const {
  deleteEmpApp,
  updateEmApp,
  createEmApp,
  deleteAllEmpApp,
  deleteEmpApp,
  getAllEmApp,
} = require("../Controller/emAppController");

const router = express.Router();

router.route("/").post(createEmApp);
router.route("/").delete(deleteAllEmpApp);
router.route("/").get(getAllEmApp);
router.route("/:id").delete(deleteEmpApp).put(updateEmApp).get(getAdminById);

module.exports = router;
