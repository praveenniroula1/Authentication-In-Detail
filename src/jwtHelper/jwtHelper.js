import Jwt from "jsonwebtoken";
import { insertSession } from "../session/sessionModel.js";
import { updateUser } from "../model/registerUserModel.js";

const JWT_ACCESS_SECRET = "FVGydsvhcHVhjvsuyvshHGHuI";
const JWT_REFRESH_SECRET = "JHVHFYHJvhjvdHJVZHJHJhj";

export const generateAccessJWT = async (payload) => {
  const accessToken = Jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: "1h" });

  const obj = {
    token: accessToken,
    type: "jwt",
  };
  await insertSession(obj);
  return accessToken;
};

export const generateRefreshJWT = async (payload) => {
  const refreshToken = Jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: "30d",
  });

  await updateUser(payload, { refreshToken });
  return refreshToken;
};

export const createJWTs = async (payload) => {
  return {
    accessToken: await generateAccessJWT(payload),
    refreshToken: await generateRefreshJWT(payload),
  };
};
