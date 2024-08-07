import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
const router = express.Router();

router.post("/", [verifyToken, verifyAdmin], createHotel);
router.put("/:id", [verifyToken, verifyAdmin], updateHotel);
router.delete("/:id", [verifyToken, verifyAdmin], deleteHotel);
router.get("/:id", getHotel);
router.get("/", getHotels);

export default router;