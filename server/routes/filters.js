import express from "express";
import { filter, getBhk, getFields, getLocations, getPriceRanges, getSqft } from "../controller/filter.js";
const router = express.Router();
router.post("/add", filter);
router.get("/fields", getFields);
router.get("/locations", getLocations);
router.get("/priceranges", getPriceRanges);
router.get("/bhk", getBhk);
router.get("/sqft", getSqft);

export default router;