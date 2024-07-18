const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    requirements: [
      {
        type: String,
        default: [],
      },
    ],
    skills: [
      {
        type: String,
        default: [],
      },
    ],
    description: {
      type: String,
      require: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    niceToHave: [
      {
        type: String,
        default: [],
      },
    ],
    typeOfPosition: {
      type: String,
      require: true
    },
  },
  {
    timestamps: true,
  }
);
const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;
