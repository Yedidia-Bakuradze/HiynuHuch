const express = require("express");
const {
  deleteUser,
  updateUser,
  createUser,
  getAllUsers,
  login,
  getUserById,
  loginToken
} = require("../Controller/userController");
const {protect} = require("../Middleware/autoMiddleware")

const router = express.Router();

router.route("/").post(createUser);
router.route("/login").post(login);
router.route("/").get(getAllUsers);
router.route("/token").get(protect, loginToken);
router
  .route("/:id")
  .delete(protect, deleteUser)
  .put(protect, updateUser)
  .get(getUserById);

module.exports = router;
