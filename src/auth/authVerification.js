import { verifyAccessToken } from "../jwtHelper/jwtHelper.js";
import { UserRegisterRepository } from "../repository/userRegisterRepository.js";
import { getSession } from "../session/sessionModel.js";

export const isAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.json({
        status: "error",
        message: "You are not authorized",
      });
    }
    if (authorization) {
      const decoded = await verifyAccessToken(authorization);
      if (decoded === "jwt expired") {
        return res.status(403).json({
          status: "error",
          message: "jwt expired",
        });
      }

      if (decoded?.email) {
        const existInDb = await getSession({
          type: "jwt",
          token: authorization,
        });

        if (existInDb?._id) {
          const adminInfo = await UserRegisterRepository.findOneUser({
            email: decoded.email,
          });
          console.log(adminInfo);
          if (adminInfo?._id) {
            req.adminInfo = adminInfo;
            return next();
          }
        }
      }
    }
    res.status(401).json({
      status: "error",
      message: "unauthorize",
    });
  } catch (error) {
    console.log(error);
  }
};
