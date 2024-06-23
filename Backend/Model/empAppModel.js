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
    AiScore: {
      type: Number,
    },
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
    Report: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const EmpApp = mongoose.model("EmpApp", empAppSchema);

module.exports = EmpApp;
