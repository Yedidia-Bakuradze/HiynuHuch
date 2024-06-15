const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
    applicationsStatus:{
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        }
    }
  },
  {
    timestamps: true,
  }
);
