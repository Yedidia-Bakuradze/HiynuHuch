const userModel = require("../Model/userModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");
/**
 * Fetches the list of all users from the database.
 *
 * @function getUsers
 * @returns {Promise} - A promise that resolves to the response of the API call.
 */
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await userModel.find({});
    res.json(users);
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await userModel.findOne({ email });
  console.log(user.email);
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      cv: user.cv,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email Or Password!");
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
      console.log(`{name}`);
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
    const { id } = req.params;
    const { name, email, password, cv } = req.body;
    if (!email && !name && !cv)
      return res.status(400).send("Please fill all the fields");
    else {
      const updated = await userModel.findByIdAndUpdate(
        id,
        { name, email, password, cv },
        { new: true }
      );
      if (!updated) {
        res.status(400);
        throw new Error("Can't Update!");
      } else {
        res.status(200).json(updated);
      }
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.deleteOne({ _id: id });
    if (user) {
      res.json({ message: "User removed" });
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

const loginToken = asyncHandler(async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    res.status(400);
    throw new Error("Failed to login with Token");
  }
});

module.exports = {
  deleteUser,
  updateUser,
  createUser,
  getAllUsers,
  getUserById,
  login,
  loginToken,
};
