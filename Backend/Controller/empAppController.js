const empAppModel = require("../Model/empAppModel");
const asyncHandler = require("express-async-handler");

//WORKS
const createEmpApp = asyncHandler(async (req, res) => {
  const {
    Status,
    EmpName,
    email,
    AppId,
    cv,
    skills,
  } = req.body;

    if(!AppId||!EmpName||!email||!cv||!skills ||!Status)
    {
      console.log("Please fill all the fields")
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    console.log("Im here")
    try {
      const empApp = await empAppModel.create(req.body);
      console.log(req.body);
      if(!empApp){
        return res.status(500).json({ message: "Failed to create" });
      }
      else{
        console.log("SOMTHING IS GOOD")
        console.log(empApp);
        res.status(201).json(empApp);
      }
    } catch (err) {
      console.log("CATCH");
      console.log(err);
        res.status(500).json({ message: err.message });
    }
});
const getAllApplications = asyncHandler(async (req, res) => {
  try {
    const applications = await empAppModel.find({});
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
    const application = await empAppModel.findById(req.params.id);

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
    const userId = req.user._id;
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
const deleteEmpApp = asyncHandler(async (req, res) => {
  try {
    const application = await empAppModel.findByIdAndDelete(req.params.id);

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
      newManualReport,
      newManualScore,
      newName,
      newEmail,
      newSkills,
      newCv
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
    application.ManualReport = newManualReport;
    application.ManualScore = newManualScore;
    application.name = newName;
    application.email = newEmail;
    application.skills = newSkills

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = {
  getAllApplications,
  getAllApplicationsOfUser,
  getApplicationById,
  deleteEmpApp,
  updateApplication,
  getAllSubmittedApplications,
  createEmpApp,
};
