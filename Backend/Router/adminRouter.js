const express = require("express");
const {
  deleteAdmin,
  updateAdmin,
  createAdmin,
  getAllAdmin,
  login,
  getAdminById,
  loginToken,
} = require("../Controller/adminController");
const {protectAdmin} = require('../Middleware/adminMiddleware')

const router = express.Router();

router.route("/").post(createAdmin);
router.route("/login").post(login);
router.route("/").get(getAllAdmin);
router.route("/token").get(protectAdmin, loginToken);
router
  .route("/:id")
  .delete(protectAdmin, deleteAdmin)
  .put(protectAdmin, updateAdmin)
  .get(getAdminById);

module.exports = router;
