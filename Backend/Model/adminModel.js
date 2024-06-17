const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema(
  {
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

adminSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.genSalt(10);
  this.password = hashedPassword;
});
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
