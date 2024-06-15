const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = new mongoose.Schema(
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

    //an address to the CV location in the server
    cv: {
      type: String,
    },
    AppliedId: [
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

userModel.pre("save", async function (next) {
  const hashedPassword = await bcrypt.genSalt(10);
  this.password = hashedPassword;
});
