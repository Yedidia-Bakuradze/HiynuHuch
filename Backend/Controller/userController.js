const userModel = require("../Model/userModel");
const asyncHandler = require("express-async-handler");

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await userModel.find({});
    res.json(users);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.json(user);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

const createUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("Please fill all the fields");
    } else {
      //Checks if already exists
      if (await userModel.findOne({ email: email })) {
        return res.status(400).send("Email already exists");
      } else {
        const user = await userModel.create(req.body);
        res.json(user);
        res.status(201).send(user);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

const updateUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findById(req.params.id);

    //Check if user exists
    if (userModel.findOne({ email })) {
      return res.status(400).send("Email already exists");
    } else {
      //Check if the updated user exists
      if (user) {
        user.name = name;
        user.email = email;
        user.password = password;
        const updatedUser = await user.save();
        res.json(updatedUser);
        res.status(204).send(updatedUser);
      } else {
        res.status(404).send("User not found");
      }
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user) {
      await user.remove();
      res.json({ message: "User removed" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = {
  deleteUser, updateUser, createUser, getAllUsers, getUserById
};

