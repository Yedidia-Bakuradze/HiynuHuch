const adminModel = require("../Model/adminModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");

const getAllAdmin = asyncHandler(async (req, res) => {
  try {
    const admins = await adminModel.find({});
    res.json(admins);
  } catch (err) {
    res.status(500).send(err);
  }
});

//WORKS
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await adminModel.findOne({ email });
  console.log(admin.email);
  if (admin && (await admin.matchPassword(password))) {
    res.status(200).json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      createdApplications: admin.createdApplications,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email Or Password!");
  }
});

const getAdminById = asyncHandler(async (req, res) => {
  try {
    const admin = await adminModel.findById(req.params.id);
    res.json(admin);
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send(err);
  }
});

//WORKS
const createAdmin = asyncHandler(async (req, res) => {
  try {
    const { name, email, password} = req.body;
    console.log(`THE MESSAGE: ${req.body}`);

    if (!name || !email || !password) {
      return res.status(400).send("Please fill all the fields");
    } else {
      //Checks if already exists
      if (await adminModel.findOne({ email: email })) {
        return res.status(400).send("Email already exists");
      } else {
        const admin = await adminModel.create(req.body);
        res.json(admin);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

const updateAdmin = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password, createdApplications } = req.body;
    if (!email && !name && !createdApplications && !password)
      return res.status(400).send("Please fill all the fields");
    else {
      const updated = await adminModel.findByIdAndUpdate(
        id,
        { name, email, password, createdApplications },
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

const deleteAdmin = asyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const admin = await adminModel.deleteOne({ _id: id });
    if (admin) {
      res.json({ message: "admin removed" });
    } else {
      res.status(404).send("admin not found");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

const loginToken = asyncHandler(async (req, res) => {
  try {
    res.status(200).send(req.admin);
  } catch (error) {
    res.status(400);
    throw new Error("Failed to login with Token");
  }
});

module.exports = {
  deleteAdmin,
  updateAdmin,
  createAdmin,
  getAllAdmin,
  getAdminById,
  login,
  loginToken,
};
