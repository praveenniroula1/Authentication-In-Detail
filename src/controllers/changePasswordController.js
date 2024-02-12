import { changePassword, findUser } from "../model/changePasswordModel.js";

export const changePasswordController = async (req, res) => {
  try {
    const { email, password, newPassword } = req.body;
    const user = await findUser(email);
    if (!user) {
      return res.json({
        status: "error",
        message: "User not found",
      });
    }
    if (user.email === email && user.password !== password) {
      return res.json({
        status: "error",
        message: "The old password didnt match",
      });
    }

    if (user.email === email || user.password === password) {
      const changedPassword = await changePassword(
        { email },
        {
          password: newPassword,
        }
      );
      return res.json({
        status: "success",
        message: "PAssword changed",
      });
    } else {
      return res.json({
        status: "error",
        message: "Changing password failed",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
