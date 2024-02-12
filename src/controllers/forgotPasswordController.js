import { findExistingUser } from "../model/loginUserModel.js";
import { updateUser } from "../model/registerUserModel.js";
import { sendForgotPasswordEmail } from "../mailHelper/passwordMail.js";

export const forgotPasswordController = async (req, res) => {
  try {
    req.body.validationCode = Math.random();
    const { email, validationCode, newPassword } = req.body;
    const userUpdated = await updateUser({ email }, { validationCode });

    const user = await findExistingUser(email);

    const url = `http://localhost:8000/api/v1/forgot-password/changed?e=${email}&c=${validationCode}&p=${newPassword}`;
    sendForgotPasswordEmail({ user, url });
    res.json({
      status: "success",
      message: "Please check you email to change your password",
      user,
      url,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatedPasswordController = async (req, res) => {
  try {
    const email = req.query.e;
    const validationCode = req.query.c;
    const newPassword = req.query.p;
    const user = await findExistingUser(email);
    if (!user) {
      return res.status({
        status: "error",
        message: "No user found",
      });
    }
    if (email === user.email && validationCode !== user.validationCode) {
      return res.status({
        status: "error",
        message: "Validation code has been tampered or expired",
      });
    }
    if (email === user.email && validationCode === user.validationCode) {
      const updatePassword = await updateUser(
        { email },
        { password: newPassword }
      );
      return res.json({
        status: "success",
        message: "Your password has been succesfully changed",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
