const express = require("express");
const {
  deleteAdmin,
  updateAdmin,
  createAdmin,
  getAllAdmin,
  getAdminById,
} = require("../Controller/adminController");

const router = express.Router();

router.route("/").post(createAdmin);
router.route("/").get(getAllAdmin);
router.route("/:id").delete(deleteAdmin).put(updateAdmin).get(getAdminById);

module.exports = router;
