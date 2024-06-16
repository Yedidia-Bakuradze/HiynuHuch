const mongoose = require("mongoose");

const applicationModel = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      require: true,
    },
    applicationsStatus: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      status: {
        type: String,
        enum: ["pending", "approved", "rejected"], // Define your enum values here
        default: "pending",
      },
    },
  },
  {
    timestamps: true,
  }
);
const Application = mongoose.model("Application", applicationModel);

module.exports = Application;
