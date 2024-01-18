import Jwt from "jsonwebtoken";
import { insertSession } from "../session/sessionModel.js";
import { updateUser } from "../model/registerUserModel.js";

export const generateAccessToken = async (payload) => {
  const ACCESS_SECRET_JWT = "ghffHFHGHg";
  const accessToken = Jwt.sign(payload, ACCESS_SECRET_JWT, { expiresIn: "1h" });

  const obj = {
    token: accessToken,
    type: "jwt",
  };
  await insertSession(obj);
  return accessToken;
};

export const generateRefreshToken = async (payload) => {
  const REFRESH_SECRET_JWT = "HVHJuyfyufyufYFYFyf";
  const refreshToken = Jwt.sign(payload, REFRESH_SECRET_JWT, {
    expiresIn: "30d",
  });
  const obj = {
    token: refreshToken,
    type: "jwt",
  };
  await updateUser({ obj });
  return refreshToken;
};

export const jwts = async (payload) => {
  return {
    accessToken: await generateAccessToken(payload),
    refreshToken: await generateRefreshToken(payload),
  };
};
