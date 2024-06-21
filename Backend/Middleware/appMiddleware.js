const jwt = require("jsonwebtoken");
const Application = require("../Model/applicationModel");
const asyncHandler = require("express-async-handler");
const User = require("../Model/userModel");

const protectApp = asyncHandler(async (req, res, next) => {
  try {
    const id = req.params.id;
    const app = await Application.findById({ id });
    if (app) {
      if(app.creator == User._id)
        next();
      else{
         res.status(401);
         throw new Error("Not authorization, token failed!");
      }
    } else {
      throw new Error("App not found");
    }
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not authorization, token failed!");
  }
});

module.exports = { protectApp };
