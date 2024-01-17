import express from "express";
import { insertUser, updateUser } from "../model/registerUserModel.js";
import { userValidation } from "../server-side-validation/joiValidation.js";
import { sendEmail } from "../mailHelper/mailHelper.js";
const router = express.Router();

router.post("/", userValidation, async (req, res) => {
  try {
    const user = await insertUser(req.body);
    const emailValidationCode = Math.random();
    const url = `http://localhost:8000/api/v1/register/verify-email?e=${user.email}&c=${emailValidationCode}`;
    sendEmail({ user, url });
    user?._id
      ? res.json({
          status: "success",
          message: "The user is registered successfully",
          url,
          user,
        })
      : res.json({
          status: "error",
          message: "Failed to register user",
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "The Email has been already registered. Try different Email.";
    }
    return res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/verify-email", async (req, res) => {
  try {
    const email = req.query.e;
    const verifyUser = await updateUser(
      { email },
      {
        status: "active",
      }
    );
    if (verifyUser) {
      return res.json({
        status: "success",
        message: "Successfully Verified the user and activated the account",
      });
    } else {
      return res.json({
        status: "error",
        message: "Failed to Verify the user and activation failed",
      });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
