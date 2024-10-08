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
      creator: req.params.owner,
    });
    res.json(applications);
    res.status(200).send(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const createApplication = asyncHandler(async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    req.body.creator = req.admin._id;
    // Check if all fields are filled
    // Check if the creator exists
    if (!title || !description || !tags) {
      return res.status(400).json({ message: "Please fill all the fields" });
    } else if (!adminModel.findById(req.admin._id)) {
      return res.status(400).json({ message: "Creator hasn't found" });
    } else {
      const createApplication = await applicationModel.create(req.body);
      res.json(createApplication);
      res.status(201).send(createApplication);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const updateApplication = asyncHandler(async (req, res) => {
  try {
    const { title, description, tags} = req.body;
    req.body._id = req.admin._id;
    if (!title || !description || !tags) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const application = await applicationModel.findById(req.params.id);
    // Check if the updated application exists
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    else if (application._id != req.body._id) {
      res.status(401);
      throw new Error("Not authorization!");
    }

    // Update the application
    else {
      application.title = newTitle;
      application.description = newDescription;
      application.tags = [...newTags];
      application.creator = newCreator;
      const updatedApplication = await application.save();
      res.json(updatedApplication);
      res.status(204).send(updatedApplication);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const deleteApplication = asyncHandler(async (req, res) => {
  try {
    const application = await applicationModel.findById(req.params.id);
    if (!application)
      return res.status(404).json({ message: "Application not found" });
    else {
      if (app.creator == req.admin._id) {
        await application.remove();
        res.status(204).send({ message: "Application removed" });
      } else {
        res.status(401);
        throw new Error("Not authorization!");
      }
    }
  } catch (err) {
    return res.status(500).send(err.body);
  }
});

const deleteAllApplicationsByCreator = asyncHandler(async (req, res) => {
  try {
    //Delete all applications made by the creator
    await applicationModel.deleteMany({ creator: req.admin._id });
    res.json({ message: "Applications removed" });
    res
      .status(204)
      .send({ message: `All applications by ${req.admin._id} removed` });
  } catch (err) {
    return res.status(500).send(err.body);
  }
});

module.exports = {
  createApplication,
  updateApplication,
  deleteApplication,
  getAllApplications,
  deleteAllApplicationsByCreator,
  getApplicationByCreator,
  getApplicationById,
};
