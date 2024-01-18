import express from "express";
const app = express();

// middlewares
import cors from "cors";
app.use(cors());
app.use(express.json());

// dbConfig
import { dbConfig } from "./src/dbConfig/dbConfig.js";
dbConfig();

// writing some APIS
import registerRouter from "./src/router/registerRouter.js";
import loginRouter from "./src/router/loginRouter.js";
import changePasswordRouter from "./src/router/changePasswordRouter.js";
import forgotPasswordRouter from "./src/router/forgotPasswordRouter.js";
app.use("/api/v1/register", registerRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/change-password", changePasswordRouter);
app.use("/api/v1/forgot-password", forgotPasswordRouter);

// listeing the port
const port = 8000;
app.listen(port, () => {
  console.log(`This App is listening to the port ${port}`);
});
