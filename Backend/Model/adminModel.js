const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminModel = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      maxLength: 50,
    },
    lastName: {
      type: String,
      require: true,
      maxLength: 50,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    createdApplications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  {
    timestamps: true,
  }
);

adminModel.pre("save", async function (next) {
  const hashedPassword = await bcrypt.genSalt(10);
  this.password = hashedPassword;
});
const Admin = mongoose.model("Admin", adminModel);

module.exports = Admin;
