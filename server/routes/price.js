import express from "express";
import { pricePredictor } from "../controller/price.js";

const router = express.Router();

router.post("/", pricePredictor);

export default router;