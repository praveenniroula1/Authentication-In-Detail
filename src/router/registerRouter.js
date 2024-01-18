import express from "express";
import {
  findOneUser,
  insertUser,
  updateUser,
} from "../model/registerUserModel.js";
import { userValidation } from "../server-side-validation/joiValidation.js";
import { sendEmail } from "../mailHelper/mailHelper.js";
const router = express.Router();

router.post("/", userValidation, async (req, res) => {
  try {
    req.body.validationCode = Math.random(Math.floor());
    const user = await insertUser(req.body);
    const url = `http://localhost:8000/api/v1/register/verify-email?e=${user.email}&c=${user.validationCode}`;
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
    console.log(error);
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
    const code = req.query.c;
    const checkingUser = await findOneUser(email);
    if (email !== checkingUser.email || code !== checkingUser.validationCode) {
      return res.json({
        status: "error",
        message:
          "Your email and validation has been tampered or expired, cannot verify",
      });
    }
    const verifyUser = await updateUser(
      { email },
      {
        status: "active",
        emailValidationCode: "",
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
