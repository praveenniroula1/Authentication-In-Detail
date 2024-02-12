import { findExistingUser } from "../model/loginUserModel.js";
import { jwts } from "../jwtHelper/jwtHelper.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const verifiedUser = await findExistingUser(email);

    if (!verifiedUser) {
      return res.json({
        status: "error",
        message: "You are not identified to login or even to verify",
      });
    }
    if (verifiedUser.status === "inactive") {
      return res.json({
        status: "error",
        message: "your account is not verified yet, check your email",
      });
    }
    if (verifiedUser && verifiedUser.status === "active") {
      if (email === verifiedUser.email && password === verifiedUser.password) {
        const jwt = await jwts({ email });
        return res.json({
          status: "success",
          message: "Logged In successfully",
          verifiedUser,
          ...jwt,
        });
      } else {
        return res.json({
          status: "error",
          message: "Invalid Credentials",
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
