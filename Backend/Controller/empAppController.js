const applicationModel = require("../Model/applicationModel");
const adminModel = require("../Model/adminModel");
const asyncHandler = require("express-async-handler");
const { query } = require("express");

const getAllApplications = asyncHandler(async (req, res) => {
  try {
    const applications = await applicationModel.find({});

    if (!applications) {
      res.status(404).send("No applications found");
    } else {
      res.json(applications);
      res.status(200).send(applications);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getApplicationById = asyncHandler(async (req, res) => {
  try {
    const application = await applicationModel.findById(req.params.id);

    if (!application) {
      res.status(404).send("Application not found");
    } else {
      res.json(application);
      res.status(200).send(application);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getAllApplicationsOfUser = asyncHandler(async (req, res) => {
  try {
    const userId = req.User._id;
    const applications = await empAppModel
      .find({ UserId: userId })
      .select("_id", "AppId", "Status", "AppTitle");

    if (!applications) {
      res.status(404).send("No applications found");
    } else {
      res.json(applications);
      res.status(201).send(applications);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const getAllSubmittedApplications = asyncHandler(async (req, res) => {
  try {
    const { AppId: appId } = req.body;

    const listOfAppliedApplicants = await empAppModel.find({ AppId: appId });
    if (!listOfAppliedApplicants) {
      res.status(404).send("No applications found");
    } else {
      res.json(listOfAppliedApplicants);
      res.status(200).send(listOfAppliedApplicants);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const deleteApplication = asyncHandler(async (req, res) => {
  try {
    const application = await applicationModel.findByIdAndDelete(req.params.id);

    if (!application) {
      res.status(404).send("Application not found");
    } else {
      res.json({ message: "Application deleted" });
      res.status(200).send("Application deleted");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const updateApplication = asyncHandler(async (req, res) => {
  try {
    const {
      newAppId,
      newUserId,
      newStatus,
      newAiScore,
      newAiReview,
      newEmpName,
      newAppTitle,
      newReport,
    } = req.body;
    const application = await empAppModel.findById(req.params.id);

    if (!application) {
      throw new Error("Application not exists");
    }

    //TODO: Find a way to separate between the User and Admin when modified the EmpApp instance
    application.AppId = newAppId;
    application.UserId = newUserId;
    application.Status = newStatus;
    application.AiScore = newAiScore;
    application.AiReview = newAiReview;
    application.EmpName = newEmpName;
    application.AppTitle = newAppTitle;
    application.Report = newReport;
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
