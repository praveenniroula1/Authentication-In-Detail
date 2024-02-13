import Jwt from "jsonwebtoken";
import { insertSession } from "../session/sessionModel.js";
import { UserRegisterRepository } from "../repository/userRegisterRepository.js";

const ACCESS_SECRET_JWT = "ghffHFHGHg";
const REFRESH_SECRET_JWT = "HVHJuyfyufyufYFYFyf";

export const generateAccessToken = async (payload) => {
  const accessToken = Jwt.sign(payload, ACCESS_SECRET_JWT, { expiresIn: "1h" });
  const obj = {
    token: accessToken,
    type: "jwt",
    email: payload.email,
  };
  await insertSession(obj);
  return accessToken;
};

export const generateRefreshToken = async (payload) => {
  const refreshToken = Jwt.sign(payload, REFRESH_SECRET_JWT, {
    expiresIn: "30d",
  });
  const obj = {
    token: refreshToken,
    type: "jwt",
  };
  await UserRegisterRepository.updateUser({ obj });
  return refreshToken;
};

export const jwts = async (payload) => {
  return {
    accessToken: await generateAccessToken(payload),
    refreshToken: await generateRefreshToken(payload),
  };
};

export const verifyAccessToken = (token) => {
  try {
    const decoded = Jwt.verify(token, ACCESS_SECRET_JWT);
    return decoded;
  } catch (error) {
    console.log(error);
  }
};

// export const verifyRefreshToken = (token) => {
//   try {
//     const decoded = Jwt.verify(token, REFRESH_SECRET_JWT);
//     return decoded;
//   } catch (error) {
//     console.log(error);
//   }
// };
