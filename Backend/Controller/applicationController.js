const applicationModel = require("../Model/applicationModel");
const adminModel = require("../Model/adminModel");
const asyncHandler = require("express-async-handler");

const getAllApplications = asyncHandler(async (req, res) => {
  try {
    const applications = await applicationModel.find({});
    res.json(applications);
    res.status(200).send(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getApplicationById = asyncHandler(async (req, res) => {
  try {
    const application = await applicationModel.findById(req.params.id);
    res.json(application);
    res.status(200).send(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getApplicationByCreator = asyncHandler(async (req, res) => {
  try {
    const applications = await applicationModel.find({
      creator: req.params.id,
    });
    res.json(applications);
    res.status(200).send(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const createApplication = asyncHandler(async (req, res) => {
  try {
    const { name, description, tags, creator } = req.body;

    // Check if all fields are filled
    // Check if the creator exists
    if (!name || !description || !tags || !adminModel.findById(creator)) {
      return res.status(400).json({ message: "Please fill all the fields" });
    } else {
      const createApplication = await applicationModel.create(req.body);
      res.json(createApplication);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
