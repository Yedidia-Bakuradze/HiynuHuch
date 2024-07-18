const mongoose = require("mongoose");

const empAppSchema = new mongoose.Schema(
  {
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    AppId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
      required: true,
    },
    Status: {
      type: String,
      default: "Pending",
      required: true,
    },
    //A score for each field
    AiScore: [
      {
        type: Number,
      },
    ],
    AiReview: {
      type: String,
    },
    EmpName: {
      type: String,
      required: true,
    },
    AppTitle: {
      type: String,
      required: true,
    },
    ManualReport: {
      type: String,
    },
    //A general score of the applicant
    ManualScore: {
      type: Number,
    },
    name: {
      type: String,
      require: true,
      maxLength: 50,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    cv: {
      type: String,
    },
    skills: [
      {
        type: String,
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const empAppModel = mongoose.model("EmpApp", empAppSchema);

module.exports = empAppModel;
