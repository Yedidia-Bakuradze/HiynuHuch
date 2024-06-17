const mongoose = require("mongoose");

const empAppSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
      required: true,
    },
    status: {
      type: String,
      default: "Pandding",
      required: true,
    },
    report: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const EmpApp = mongoose.model("EmpApp", empAppSchema);

module.exports = EmpApp;
