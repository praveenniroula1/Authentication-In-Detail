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
import logoutRouter from "./src/router/logoutRouter.js";
import productRouter from "./src/router/productRouter.js";
import updateProductRouter from "./src/router/updateProductRouter.js";
import getAllProductRouter from "./src/router/getAllProductRouter.js";
import deleteProductRouter from "./src/router/deleteProductRouter.js";
import categoryRouter from "./src/router/categoryRouter.js";
import updateCategoryRouter from "./src/router/updateCategoryRouter.js";
import getAllCategoryRouter from "./src/router/getAllCategoryRouter.js";
import deleteCategoryRouter from "./src/router/deleteCategoryRouter.js";
import { isAuth } from "./src/auth/authVerification.js";
app.use("/api/v1/register", registerRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/change-password", isAuth, changePasswordRouter);
app.use("/api/v1/forgot-password", forgotPasswordRouter);
app.use("/api/v1/logout", isAuth, logoutRouter);
app.use("/api/v1/product", isAuth, productRouter);
app.use("/api/v1/product/update-product", isAuth, updateProductRouter);
app.use("/api/v1/product/get-all-product", isAuth, getAllProductRouter);
app.use("/api/v1/product/delete-product", isAuth, deleteProductRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/update-category", updateCategoryRouter);
app.use("/api/v1/get-all-category", getAllCategoryRouter);
app.use("/api/v1/delete-category", deleteCategoryRouter);

// listeing the port
const port = 8000;
app.listen(port, () => {
  console.log(`This App is listening to the port ${port}`);
});
