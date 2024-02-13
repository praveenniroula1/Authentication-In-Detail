import { sendEmail } from "../mailHelper/mailHelper.js";
import { UserRegisterRepository } from "../repository/userRegisterRepository.js";

export const userService = {
  registerUser: async (user) => {
    const insertedUser = await UserRegisterRepository.insertUser(user);
    const url = `http://localhost:8000/api/v1/register/verify-email?e=${user.email}&c=${user.validationCode}`;
    sendEmail({ user, url });
    return { insertedUser, url };
  },
};
