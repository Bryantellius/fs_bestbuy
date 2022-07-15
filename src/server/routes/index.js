import express from "express";
import productRouter from "./product.router";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

router.use("/products", productRouter);

export default router;
