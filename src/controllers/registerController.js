import { UserRegisterRepository } from "../repository/userRegisterRepository.js";
import registerUserSchema from "../schema/registerUserSchema.js";
import { userService } from "../services/userService.js";

export const postRegisterController = async (req, res) => {
  try {
    req.body.validationCode = Math.random(Math.floor());
    const { insertedUser, url } = await userService.registerUser(req.body);
    insertedUser
      ? res.json({
          status: "success",
          message: "The user is registered successfully",
          url,
          insertedUser,
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
};

export const verifyEmailController = async (req, res) => {
  try {
    const email = req.query.e;
    const code = req.query.c;
    const checkingUser = await UserRegisterRepository.findOneUser({ email });
    if (email !== checkingUser.email || code !== checkingUser.validationCode) {
      return res.json({
        status: "error",
        message:
          "Your email and validation has been tampered or expired, cannot verify",
      });
    }
    const verifyUser = await UserRegisterRepository.updateUser(
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
};
