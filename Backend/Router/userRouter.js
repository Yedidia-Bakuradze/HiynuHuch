const express = require("express");
const {
  deleteUser,
  updateUser,
  createUser,
  getAllUsers,
  getUserById,
} = require("../Controller/userController");

const router = express.Router();

router.route("/").post(createUser)
router.route("/").get(getAllUsers);
router.route("/:id").delete(deleteUser).put(updateUser).get(getUserById);

module.exports = router;
