import express from "express";
import productRouter from "./product.router";
import { notFoundHandler } from "../middlewares/notFound";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

router.use("/products", productRouter);

router.use(notFoundHandler);

export default router;
