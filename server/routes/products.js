import express from "express";
import { addProducts, getAllProducts, getFilteredProducts, getProductById } from "../controller/products.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.post("/filter", getFilteredProducts);
router.post("/add", addProducts);
router.get("/:_id", getProductById);

export default router;